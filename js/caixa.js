/**
 * AtacadoPro | caixa.js
 * Sistema de PDV: busca produtos, carrinho, desconto, troco, recibo, baixa estoque.
 */

const Caixa = (() => {
    let _carrinho = [];   // [{ produto, quantidade, desconto, subtotal }]
    let _vendas   = [];   // histórico em memória (pode ser persistido se quiser)

    function _estoqueTotal(produto) {
        return (produto.validades || []).reduce((s, v) => s + v.quantidade, 0);
    }

    // ── BUSCA ─────────────────────────────────────────────────────────────
    function buscarProduto(termo) {
        if (!termo) { _renderBusca([]); return; }
        const t = termo.toLowerCase();
        const res = DB.listar().filter(p =>
            p.id.toLowerCase().includes(t) ||
            p.nome.toLowerCase().includes(t)
        ).slice(0, 8);
        _renderBusca(res);
    }

    function _renderBusca(lista) {
        const el = document.getElementById('caixa-resultados');
        if (!el) return;
        if (!lista.length) { el.innerHTML = ''; el.style.display = 'none'; return; }

        el.innerHTML = lista.map(p => `
            <div class="caixa-resultado-item" onclick="Caixa.adicionarAoCarrinho('${p.id}')">
                <span class="resultado-id">${p.id}</span>
                <span class="resultado-nome">${p.nome}</span>
                <span class="resultado-empresa">${p.empresa}</span>
                <span class="resultado-preco">R$ ${p.valorVenda.toFixed(2).replace('.',',')}</span>
                <span class="resultado-estoque ${_estoqueTotal(p)<=5?'alerta-estoque':''}">Estq: ${_estoqueTotal(p)}</span>
            </div>`).join('');
        el.style.display = 'block';
    }

    function adicionarAoCarrinho(produtoId) {
        // Limpa busca
        const input = document.getElementById('caixa-busca');
        if (input) input.value = '';
        _renderBusca([]);

        const produto = DB.buscarPorId(produtoId);
        if (!produto) return;

        const qtdTotal = _estoqueTotal(produto);
        if (qtdTotal <= 0) {
            _toast('Produto sem estoque!', 'erro');
            return;
        }

        const idx = _carrinho.findIndex(i => i.produto.id === produtoId);
        if (idx >= 0) {
            if (_carrinho[idx].quantidade >= qtdTotal) {
                _toast('Quantidade maior que o estoque disponível!', 'erro');
                return;
            }
            _carrinho[idx].quantidade++;
        } else {
            _carrinho.push({ produto, quantidade: 1, desconto: 0 });
        }
        _renderCarrinho();
        if (input) input.focus();
    }

    function removerDoCarrinho(produtoId) {
        _carrinho = _carrinho.filter(i => i.produto.id !== produtoId);
        _renderCarrinho();
    }

    function alterarQuantidade(produtoId, delta) {
        const item = _carrinho.find(i => i.produto.id === produtoId);
        if (!item) return;
        const estoque = _estoqueTotal(DB.buscarPorId(produtoId) || item.produto);
        const novaQtd = Math.max(1, item.quantidade + delta);
        if (novaQtd > estoque) {
            _toast('Quantidade maior que o estoque disponível!', 'erro');
            return;
        }
        item.quantidade = novaQtd;
        _renderCarrinho();
    }

    function alterarDesconto(produtoId, valor) {
        const item = _carrinho.find(i => i.produto.id === produtoId);
        if (!item) return;
        item.desconto = Math.min(100, Math.max(0, parseFloat(valor) || 0));
        _renderCarrinho();
    }

    // ── CARRINHO ──────────────────────────────────────────────────────────
    function _renderCarrinho() {
        const el = document.getElementById('caixa-carrinho');
        const elTotal = document.getElementById('caixa-total');
        if (!el) return;

        if (_carrinho.length === 0) {
            el.innerHTML = `<div class="carrinho-vazio">Nenhum produto adicionado.<br><span>Use a busca acima para adicionar itens.</span></div>`;
            if (elTotal) elTotal.textContent = 'R$ 0,00';
            _atualizarTotais();
            return;
        }

        el.innerHTML = _carrinho.map(item => {
            const precoUnit  = item.produto.valorVenda;
            const descValor  = precoUnit * (item.desconto / 100);
            const precoFinal = (precoUnit - descValor) * item.quantidade;

            return `
            <div class="carrinho-item">
                <div class="carr-topo">
                    <span class="carr-id">${item.produto.id}</span>
                    <span class="carr-nome">${item.produto.nome}</span>
                    <button class="carr-remover" onclick="Caixa.removerDoCarrinho('${item.produto.id}')">✕</button>
                </div>
                <div class="carr-controles">
                    <div class="carr-qtd-wrap">
                        <button class="carr-btn" onclick="Caixa.alterarQuantidade('${item.produto.id}',-1)">−</button>
                        <span class="carr-qtd">${item.quantidade}</span>
                        <button class="carr-btn" onclick="Caixa.alterarQuantidade('${item.produto.id}',1)">+</button>
                    </div>
                    <div class="carr-desc-wrap">
                        <span class="carr-desc-label">Desc %</span>
                        <input class="carr-desc-input" type="number" min="0" max="100" value="${item.desconto}"
                               onchange="Caixa.alterarDesconto('${item.produto.id}',this.value)" />
                    </div>
                    <div class="carr-subtotal">
                        <span class="carr-unit">R$ ${precoUnit.toFixed(2).replace('.',',')} un.</span>
                        <span class="carr-total-item">R$ ${precoFinal.toFixed(2).replace('.',',')}</span>
                    </div>
                </div>
            </div>`;
        }).join('');

        _atualizarTotais();
    }

    function _atualizarTotais() {
        let subtotal = 0;
        _carrinho.forEach(item => {
            const desc   = item.produto.valorVenda * (item.desconto / 100);
            subtotal    += (item.produto.valorVenda - desc) * item.quantidade;
        });

        const elSub   = document.getElementById('caixa-subtotal');
        const elTotal = document.getElementById('caixa-total');
        if (elSub)   elSub.textContent   = `R$ ${subtotal.toFixed(2).replace('.',',')}`;
        if (elTotal) elTotal.textContent  = `R$ ${subtotal.toFixed(2).replace('.',',')}`;
    }

    // ── TROCO ─────────────────────────────────────────────────────────────
    function calcularTroco() {
        const pago   = parseFloat(document.getElementById('caixa-pago')?.value) || 0;
        const total  = _totalCarrinho();
        const troco  = pago - total;
        const elTroco = document.getElementById('caixa-troco');
        if (!elTroco) return;

        if (pago <= 0) { elTroco.textContent = '—'; return; }
        if (troco < 0) {
            elTroco.textContent  = `Faltam R$ ${Math.abs(troco).toFixed(2).replace('.',',')}`;
            elTroco.style.color  = '#ef4444';
        } else {
            elTroco.textContent  = `R$ ${troco.toFixed(2).replace('.',',')}`;
            elTroco.style.color  = '#34d399';
        }
    }

    function _totalCarrinho() {
        return _carrinho.reduce((s, item) => {
            const desc = item.produto.valorVenda * (item.desconto / 100);
            return s + (item.produto.valorVenda - desc) * item.quantidade;
        }, 0);
    }

    // ── FINALIZAR VENDA ───────────────────────────────────────────────────
    function finalizarVenda() {
        if (_carrinho.length === 0) { _toast('Carrinho vazio!', 'erro'); return; }

        const pagamento = document.getElementById('caixa-pagamento-hidden')?.value || 'dinheiro';
        const total = _totalCarrinho();
        const pagoInformado = parseFloat(document.getElementById('caixa-pago')?.value) || 0;
        const pago = pagamento === 'dinheiro' ? pagoInformado : total;
        if (pagamento === 'dinheiro' && pago < total) { _toast('Valor pago insuficiente!', 'erro'); return; }

        for (const item of _carrinho) {
            const produtoAtual = DB.buscarPorId(item.produto.id);
            if (!produtoAtual || _estoqueTotal(produtoAtual) < item.quantidade) {
                _toast(`Estoque insuficiente para ${item.produto.nome}.`, 'erro');
                return;
            }
        }

        const troco = pago - total;
        const hora  = new Date().toLocaleString('pt-BR');

        // Dá baixa no estoque (FIFO nas validades)
        _carrinho.forEach(item => {
            let qtdRestante = item.quantidade;
            const lista = DB.listar();
            const p = lista.find(x => x.id === item.produto.id);
            if (!p) return;

            // Desconta das validades mais antigas primeiro
            p.validades = (p.validades || []).sort((a,b) => a.data.localeCompare(b.data));
            p.validades.forEach(v => {
                if (qtdRestante <= 0) return;
                const tirar = Math.min(v.quantidade, qtdRestante);
                v.quantidade -= tirar;
                qtdRestante  -= tirar;
            });
            // Remove lotes zerados
            p.validades = p.validades.filter(v => v.quantidade > 0);
            DB.salvar(p);
        });

        // Registra histórico
        const venda = {
            id:         'VND' + Date.now(),
            hora,
            pagamento,
            itens:      _carrinho.map(i => ({
                id:       i.produto.id,
                nome:     i.produto.nome,
                qtd:      i.quantidade,
                preco:    i.produto.valorVenda,
                desconto: i.desconto,
            })),
            total,
            pago,
            troco,
        };
        _vendas.push(venda);

        // Exibe recibo
        _exibirRecibo(venda);

        // Limpa caixa
        _carrinho = [];
        _renderCarrinho();
        const elPago = document.getElementById('caixa-pago');
        if (elPago) elPago.value = '';
        calcularTroco();

        // Atualiza indicadores do mapa se estiver aberto
        if (typeof MapBuilder !== 'undefined') {
            MapBuilder.atualizarIndicadoresValidade(Auth.isFuncionario());
        }
    }

    // ── RECIBO ────────────────────────────────────────────────────────────
    function _exibirRecibo(venda) {
        const itensHTML = venda.itens.map(i => {
            const desc  = i.preco * (i.desconto / 100);
            const total = (i.preco - desc) * i.qtd;
            return `
            <tr>
                <td>${i.nome}</td>
                <td class="rec-centro">${i.qtd}</td>
                <td class="rec-centro">R$ ${i.preco.toFixed(2).replace('.',',')}</td>
                <td class="rec-centro">${i.desconto > 0 ? i.desconto+'%' : '—'}</td>
                <td class="rec-direita">R$ ${total.toFixed(2).replace('.',',')}</td>
            </tr>`;
        }).join('');

        const pagLabel = { dinheiro:'Dinheiro', cartao_debito:'Cartão Débito', cartao_credito:'Cartão Crédito', pix:'PIX' }[venda.pagamento] || venda.pagamento;

        document.getElementById('recibo-conteudo').innerHTML = `
            <div class="recibo-header">
                <div class="recibo-logo">AtacadoPro</div>
                <div class="recibo-sub">CUPOM NÃO FISCAL</div>
                <div class="recibo-data">${venda.hora}</div>
                <div class="recibo-id">Venda: ${venda.id}</div>
            </div>
            <table class="recibo-tabela">
                <thead><tr>
                    <th>Produto</th><th class="rec-centro">Qtd</th>
                    <th class="rec-centro">Unit.</th><th class="rec-centro">Desc</th>
                    <th class="rec-direita">Total</th>
                </tr></thead>
                <tbody>${itensHTML}</tbody>
            </table>
            <div class="recibo-totais">
                <div class="recibo-linha"><span>Total</span><strong>R$ ${venda.total.toFixed(2).replace('.',',')}</strong></div>
                <div class="recibo-linha"><span>Pagamento</span><span>${pagLabel}</span></div>
                ${venda.pagamento === 'dinheiro' ? `
                <div class="recibo-linha"><span>Valor pago</span><span>R$ ${venda.pago.toFixed(2).replace('.',',')}</span></div>
                <div class="recibo-linha destaque"><span>Troco</span><strong>R$ ${venda.troco.toFixed(2).replace('.',',')}</strong></div>` : ''}
            </div>
            <div class="recibo-rodape">Obrigado pela preferência!<br>AtacadoPro · Sistema de Gestão</div>
        `;

        document.getElementById('modal-recibo').classList.add('aberto');
    }

    function fecharRecibo() {
        document.getElementById('modal-recibo').classList.remove('aberto');
    }

    function imprimirRecibo() {
        window.print();
    }

    // ── HISTÓRICO ─────────────────────────────────────────────────────────
    function getVendas() { return _vendas; }

    function _toast(msg, tipo = 'ok') {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.style.background = tipo === 'erro' ? '#7f1d1d' : '#064e3b';
        t.style.color      = tipo === 'erro' ? '#fca5a5' : '#34d399';
        t.classList.add('visivel');
        setTimeout(() => t.classList.remove('visivel'), 2500);
    }

    function init() {
        _renderCarrinho();
    }

    return {
        buscarProduto, adicionarAoCarrinho, removerDoCarrinho,
        alterarQuantidade, alterarDesconto, calcularTroco,
        finalizarVenda, fecharRecibo, imprimirRecibo, getVendas, init
    };
})();
