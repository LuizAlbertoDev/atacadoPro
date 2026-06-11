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
};
