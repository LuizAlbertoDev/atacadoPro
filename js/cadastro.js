/**
 * AtacadoPro | cadastro.js
 * CRUD de produtos + lista + dashboard + múltiplas validades.
 */

// ============================================================
// CADASTRO (formulário)
// ============================================================
const Cadastro = (() => {
    function abrirFormulario(idExistente = null) {
        if (!Auth.isFuncionario()) { alert('Ative o modo funcionário.'); return; }

        const produto = idExistente ? DB.buscarPorId(idExistente) : null;
        const isEdicao = !!produto;

        document.getElementById('modal-titulo').textContent = isEdicao ? 'Editar Produto' : 'Novo Produto';
        const f = (id, val) => { const el = document.getElementById(id); if (el) el.value = val ?? ''; };

        f('campo-id',           isEdicao ? produto.id         : DB.gerarId());
        f('campo-nome',         isEdicao ? produto.nome        : '');
        f('campo-empresa',      isEdicao ? produto.empresa     : '');
        f('campo-valor-compra', isEdicao ? produto.valorCompra : '');
        f('campo-valor-venda',  isEdicao ? produto.valorVenda  : '');
        f('campo-dep-corredor', isEdicao ? produto.deposito?.corredor   : '');
        f('campo-dep-armario',  isEdicao ? produto.deposito?.armario    : '');
        f('campo-dep-prateleira',isEdicao? produto.deposito?.prateleira : '');

        // Popular select de categorias
        _popularSelectCategorias(isEdicao ? produto.categoria : '');
        // Popular gôndolas da categoria e selecionar a atual
        _popularGondolas(isEdicao ? produto.categoria : '', isEdicao ? produto.loja?.gondola : '');

        document.getElementById('form-produto').dataset.editandoId = isEdicao ? produto.id : '';
        _renderizarValidades(isEdicao ? produto.id : null, isEdicao ? (produto.validades||[]) : []);

        document.getElementById('modal-cadastro').classList.add('aberto');
    }

    function _popularSelectCategorias(categoriaAtual) {
        const sel = document.getElementById('campo-categoria');
        if (!sel) return;
        sel.innerHTML = '<option value="">— Selecione a categoria —</option>';
        Object.entries(LOJA_CONFIG.categorias).forEach(([key, cfg]) => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = `${cfg.emoji} ${cfg.label}`;
            if (key === categoriaAtual) opt.selected = true;
            sel.appendChild(opt);
        });
    }

    function _popularGondolas(categoria, gondolaAtual) {
        const sel = document.getElementById('campo-loja-gondola');
        const hint = document.getElementById('categoria-hint');
        if (!sel) return;

        if (!categoria || !LOJA_CONFIG.categorias[categoria]) {
            sel.innerHTML = '<option value="">— Selecione a categoria primeiro —</option>';
            if (hint) hint.style.display = 'none';
            return;
        }

        const cfg = LOJA_CONFIG.categorias[categoria];
        sel.innerHTML = '<option value="">— Selecione a gôndola —</option>';
        cfg.gondolas.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g;
            opt.textContent = `Gôndola ${g}`;
            if (g === gondolaAtual) opt.selected = true;
            sel.appendChild(opt);
        });

        // Atualiza o corredor oculto
        if (gondolaAtual) sincronizarCorredorDaGondola();

        // Mostra dica visual
        if (hint) {
            hint.style.display = 'flex';
            hint.style.background = cfg.cor + '22';
            hint.style.borderColor = cfg.cor;
            hint.style.color = cfg.cor;
            hint.innerHTML = `<span>${cfg.emoji}</span> <strong>${cfg.label}</strong> · Gôndolas permitidas: ${cfg.gondolas.join(', ')}`;
        }
    }

    function atualizarGondolasPermitidas() {
        const categoria = document.getElementById('campo-categoria')?.value;
        const gondolaAtual = document.getElementById('campo-loja-gondola')?.value;
        _popularGondolas(categoria, gondolaAtual);
    }

    function sincronizarCorredorDaGondola() {
        const gondola = document.getElementById('campo-loja-gondola')?.value;
        const corrEl  = document.getElementById('campo-loja-corredor');
        if (!corrEl) return;
        if (gondola) {
            corrEl.value = gondola.charAt(0);
        }
    }

    function _renderizarValidades(produtoId, validades) {
        const container = document.getElementById('lista-validades-form');
        const isNovo = !produtoId;

        container.innerHTML = validades.length === 0
            ? `<div class="val-vazia">Nenhuma validade cadastrada.</div>`
            : validades.map(v => {
                const status = DB.statusValidade(v.data);
                return `
                <div class="val-item ${status}">
                    <div class="val-info">
                        <span class="val-data">${v.data}</span>
                        <span class="val-qtd">${v.quantidade} un.</span>
                        <span class="badge-validade ${status} val-badge">${status === 'vencido' ? 'VENCIDO' : status === 'atencao' ? 'ATENÇÃO' : 'OK'}</span>
                    </div>
                    ${!isNovo ? `<button class="btn-excluir-val" onclick="Cadastro.excluirValidade('${produtoId}','${v.id}')">🗑️</button>` : ''}
                </div>`;
            }).join('');
    }

    function adicionarValidadeForm() {
        const data = document.getElementById('nova-val-data').value;
        const qtd  = document.getElementById('nova-val-qtd').value;
        if (!data) { alert('Informe a data de validade.'); return; }
        if (!qtd || qtd <= 0) { alert('Informe a quantidade.'); return; }

        const idEditando = document.getElementById('form-produto').dataset.editandoId;

        if (idEditando) {
            // Produto já existe: salva direto no DB
            DB.adicionarValidade(idEditando, data, qtd);
            const p = DB.buscarPorId(idEditando);
            _renderizarValidades(idEditando, p.validades || []);
        } else {
            // Produto novo: acumula na lista temporária
            const lista = _getValidadesTemp();
            lista.push({ id: 'v' + Date.now(), data, quantidade: parseInt(qtd) });
            _setValidadesTemp(lista);
            _renderizarValidades(null, lista);
        }

        document.getElementById('nova-val-data').value = '';
        document.getElementById('nova-val-qtd').value = '';
        if (App._abaAtual === 'dashboard') Dashboard.renderizar();
    }

    function excluirValidade(produtoId, validadeId) {
        if (!confirm('Excluir este lote de validade?')) return;

        if (produtoId) {
            DB.excluirValidade(produtoId, validadeId);
            const p = DB.buscarPorId(produtoId);
            _renderizarValidades(produtoId, p?.validades || []);
        } else {
            const lista = _getValidadesTemp().filter(v => v.id !== validadeId);
            _setValidadesTemp(lista);
            _renderizarValidades(null, lista);
        }
        if (App._abaAtual === 'dashboard') Dashboard.renderizar();
    }

    let _validadesTemp = [];
    function _getValidadesTemp() { return _validadesTemp; }
    function _setValidadesTemp(l) { _validadesTemp = l; }

    function fecharFormulario() {
        _validadesTemp = [];
        document.getElementById('modal-cadastro').classList.remove('aberto');
    }

    function salvarFormulario() {
        const g = id => document.getElementById(id)?.value.trim();
        const idEditando = document.getElementById('form-produto').dataset.editandoId;

        if (!g('campo-nome')) { alert('Informe o nome.'); return; }

        const categoria = g('campo-categoria');
        if (!categoria) { alert('Selecione a categoria do produto.'); return; }

        const gondola = document.getElementById('campo-loja-gondola')?.value;
        if (!gondola) { alert('Selecione a gôndola na loja.'); return; }

        // Valida que a gôndola pertence à categoria
        const catCfg = LOJA_CONFIG.categorias[categoria];
        if (catCfg && !catCfg.gondolas.includes(gondola.toUpperCase())) {
            alert(`❌ A gôndola "${gondola}" não pertence à categoria "${catCfg.label}".\n\nGôndolas permitidas: ${catCfg.gondolas.join(', ')}`);
            return;
        }

        const corredor = gondola.charAt(0);

        const produto = {
            id:          idEditando || g('campo-id'),
            nome:        g('campo-nome'),
            empresa:     g('campo-empresa'),
            categoria,
            valorCompra: parseFloat(g('campo-valor-compra')) || 0,
            valorVenda:  parseFloat(g('campo-valor-venda'))  || 0,
            loja:     { corredor, gondola },
            deposito: { corredor: g('campo-dep-corredor'),  armario:  g('campo-dep-armario'), prateleira: g('campo-dep-prateleira') },
            validades: idEditando ? (DB.buscarPorId(idEditando)?.validades || []) : _getValidadesTemp(),
        };

        DB.salvar(produto);
        fecharFormulario();
        ListaProdutos.renderizar();
        MapBuilder.atualizarIndicadoresCategoria();
        if (App._abaAtual === 'dashboard') Dashboard.renderizar();
        _toast('Produto salvo!');
    }

    function excluirProduto(id) {
        if (!confirm('Excluir este produto?')) return;
        DB.excluir(id);
        ListaProdutos.renderizar();
        if (App._abaAtual === 'dashboard') Dashboard.renderizar();
        _toast('Produto excluído.');
    }

    function _toast(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg; t.classList.add('visivel');
        setTimeout(() => t.classList.remove('visivel'), 2500);
    }

    return { abrirFormulario, fecharFormulario, salvarFormulario, excluirProduto, adicionarValidadeForm, excluirValidade, atualizarGondolasPermitidas, sincronizarCorredorDaGondola };
})();


// ============================================================
// LISTA DE PRODUTOS
// ============================================================
const ListaProdutos = (() => {
    let _termo = '';

    function renderizar() {
        const lista = DB.listar();
        const isFuncionario = Auth.isFuncionario();
        const container = document.getElementById('lista-produtos');
        if (!container) return;

        const filtrados = lista.filter(p => {
            const t = _termo.toLowerCase();
            return p.nome.toLowerCase().includes(t) ||
                   p.id.toLowerCase().includes(t) ||
                   p.empresa.toLowerCase().includes(t) ||
                   (p.loja?.gondola  || '').toLowerCase().includes(t) ||
                   (p.loja?.corredor || '').toLowerCase().includes(t);
        });

        container.innerHTML = filtrados.length === 0
            ? `<div class="lista-vazia">Nenhum produto encontrado.</div>`
            : filtrados.map(p => _card(p, isFuncionario)).join('');
    }

    function _card(p, isFuncionario) {
        const validades = p.validades || [];
        const qtdTotal  = validades.reduce((s, v) => s + v.quantidade, 0);
        const proxVal   = DB.proximaValidade(p);
        const status    = proxVal ? DB.statusValidade(proxVal.data) : 'ok';
        const diasLabel = proxVal ? _diasLabel(proxVal.data) : '—';
        const margem    = p.valorCompra > 0
            ? (((p.valorVenda - p.valorCompra) / p.valorCompra) * 100).toFixed(1) : 0;

        // Badge de categoria
        const catCfg = p.categoria ? LOJA_CONFIG.categorias[p.categoria] : null;
        const catBadge = catCfg
            ? `<span class="badge-categoria" style="background:${catCfg.cor}22;border-color:${catCfg.cor};color:${catCfg.cor}">${catCfg.emoji} ${catCfg.label}</span>`
            : '';

        const validadesHTML = isFuncionario && validades.length > 0 ? `
            <div class="validades-lista">
                ${validades.map(v => {
                    const s = DB.statusValidade(v.data);
                    return `<div class="val-row">
                        <span class="badge-validade ${s}">${v.data}</span>
                        <span class="val-qtd-row">${v.quantidade} un.</span>
                        <button class="btn-excluir-val-inline" onclick="Cadastro.excluirValidade('${p.id}','${v.id}');ListaProdutos.renderizar()">🗑️</button>
                    </div>`;
                }).join('')}
                <button class="btn-add-val-inline" onclick="Cadastro.abrirFormulario('${p.id}')">+ Adicionar lote</button>
            </div>` : '';

        return `
        <div class="produto-card ${status === 'vencido' ? 'card-vencido' : status === 'atencao' ? 'card-atencao' : ''}">
            <div class="card-top">
                <span class="produto-id">${p.id}</span>
                ${catBadge}
                <span class="produto-empresa">${p.empresa}</span>
                ${isFuncionario ? `
                <div class="card-acoes">
                    <button class="btn-acao editar"  onclick="Cadastro.abrirFormulario('${p.id}')" title="Editar">✏️</button>
                    <button class="btn-acao excluir" onclick="Cadastro.excluirProduto('${p.id}')" title="Excluir">🗑️</button>
                </div>` : ''}
            </div>
            <h3 class="produto-nome">${p.nome}</h3>
            <div class="produto-info-grid">
                <div class="info-item">
                    <span class="info-label">Preço</span>
                    <span class="info-valor destaque-preco">R$ ${p.valorVenda.toFixed(2).replace('.',',')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Localização</span>
                    <span class="info-valor">Corredor <strong>${p.loja?.corredor||'—'}</strong> · ${p.loja?.gondola||'—'}</span>
                </div>
                ${isFuncionario ? `
                <div class="info-item">
                    <span class="info-label">Estoque Total</span>
                    <span class="info-valor ${qtdTotal <= 10 ? 'alerta-estoque':''}">${qtdTotal} un.</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Próx. Validade</span>
                    <span class="info-valor badge-validade ${status}">${proxVal ? proxVal.data : '—'} <em>${diasLabel}</em></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Compra / Margem</span>
                    <span class="info-valor">R$ ${p.valorCompra.toFixed(2).replace('.',',')} · <strong>${margem}%</strong></span>
                </div>
                <div class="info-item">
                    <span class="info-label">Depósito</span>
                    <span class="info-valor">Corr. ${p.deposito?.corredor||'—'} · Arm. ${p.deposito?.armario||'—'} · Prat. ${p.deposito?.prateleira||'—'}</span>
                </div>
                ${validadesHTML}
                ` : ''}
            </div>
            <button class="btn-localizar" onclick="App.irParaMapa('${p.loja?.gondola||''}','${p.nome.replace(/'/g,"\\'")}')">
                📍 Localizar no Mapa
            </button>
        </div>`;
    }

    function _diasLabel(data) {
        const dias = Math.floor((new Date(data) - new Date()) / 86400000);
        if (dias < 0) return `Vencido há ${Math.abs(dias)}d`;
        if (dias === 0) return 'Vence hoje!';
        return `${dias}d restantes`;
    }

    function buscar(termo) { _termo = termo; renderizar(); }

    return { renderizar, buscar };
})();


// ============================================================
// DASHBOARD
// ============================================================
const Dashboard = (() => {
    let _aba = 'resumo';
    const _filtros = {
        status: 'vencido',
        busca: '',
        depCorredor: '',
        depArmario: '',
        depPrateleira: '',
        lojaCorredor: '',
        ordem: 'validade',
    };

    function renderizar() {
        const container = document.getElementById('tela-dashboard');
        if (!container) return;

        const todos = DB.listar();
        const rows = _montarLinhasValidade(todos);
        const vencidos = rows.filter(r => r.status === 'vencido');
        const vencendo30 = rows.filter(r => r.status === 'atencao');

        let totalProdutos  = todos.length;
        let totalItens     = 0;
        let totalValor     = 0;

        todos.forEach(p => {
            const validades = p.validades || [];
            validades.forEach(v => {
                totalItens += v.quantidade;
                totalValor += v.quantidade * p.valorVenda;
            });
        });

        container.innerHTML = `
        <div class="dash-tabs dash-print-hide">
            <button class="dash-tab ${_aba === 'resumo' ? 'ativo' : ''}" onclick="Dashboard.mudarAba('resumo')">Resumo</button>
            <button class="dash-tab ${_aba === 'validade' ? 'ativo' : ''}" onclick="Dashboard.mudarAba('validade')">Validades e Vencidos</button>
        </div>

        <!-- Cards de resumo -->
        <div class="dash-cards">
            <div class="dash-card">
                <div class="dash-card-icon">📦</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">${totalProdutos}</div>
                    <div class="dash-card-label">Produtos Cadastrados</div>
                </div>
            </div>
            <div class="dash-card">
                <div class="dash-card-icon">🔢</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">${totalItens.toLocaleString('pt-BR')}</div>
                    <div class="dash-card-label">Unidades em Estoque</div>
                </div>
            </div>
            <div class="dash-card ${vencidos.length > 0 ? 'card-alerta' : ''}">
                <div class="dash-card-icon">🚨</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">${vencidos.length}</div>
                    <div class="dash-card-label">Lotes Vencidos</div>
                </div>
            </div>
            <div class="dash-card ${vencendo30.length > 0 ? 'card-atencao-bg' : ''}">
                <div class="dash-card-icon">⚠️</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">${vencendo30.length}</div>
                    <div class="dash-card-label">Vencem em 30 dias</div>
                </div>
            </div>
            <div class="dash-card">
                <div class="dash-card-icon">💰</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">R$ ${totalValor.toLocaleString('pt-BR', {minimumFractionDigits:2})}</div>
                    <div class="dash-card-label">Valor Total em Estoque</div>
                </div>
            </div>
        </div>

        ${_aba === 'validade' ? _renderizarValidades(rows) : _renderizarResumo(vencidos, vencendo30, todos)}
        `;
    }

    function _renderizarResumo(vencidos, vencendo30, todos) {
        return `
        <!-- Alertas de validade -->
        <div class="dash-secoes">
            <div class="dash-secao">
                <div class="dash-secao-titulo">🚨 Lotes Vencidos (${vencidos.length})</div>
                ${vencidos.length === 0
                    ? `<div class="dash-vazia">Nenhum lote vencido. ✅</div>`
                    : vencidos.slice(0, 8).map(({ p, v, status }) => _loteCard(p, v, status)).join('')
                }
                ${vencidos.length > 8 ? `<button class="btn-ver-todos dash-btn-link" onclick="Dashboard.abrirValidades('vencido')">Ver todos os vencidos</button>` : ''}
            </div>
            <div class="dash-secao">
                <div class="dash-secao-titulo">⚠️ Vencem nos Próximos 30 Dias (${vencendo30.length})</div>
                ${vencendo30.length === 0
                    ? `<div class="dash-vazia">Nenhum lote vencendo em breve. ✅</div>`
                    : vencendo30.slice(0, 8).map(({ p, v, status }) => _loteCard(p, v, status)).join('')
                }
                ${vencendo30.length > 8 ? `<button class="btn-ver-todos dash-btn-link" onclick="Dashboard.abrirValidades('atencao')">Ver todos os alertas</button>` : ''}
            </div>
        </div>

        `;
    }

    function _renderizarValidades(rows) {
        const filtradas = _filtrarOrdenarLinhas(rows);
        const opts = _opcoesFiltros(rows);
        const totalQtd = filtradas.reduce((s, r) => s + r.v.quantidade, 0);
        const totalValor = filtradas.reduce((s, r) => s + (r.v.quantidade * r.p.valorVenda), 0);

        return `
        <div class="dash-validade dash-print-area">
            <div class="dash-validade-header">
                <div>
                    <div class="dash-secao-titulo">Relatório de Validades</div>
                    <div class="dash-relatorio-sub">${filtradas.length} lote(s) · ${totalQtd.toLocaleString('pt-BR')} unidade(s) · R$ ${totalValor.toLocaleString('pt-BR', {minimumFractionDigits:2})}</div>
                </div>
                <button class="btn-secundario dash-print-hide" onclick="Dashboard.imprimirValidades()">Imprimir</button>
            </div>

            <div class="dash-filtros dash-print-hide">
                <input class="dash-filtro-input" type="text" value="${_escapeAttr(_filtros.busca)}" placeholder="Buscar produto, código ou empresa..." oninput="Dashboard.atualizarFiltro('busca', this.value)" />
                ${_selectFiltro('status', 'Status', [
                    ['vencido', 'Vencidos'],
                    ['atencao', 'Vencem em 30 dias'],
                    ['ok', 'OK'],
                    ['todos', 'Todos'],
                ])}
                ${_selectFiltro('depCorredor', 'Depósito', opts.depCorredor)}
                ${_selectFiltro('depArmario', 'Armário', opts.depArmario)}
                ${_selectFiltro('depPrateleira', 'Prateleira', opts.depPrateleira)}
                ${_selectFiltro('lojaCorredor', 'Corredor loja', opts.lojaCorredor)}
                ${_selectFiltro('ordem', 'Ordenar', [
                    ['validade', 'Validade mais próxima'],
                    ['produto', 'Produto A-Z'],
                    ['empresa', 'Empresa A-Z'],
                    ['deposito', 'Depósito'],
                    ['quantidade', 'Maior quantidade'],
                    ['status', 'Status crítico'],
                ])}
            </div>

            <table class="dash-tabela dash-relatorio-tabela">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Validade</th>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Empresa</th>
                        <th>Qtd</th>
                        <th>Loja</th>
                        <th>Depósito</th>
                        <th class="dash-print-hide">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtradas.length === 0 ? `
                    <tr><td colspan="9" class="dash-vazia">Nenhum lote encontrado com os filtros atuais.</td></tr>
                    ` : filtradas.map(r => _linhaRelatorio(r)).join('')}
                </tbody>
            </table>
        </div>`;
    }

    function _loteCard(p, v, status) {
        const dias = _diasAte(v.data);
        return `
        <div class="dash-lote-card ${status}">
            <div class="dash-lote-topo">
                <span class="produto-id">${p.id}</span>
                <span class="dash-lote-empresa">${p.empresa}</span>
                <button class="btn-acao excluir" onclick="Dashboard.excluirLote('${p.id}','${v.id}')" title="Excluir lote">🗑️</button>
            </div>
            <div class="dash-lote-nome">${p.nome}</div>
            <div class="dash-lote-info">
                <span>📅 ${v.data}</span>
                <span>📦 ${v.quantidade} un.</span>
                <span class="badge-validade ${status}">${status === 'vencido' ? `Vencido há ${Math.abs(dias)}d` : `Vence em ${dias}d`}</span>
            </div>
            <div class="dash-lote-local">📍 ${p.loja?.corredor||'—'} · ${p.loja?.gondola||'—'} &nbsp;|&nbsp; 🏭 ${p.deposito?.corredor||'—'}</div>
        </div>`;
    }

    function _montarLinhasValidade(todos) {
        const rows = [];
        todos.forEach(p => (p.validades || []).forEach(v => {
            const status = DB.statusValidade(v.data);
            rows.push({ p, v, status, dias: _diasAte(v.data) });
        }));
        return rows;
    }

    function _filtrarOrdenarLinhas(rows) {
        const termo = _normalizar(_filtros.busca);
        return rows.filter(r => {
            const p = r.p;
            if (_filtros.status !== 'todos' && r.status !== _filtros.status) return false;
            if (_filtros.depCorredor && (p.deposito?.corredor || '') !== _filtros.depCorredor) return false;
            if (_filtros.depArmario && (p.deposito?.armario || '') !== _filtros.depArmario) return false;
            if (_filtros.depPrateleira && (p.deposito?.prateleira || '') !== _filtros.depPrateleira) return false;
            if (_filtros.lojaCorredor && (p.loja?.corredor || '') !== _filtros.lojaCorredor) return false;
            if (!termo) return true;
            const texto = _normalizar(`${p.id} ${p.nome} ${p.empresa} ${p.loja?.gondola || ''} ${p.deposito?.corredor || ''} ${p.deposito?.armario || ''} ${p.deposito?.prateleira || ''}`);
            return texto.includes(termo);
        }).sort(_compararLinhas);
    }

    function _compararLinhas(a, b) {
        const critico = { vencido: 0, atencao: 1, ok: 2 };
        if (_filtros.ordem === 'produto') return a.p.nome.localeCompare(b.p.nome, 'pt-BR');
        if (_filtros.ordem === 'empresa') return (a.p.empresa || '').localeCompare(b.p.empresa || '', 'pt-BR');
        if (_filtros.ordem === 'deposito') {
            return `${a.p.deposito?.corredor || ''}${a.p.deposito?.armario || ''}${a.p.deposito?.prateleira || ''}`.localeCompare(
                `${b.p.deposito?.corredor || ''}${b.p.deposito?.armario || ''}${b.p.deposito?.prateleira || ''}`,
                'pt-BR',
                { numeric: true }
            );
        }
        if (_filtros.ordem === 'quantidade') return b.v.quantidade - a.v.quantidade;
        if (_filtros.ordem === 'status') return critico[a.status] - critico[b.status] || a.v.data.localeCompare(b.v.data);
        return a.v.data.localeCompare(b.v.data);
    }

    function _opcoesFiltros(rows) {
        return {
            depCorredor: _opcoesUnicas(rows.map(r => r.p.deposito?.corredor)),
            depArmario: _opcoesUnicas(rows.map(r => r.p.deposito?.armario)),
            depPrateleira: _opcoesUnicas(rows.map(r => r.p.deposito?.prateleira)),
            lojaCorredor: _opcoesUnicas(rows.map(r => r.p.loja?.corredor)),
        };
    }

    function _opcoesUnicas(valores) {
        return valores
            .filter(Boolean)
            .map(String)
            .filter((v, i, arr) => arr.indexOf(v) === i)
            .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }))
            .map(v => [v, v]);
    }

    function _selectFiltro(campo, label, opcoes) {
        return `
        <label class="dash-filtro">
            <span>${label}</span>
            <select onchange="Dashboard.atualizarFiltro('${campo}', this.value)">
                ${campo === 'status' || campo === 'ordem' ? '' : `<option value="">Todos</option>`}
                ${opcoes.map(([valor, texto]) => `<option value="${_escapeAttr(valor)}" ${_filtros[campo] === valor ? 'selected' : ''}>${texto}</option>`).join('')}
            </select>
        </label>`;
    }

    function _linhaRelatorio(r) {
        const p = r.p;
        const v = r.v;
        const statusLabel = r.status === 'vencido' ? `Vencido há ${Math.abs(r.dias)}d` : r.status === 'atencao' ? `Vence em ${r.dias}d` : 'OK';
        return `<tr class="dash-tr-${r.status}">
            <td><span class="badge-validade ${r.status}">${statusLabel}</span></td>
            <td>${v.data}</td>
            <td><span class="produto-id">${p.id}</span></td>
            <td>${p.nome}</td>
            <td>${p.empresa || '—'}</td>
            <td>${v.quantidade} un.</td>
            <td>${p.loja?.corredor || '—'} · ${p.loja?.gondola || '—'}</td>
            <td>Corr. ${p.deposito?.corredor || '—'} · Arm. ${p.deposito?.armario || '—'} · Prat. ${p.deposito?.prateleira || '—'}</td>
            <td class="dash-print-hide"><button class="btn-acao excluir" onclick="Dashboard.excluirLote('${p.id}','${v.id}')" title="Excluir lote">🗑️</button></td>
        </tr>`;
    }

    function _diasAte(data) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        return Math.floor((new Date(data + 'T00:00:00') - hoje) / 86400000);
    }

    function _normalizar(valor) {
        return String(valor || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function _escapeAttr(valor) {
        return String(valor || '').replace(/"/g, '&quot;');
    }

    function mudarAba(aba) {
        _aba = aba;
        if (aba === 'validade' && !_filtros.status) _filtros.status = 'vencido';
        renderizar();
    }

    function abrirValidades(status = 'vencido') {
        _aba = 'validade';
        _filtros.status = status;
        renderizar();
    }

    function atualizarFiltro(campo, valor) {
        _filtros[campo] = valor;
        renderizar();
    }

    function imprimirValidades() {
        window.print();
    }

    function excluirLote(produtoId, validadeId) {
        if (!confirm('Excluir este lote de validade?')) return;
        DB.excluirValidade(produtoId, validadeId);
        renderizar();
        if (App._abaAtual === 'produtos') ListaProdutos.renderizar();
    }

    return { renderizar, mudarAba, abrirValidades, atualizarFiltro, imprimirValidades, excluirLote };
})();


// ============================================================
// HISTÓRICO DE VENDAS + RELATÓRIO DE CAIXA
// ============================================================
const Historico = (() => {
    let _aba = 'historico';
    let _filtroData = '';
    let _filtroPag   = '';

    function renderizar() {
        const container = document.getElementById('tela-historico');
        if (!container) return;

        const vendas = DB.carregarVendas().slice().reverse(); // mais recentes primeiro

        // ── Métricas de caixa (hoje) ──
        const hoje = new Date().toLocaleDateString('pt-BR');
        const vendasHoje = vendas.filter(v => {
            const d = new Date(v.hora.split(', ')[0].split('/').reverse().join('-') + 'T00:00:00');
            return isNaN(d) ? false : v.hora.startsWith(hoje);
        });

        const totalHoje    = vendasHoje.reduce((s, v) => s + v.total, 0);
        const qtdVendas    = vendasHoje.length;
        const ticketMedio  = qtdVendas > 0 ? totalHoje / qtdVendas : 0;
        const porPagamento = { dinheiro: 0, cartao_debito: 0, cartao_credito: 0, pix: 0 };
        vendasHoje.forEach(v => { porPagamento[v.pagamento] = (porPagamento[v.pagamento] || 0) + v.total; });

        container.innerHTML = `
        <div class="dash-tabs dash-print-hide">
            <button class="dash-tab ${_aba === 'historico' ? 'ativo' : ''}" onclick="Historico.mudarAba('historico')">Histórico de Vendas</button>
            <button class="dash-tab ${_aba === 'caixa' ? 'ativo' : ''}" onclick="Historico.mudarAba('caixa')">Relatório de Caixa</button>
        </div>

        ${_aba === 'caixa' ? _renderCaixa(vendasHoje, totalHoje, qtdVendas, ticketMedio, porPagamento) : _renderHistorico(vendas)}
        `;
    }

    function _renderCaixa(vendasHoje, totalHoje, qtdVendas, ticketMedio, porPagamento) {
        const pagLabel = { dinheiro: 'Dinheiro', cartao_debito: 'Cartão Débito', cartao_credito: 'Cartão Crédito', pix: 'PIX' };
        return `
        <div class="dash-cards">
            <div class="dash-card">
                <div class="dash-card-icon">💰</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">R$ ${totalHoje.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div class="dash-card-label">Total Vendido Hoje</div>
                </div>
            </div>
            <div class="dash-card">
                <div class="dash-card-icon">🛒</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">${qtdVendas}</div>
                    <div class="dash-card-label">Vendas Hoje</div>
                </div>
            </div>
            <div class="dash-card">
                <div class="dash-card-icon">📊</div>
                <div class="dash-card-info">
                    <div class="dash-card-valor">R$ ${ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div class="dash-card-label">Ticket Médio</div>
                </div>
            </div>
        </div>

        <div class="dash-secoes">
            <div class="dash-secao">
                <div class="dash-secao-titulo">💳 Resumo por Forma de Pagamento</div>
                <table class="dash-tabela">
                    <thead><tr><th>Forma</th><th>Total</th><th>%</th></tr></thead>
                    <tbody>
                        ${Object.entries(porPagamento).map(([k, v]) => `
                        <tr>
                            <td>${pagLabel[k] || k}</td>
                            <td>R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                            <td>${totalHoje > 0 ? ((v / totalHoje) * 100).toFixed(1) + '%' : '—'}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    function _renderHistorico(vendas) {
        // Filtros
        let filtradas = vendas;
        if (_filtroData) filtradas = filtradas.filter(v => v.hora.startsWith(_filtroData));
        if (_filtroPag) filtradas = filtradas.filter(v => v.pagamento === _filtroPag);

        const total = filtradas.reduce((s, v) => s + v.total, 0);
        const pagLabel = { dinheiro: '💵 Dinheiro', cartao_debito: '💳 Débito', cartao_credito: '💳 Crédito', pix: '📲 PIX' };

        return `
        <div class="dash-validade">
            <div class="dash-validade-header">
                <div>
                    <div class="dash-secao-titulo">Histórico de Vendas</div>
                    <div class="dash-relatorio-sub">${filtradas.length} venda(s) · R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </div>
                <button class="btn-secundario" onclick="Historico.limpar()">🗑️ Limpar Histórico</button>
            </div>

            <div class="dash-filtros dash-print-hide">
                <label class="dash-filtro">
                    <span>Data</span>
                    <input type="text" class="dash-filtro-input" placeholder="dd/mm/aaaa" value="${_filtroData}"
                        oninput="Historico.filtrar('data', this.value)" style="width:130px" />
                </label>
                <label class="dash-filtro">
                    <span>Pagamento</span>
                    <select onchange="Historico.filtrar('pag', this.value)">
                        <option value="">Todos</option>
                        ${Object.entries(pagLabel).map(([k, v]) => `<option value="${k}" ${_filtroPag === k ? 'selected' : ''}>${v}</option>`).join('')}
                    </select>
                </label>
            </div>

            ${filtradas.length === 0
                ? `<div class="dash-vazia">Nenhuma venda encontrada.</div>`
                : `<table class="dash-tabela dash-relatorio-tabela">
                    <thead><tr>
                        <th>Hora</th><th>ID</th><th>Itens</th>
                        <th>Pagamento</th><th>Total</th><th>Troco</th>
                    </tr></thead>
                    <tbody>
                        ${filtradas.map(v => `
                        <tr class="hist-row" onclick="Historico.expandir('${v.id}')" style="cursor:pointer" title="Clique para ver itens">
                            <td>${v.hora}</td>
                            <td><span class="produto-id">${v.id}</span></td>
                            <td>${v.itens.length} item(s) · ${v.itens.reduce((s, i) => s + i.qtd, 0)} un.</td>
                            <td>${pagLabel[v.pagamento] || v.pagamento}</td>
                            <td><strong>R$ ${v.total.toFixed(2).replace('.', ',')}</strong></td>
                            <td>${v.troco > 0 ? 'R$ ' + v.troco.toFixed(2).replace('.', ',') : '—'}</td>
                        </tr>
                        <tr id="detalhe-${v.id}" style="display:none">
                            <td colspan="6" class="hist-detalhe">
                                <table class="hist-itens-table">
                                    <thead><tr><th>Produto</th><th>Qtd</th><th>Unit.</th><th>Desc</th><th>Subtotal</th></tr></thead>
                                    <tbody>
                                        ${v.itens.map(i => {
                                            const desc = i.preco * (i.desconto / 100);
                                            const sub  = (i.preco - desc) * i.qtd;
                                            return `<tr>
                                                <td>${i.nome}</td>
                                                <td>${i.qtd}</td>
                                                <td>R$ ${i.preco.toFixed(2).replace('.', ',')}</td>
                                                <td>${i.desconto > 0 ? i.desconto + '%' : '—'}</td>
                                                <td>R$ ${sub.toFixed(2).replace('.', ',')}</td>
                                            </tr>`;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>`
            }
        </div>`;
    }

    function mudarAba(aba) { _aba = aba; renderizar(); }
    function filtrar(campo, valor) {
        if (campo === 'data') _filtroData = valor;
        if (campo === 'pag')  _filtroPag  = valor;
        renderizar();
    }
    function expandir(id) {
        const el = document.getElementById(`detalhe-${id}`);
        if (el) el.style.display = el.style.display === 'none' ? '' : 'none';
    }
    function limpar() {
        if (!confirm('Limpar todo o histórico de vendas? Essa ação não pode ser desfeita.')) return;
        DB.limparVendas();
        renderizar();
    }

    return { renderizar, mudarAba, filtrar, expandir, limpar };
})();


// ============================================================
// ESTOQUE BAIXO
// ============================================================
const EstoqueBaixo = (() => {
    let _limite = 20;

    function renderizar() {
        const container = document.getElementById('tela-estoque-baixo');
        if (!container) return;

        const todos = DB.listar();
        const baixo = todos
            .map(p => ({
                p,
                qtd: (p.validades || []).reduce((s, v) => s + v.quantidade, 0),
            }))
            .filter(r => r.qtd <= _limite)
            .sort((a, b) => a.qtd - b.qtd);

        container.innerHTML = `
        <div class="dash-validade-header">
            <div>
                <div class="dash-secao-titulo">⚠️ Estoque Baixo</div>
                <div class="dash-relatorio-sub">${baixo.length} produto(s) com ≤ ${_limite} unidades</div>
            </div>
            <label class="dash-filtro" style="flex-direction:row;align-items:center;gap:8px">
                <span>Limite:</span>
                <input type="number" min="1" max="999" value="${_limite}" style="width:70px;padding:4px 8px"
                    onchange="EstoqueBaixo.setLimite(this.value)" />
            </label>
        </div>

        ${baixo.length === 0
            ? `<div class="dash-vazia">Nenhum produto abaixo do limite. ✅</div>`
            : `<table class="dash-tabela dash-relatorio-tabela">
                <thead><tr>
                    <th>Código</th><th>Produto</th><th>Empresa</th>
                    <th>Estoque</th><th>Loja</th><th>Depósito</th>
                    <th class="dash-print-hide">Ação</th>
                </tr></thead>
                <tbody>
                    ${baixo.map(({ p, qtd }) => `
                    <tr class="${qtd === 0 ? 'dash-tr-vencido' : qtd <= 5 ? 'dash-tr-atencao' : ''}">
                        <td><span class="produto-id">${p.id}</span></td>
                        <td>${p.nome}</td>
                        <td>${p.empresa || '—'}</td>
                        <td><span class="${qtd === 0 ? 'badge-validade vencido' : qtd <= 5 ? 'badge-validade atencao' : ''}">${qtd} un.</span></td>
                        <td>${p.loja?.corredor || '—'} · ${p.loja?.gondola || '—'}</td>
                        <td>Corr. ${p.deposito?.corredor || '—'} · Arm. ${p.deposito?.armario || '—'} · Prat. ${p.deposito?.prateleira || '—'}</td>
                        <td class="dash-print-hide">
                            <button class="btn-acao editar" onclick="Cadastro.abrirFormulario('${p.id}')" title="Editar/Repor">✏️</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>`
        }`;
    }

    function setLimite(val) { _limite = parseInt(val) || 20; renderizar(); }

    return { renderizar, setLimite };
})();
