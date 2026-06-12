/**
 * AtacadoPro | map.config.js
 * Configuração central da loja: corredores, setores e pontos de referência.
 * Edite aqui para adicionar/remover corredores ou setores sem mexer na lógica.
 */

const LOJA_CONFIG = {
    // Ponto de entrada (posição no SVG)
    entrada: { x: 600, y: 760 },

    // Vias de circulação principais
    viaPrincipalY: 710,
    viaCruzamentoY: 370,

    // Limites laterais do mapa (onde estão as paredes/setores)
    limiteLateral: {
        esquerda: 150,
        direita: 1050,
    },

    // Configuração dos corredores centrais
    corredores: [
        { id: 'A', x: 170, color: 'var(--cor-a)' },
        { id: 'B', x: 290, color: 'var(--cor-b)' },
        { id: 'C', x: 410, color: 'var(--cor-c)' },
        { id: 'D', x: 530, color: 'var(--cor-d)' },
        { id: 'E', x: 650, color: 'var(--cor-e)' },
        { id: 'F', x: 770, color: 'var(--cor-f)' },
        { id: 'G', x: 890, color: 'var(--cor-g)' },
    ],

    // Total de prateleiras por corredor
    prateleirasPorCorredor: 10,

    // Total de caixas
    totalCaixas: 16,

    // Setores fixos com nome e descrição (para o painel de info)
    setores: {
        acougue:    { titulo: 'Açougue',   desc: 'Carnes Frescas'           },
        frios:      { titulo: 'Frios',     desc: 'Laticínios e Embutidos'   },
        horti:      { titulo: 'Hortifruti',desc: 'Frutas e Verduras'        },
        padaria:    { titulo: 'Padaria',   desc: 'Pães e Bolos'             },
        bebidas:    { titulo: 'Bebidas',   desc: 'Águas, Sucos e Refri'     },
        adega:      { titulo: 'Adega',     desc: 'Vinhos e Destilados'      },
        deposito:   { titulo: 'Depósito',  desc: 'Acesso Restrito'          },
        sanitarios: { titulo: 'Sanitários',desc: 'WC Clientes'              },
    },

    /**
     * Categorias de produtos e as gôndolas permitidas para cada uma.
     * Chave: valor salvo no produto (campo `categoria`).
     * gondolas: lista das gôndolas válidas. Produtos só podem ser
     * cadastrados nessas posições para a categoria correspondente.
     */
    categorias: {
        acougue: {
            label:   'Açougue',
            emoji:   '🥩',
            cor:     '#ef4444',
            cssClass:'cat-acougue',
            gondolas: ['A1','A2','A3','A4','A5'],
        },
        frios: {
            label:   'Frios',
            emoji:   '🧀',
            cor:     '#0ea5e9',
            cssClass:'cat-frios',
            gondolas: ['A6','A7','A8','A9','A10','B1','B2','B3'],
        },
        horti: {
            label:   'Hortifruti',
            emoji:   '🥦',
            cor:     '#10b981',
            cssClass:'cat-horti',
            gondolas: ['B4','B5','B6','B7','B8','B9','B10'],
        },
        padaria: {
            label:   'Padaria',
            emoji:   '🍞',
            cor:     '#f59e0b',
            cssClass:'cat-padaria',
            gondolas: ['C1','C2','C3','C4','C5'],
        },
        bebidas: {
            label:   'Bebidas',
            emoji:   '🥤',
            cor:     '#3b82f6',
            cssClass:'cat-bebidas',
            gondolas: ['C6','C7','C8','C9','C10','D1','D2','D3','D4','D5'],
        },
        adega: {
            label:   'Adega',
            emoji:   '🍷',
            cor:     '#a855f7',
            cssClass:'cat-adega',
            gondolas: ['D6','D7','D8','D9','D10','E1','E2','E3'],
        },
        geral: {
            label:   'Mercearia Geral',
            emoji:   '🛒',
            cor:     '#9ca3af',
            cssClass:'cat-geral',
            gondolas: ['E4','E5','E6','E7','E8','E9','E10',
                       'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',
                       'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'],
        },
    },
};

/**
 * Retorna a categoria de uma gôndola (ou null se não mapeada).
 */
LOJA_CONFIG.categoriaDaGondola = function(gondola) {
    if (!gondola) return null;
    const g = gondola.toUpperCase().trim();
    for (const [key, cfg] of Object.entries(this.categorias)) {
        if (cfg.gondolas.includes(g)) return key;
    }
    return null;
};

