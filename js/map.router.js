/**
 * AtacadoPro | map.router.js
 * Motor de roteamento + exibição de produtos no painel.
 * CORREÇÃO: setores laterais (Bebidas, Adega etc.) não mostram produtos de corredores.
 */

const MapRouter = (() => {
    const el = {};

    // IDs dos setores que NÃO têm produtos de corredor — só mostram produtos
    // que tenham o campo loja.corredor vazio ou correspondente ao nome do setor
    const SETORES_FIXOS = ['acougue','frios','hortifruti','padaria','bebidas','adega','deposito','sanitarios'];

    function init() {
        el.rotaAtiva   = document.getElementById('rota-ativa');
        el.pontoInicio = document.getElementById('ponto-inicio');
        el.pontoFim    = document.getElementById('ponto-fim');
        el.infoPanel   = document.getElementById('info-panel');
    }

    function calcularCaminho(targetX, targetY, isGondola) {
        const { entrada, viaPrincipalY, limiteLateral } = LOJA_CONFIG;
        const path = [`${entrada.x},${entrada.y}`, `${entrada.x},${viaPrincipalY}`];
        if (isGondola) {
            path.push(`${targetX},${viaPrincipalY}`, `${targetX},${targetY}`);
        } else {
            const cx = targetX < entrada.x ? limiteLateral.esquerda : limiteLateral.direita;
            path.push(`${cx},${viaPrincipalY}`, `${cx},${targetY}`, `${targetX},${targetY}`);
        }
        return path;
    }

    function limparRota() {
        el.rotaAtiva.setAttribute('d', '');
        el.pontoInicio.style.display = 'none';
        el.pontoFim.style.display = 'none';
        el.infoPanel.classList.remove('visible');
        document.querySelectorAll('.shelf.active, .section.active').forEach(e => e.classList.remove('active'));
    }

    function tracarRota(titulo, descricao, targetX, targetY, idGondola = null) {
        limparRota();

        const elementoAlvo = idGondola
            ? document.getElementById(`gondola-${idGondola}`)
            : document.getElementById(`setor-${titulo.toLowerCase().replace(/\s/g,'').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`);
        if (elementoAlvo) elementoAlvo.classList.add('active');

        const caminho = calcularCaminho(targetX, targetY, !!idGondola);
        el.rotaAtiva.setAttribute('d', `M ${caminho.join(' L ')}`);

        const { entrada } = LOJA_CONFIG;
        el.pontoInicio.setAttribute('cx', entrada.x); el.pontoInicio.setAttribute('cy', entrada.y);
        el.pontoInicio.style.display = 'block';
        el.pontoFim.setAttribute('cx', targetX); el.pontoFim.setAttribute('cy', targetY);
        el.pontoFim.style.display = 'block';

        // ---- BUSCA DE PRODUTOS CORRIGIDA ----
        let produtos = [];
        if (idGondola) {
            // Clicou numa gôndola: busca exata pela gôndola
            produtos = DB.listar().filter(p => (p.loja?.gondola || '').toUpperCase() === idGondola.toUpperCase());
        } else {
            // Clicou num setor fixo: busca pelo nome do setor no campo corredor
            // Normaliza o título para comparação (ex: "Açougue" → "acougue")
            const tituloNorm = titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
            produtos = DB.listar().filter(p => {
                const corr = (p.loja?.corredor || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
                // Só bate se o corredor do produto for literalmente o nome do setor
                // Ex: corredor = "Açougue" ou "acougue"
                // NÃO bate se corredor = "A", "B", etc. (letras de corredor central)
                return corr === tituloNorm;
            });
        }

        _renderizarPainel(titulo, descricao, produtos, idGondola);
        el.infoPanel.classList.add('visible');
    }

    function _renderizarPainel(titulo, descricao, produtos, idGondola) {
        const isFuncionario = typeof Auth !== 'undefined' && Auth.isFuncionario();

        const produtosHTML = produtos.length === 0
            ? `<p class="painel-sem-produto">Nenhum produto cadastrado aqui.</p>`
            : produtos.map(p => {
                const proxVal = DB.proximaValidade(p);
                const status  = proxVal ? DB.statusValidade(proxVal.data) : 'ok';
                const qtdTotal = (p.validades || []).reduce((s,v) => s + v.quantidade, 0);

                return `
                <div class="painel-produto">
                    <div class="painel-prod-topo">
                        <span class="painel-prod-id">${p.id}</span>
                        <span class="painel-prod-empresa">${p.empresa}</span>
                    </div>
                    <div class="painel-prod-nome">${p.nome}</div>
                    <div class="painel-prod-preco">R$ ${p.valorVenda.toFixed(2).replace('.',',')}</div>
                    ${isFuncionario ? `
                    <div class="painel-prod-detalhe">
                        <span>Qtd total: <strong class="${qtdTotal <= 10 ? 'alerta-estoque':''}">${qtdTotal} un.</strong></span>
                        ${proxVal ? `<span class="badge-validade ${status}">Val: ${proxVal.data}</span>` : ''}
                    </div>
                    <div class="painel-prod-deposito">🏭 ${p.deposito?.corredor||'—'} · Arm ${p.deposito?.armario||'—'} · Prat ${p.deposito?.prateleira||'—'}</div>
                    ` : ''}
                </div>`;
            }).join('');

        el.infoPanel.innerHTML = `
            <button class="close-btn" onclick="MapRouter.limparRota()">✖</button>
            <span class="info-label">${idGondola ? `Gôndola ${idGondola}` : titulo}</span>
            <h3 class="info-panel-titulo">${titulo}</h3>
            <p class="info-panel-desc">${descricao}</p>
            ${produtos.length > 0 ? `<div class="painel-divisor"></div>` : ''}
            <div class="painel-produtos-lista">${produtosHTML}</div>
            ${produtos.length > 0 ? `<button class="btn-ver-todos" onclick="App.filtrarProdutos('${idGondola||''}','${titulo}')">Ver na lista de produtos →</button>` : ''}
        `;
    }

    return { init, tracarRota, limparRota };
})();
