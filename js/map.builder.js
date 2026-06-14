/**
 * AtacadoPro | map.builder.js
 * Gera os elementos SVG e aplica classes de status de validade nas gôndolas.
 */

const MapBuilder = (() => {

    function buildCorredores() {
        const container = document.getElementById('corredores-dinamicos');
        if (!container) return;

        const { corredores, prateleirasPorCorredor } = LOJA_CONFIG;
        const metade = prateleirasPorCorredor / 2;
        let html = '';

        corredores.forEach(corr => {
            const cx = corr.x + 45;

            html += `
                <rect x="${corr.x + 5}" y="30" width="80" height="30" fill="${corr.color}" rx="4" />
                <text x="${cx}" y="45" fill="#fff" font-size="10" font-weight="bold"
                      text-anchor="middle" dominant-baseline="middle">CORREDOR ${corr.id}</text>
                <line x1="${cx}" y1="65" x2="${cx}" y2="670" class="corridor-line" />
            `;

            for (let i = 1; i <= prateleirasPorCorredor; i++) {
                const yPos = i <= metade
                    ? 80  + (i - 1) * 52
                    : 410 + (i - metade - 1) * 52;

                const id = `${corr.id}${i}`;
                const cy = yPos + 20;

                html += `
                    <g id="gondola-${id}" class="shelf"
                       onclick="MapRouter.tracarRota('Corredor ${corr.id}', 'Gôndola ${id}', ${cx}, ${cy}, '${id}')">
                        <rect x="${corr.x - 5}"  y="${yPos}" width="30" height="40" rx="2" />
                        <text x="${corr.x + 10}" y="${cy}" class="shelf-id">${id}</text>
                        <rect x="${corr.x + 65}" y="${yPos}" width="30" height="40" rx="2" />
                        <text x="${corr.x + 80}" y="${cy}" class="shelf-id">${id}</text>
                    </g>
                `;
            }
        });

        container.innerHTML = html;
    }

    function buildCaixas() {
        const container = document.getElementById('caixas-dinamicos');
        if (!container) return;

        const { totalCaixas } = LOJA_CONFIG;
        let html = '';

        for (let i = 1; i <= totalCaixas; i++) {
            if (i === 9) continue;
            const xPos = i < 9 ? 40 + (i - 1) * 60 : 680 + (i - 9) * 60;
            html += `
                <rect x="${xPos}" y="770" width="40" height="50"
                      fill="var(--bg-surface)" stroke="var(--border-color)" rx="2" />
                <text x="${xPos + 20}" y="795" fill="var(--text-muted)"
                      font-size="12" font-weight="bold" text-anchor="middle">CX${i}</text>
            `;
        }

        container.innerHTML = html;
    }

    /**
     * Colore as gôndolas no mapa de acordo com a categoria dos produtos cadastrados.
     * Chamado ao inicializar e ao salvar um produto.
     */
    // Mapa de valor da gondola → id do elemento SVG do setor fixo
    const _setorFixoMap = {
        'AÇOUGUE':   'setor-acougue',
        'FRIOS':     'setor-frios',
        'HORTIFRUTI':'setor-hortifruti',
        'PADARIA':   'setor-padaria',
        'BEBIDAS':   'setor-bebidas',
        'ADEGA':     'setor-adega',
    };

    function _elPorGondola(gondola) {
        if (!gondola) return null;
        const g = gondola.toUpperCase().trim();
        // Setor fixo (ex: AÇOUGUE) → busca pelo id do setor no SVG
        if (_setorFixoMap[g]) return document.getElementById(_setorFixoMap[g]);
        // Gôndola de corredor (ex: A3) → busca pelo id gerado dinamicamente
        return document.getElementById(`gondola-${g}`);
    }

    const _getClass = el => el.getAttribute('class') || '';
    const _setClass = (el, cls) => el.setAttribute('class', cls);

    function atualizarIndicadoresCategoria() {
        // Remove classes de categoria anteriores das gôndolas de corredor
        document.querySelectorAll('.shelf').forEach(el => {
            _setClass(el, _getClass(el).split(' ').filter(c => !c.startsWith('cat-')).join(' ').trim());
        });
        // Reset dos setores fixos
        Object.values(_setorFixoMap).forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.querySelector('rect');
            if (rect) {
                rect.style.fill   = '';
                rect.style.stroke = '';
                delete rect.dataset.catColorizado;
            }
        });

        DB.listar().forEach(p => {
            const gondola = (p.loja?.gondola || '').toUpperCase().trim();
            if (!gondola || !p.categoria) return;
            const catCfg = LOJA_CONFIG.categorias[p.categoria];
            if (!catCfg) return;

            const el = _elPorGondola(gondola);
            if (!el) return;

            const isSetor = !!_setorFixoMap[gondola];
            if (isSetor) {
                const rect = el.querySelector('rect');
                if (rect && !rect.dataset.catColorizado) {
                    rect.style.fill   = catCfg.cor + '33';
                    rect.style.stroke = catCfg.cor;
                    rect.dataset.catColorizado = '1';
                }
            } else {
                const cls = _getClass(el);
                if (!cls.includes('cat-')) {
                    _setClass(el, (cls + ' ' + catCfg.cssClass).trim());
                }
            }
        });
    }

    /**
     * Limpa e reaplica as classes de status em todas as gôndolas.
     * Chamado ao ativar/desativar modo funcionário e ao salvar produtos.
     */
    function atualizarIndicadoresValidade(ativo) {
        // Remove classes de status de todas as gôndolas
        document.querySelectorAll('.shelf').forEach(el => {
            _setClass(el, _getClass(el).split(' ').filter(c => !c.startsWith('status-')).join(' ').trim());
        });

        // Remove pontos de alerta
        document.querySelectorAll('.shelf-alert-dot').forEach(el => el.remove());

        if (!ativo) return;

        // Mapeia gôndola → pior status
        const statusMap = {};
        DB.listar().forEach(p => {
            const gondola = (p.loja?.gondola || '').toUpperCase();
            if (!gondola) return;
            (p.validades || []).forEach(v => {
                const s = DB.statusValidade(v.data);
                if (_prioridade(s) > _prioridade(statusMap[gondola] || 'ok')) {
                    statusMap[gondola] = s;
                }
            });
        });

        // Aplica classe no elemento da gôndola ou setor
        Object.entries(statusMap).forEach(([gondola, status]) => {
            if (status === 'ok') return;
            const el = _elPorGondola(gondola);
            if (!el) return;
            // Setores fixos não têm classe .shelf, aplica no rect interno
            if (_setorFixoMap[gondola]) {
                const rect = el.querySelector('rect');
                if (rect) rect.style.boxShadow = status === 'vencido' ? '0 0 6px #ef4444' : '0 0 6px #f59e0b';
            } else {
                _setClass(el, (_getClass(el) + ' status-' + status).trim());
                _adicionarPonto(gondola, status);
            }
        });
    }

    function _prioridade(status) {
        return status === 'vencido' ? 2 : status === 'atencao' ? 1 : 0;
    }

    function _adicionarPonto(gondolaId, status) {
        // Pega o primeiro rect do grupo para posicionar o ponto
        const g = document.getElementById(`gondola-${gondolaId}`);
        if (!g) return;
        const rect = g.querySelector('rect');
        if (!rect) return;

        const x   = parseFloat(rect.getAttribute('x')) + parseFloat(rect.getAttribute('width')) - 3;
        const y   = parseFloat(rect.getAttribute('y')) + 4;
        const cor = status === 'vencido' ? '#ef4444' : '#f59e0b';
        const glow = status === 'vencido'
            ? 'drop-shadow(0 0 4px rgba(239,68,68,0.9))'
            : 'drop-shadow(0 0 3px rgba(245,158,11,0.8))';

        const svg    = document.getElementById('loja-svg');
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('class', 'shelf-alert-dot');
        circle.setAttribute('cx',    x);
        circle.setAttribute('cy',    y);
        circle.setAttribute('r',     '4');
        circle.setAttribute('fill',  cor);
        circle.style.filter        = glow;
        circle.style.pointerEvents = 'none';
        svg.appendChild(circle);
    }

    function init() {
        buildCorredores();
        buildCaixas();
        // Pequeno delay para garantir que o DOM do SVG foi renderizado
        setTimeout(() => atualizarIndicadoresCategoria(), 50);
    }

    return { init, atualizarIndicadoresValidade, atualizarIndicadoresCategoria };
})();