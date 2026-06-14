/**
 * AtacadoPro | db.js
 * Gerencia produtos com suporte a múltiplas validades por lote.
 */

const DB = (() => {
    const KEY = 'atacadopro_produtos';
    const KEY_VENDAS = 'atacadopro_vendas';

    const DEMO = [
        {
            id: 'PRD001', nome: 'Arroz Tipo 1 5kg', empresa: 'Tio João',
            categoria: 'geral',
            quantidade: 240, valorCompra: 12.50, valorVenda: 18.90,
            loja: { corredor: 'E', gondola: 'E4' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-03-15', quantidade: 150 },
                { id: 'v2', data: '2026-09-20', quantidade: 90 }
            ]
        },
        {
            id: 'PRD002', nome: 'Feijão Carioca 1kg', empresa: 'Camil',
            categoria: 'geral',
            quantidade: 180, valorCompra: 5.80, valorVenda: 8.49,
            loja: { corredor: 'E', gondola: 'E5' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'A' },
            validades: [{ id: 'v1', data: '2026-08-20', quantidade: 180 }]
        },
        {
            id: 'PRD003', nome: 'Óleo de Soja 900ml', empresa: 'Liza',
            categoria: 'geral',
            quantidade: 96, valorCompra: 7.20, valorVenda: 10.99,
            loja: { corredor: 'F', gondola: 'F1' },
            deposito: { corredor: 'D2', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2025-11-30', quantidade: 40 },
                { id: 'v2', data: '2026-05-15', quantidade: 56 }
            ]
        },
        {
            id: 'PRD004', nome: 'Macarrão Espaguete 500g', empresa: 'Barilla',
            categoria: 'geral',
            quantidade: 312, valorCompra: 4.10, valorVenda: 6.49,
            loja: { corredor: 'F', gondola: 'F2' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'A' },
            validades: [{ id: 'v1', data: '2027-01-10', quantidade: 312 }]
        },
        {
            id: 'PRD005', nome: 'Leite Integral 1L', empresa: 'Italac',
            categoria: 'frios',
            quantidade: 576, valorCompra: 3.40, valorVenda: 5.29,
            loja: { corredor: 'FRIOS', gondola: 'FRIOS' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2025-09-05', quantidade: 200 },
                { id: 'v2', data: '2025-12-10', quantidade: 376 }
            ]
        },
        {
            id: 'PRD006', nome: 'Açúcar Refinado 2kg', empresa: 'União',
            categoria: 'geral',
            quantidade: 200, valorCompra: 6.90, valorVenda: 10.49,
            loja: { corredor: 'E', gondola: 'E6' },
            deposito: { corredor: 'D1', armario: '5', prateleira: 'B' },
            validades: [{ id: 'v1', data: '2027-06-01', quantidade: 200 }]
        },
    ];

    function _normalizarProduto(p) {
        if (!p.codigoBarras) p.codigoBarras = '';
        if (!p.validades) {
            p.validades = p.validade
                ? [{ id: 'v1', data: p.validade, quantidade: p.quantidade || 0 }]
                : [];
            delete p.validade;
        }
        // Infere categoria pela gôndola se não estiver salva
        if (!p.categoria) {
            p.categoria = (typeof LOJA_CONFIG !== 'undefined')
                ? (LOJA_CONFIG.categoriaDaGondola(p.loja?.gondola) || 'geral')
                : 'geral';
        }
        return p;
    }

    function carregar() {
        const raw = localStorage.getItem(KEY);
        if (!raw) { salvarTodos(DEMO); return JSON.parse(JSON.stringify(DEMO)); }
        return JSON.parse(raw).map(_normalizarProduto);
    }

    function salvarTodos(lista) { localStorage.setItem(KEY, JSON.stringify(lista.map(_normalizarProduto))); }
    function listar() { return carregar(); }
    function buscarPorId(id) { return listar().find(p => p.id === id) || null; }
    function estoqueTotal(produto) { return (produto.validades || []).reduce((s, v) => s + v.quantidade, 0); }

    function salvar(produto) {
        produto = _normalizarProduto(produto);
        // Garante retrocompatibilidade: se tiver campo 'validade' antigo, migra
        if (!produto.validades) {
            produto.validades = produto.validade
                ? [{ id: 'v1', data: produto.validade, quantidade: produto.quantidade || 0 }]
                : [];
            delete produto.validade;
        }
        const lista = listar();
        const idx = lista.findIndex(p => p.id === produto.id);
        if (idx >= 0) lista[idx] = produto; else lista.push(produto);
        salvarTodos(lista);
    }

    function excluir(id) { salvarTodos(listar().filter(p => p.id !== id)); }

    // ---- Validades ----
    function adicionarValidade(produtoId, data, quantidade) {
        const lista = listar();
        const p = lista.find(x => x.id === produtoId);
        if (!p) return;
        if (!p.validades) p.validades = [];
        const novoId = 'v' + Date.now();
        p.validades.push({ id: novoId, data, quantidade: parseInt(quantidade) || 0 });
        p.validades.sort((a, b) => a.data.localeCompare(b.data));
        salvarTodos(lista);
    }

    function excluirValidade(produtoId, validadeId) {
        const lista = listar();
        const p = lista.find(x => x.id === produtoId);
        if (!p) return;
        p.validades = (p.validades || []).filter(v => v.id !== validadeId);
        salvarTodos(lista);
    }

    function gerarId() {
        const nums = listar().map(p => parseInt(p.id.replace('PRD', '')) || 0);
        return 'PRD' + String((nums.length ? Math.max(...nums) : 0) + 1).padStart(3, '0');
    }

    // ---- Helpers de validade ----
    function proximaValidade(produto) {
        if (!produto.validades?.length) return null;
        return produto.validades.slice().sort((a,b) => a.data.localeCompare(b.data))[0];
    }

    function statusValidade(data) {
        if (!data) return 'ok';
        const dias = Math.floor((new Date(data) - new Date()) / 86400000);
        if (dias < 0) return 'vencido';
        if (dias <= 30) return 'atencao';
        return 'ok';
    }

    // ---- Exportação / Importação ----
    function exportarJSON() {
        const blob = new Blob([JSON.stringify(listar(), null, 2)], { type: 'application/json' });
        _download(blob, `atacadopro_${_hoje()}.json`);
    }

    function importarJSON(file, cb) {
        const r = new FileReader();
        r.onload = e => { try { const l = JSON.parse(e.target.result); salvarTodos(l); cb(true, l.length); } catch { cb(false,0); } };
        r.readAsText(file);
    }

    function exportarExcel() {
        if (typeof XLSX === 'undefined') { alert('Biblioteca Excel não carregada.'); return; }
        const rows = [];
        listar().forEach(p => {
            (p.validades || []).forEach(v => {
                rows.push({
                    'Código': p.id, 'Nome': p.nome, 'Empresa': p.empresa,
                    'Qtd Lote': v.quantidade, 'Validade Lote': v.data,
                    'Valor Compra': p.valorCompra, 'Valor Venda': p.valorVenda,
                    'Loja Corredor': p.loja?.corredor, 'Loja Gôndola': p.loja?.gondola,
                    'Dep Corredor': p.deposito?.corredor, 'Dep Armário': p.deposito?.armario, 'Dep Prateleira': p.deposito?.prateleira,
                });
            });
            if (!p.validades?.length) rows.push({
                'Código': p.id, 'Nome': p.nome, 'Empresa': p.empresa,
                'Qtd Lote': p.quantidade, 'Validade Lote': '',
                'Valor Compra': p.valorCompra, 'Valor Venda': p.valorVenda,
                'Loja Corredor': p.loja?.corredor, 'Loja Gôndola': p.loja?.gondola,
                'Dep Corredor': p.deposito?.corredor, 'Dep Armário': p.deposito?.armario, 'Dep Prateleira': p.deposito?.prateleira,
            });
        });
        const ws = XLSX.utils.json_to_sheet(rows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Produtos');
        XLSX.writeFile(wb, `atacadopro_${_hoje()}.xlsx`);
    }

    function importarExcel(file, cb) {
        const r = new FileReader();
        r.onload = e => {
            try {
                const wb = XLSX.read(e.target.result, { type: 'binary' });
                const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                // Agrupa por código
                const map = {};
                rows.forEach(r => {
                    if (!map[r['Código']]) map[r['Código']] = {
                        id: r['Código'], nome: r['Nome'], empresa: r['Empresa'],
                        valorCompra: Number(r['Valor Compra'])||0, valorVenda: Number(r['Valor Venda'])||0,
                        loja: { corredor: r['Loja Corredor']||'', gondola: r['Loja Gôndola']||'' },
                        deposito: { corredor: r['Dep Corredor']||'', armario: r['Dep Armário']||'', prateleira: r['Dep Prateleira']||'' },
                        validades: []
                    };
                    if (r['Validade Lote']) map[r['Código']].validades.push({ id:'v'+Date.now()+Math.random(), data: r['Validade Lote'], quantidade: Number(r['Qtd Lote'])||0 });
                });
                const lista = Object.values(map);
                salvarTodos(lista);
                cb(true, lista.length);
            } catch { cb(false,0); }
        };
        r.readAsBinaryString(file);
    }

    function _download(blob, nome) {
        const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: nome });
        a.click(); URL.revokeObjectURL(a.href);
    }
    function _hoje() { return new Date().toISOString().slice(0,10); }

    // ---- Vendas (persistência) ----
    function salvarVenda(venda) {
        const vendas = carregarVendas();
        vendas.push(venda);
        localStorage.setItem(KEY_VENDAS, JSON.stringify(vendas));
    }

    function carregarVendas() {
        try {
            const raw = localStorage.getItem(KEY_VENDAS);
            return raw ? JSON.parse(raw) : [];
        } catch { return []; }
    }

    function limparVendas() {
        localStorage.removeItem(KEY_VENDAS);
    }

    return { listar, buscarPorId, salvar, excluir, gerarId, adicionarValidade, excluirValidade, proximaValidade, statusValidade, exportarJSON, importarJSON, exportarExcel, importarExcel, salvarVenda, carregarVendas, limparVendas };
})();