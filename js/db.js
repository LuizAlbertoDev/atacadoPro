/**
 * AtacadoPro | db.js
 * Gerencia produtos com suporte a múltiplas validades por lote.
 */

const DB = (() => {
    const KEY = 'atacadopro_produtos';

    [
    {
        "id": "PRD001",
        "nome": "Iogurte Desnatado 1kg",
        "empresa": "Amula",
        "quantidade": 130,
        "valorCompra": 5.57,
        "valorVenda": 13.78,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-23",
            "quantidade": 130
        }
        ]
    },
    {
        "id": "PRD002",
        "nome": "Macarrão Com 1L",
        "empresa": "Bemgel",
        "quantidade": 155,
        "valorCompra": 11.06,
        "valorVenda": 22.14,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-25",
            "quantidade": 23
        },
        {
            "id": "v2",
            "data": "2026-06-20",
            "quantidade": 69
        },
        {
            "id": "v3",
            "data": "2026-06-14",
            "quantidade": 63
        }
        ]
    },
    {
        "id": "PRD003",
        "nome": "Cereal Cereal 1kg",
        "empresa": "Pr",
        "quantidade": 36,
        "valorCompra": 14.02,
        "valorVenda": 19.28,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-04",
            "quantidade": 36
        }
        ]
    },
    {
        "id": "PRD004",
        "nome": "Café Solúvel 300g",
        "empresa": "Itambé",
        "quantidade": 165,
        "valorCompra": 11.9,
        "valorVenda": 28.0,
        "loja": {
        "corredor": "F",
        "gondola": "F5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-14",
            "quantidade": 165
        }
        ]
    },
    {
        "id": "PRD005",
        "nome": "Torrada Torrada 1kg",
        "empresa": "Sadia",
        "quantidade": 175,
        "valorCompra": 4.89,
        "valorVenda": 10.03,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-15",
            "quantidade": 175
        }
        ]
    },
    {
        "id": "PRD006",
        "nome": "Manteiga Sem Sal 200g",
        "empresa": "Hachebuch",
        "quantidade": 136,
        "valorCompra": 3.36,
        "valorVenda": 8.13,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-13",
            "quantidade": 136
        }
        ]
    },
    {
        "id": "PRD007",
        "nome": "Cereal Cereal 250g",
        "empresa": "Bemgel",
        "quantidade": 141,
        "valorCompra": 10.23,
        "valorVenda": 16.59,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-22",
            "quantidade": 64
        },
        {
            "id": "v2",
            "data": "2026-10-13",
            "quantidade": 77
        }
        ]
    },
    {
        "id": "PRD008",
        "nome": "Torrada Torrada 200g",
        "empresa": "Piracanjuba",
        "quantidade": 73,
        "valorCompra": 12.51,
        "valorVenda": 19.64,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-16",
            "quantidade": 41
        },
        {
            "id": "v2",
            "data": "2027-03-19",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD009",
        "nome": "Manteiga Com Óleo 300g",
        "empresa": "Amula",
        "quantidade": 59,
        "valorCompra": 10.21,
        "valorVenda": 24.3,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-23",
            "quantidade": 34
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD010",
        "nome": "Iogurte Protético 1kg",
        "empresa": "Perdiguer",
        "quantidade": 84,
        "valorCompra": 14.31,
        "valorVenda": 18.9,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-20",
            "quantidade": 38
        },
        {
            "id": "v2",
            "data": "2026-07-31",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD011",
        "nome": "Queijo Mussarela 200g",
        "empresa": "Piracanjuba",
        "quantidade": 162,
        "valorCompra": 9.96,
        "valorVenda": 13.34,
        "loja": {
        "corredor": "B",
        "gondola": "B5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-04",
            "quantidade": 162
        }
        ]
    },
    {
        "id": "PRD012",
        "nome": "Pão Comum 1kg",
        "empresa": "Amula",
        "quantidade": 180,
        "valorCompra": 2.17,
        "valorVenda": 4.12,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-27",
            "quantidade": 100
        },
        {
            "id": "v2",
            "data": "2026-06-23",
            "quantidade": 80
        }
        ]
    },
    {
        "id": "PRD013",
        "nome": "Leite Sem Creme 200g",
        "empresa": "Perdiguer",
        "quantidade": 85,
        "valorCompra": 4.95,
        "valorVenda": 9.4,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-04",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2027-06-08",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2026-08-27",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD014",
        "nome": "Macarrão Com 200g",
        "empresa": "Bemgel",
        "quantidade": 142,
        "valorCompra": 6.96,
        "valorVenda": 9.19,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-01",
            "quantidade": 142
        }
        ]
    },
    {
        "id": "PRD015",
        "nome": "Queijo Prático 2L",
        "empresa": "Braun",
        "quantidade": 72,
        "valorCompra": 13.17,
        "valorVenda": 18.96,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-21",
            "quantidade": 15
        },
        {
            "id": "v2",
            "data": "2026-07-04",
            "quantidade": 33
        },
        {
            "id": "v3",
            "data": "2026-09-19",
            "quantidade": 6
        },
        {
            "id": "v4",
            "data": "2026-06-19",
            "quantidade": 18
        }
        ]
    },
    {
        "id": "PRD016",
        "nome": "Manteiga Organica 200g",
        "empresa": "Lti",
        "quantidade": 53,
        "valorCompra": 11.69,
        "valorVenda": 16.87,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-29",
            "quantidade": 11
        },
        {
            "id": "v2",
            "data": "2026-06-16",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD017",
        "nome": "Sopa Sopa 500g",
        "empresa": "Ml",
        "quantidade": 129,
        "valorCompra": 8.04,
        "valorVenda": 18.49,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-07",
            "quantidade": 77
        },
        {
            "id": "v2",
            "data": "2027-01-16",
            "quantidade": 52
        }
        ]
    },
    {
        "id": "PRD018",
        "nome": "Feijão Parbrizado 400g",
        "empresa": "Hachebuch",
        "quantidade": 62,
        "valorCompra": 6.58,
        "valorVenda": 12.63,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-27",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2027-03-22",
            "quantidade": 21
        },
        {
            "id": "v3",
            "data": "2026-09-20",
            "quantidade": 28
        }
        ]
    },
    {
        "id": "PRD019",
        "nome": "Requeijão Bár 2L",
        "empresa": "Zr",
        "quantidade": 29,
        "valorCompra": 13.63,
        "valorVenda": 19.3,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-07",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2026-07-10",
            "quantidade": 9
        },
        {
            "id": "v3",
            "data": "2027-05-18",
            "quantidade": 10
        }
        ]
    },
    {
        "id": "PRD020",
        "nome": "Torrada Torrada 200g",
        "empresa": "Cargil",
        "quantidade": 107,
        "valorCompra": 8.33,
        "valorVenda": 12.43,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-29",
            "quantidade": 43
        },
        {
            "id": "v2",
            "data": "2026-12-28",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD021",
        "nome": "Manteiga Sem Sal 300g",
        "empresa": "Pr",
        "quantidade": 141,
        "valorCompra": 7.13,
        "valorVenda": 13.14,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-11",
            "quantidade": 58
        },
        {
            "id": "v2",
            "data": "2026-08-02",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD022",
        "nome": "Arroz Integral 200g",
        "empresa": "Ban",
        "quantidade": 103,
        "valorCompra": 2.86,
        "valorVenda": 3.74,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-13",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD023",
        "nome": "Requeijão Clássico 250g",
        "empresa": "Sadia",
        "quantidade": 160,
        "valorCompra": 7.12,
        "valorVenda": 11.75,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-09",
            "quantidade": 160
        }
        ]
    },
    {
        "id": "PRD024",
        "nome": "Torrada Torrada 500g",
        "empresa": "Sr",
        "quantidade": 192,
        "valorCompra": 7.31,
        "valorVenda": 15.63,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-07",
            "quantidade": 34
        },
        {
            "id": "v2",
            "data": "2026-08-21",
            "quantidade": 158
        }
        ]
    },
    {
        "id": "PRD025",
        "nome": "Cereal Cereal 300g",
        "empresa": "Amula",
        "quantidade": 44,
        "valorCompra": 6.93,
        "valorVenda": 12.74,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-31",
            "quantidade": 44
        }
        ]
    },
    {
        "id": "PRD026",
        "nome": "Bolo Bolo 250g",
        "empresa": "Nestlé",
        "quantidade": 169,
        "valorCompra": 13.28,
        "valorVenda": 30.83,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-27",
            "quantidade": 76
        },
        {
            "id": "v2",
            "data": "2026-06-18",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD027",
        "nome": "Cereal Cereal 250g",
        "empresa": "Cargil",
        "quantidade": 143,
        "valorCompra": 14.27,
        "valorVenda": 20.97,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-26",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2026-10-18",
            "quantidade": 121
        }
        ]
    },
    {
        "id": "PRD028",
        "nome": "Queijo Mussarela 2L",
        "empresa": "Cargil",
        "quantidade": 198,
        "valorCompra": 5.91,
        "valorVenda": 13.53,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-19",
            "quantidade": 69
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 129
        }
        ]
    },
    {
        "id": "PRD029",
        "nome": "Cereal Cereal 250g",
        "empresa": "El either",
        "quantidade": 186,
        "valorCompra": 13.96,
        "valorVenda": 31.26,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-17",
            "quantidade": 186
        }
        ]
    },
    {
        "id": "PRD030",
        "nome": "Macarrão Com 2L",
        "empresa": "Hachebuch",
        "quantidade": 163,
        "valorCompra": 6.42,
        "valorVenda": 10.11,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-16",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2026-05-28",
            "quantidade": 50
        },
        {
            "id": "v3",
            "data": "2026-10-25",
            "quantidade": 68
        }
        ]
    },
    {
        "id": "PRD031",
        "nome": "Arroz Orgânico 200g",
        "empresa": "Hachebuch",
        "quantidade": 37,
        "valorCompra": 5.79,
        "valorVenda": 10.34,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-05",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-12-13",
            "quantidade": 6
        },
        {
            "id": "v3",
            "data": "2026-11-07",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD032",
        "nome": "Torrada Torrada 2L",
        "empresa": "Fl",
        "quantidade": 132,
        "valorCompra": 8.3,
        "valorVenda": 19.88,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 29
        },
        {
            "id": "v2",
            "data": "2026-07-27",
            "quantidade": 17
        },
        {
            "id": "v3",
            "data": "2026-07-31",
            "quantidade": 86
        }
        ]
    },
    {
        "id": "PRD033",
        "nome": "Feijão Tipo 1 300g",
        "empresa": "Hachebuch",
        "quantidade": 65,
        "valorCompra": 3.24,
        "valorVenda": 4.55,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-12-12",
            "quantidade": 56
        }
        ]
    },
    {
        "id": "PRD034",
        "nome": "Iogurte Com Fruta 250g",
        "empresa": "Ban",
        "quantidade": 29,
        "valorCompra": 1.6,
        "valorVenda": 2.18,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-05",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2026-08-13",
            "quantidade": 19
        }
        ]
    },
    {
        "id": "PRD035",
        "nome": "Arroz Tipo 1 300g",
        "empresa": "Itambé",
        "quantidade": 119,
        "valorCompra": 1.32,
        "valorVenda": 2.35,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-28",
            "quantidade": 48
        },
        {
            "id": "v2",
            "data": "2026-07-08",
            "quantidade": 71
        }
        ]
    },
    {
        "id": "PRD036",
        "nome": "Sopa Sopa 300g",
        "empresa": "Bemgel",
        "quantidade": 51,
        "valorCompra": 6.01,
        "valorVenda": 14.19,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-09",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-09-02",
            "quantidade": 16
        },
        {
            "id": "v3",
            "data": "2026-07-11",
            "quantidade": 26
        }
        ]
    },
    {
        "id": "PRD037",
        "nome": "Leite Orgânico 200g",
        "empresa": "Italac",
        "quantidade": 31,
        "valorCompra": 11.55,
        "valorVenda": 17.93,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-31",
            "quantidade": 18
        },
        {
            "id": "v2",
            "data": "2027-01-14",
            "quantidade": 13
        }
        ]
    },
    {
        "id": "PRD038",
        "nome": "Bolo Bolo 2L",
        "empresa": "Vr",
        "quantidade": 126,
        "valorCompra": 6.73,
        "valorVenda": 13.14,
        "loja": {
        "corredor": "B",
        "gondola": "B7"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-26",
            "quantidade": 126
        }
        ]
    },
    {
        "id": "PRD039",
        "nome": "Pão Com 1kg",
        "empresa": "Zr",
        "quantidade": 37,
        "valorCompra": 11.03,
        "valorVenda": 19.12,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-17",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2026-10-20",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD040",
        "nome": "Requeijão Clássico 2L",
        "empresa": "Cargil",
        "quantidade": 180,
        "valorCompra": 1.51,
        "valorVenda": 3.1,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 180
        }
        ]
    },
    {
        "id": "PRD041",
        "nome": "Feijão Preto 250g",
        "empresa": "Zr",
        "quantidade": 104,
        "valorCompra": 3.17,
        "valorVenda": 4.97,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-23",
            "quantidade": 104
        }
        ]
    },
    {
        "id": "PRD042",
        "nome": "Cacau Pasta 250g",
        "empresa": "Zr",
        "quantidade": 57,
        "valorCompra": 8.26,
        "valorVenda": 17.03,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-28",
            "quantidade": 57
        }
        ]
    },
    {
        "id": "PRD043",
        "nome": "Cereal Cereal 300g",
        "empresa": "Sadia",
        "quantidade": 176,
        "valorCompra": 4.18,
        "valorVenda": 10.07,
        "loja": {
        "corredor": "B",
        "gondola": "B7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-05",
            "quantidade": 176
        }
        ]
    },
    {
        "id": "PRD044",
        "nome": "Chocolate Pasta 200g",
        "empresa": "Italac",
        "quantidade": 70,
        "valorCompra": 11.13,
        "valorVenda": 23.51,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-07",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD045",
        "nome": "Torrada Torrada 300g",
        "empresa": "Tr",
        "quantidade": 183,
        "valorCompra": 13.96,
        "valorVenda": 25.25,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-12",
            "quantidade": 183
        }
        ]
    },
    {
        "id": "PRD046",
        "nome": "Feijão Preto 200g",
        "empresa": "Kr",
        "quantidade": 95,
        "valorCompra": 9.9,
        "valorVenda": 24.22,
        "loja": {
        "corredor": "C",
        "gondola": "C2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-27",
            "quantidade": 49
        },
        {
            "id": "v2",
            "data": "2026-06-17",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD047",
        "nome": "Açúcar Com 400g",
        "empresa": "Ban",
        "quantidade": 121,
        "valorCompra": 11.18,
        "valorVenda": 26.57,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-09",
            "quantidade": 65
        },
        {
            "id": "v2",
            "data": "2026-10-19",
            "quantidade": 32
        },
        {
            "id": "v3",
            "data": "2026-06-28",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD048",
        "nome": "Torrada Torrada 1kg",
        "empresa": "Bemgel",
        "quantidade": 45,
        "valorCompra": 9.77,
        "valorVenda": 14.31,
        "loja": {
        "corredor": "C",
        "gondola": "C2"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-17",
            "quantidade": 45
        }
        ]
    },
    {
        "id": "PRD049",
        "nome": "Arroz Tipo 1 500g",
        "empresa": "Italac",
        "quantidade": 77,
        "valorCompra": 9.62,
        "valorVenda": 18.27,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-27",
            "quantidade": 38
        },
        {
            "id": "v2",
            "data": "2026-06-18",
            "quantidade": 39
        }
        ]
    },
    {
        "id": "PRD050",
        "nome": "Bolo Bolo 500g",
        "empresa": "Ml",
        "quantidade": 137,
        "valorCompra": 10.37,
        "valorVenda": 25.05,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-21",
            "quantidade": 71
        },
        {
            "id": "v2",
            "data": "2026-06-25",
            "quantidade": 16
        },
        {
            "id": "v3",
            "data": "2027-03-12",
            "quantidade": 50
        }
        ]
    },
    {
        "id": "PRD051",
        "nome": "Café  mo 250g",
        "empresa": "Nestlé",
        "quantidade": 180,
        "valorCompra": 1.29,
        "valorVenda": 2.07,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 180
        }
        ]
    },
    {
        "id": "PRD052",
        "nome": "Requeijão Cremoso 300g",
        "empresa": "Cargil",
        "quantidade": 123,
        "valorCompra": 2.12,
        "valorVenda": 5.07,
        "loja": {
        "corredor": "D",
        "gondola": "D8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-02",
            "quantidade": 123
        }
        ]
    },
    {
        "id": "PRD053",
        "nome": "Manteiga Com Óleo 500g",
        "empresa": "Tr",
        "quantidade": 33,
        "valorCompra": 3.03,
        "valorVenda": 7.21,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-18",
            "quantidade": 11
        },
        {
            "id": "v2",
            "data": "2026-07-26",
            "quantidade": 22
        }
        ]
    },
    {
        "id": "PRD054",
        "nome": "Requeijão Clássico 1L",
        "empresa": "Bemgel",
        "quantidade": 30,
        "valorCompra": 5.58,
        "valorVenda": 8.55,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-18",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD055",
        "nome": "Arroz Tipo 1 1L",
        "empresa": "Kr",
        "quantidade": 105,
        "valorCompra": 2.74,
        "valorVenda": 4.45,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-13",
            "quantidade": 105
        }
        ]
    },
    {
        "id": "PRD056",
        "nome": "Arroz Integral 1L",
        "empresa": "Nata",
        "quantidade": 200,
        "valorCompra": 2.28,
        "valorVenda": 4.31,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 64
        },
        {
            "id": "v2",
            "data": "2027-02-02",
            "quantidade": 72
        },
        {
            "id": "v3",
            "data": "2026-08-14",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD057",
        "nome": "Feijão Tapi 1L",
        "empresa": "Sadia",
        "quantidade": 46,
        "valorCompra": 10.35,
        "valorVenda": 19.01,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-28",
            "quantidade": 15
        },
        {
            "id": "v2",
            "data": "2026-06-18",
            "quantidade": 31
        }
        ]
    },
    {
        "id": "PRD058",
        "nome": "Pão Com 300g",
        "empresa": "Nestlé",
        "quantidade": 73,
        "valorCompra": 6.2,
        "valorVenda": 12.95,
        "loja": {
        "corredor": "F",
        "gondola": "F3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-20",
            "quantidade": 43
        },
        {
            "id": "v2",
            "data": "2026-10-22",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2027-03-14",
            "quantidade": 1
        },
        {
            "id": "v4",
            "data": "2026-10-14",
            "quantidade": 11
        }
        ]
    },
    {
        "id": "PRD059",
        "nome": "Sopa Sopa 2L",
        "empresa": "Gul",
        "quantidade": 181,
        "valorCompra": 5.21,
        "valorVenda": 11.8,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-28",
            "quantidade": 47
        },
        {
            "id": "v2",
            "data": "2026-12-27",
            "quantidade": 23
        },
        {
            "id": "v3",
            "data": "2026-06-21",
            "quantidade": 35
        },
        {
            "id": "v4",
            "data": "2026-06-18",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD060",
        "nome": "Feijão Preto 300g",
        "empresa": "El either",
        "quantidade": 168,
        "valorCompra": 11.95,
        "valorVenda": 18.97,
        "loja": {
        "corredor": "G",
        "gondola": "G1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 46
        },
        {
            "id": "v2",
            "data": "2026-11-29",
            "quantidade": 49
        },
        {
            "id": "v3",
            "data": "2027-05-09",
            "quantidade": 73
        }
        ]
    },
    {
        "id": "PRD061",
        "nome": "Requeijão Cremoso 1kg",
        "empresa": "Perdiguer",
        "quantidade": 20,
        "valorCompra": 8.27,
        "valorVenda": 17.18,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-13",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-06-21",
            "quantidade": 14
        }
        ]
    },
    {
        "id": "PRD062",
        "nome": "Manteiga Com Sal 300g",
        "empresa": "Braun",
        "quantidade": 27,
        "valorCompra": 6.74,
        "valorVenda": 9.4,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2026-10-04",
            "quantidade": 7
        },
        {
            "id": "v3",
            "data": "2026-07-04",
            "quantidade": 10
        }
        ]
    },
    {
        "id": "PRD063",
        "nome": "Cacau Pasta 250g",
        "empresa": "Braun",
        "quantidade": 97,
        "valorCompra": 12.95,
        "valorVenda": 21.06,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-25",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2026-11-21",
            "quantidade": 47
        }
        ]
    },
    {
        "id": "PRD064",
        "nome": "Cereal Cereal 250g",
        "empresa": "Ban",
        "quantidade": 107,
        "valorCompra": 8.19,
        "valorVenda": 19.93,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-28",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-12-22",
            "quantidade": 82
        }
        ]
    },
    {
        "id": "PRD065",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Tr",
        "quantidade": 83,
        "valorCompra": 2.89,
        "valorVenda": 4.89,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-22",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-12-08",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2027-01-13",
            "quantidade": 40
        }
        ]
    },
    {
        "id": "PRD066",
        "nome": "Açúcar Com 500g",
        "empresa": "Nata",
        "quantidade": 32,
        "valorCompra": 11.7,
        "valorVenda": 15.57,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-24",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD067",
        "nome": "Pão Com 400g",
        "empresa": "Braun",
        "quantidade": 166,
        "valorCompra": 11.05,
        "valorVenda": 19.11,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-11",
            "quantidade": 97
        },
        {
            "id": "v2",
            "data": "2026-11-07",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2027-02-06",
            "quantidade": 10
        },
        {
            "id": "v4",
            "data": "2027-01-15",
            "quantidade": 37
        }
        ]
    },
    {
        "id": "PRD068",
        "nome": "Iogurte Vegante 1kg",
        "empresa": "Amula",
        "quantidade": 94,
        "valorCompra": 12.47,
        "valorVenda": 21.61,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-06",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2026-12-13",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2027-05-16",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD069",
        "nome": "Torrada Torrada 500g",
        "empresa": "Sr",
        "quantidade": 168,
        "valorCompra": 6.49,
        "valorVenda": 14.57,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-28",
            "quantidade": 168
        }
        ]
    },
    {
        "id": "PRD070",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Gul",
        "quantidade": 43,
        "valorCompra": 2.43,
        "valorVenda": 3.85,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-17",
            "quantidade": 11
        },
        {
            "id": "v2",
            "data": "2026-10-05",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD071",
        "nome": "Bolo Bolo 200g",
        "empresa": "Gul",
        "quantidade": 59,
        "valorCompra": 7.49,
        "valorVenda": 12.47,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-14",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2027-02-12",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2027-04-05",
            "quantidade": 2
        },
        {
            "id": "v4",
            "data": "2026-06-22",
            "quantidade": 14
        }
        ]
    },
    {
        "id": "PRD072",
        "nome": "Arroz Parbrizado 250g",
        "empresa": "Ml",
        "quantidade": 148,
        "valorCompra": 13.84,
        "valorVenda": 20.3,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-13",
            "quantidade": 148
        }
        ]
    },
    {
        "id": "PRD073",
        "nome": "Torrada Torrada 1kg",
        "empresa": "Sr",
        "quantidade": 126,
        "valorCompra": 13.94,
        "valorVenda": 23.42,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-17",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2027-04-08",
            "quantidade": 38
        },
        {
            "id": "v3",
            "data": "2026-10-01",
            "quantidade": 28
        },
        {
            "id": "v4",
            "data": "2027-03-30",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD074",
        "nome": "Queijo Fresco 1kg",
        "empresa": "Tr",
        "quantidade": 106,
        "valorCompra": 12.95,
        "valorVenda": 26.93,
        "loja": {
        "corredor": "A",
        "gondola": "A2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-08",
            "quantidade": 106
        }
        ]
    },
    {
        "id": "PRD075",
        "nome": "Queijo Rápido 1kg",
        "empresa": "Ban",
        "quantidade": 100,
        "valorCompra": 9.57,
        "valorVenda": 22.98,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-28",
            "quantidade": 100
        }
        ]
    },
    {
        "id": "PRD076",
        "nome": "Iogurte Com Fruta 500g",
        "empresa": "Ban",
        "quantidade": 113,
        "valorCompra": 14.43,
        "valorVenda": 20.38,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-25",
            "quantidade": 55
        },
        {
            "id": "v2",
            "data": "2027-01-31",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2026-10-07",
            "quantidade": 36
        }
        ]
    },
    {
        "id": "PRD077",
        "nome": "Arroz Parbrizado 1L",
        "empresa": "Nata",
        "quantidade": 73,
        "valorCompra": 9.86,
        "valorVenda": 22.74,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 43
        },
        {
            "id": "v2",
            "data": "2027-04-22",
            "quantidade": 5
        },
        {
            "id": "v3",
            "data": "2026-10-21",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD078",
        "nome": "Torrada Torrada 250g",
        "empresa": "Zr",
        "quantidade": 168,
        "valorCompra": 8.07,
        "valorVenda": 16.04,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-10",
            "quantidade": 168
        }
        ]
    },
    {
        "id": "PRD079",
        "nome": "Sopa Sopa 400g",
        "empresa": "Zr",
        "quantidade": 132,
        "valorCompra": 13.85,
        "valorVenda": 25.62,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-25",
            "quantidade": 132
        }
        ]
    },
    {
        "id": "PRD080",
        "nome": "Torrada Torrada 400g",
        "empresa": "Lti",
        "quantidade": 64,
        "valorCompra": 12.12,
        "valorVenda": 30.26,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-14",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2026-07-19",
            "quantidade": 45
        }
        ]
    },
    {
        "id": "PRD081",
        "nome": "Iogurte Light 200g",
        "empresa": "Cargil",
        "quantidade": 77,
        "valorCompra": 14.16,
        "valorVenda": 27.4,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 16
        },
        {
            "id": "v2",
            "data": "2026-07-26",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD082",
        "nome": "Requeijão Desnatado 250g",
        "empresa": "Perdiguer",
        "quantidade": 118,
        "valorCompra": 7.19,
        "valorVenda": 13.66,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-11",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2027-03-10",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2026-10-01",
            "quantidade": 82
        }
        ]
    },
    {
        "id": "PRD083",
        "nome": "Chocolate Pasta 250g",
        "empresa": "Gul",
        "quantidade": 126,
        "valorCompra": 12.89,
        "valorVenda": 25.83,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-27",
            "quantidade": 64
        },
        {
            "id": "v2",
            "data": "2026-08-08",
            "quantidade": 62
        }
        ]
    },
    {
        "id": "PRD084",
        "nome": "Manteiga Proteânto 1L",
        "empresa": "El either",
        "quantidade": 197,
        "valorCompra": 13.51,
        "valorVenda": 19.64,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-23",
            "quantidade": 197
        }
        ]
    },
    {
        "id": "PRD085",
        "nome": "Leite Orgânico 200g",
        "empresa": "Vr",
        "quantidade": 114,
        "valorCompra": 5.27,
        "valorVenda": 13.05,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-21",
            "quantidade": 114
        }
        ]
    },
    {
        "id": "PRD086",
        "nome": "Macarrão Com 200g",
        "empresa": "Pr",
        "quantidade": 113,
        "valorCompra": 6.7,
        "valorVenda": 13.75,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-23",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2027-01-12",
            "quantidade": 63
        }
        ]
    },
    {
        "id": "PRD087",
        "nome": "Iogurte Light 250g",
        "empresa": "Hachebuch",
        "quantidade": 181,
        "valorCompra": 5.74,
        "valorVenda": 14.11,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-07",
            "quantidade": 83
        },
        {
            "id": "v2",
            "data": "2026-09-16",
            "quantidade": 39
        },
        {
            "id": "v3",
            "data": "2027-05-11",
            "quantidade": 59
        }
        ]
    },
    {
        "id": "PRD088",
        "nome": "Chocolate Pasta 300g",
        "empresa": "Fl",
        "quantidade": 149,
        "valorCompra": 1.03,
        "valorVenda": 1.54,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-02",
            "quantidade": 44
        },
        {
            "id": "v2",
            "data": "2027-06-04",
            "quantidade": 44
        },
        {
            "id": "v3",
            "data": "2027-03-21",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD089",
        "nome": "Cereal Cereal 250g",
        "empresa": "Cargil",
        "quantidade": 194,
        "valorCompra": 6.37,
        "valorVenda": 11.41,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-11",
            "quantidade": 194
        }
        ]
    },
    {
        "id": "PRD090",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Ban",
        "quantidade": 121,
        "valorCompra": 5.74,
        "valorVenda": 8.75,
        "loja": {
        "corredor": "A",
        "gondola": "A2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-13",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2027-02-10",
            "quantidade": 89
        }
        ]
    },
    {
        "id": "PRD091",
        "nome": "Sopa Sopa 400g",
        "empresa": "Gul",
        "quantidade": 100,
        "valorCompra": 9.02,
        "valorVenda": 11.97,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-19",
            "quantidade": 100
        }
        ]
    },
    {
        "id": "PRD092",
        "nome": "Pão Com 1kg",
        "empresa": "El either",
        "quantidade": 60,
        "valorCompra": 1.58,
        "valorVenda": 2.15,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-13",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2026-10-29",
            "quantidade": 48
        }
        ]
    },
    {
        "id": "PRD093",
        "nome": "Macarrão Com 1kg",
        "empresa": "Fl",
        "quantidade": 45,
        "valorCompra": 8.67,
        "valorVenda": 17.47,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-18",
            "quantidade": 45
        }
        ]
    },
    {
        "id": "PRD094",
        "nome": "Bolo Bolo 300g",
        "empresa": "Ban",
        "quantidade": 199,
        "valorCompra": 4.57,
        "valorVenda": 8.29,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-22",
            "quantidade": 86
        },
        {
            "id": "v2",
            "data": "2026-12-30",
            "quantidade": 113
        }
        ]
    },
    {
        "id": "PRD095",
        "nome": "Macarrão Com 200g",
        "empresa": "Cargil",
        "quantidade": 65,
        "valorCompra": 8.0,
        "valorVenda": 16.4,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-14",
            "quantidade": 24
        },
        {
            "id": "v2",
            "data": "2027-02-05",
            "quantidade": 41
        }
        ]
    },
    {
        "id": "PRD096",
        "nome": "Iogurte Vegante 1kg",
        "empresa": "Kr",
        "quantidade": 30,
        "valorCompra": 2.6,
        "valorVenda": 5.8,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-19",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2026-10-20",
            "quantidade": 7
        },
        {
            "id": "v3",
            "data": "2026-06-16",
            "quantidade": 7
        },
        {
            "id": "v4",
            "data": "2027-02-14",
            "quantidade": 6
        }
        ]
    },
    {
        "id": "PRD097",
        "nome": "Cereal Cereal 500g",
        "empresa": "Zr",
        "quantidade": 58,
        "valorCompra": 3.52,
        "valorVenda": 8.46,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-25",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2026-11-21",
            "quantidade": 45
        }
        ]
    },
    {
        "id": "PRD098",
        "nome": "Chocolate Pasta 1L",
        "empresa": "Vr",
        "quantidade": 97,
        "valorCompra": 5.58,
        "valorVenda": 9.7,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 29
        },
        {
            "id": "v2",
            "data": "2026-06-24",
            "quantidade": 33
        },
        {
            "id": "v3",
            "data": "2026-12-27",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD099",
        "nome": "Açúcar Com 1kg",
        "empresa": "Ml",
        "quantidade": 146,
        "valorCompra": 7.01,
        "valorVenda": 11.73,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-29",
            "quantidade": 146
        }
        ]
    },
    {
        "id": "PRD100",
        "nome": "Feijão Tapi 2L",
        "empresa": "Sadia",
        "quantidade": 154,
        "valorCompra": 2.11,
        "valorVenda": 4.48,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-05",
            "quantidade": 154
        }
        ]
    },
    {
        "id": "PRD101",
        "nome": "Feijão Tipo 1 200g",
        "empresa": "Gul",
        "quantidade": 116,
        "valorCompra": 8.28,
        "valorVenda": 20.59,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-05",
            "quantidade": 64
        },
        {
            "id": "v2",
            "data": "2026-08-18",
            "quantidade": 52
        }
        ]
    },
    {
        "id": "PRD102",
        "nome": "Iogurte Desnatado 200g",
        "empresa": "Gul",
        "quantidade": 125,
        "valorCompra": 7.77,
        "valorVenda": 12.07,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-14",
            "quantidade": 24
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 27
        },
        {
            "id": "v3",
            "data": "2027-01-24",
            "quantidade": 74
        }
        ]
    },
    {
        "id": "PRD103",
        "nome": "Açúcar Com 1kg",
        "empresa": "Sadia",
        "quantidade": 101,
        "valorCompra": 13.56,
        "valorVenda": 31.92,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-20",
            "quantidade": 101
        }
        ]
    },
    {
        "id": "PRD104",
        "nome": "Feijão Tapi 2L",
        "empresa": "Italac",
        "quantidade": 63,
        "valorCompra": 11.21,
        "valorVenda": 19.87,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-24",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2026-08-25",
            "quantidade": 31
        }
        ]
    },
    {
        "id": "PRD105",
        "nome": "Macarrão Com 1kg",
        "empresa": "Amula",
        "quantidade": 138,
        "valorCompra": 13.9,
        "valorVenda": 27.96,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 138
        }
        ]
    },
    {
        "id": "PRD106",
        "nome": "Cacau Pasta 250g",
        "empresa": "Bemgel",
        "quantidade": 115,
        "valorCompra": 1.25,
        "valorVenda": 2.1,
        "loja": {
        "corredor": "F",
        "gondola": "F3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 115
        }
        ]
    },
    {
        "id": "PRD107",
        "nome": "Pão Integral 2L",
        "empresa": "Nata",
        "quantidade": 72,
        "valorCompra": 7.39,
        "valorVenda": 10.84,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-05",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD108",
        "nome": "Macarrão Com 2L",
        "empresa": "Vr",
        "quantidade": 128,
        "valorCompra": 3.22,
        "valorVenda": 5.96,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 65
        },
        {
            "id": "v2",
            "data": "2026-10-07",
            "quantidade": 63
        }
        ]
    },
    {
        "id": "PRD109",
        "nome": "Cacau Pasta 200g",
        "empresa": "Amula",
        "quantidade": 96,
        "valorCompra": 5.49,
        "valorVenda": 12.43,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-08",
            "quantidade": 96
        }
        ]
    },
    {
        "id": "PRD110",
        "nome": "Arroz Tipo 1 250g",
        "empresa": "Pr",
        "quantidade": 123,
        "valorCompra": 1.53,
        "valorVenda": 2.93,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-20",
            "quantidade": 123
        }
        ]
    },
    {
        "id": "PRD111",
        "nome": "Cacau Pasta 300g",
        "empresa": "Ml",
        "quantidade": 56,
        "valorCompra": 1.92,
        "valorVenda": 3.12,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-12",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2027-01-18",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD112",
        "nome": "Chocolate Pasta 1L",
        "empresa": "Gul",
        "quantidade": 165,
        "valorCompra": 5.52,
        "valorVenda": 11.64,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-05",
            "quantidade": 165
        }
        ]
    },
    {
        "id": "PRD113",
        "nome": "Cacau Pasta 2L",
        "empresa": "Cargil",
        "quantidade": 31,
        "valorCompra": 3.48,
        "valorVenda": 5.01,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-09",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-09-19",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD114",
        "nome": "Leite Com Vitamina A 500g",
        "empresa": "Nestlé",
        "quantidade": 184,
        "valorCompra": 1.87,
        "valorVenda": 3.1,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-01",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2027-05-30",
            "quantidade": 56
        },
        {
            "id": "v3",
            "data": "2026-11-19",
            "quantidade": 23
        },
        {
            "id": "v4",
            "data": "2027-01-22",
            "quantidade": 77
        }
        ]
    },
    {
        "id": "PRD115",
        "nome": "Chocolate Pasta 500g",
        "empresa": "Sadia",
        "quantidade": 180,
        "valorCompra": 14.26,
        "valorVenda": 20.48,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-28",
            "quantidade": 180
        }
        ]
    },
    {
        "id": "PRD116",
        "nome": "Requeijão Clássico 500g",
        "empresa": "Zr",
        "quantidade": 182,
        "valorCompra": 5.27,
        "valorVenda": 11.23,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-20",
            "quantidade": 60
        },
        {
            "id": "v2",
            "data": "2027-05-18",
            "quantidade": 122
        }
        ]
    },
    {
        "id": "PRD117",
        "nome": "Sopa Sopa 300g",
        "empresa": "Hachebuch",
        "quantidade": 121,
        "valorCompra": 2.25,
        "valorVenda": 4.3,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-08",
            "quantidade": 36
        },
        {
            "id": "v2",
            "data": "2026-08-27",
            "quantidade": 85
        }
        ]
    },
    {
        "id": "PRD118",
        "nome": "Bolo Bolo 250g",
        "empresa": "Vr",
        "quantidade": 133,
        "valorCompra": 11.35,
        "valorVenda": 15.91,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-05",
            "quantidade": 133
        }
        ]
    },
    {
        "id": "PRD119",
        "nome": "Torrada Torrada 1L",
        "empresa": "Vr",
        "quantidade": 155,
        "valorCompra": 3.1,
        "valorVenda": 5.39,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-29",
            "quantidade": 69
        },
        {
            "id": "v2",
            "data": "2026-06-25",
            "quantidade": 21
        },
        {
            "id": "v3",
            "data": "2027-04-09",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD120",
        "nome": "Açúcar Com 200g",
        "empresa": "Nata",
        "quantidade": 117,
        "valorCompra": 2.56,
        "valorVenda": 6.29,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-28",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2026-06-26",
            "quantidade": 95
        }
        ]
    },
    {
        "id": "PRD121",
        "nome": "Cacau Pasta 400g",
        "empresa": "Gul",
        "quantidade": 77,
        "valorCompra": 8.43,
        "valorVenda": 11.06,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-03",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2027-03-09",
            "quantidade": 58
        }
        ]
    },
    {
        "id": "PRD122",
        "nome": "Sopa Sopa 500g",
        "empresa": "Ban",
        "quantidade": 35,
        "valorCompra": 11.99,
        "valorVenda": 20.47,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-10",
            "quantidade": 15
        },
        {
            "id": "v2",
            "data": "2027-02-19",
            "quantidade": 20
        }
        ]
    },
    {
        "id": "PRD123",
        "nome": "Chocolate Pasta 300g",
        "empresa": "Bemgel",
        "quantidade": 194,
        "valorCompra": 12.37,
        "valorVenda": 28.33,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2027-02-21",
            "quantidade": 86
        },
        {
            "id": "v3",
            "data": "2027-05-06",
            "quantidade": 75
        }
        ]
    },
    {
        "id": "PRD124",
        "nome": "Iogurte Desnatado 1kg",
        "empresa": "Fl",
        "quantidade": 75,
        "valorCompra": 4.36,
        "valorVenda": 7.32,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-15",
            "quantidade": 41
        },
        {
            "id": "v2",
            "data": "2026-07-14",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD125",
        "nome": "Açúcar Com 300g",
        "empresa": "Braun",
        "quantidade": 198,
        "valorCompra": 10.29,
        "valorVenda": 15.19,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-29",
            "quantidade": 75
        },
        {
            "id": "v2",
            "data": "2027-05-13",
            "quantidade": 123
        }
        ]
    },
    {
        "id": "PRD126",
        "nome": "Arroz Orgânico 1kg",
        "empresa": "Zr",
        "quantidade": 146,
        "valorCompra": 3.9,
        "valorVenda": 6.15,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-28",
            "quantidade": 27
        },
        {
            "id": "v2",
            "data": "2027-03-09",
            "quantidade": 63
        },
        {
            "id": "v3",
            "data": "2026-09-29",
            "quantidade": 56
        }
        ]
    },
    {
        "id": "PRD127",
        "nome": "Iogurte Protético 500g",
        "empresa": "Lti",
        "quantidade": 89,
        "valorCompra": 1.33,
        "valorVenda": 1.84,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-10",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2027-02-02",
            "quantidade": 34
        },
        {
            "id": "v3",
            "data": "2026-12-26",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD128",
        "nome": "Bolo Bolo 250g",
        "empresa": "Ban",
        "quantidade": 51,
        "valorCompra": 7.01,
        "valorVenda": 12.49,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-24",
            "quantidade": 51
        }
        ]
    },
    {
        "id": "PRD129",
        "nome": "Arroz Tipo 1 300g",
        "empresa": "Kr",
        "quantidade": 93,
        "valorCompra": 12.9,
        "valorVenda": 28.67,
        "loja": {
        "corredor": "F",
        "gondola": "F3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD130",
        "nome": "Café  mo 400g",
        "empresa": "Hachebuch",
        "quantidade": 163,
        "valorCompra": 5.28,
        "valorVenda": 12.24,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-13",
            "quantidade": 89
        },
        {
            "id": "v2",
            "data": "2026-10-26",
            "quantidade": 42
        },
        {
            "id": "v3",
            "data": "2027-01-28",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD131",
        "nome": "Iogurte Natural 1kg",
        "empresa": "Itambé",
        "quantidade": 146,
        "valorCompra": 9.06,
        "valorVenda": 17.37,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-31",
            "quantidade": 44
        },
        {
            "id": "v2",
            "data": "2026-09-06",
            "quantidade": 102
        }
        ]
    },
    {
        "id": "PRD132",
        "nome": "Pão Com 200g",
        "empresa": "Ban",
        "quantidade": 181,
        "valorCompra": 8.3,
        "valorVenda": 19.56,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-22",
            "quantidade": 60
        },
        {
            "id": "v2",
            "data": "2026-09-22",
            "quantidade": 121
        }
        ]
    },
    {
        "id": "PRD133",
        "nome": "Queijo Mussarela 250g",
        "empresa": "Bemgel",
        "quantidade": 178,
        "valorCompra": 12.13,
        "valorVenda": 26.6,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-22",
            "quantidade": 178
        }
        ]
    },
    {
        "id": "PRD134",
        "nome": "Feijão Tapi 1L",
        "empresa": "Nestlé",
        "quantidade": 55,
        "valorCompra": 13.17,
        "valorVenda": 31.63,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-18",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-09-30",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD135",
        "nome": "Açúcar Com 400g",
        "empresa": "Vr",
        "quantidade": 21,
        "valorCompra": 3.39,
        "valorVenda": 7.09,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-20",
            "quantidade": 21
        }
        ]
    },
    {
        "id": "PRD136",
        "nome": "Chocolate Pasta 250g",
        "empresa": "El either",
        "quantidade": 190,
        "valorCompra": 13.79,
        "valorVenda": 28.62,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-11",
            "quantidade": 73
        },
        {
            "id": "v2",
            "data": "2026-06-14",
            "quantidade": 117
        }
        ]
    },
    {
        "id": "PRD137",
        "nome": "Açúcar Com 1L",
        "empresa": "Bemgel",
        "quantidade": 54,
        "valorCompra": 1.67,
        "valorVenda": 2.23,
        "loja": {
        "corredor": "B",
        "gondola": "B7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-25",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD138",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "Sr",
        "quantidade": 133,
        "valorCompra": 12.67,
        "valorVenda": 20.05,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-16",
            "quantidade": 133
        }
        ]
    },
    {
        "id": "PRD139",
        "nome": "Açúcar Com 250g",
        "empresa": "Cargil",
        "quantidade": 192,
        "valorCompra": 10.18,
        "valorVenda": 16.79,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 192
        }
        ]
    },
    {
        "id": "PRD140",
        "nome": "Pão Com 250g",
        "empresa": "Lti",
        "quantidade": 73,
        "valorCompra": 3.0,
        "valorVenda": 6.87,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 35
        },
        {
            "id": "v2",
            "data": "2026-07-11",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2026-07-12",
            "quantidade": 20
        }
        ]
    },
    {
        "id": "PRD141",
        "nome": "Bolo Bolo 500g",
        "empresa": "Kr",
        "quantidade": 157,
        "valorCompra": 1.02,
        "valorVenda": 2.01,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-31",
            "quantidade": 65
        },
        {
            "id": "v2",
            "data": "2026-12-01",
            "quantidade": 92
        }
        ]
    },
    {
        "id": "PRD142",
        "nome": "Café  mo 200g",
        "empresa": "Fl",
        "quantidade": 65,
        "valorCompra": 14.66,
        "valorVenda": 19.46,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD143",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Tr",
        "quantidade": 97,
        "valorCompra": 1.54,
        "valorVenda": 2.47,
        "loja": {
        "corredor": "F",
        "gondola": "F3"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-28",
            "quantidade": 97
        }
        ]
    },
    {
        "id": "PRD144",
        "nome": "Manteiga Light 500g",
        "empresa": "Vr",
        "quantidade": 42,
        "valorCompra": 8.45,
        "valorVenda": 20.55,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD145",
        "nome": "Pão Comum 250g",
        "empresa": "Italac",
        "quantidade": 61,
        "valorCompra": 10.02,
        "valorVenda": 19.72,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-12",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD146",
        "nome": "Manteiga Com Sal 200g",
        "empresa": "Perdiguer",
        "quantidade": 135,
        "valorCompra": 4.19,
        "valorVenda": 9.43,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-11",
            "quantidade": 135
        }
        ]
    },
    {
        "id": "PRD147",
        "nome": "Leite Com Vitamina A 400g",
        "empresa": "Cargil",
        "quantidade": 132,
        "valorCompra": 13.82,
        "valorVenda": 31.96,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-02",
            "quantidade": 132
        }
        ]
    },
    {
        "id": "PRD148",
        "nome": "Manteiga Sem Sal 200g",
        "empresa": "El either",
        "quantidade": 186,
        "valorCompra": 6.9,
        "valorVenda": 12.83,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-17",
            "quantidade": 30
        },
        {
            "id": "v2",
            "data": "2026-06-17",
            "quantidade": 43
        },
        {
            "id": "v3",
            "data": "2027-05-25",
            "quantidade": 113
        }
        ]
    },
    {
        "id": "PRD149",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Kr",
        "quantidade": 47,
        "valorCompra": 9.72,
        "valorVenda": 22.3,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-20",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2026-11-09",
            "quantidade": 9
        },
        {
            "id": "v3",
            "data": "2026-08-07",
            "quantidade": 12
        }
        ]
    },
    {
        "id": "PRD150",
        "nome": "Iogurte Desnatado 1L",
        "empresa": "Pr",
        "quantidade": 74,
        "valorCompra": 14.27,
        "valorVenda": 24.35,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-21",
            "quantidade": 74
        }
        ]
    },
    {
        "id": "PRD151",
        "nome": "Pão Integral 500g",
        "empresa": "Kr",
        "quantidade": 149,
        "valorCompra": 1.23,
        "valorVenda": 2.18,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-28",
            "quantidade": 42
        },
        {
            "id": "v2",
            "data": "2026-11-20",
            "quantidade": 107
        }
        ]
    },
    {
        "id": "PRD152",
        "nome": "Chocolate Pasta 300g",
        "empresa": "Bemgel",
        "quantidade": 165,
        "valorCompra": 9.14,
        "valorVenda": 16.4,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-17",
            "quantidade": 165
        }
        ]
    },
    {
        "id": "PRD153",
        "nome": "Bolo Bolo 300g",
        "empresa": "Fl",
        "quantidade": 21,
        "valorCompra": 13.63,
        "valorVenda": 23.39,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-14",
            "quantidade": 21
        }
        ]
    },
    {
        "id": "PRD154",
        "nome": "Requeijão Clássico 1kg",
        "empresa": "Pr",
        "quantidade": 122,
        "valorCompra": 7.07,
        "valorVenda": 15.03,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-07",
            "quantidade": 122
        }
        ]
    },
    {
        "id": "PRD155",
        "nome": "Manteiga Sem Sal 300g",
        "empresa": "Italac",
        "quantidade": 191,
        "valorCompra": 7.97,
        "valorVenda": 19.34,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-01",
            "quantidade": 75
        },
        {
            "id": "v2",
            "data": "2026-06-17",
            "quantidade": 17
        },
        {
            "id": "v3",
            "data": "2026-12-09",
            "quantidade": 99
        }
        ]
    },
    {
        "id": "PRD156",
        "nome": "Açúcar Com 500g",
        "empresa": "Italac",
        "quantidade": 50,
        "valorCompra": 13.12,
        "valorVenda": 18.99,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-30",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2027-02-21",
            "quantidade": 17
        },
        {
            "id": "v3",
            "data": "2026-08-09",
            "quantidade": 3
        },
        {
            "id": "v4",
            "data": "2026-08-31",
            "quantidade": 11
        }
        ]
    },
    {
        "id": "PRD157",
        "nome": "Queijo Prático 1kg",
        "empresa": "Ml",
        "quantidade": 101,
        "valorCompra": 6.14,
        "valorVenda": 12.66,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-28",
            "quantidade": 18
        },
        {
            "id": "v2",
            "data": "2027-02-08",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD158",
        "nome": "Manteiga Organica 1L",
        "empresa": "Tr",
        "quantidade": 169,
        "valorCompra": 7.17,
        "valorVenda": 11.31,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 169
        }
        ]
    },
    {
        "id": "PRD159",
        "nome": "Queijo Minas 500g",
        "empresa": "Zr",
        "quantidade": 154,
        "valorCompra": 1.94,
        "valorVenda": 2.67,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-15",
            "quantidade": 154
        }
        ]
    },
    {
        "id": "PRD160",
        "nome": "Pão Com 2L",
        "empresa": "Zr",
        "quantidade": 64,
        "valorCompra": 1.6,
        "valorVenda": 3.88,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-25",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD161",
        "nome": "Sopa Sopa 2L",
        "empresa": "El either",
        "quantidade": 29,
        "valorCompra": 8.0,
        "valorVenda": 13.37,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-15",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2026-12-07",
            "quantidade": 22
        }
        ]
    },
    {
        "id": "PRD162",
        "nome": "Cereal Cereal 2L",
        "empresa": "Tr",
        "quantidade": 84,
        "valorCompra": 6.59,
        "valorVenda": 15.42,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-21",
            "quantidade": 84
        }
        ]
    },
    {
        "id": "PRD163",
        "nome": "Pão Com 200g",
        "empresa": "Nestlé",
        "quantidade": 140,
        "valorCompra": 10.15,
        "valorVenda": 18.05,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-03",
            "quantidade": 80
        },
        {
            "id": "v2",
            "data": "2026-06-28",
            "quantidade": 60
        }
        ]
    },
    {
        "id": "PRD164",
        "nome": "Iogurte Vegante 250g",
        "empresa": "Pr",
        "quantidade": 115,
        "valorCompra": 12.88,
        "valorVenda": 20.87,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2027-04-28",
            "quantidade": 30
        },
        {
            "id": "v3",
            "data": "2026-12-09",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD165",
        "nome": "Requeijão Light 200g",
        "empresa": "Sr",
        "quantidade": 161,
        "valorCompra": 10.33,
        "valorVenda": 21.07,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-10",
            "quantidade": 30
        },
        {
            "id": "v2",
            "data": "2027-03-16",
            "quantidade": 46
        },
        {
            "id": "v3",
            "data": "2026-11-23",
            "quantidade": 85
        }
        ]
    },
    {
        "id": "PRD166",
        "nome": "Sopa Sopa 250g",
        "empresa": "Nata",
        "quantidade": 114,
        "valorCompra": 1.68,
        "valorVenda": 2.66,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-23",
            "quantidade": 31
        },
        {
            "id": "v2",
            "data": "2027-01-21",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD167",
        "nome": "Torrada Torrada 2L",
        "empresa": "Ml",
        "quantidade": 169,
        "valorCompra": 1.99,
        "valorVenda": 3.53,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-24",
            "quantidade": 75
        },
        {
            "id": "v2",
            "data": "2026-10-20",
            "quantidade": 24
        },
        {
            "id": "v3",
            "data": "2027-01-01",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD168",
        "nome": "Macarrão Com 2L",
        "empresa": "Fl",
        "quantidade": 45,
        "valorCompra": 12.9,
        "valorVenda": 21.97,
        "loja": {
        "corredor": "F",
        "gondola": "F5"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-22",
            "quantidade": 20
        },
        {
            "id": "v2",
            "data": "2026-06-21",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD169",
        "nome": "Açúcar Com 400g",
        "empresa": "Cargil",
        "quantidade": 192,
        "valorCompra": 12.66,
        "valorVenda": 27.42,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 115
        },
        {
            "id": "v2",
            "data": "2027-03-29",
            "quantidade": 23
        },
        {
            "id": "v3",
            "data": "2027-04-08",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD170",
        "nome": "Macarrão Com 1kg",
        "empresa": "Italac",
        "quantidade": 154,
        "valorCompra": 14.47,
        "valorVenda": 24.79,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-27",
            "quantidade": 59
        },
        {
            "id": "v2",
            "data": "2027-06-01",
            "quantidade": 46
        },
        {
            "id": "v3",
            "data": "2026-11-06",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD171",
        "nome": "Queijo Mussarela 400g",
        "empresa": "Bemgel",
        "quantidade": 153,
        "valorCompra": 12.33,
        "valorVenda": 19.82,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 153
        }
        ]
    },
    {
        "id": "PRD172",
        "nome": "Chocolate Pasta 250g",
        "empresa": "Zr",
        "quantidade": 35,
        "valorCompra": 1.69,
        "valorVenda": 3.5,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-01",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2027-05-08",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD173",
        "nome": "Cereal Cereal 200g",
        "empresa": "Hachebuch",
        "quantidade": 92,
        "valorCompra": 1.47,
        "valorVenda": 2.45,
        "loja": {
        "corredor": "F",
        "gondola": "F5"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-04",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2027-03-22",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD174",
        "nome": "Café Solúvel 2L",
        "empresa": "Braun",
        "quantidade": 122,
        "valorCompra": 11.01,
        "valorVenda": 15.68,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-17",
            "quantidade": 24
        },
        {
            "id": "v2",
            "data": "2026-05-20",
            "quantidade": 24
        },
        {
            "id": "v3",
            "data": "2027-04-19",
            "quantidade": 74
        }
        ]
    },
    {
        "id": "PRD175",
        "nome": "Pão Comum 1kg",
        "empresa": "Amula",
        "quantidade": 170,
        "valorCompra": 14.27,
        "valorVenda": 29.95,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 170
        }
        ]
    },
    {
        "id": "PRD176",
        "nome": "Requeijão Light 250g",
        "empresa": "Tr",
        "quantidade": 49,
        "valorCompra": 1.96,
        "valorVenda": 2.96,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-21",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD177",
        "nome": "Macarrão Com 1L",
        "empresa": "Gul",
        "quantidade": 124,
        "valorCompra": 8.04,
        "valorVenda": 13.86,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-27",
            "quantidade": 62
        },
        {
            "id": "v2",
            "data": "2026-06-21",
            "quantidade": 62
        }
        ]
    },
    {
        "id": "PRD178",
        "nome": "Pão Integral 300g",
        "empresa": "Hachebuch",
        "quantidade": 187,
        "valorCompra": 6.41,
        "valorVenda": 10.72,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-30",
            "quantidade": 187
        }
        ]
    },
    {
        "id": "PRD179",
        "nome": "Sopa Sopa 250g",
        "empresa": "Ban",
        "quantidade": 83,
        "valorCompra": 3.61,
        "valorVenda": 5.78,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-13",
            "quantidade": 14
        },
        {
            "id": "v2",
            "data": "2027-05-03",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2027-03-24",
            "quantidade": 55
        }
        ]
    },
    {
        "id": "PRD180",
        "nome": "Café  mo 1kg",
        "empresa": "Zr",
        "quantidade": 152,
        "valorCompra": 12.61,
        "valorVenda": 29.67,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-07",
            "quantidade": 61
        },
        {
            "id": "v2",
            "data": "2027-01-29",
            "quantidade": 91
        }
        ]
    },
    {
        "id": "PRD181",
        "nome": "Macarrão Com 250g",
        "empresa": "Pr",
        "quantidade": 198,
        "valorCompra": 2.7,
        "valorVenda": 4.4,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-23",
            "quantidade": 85
        },
        {
            "id": "v2",
            "data": "2027-01-14",
            "quantidade": 113
        }
        ]
    },
    {
        "id": "PRD182",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Ml",
        "quantidade": 42,
        "valorCompra": 4.71,
        "valorVenda": 8.58,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-22",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD183",
        "nome": "Café  mo 1kg",
        "empresa": "Lti",
        "quantidade": 124,
        "valorCompra": 13.66,
        "valorVenda": 30.52,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-16",
            "quantidade": 124
        }
        ]
    },
    {
        "id": "PRD184",
        "nome": "Torrada Torrada 1L",
        "empresa": "Fl",
        "quantidade": 43,
        "valorCompra": 12.69,
        "valorVenda": 21.99,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-16",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD185",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Cargil",
        "quantidade": 129,
        "valorCompra": 5.3,
        "valorVenda": 8.59,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-17",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2026-06-23",
            "quantidade": 35
        },
        {
            "id": "v3",
            "data": "2026-11-26",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD186",
        "nome": "Macarrão Com 300g",
        "empresa": "Italac",
        "quantidade": 79,
        "valorCompra": 12.82,
        "valorVenda": 31.78,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-14",
            "quantidade": 79
        }
        ]
    },
    {
        "id": "PRD187",
        "nome": "Açúcar Com 400g",
        "empresa": "Nestlé",
        "quantidade": 47,
        "valorCompra": 1.84,
        "valorVenda": 2.77,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-17",
            "quantidade": 47
        }
        ]
    },
    {
        "id": "PRD188",
        "nome": "Manteiga Proteânto 500g",
        "empresa": "Amula",
        "quantidade": 146,
        "valorCompra": 11.48,
        "valorVenda": 15.23,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-16",
            "quantidade": 44
        },
        {
            "id": "v2",
            "data": "2026-10-06",
            "quantidade": 19
        },
        {
            "id": "v3",
            "data": "2027-04-18",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD189",
        "nome": "Iogurte Natural 1L",
        "empresa": "Hachebuch",
        "quantidade": 195,
        "valorCompra": 11.71,
        "valorVenda": 26.43,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-18",
            "quantidade": 106
        },
        {
            "id": "v2",
            "data": "2026-07-27",
            "quantidade": 89
        }
        ]
    },
    {
        "id": "PRD190",
        "nome": "Açúcar Com 2L",
        "empresa": "Nestlé",
        "quantidade": 42,
        "valorCompra": 8.41,
        "valorVenda": 17.5,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-03",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD191",
        "nome": "Iogurte Desnatado 200g",
        "empresa": "Perdiguer",
        "quantidade": 189,
        "valorCompra": 9.27,
        "valorVenda": 21.53,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-11",
            "quantidade": 73
        },
        {
            "id": "v2",
            "data": "2027-04-02",
            "quantidade": 116
        }
        ]
    },
    {
        "id": "PRD192",
        "nome": "Queijo Mussarela 500g",
        "empresa": "Pr",
        "quantidade": 90,
        "valorCompra": 2.45,
        "valorVenda": 5.13,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-14",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2026-06-17",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD193",
        "nome": "Sopa Sopa 300g",
        "empresa": "El either",
        "quantidade": 194,
        "valorCompra": 12.21,
        "valorVenda": 16.31,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-13",
            "quantidade": 46
        },
        {
            "id": "v2",
            "data": "2026-10-01",
            "quantidade": 41
        },
        {
            "id": "v3",
            "data": "2026-12-30",
            "quantidade": 47
        },
        {
            "id": "v4",
            "data": "2026-06-03",
            "quantidade": 60
        }
        ]
    },
    {
        "id": "PRD194",
        "nome": "Leite Sem Creme 250g",
        "empresa": "Perdiguer",
        "quantidade": 150,
        "valorCompra": 5.05,
        "valorVenda": 9.3,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2026-11-08",
            "quantidade": 96
        }
        ]
    },
    {
        "id": "PRD195",
        "nome": "Bolo Bolo 2L",
        "empresa": "Fl",
        "quantidade": 134,
        "valorCompra": 3.22,
        "valorVenda": 6.23,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-08",
            "quantidade": 52
        },
        {
            "id": "v2",
            "data": "2026-10-13",
            "quantidade": 47
        },
        {
            "id": "v3",
            "data": "2027-02-14",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD196",
        "nome": "Manteiga Organica 1L",
        "empresa": "Gul",
        "quantidade": 68,
        "valorCompra": 1.27,
        "valorVenda": 2.92,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 68
        }
        ]
    },
    {
        "id": "PRD197",
        "nome": "Sopa Sopa 1L",
        "empresa": "Nata",
        "quantidade": 116,
        "valorCompra": 2.23,
        "valorVenda": 3.29,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-30",
            "quantidade": 48
        },
        {
            "id": "v2",
            "data": "2027-02-09",
            "quantidade": 68
        }
        ]
    },
    {
        "id": "PRD198",
        "nome": "Café Solúvel 250g",
        "empresa": "Nestlé",
        "quantidade": 102,
        "valorCompra": 13.65,
        "valorVenda": 27.27,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-19",
            "quantidade": 102
        }
        ]
    },
    {
        "id": "PRD199",
        "nome": "Cacau Pasta 1kg",
        "empresa": "Amula",
        "quantidade": 190,
        "valorCompra": 2.57,
        "valorVenda": 4.89,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-30",
            "quantidade": 190
        }
        ]
    },
    {
        "id": "PRD200",
        "nome": "Bolo Bolo 500g",
        "empresa": "Zr",
        "quantidade": 108,
        "valorCompra": 12.34,
        "valorVenda": 17.55,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-16",
            "quantidade": 108
        }
        ]
    },
    {
        "id": "PRD201",
        "nome": "Manteiga Light 2L",
        "empresa": "Perdiguer",
        "quantidade": 66,
        "valorCompra": 3.85,
        "valorVenda": 7.74,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-21",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2027-05-27",
            "quantidade": 12
        },
        {
            "id": "v3",
            "data": "2026-12-06",
            "quantidade": 15
        }
        ]
    },
    {
        "id": "PRD202",
        "nome": "Açúcar Com 300g",
        "empresa": "Fl",
        "quantidade": 25,
        "valorCompra": 3.38,
        "valorVenda": 7.92,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-30",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD203",
        "nome": "Bolo Bolo 200g",
        "empresa": "Braun",
        "quantidade": 112,
        "valorCompra": 8.68,
        "valorVenda": 16.62,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-14",
            "quantidade": 112
        }
        ]
    },
    {
        "id": "PRD204",
        "nome": "Café  mo 300g",
        "empresa": "Lti",
        "quantidade": 44,
        "valorCompra": 12.42,
        "valorVenda": 19.24,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-05",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-12-12",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2026-07-28",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD205",
        "nome": "Iogurte Light 2L",
        "empresa": "Zr",
        "quantidade": 121,
        "valorCompra": 10.89,
        "valorVenda": 23.64,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-11",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-08-26",
            "quantidade": 24
        },
        {
            "id": "v3",
            "data": "2026-10-25",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD206",
        "nome": "Manteiga Proteânto 400g",
        "empresa": "Bemgel",
        "quantidade": 144,
        "valorCompra": 9.35,
        "valorVenda": 22.31,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-16",
            "quantidade": 53
        },
        {
            "id": "v2",
            "data": "2027-04-20",
            "quantidade": 91
        }
        ]
    },
    {
        "id": "PRD207",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Gul",
        "quantidade": 94,
        "valorCompra": 7.37,
        "valorVenda": 13.94,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-28",
            "quantidade": 31
        },
        {
            "id": "v2",
            "data": "2027-05-01",
            "quantidade": 21
        },
        {
            "id": "v3",
            "data": "2026-06-15",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD208",
        "nome": "Torrada Torrada 1L",
        "empresa": "El either",
        "quantidade": 35,
        "valorCompra": 13.2,
        "valorVenda": 27.1,
        "loja": {
        "corredor": "D",
        "gondola": "D8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-01",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2026-08-01",
            "quantidade": 6
        },
        {
            "id": "v3",
            "data": "2027-01-12",
            "quantidade": 10
        },
        {
            "id": "v4",
            "data": "2027-02-04",
            "quantidade": 7
        }
        ]
    },
    {
        "id": "PRD209",
        "nome": "Manteiga Sem Sal 300g",
        "empresa": "Nestlé",
        "quantidade": 43,
        "valorCompra": 4.69,
        "valorVenda": 9.48,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-11",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-06-22",
            "quantidade": 12
        },
        {
            "id": "v3",
            "data": "2027-06-10",
            "quantidade": 10
        }
        ]
    },
    {
        "id": "PRD210",
        "nome": "Feijão Parbrizado 1L",
        "empresa": "Kr",
        "quantidade": 148,
        "valorCompra": 2.35,
        "valorVenda": 5.51,
        "loja": {
        "corredor": "D",
        "gondola": "D8"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-22",
            "quantidade": 148
        }
        ]
    },
    {
        "id": "PRD211",
        "nome": "Bolo Bolo 300g",
        "empresa": "Bemgel",
        "quantidade": 92,
        "valorCompra": 12.59,
        "valorVenda": 18.28,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-25",
            "quantidade": 37
        },
        {
            "id": "v2",
            "data": "2027-04-24",
            "quantidade": 21
        },
        {
            "id": "v3",
            "data": "2027-01-03",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD212",
        "nome": "Feijão Car Urb 250g",
        "empresa": "Ban",
        "quantidade": 51,
        "valorCompra": 14.7,
        "valorVenda": 26.7,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 51
        }
        ]
    },
    {
        "id": "PRD213",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "Vr",
        "quantidade": 188,
        "valorCompra": 5.03,
        "valorVenda": 6.78,
        "loja": {
        "corredor": "D",
        "gondola": "D3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-23",
            "quantidade": 188
        }
        ]
    },
    {
        "id": "PRD214",
        "nome": "Iogurte Com Fruta 200g",
        "empresa": "Amula",
        "quantidade": 128,
        "valorCompra": 2.96,
        "valorVenda": 6.87,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-18",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2027-05-15",
            "quantidade": 89
        }
        ]
    },
    {
        "id": "PRD215",
        "nome": "Cacau Pasta 200g",
        "empresa": "Sadia",
        "quantidade": 79,
        "valorCompra": 1.4,
        "valorVenda": 2.2,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-09",
            "quantidade": 79
        }
        ]
    },
    {
        "id": "PRD216",
        "nome": "Leite Com Vitamina A 200g",
        "empresa": "Perdiguer",
        "quantidade": 128,
        "valorCompra": 11.71,
        "valorVenda": 18.21,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-19",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2026-07-05",
            "quantidade": 78
        }
        ]
    },
    {
        "id": "PRD217",
        "nome": "Feijão Orgânico 400g",
        "empresa": "Kr",
        "quantidade": 42,
        "valorCompra": 12.21,
        "valorVenda": 24.36,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-28",
            "quantidade": 8
        },
        {
            "id": "v2",
            "data": "2026-07-06",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2026-12-04",
            "quantidade": 23
        }
        ]
    },
    {
        "id": "PRD218",
        "nome": "Requeijão Cremoso 1L",
        "empresa": "Pr",
        "quantidade": 179,
        "valorCompra": 8.22,
        "valorVenda": 10.98,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-29",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2027-03-10",
            "quantidade": 55
        },
        {
            "id": "v3",
            "data": "2026-09-15",
            "quantidade": 73
        }
        ]
    },
    {
        "id": "PRD219",
        "nome": "Sopa Sopa 300g",
        "empresa": "Zr",
        "quantidade": 84,
        "valorCompra": 13.68,
        "valorVenda": 21.61,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-02",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2026-09-23",
            "quantidade": 26
        },
        {
            "id": "v3",
            "data": "2026-12-26",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD220",
        "nome": "Cereal Cereal 300g",
        "empresa": "Vr",
        "quantidade": 171,
        "valorCompra": 10.38,
        "valorVenda": 18.73,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-11",
            "quantidade": 171
        }
        ]
    },
    {
        "id": "PRD221",
        "nome": "Leite Sem Creme 250g",
        "empresa": "El either",
        "quantidade": 88,
        "valorCompra": 7.4,
        "valorVenda": 13.14,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-22",
            "quantidade": 34
        },
        {
            "id": "v2",
            "data": "2027-03-17",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD222",
        "nome": "Café Solúvel 1kg",
        "empresa": "Kr",
        "quantidade": 165,
        "valorCompra": 7.22,
        "valorVenda": 17.57,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-03",
            "quantidade": 165
        }
        ]
    },
    {
        "id": "PRD223",
        "nome": "Arroz Integral 1kg",
        "empresa": "Ban",
        "quantidade": 107,
        "valorCompra": 13.61,
        "valorVenda": 25.7,
        "loja": {
        "corredor": "F",
        "gondola": "F8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-28",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2026-11-29",
            "quantidade": 62
        }
        ]
    },
    {
        "id": "PRD224",
        "nome": "Bolo Bolo 250g",
        "empresa": "Lti",
        "quantidade": 136,
        "valorCompra": 5.45,
        "valorVenda": 10.78,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 40
        },
        {
            "id": "v2",
            "data": "2026-06-04",
            "quantidade": 96
        }
        ]
    },
    {
        "id": "PRD225",
        "nome": "Feijão Preto 400g",
        "empresa": "El either",
        "quantidade": 66,
        "valorCompra": 3.94,
        "valorVenda": 6.44,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-16",
            "quantidade": 14
        },
        {
            "id": "v2",
            "data": "2027-01-26",
            "quantidade": 52
        }
        ]
    },
    {
        "id": "PRD226",
        "nome": "Cereal Cereal 250g",
        "empresa": "Itambé",
        "quantidade": 169,
        "valorCompra": 6.49,
        "valorVenda": 9.94,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-21",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2026-06-17",
            "quantidade": 40
        },
        {
            "id": "v3",
            "data": "2026-07-02",
            "quantidade": 54
        },
        {
            "id": "v4",
            "data": "2027-03-30",
            "quantidade": 47
        }
        ]
    },
    {
        "id": "PRD227",
        "nome": "Chocolate Pasta 300g",
        "empresa": "Lti",
        "quantidade": 127,
        "valorCompra": 7.64,
        "valorVenda": 12.91,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-31",
            "quantidade": 24
        },
        {
            "id": "v2",
            "data": "2026-07-24",
            "quantidade": 19
        },
        {
            "id": "v3",
            "data": "2026-11-11",
            "quantidade": 84
        }
        ]
    },
    {
        "id": "PRD228",
        "nome": "Chocolate Pasta 200g",
        "empresa": "Ml",
        "quantidade": 169,
        "valorCompra": 7.49,
        "valorVenda": 15.89,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-07",
            "quantidade": 169
        }
        ]
    },
    {
        "id": "PRD229",
        "nome": "Arroz Parbrizado 200g",
        "empresa": "Amula",
        "quantidade": 165,
        "valorCompra": 6.66,
        "valorVenda": 12.35,
        "loja": {
        "corredor": "C",
        "gondola": "C10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-26",
            "quantidade": 86
        },
        {
            "id": "v2",
            "data": "2027-05-19",
            "quantidade": 79
        }
        ]
    },
    {
        "id": "PRD230",
        "nome": "Cacau Pasta 1kg",
        "empresa": "Bemgel",
        "quantidade": 130,
        "valorCompra": 13.27,
        "valorVenda": 24.66,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 23
        },
        {
            "id": "v2",
            "data": "2026-06-16",
            "quantidade": 24
        },
        {
            "id": "v3",
            "data": "2026-06-27",
            "quantidade": 25
        },
        {
            "id": "v4",
            "data": "2027-04-20",
            "quantidade": 58
        }
        ]
    },
    {
        "id": "PRD231",
        "nome": "Café Solúvel 1kg",
        "empresa": "Gul",
        "quantidade": 108,
        "valorCompra": 10.92,
        "valorVenda": 15.37,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-11",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 58
        }
        ]
    },
    {
        "id": "PRD232",
        "nome": "Açúcar Com 300g",
        "empresa": "Italac",
        "quantidade": 148,
        "valorCompra": 6.03,
        "valorVenda": 13.98,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-08",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-06-22",
            "quantidade": 115
        }
        ]
    },
    {
        "id": "PRD233",
        "nome": "Iogurte Desnatado 200g",
        "empresa": "Zr",
        "quantidade": 103,
        "valorCompra": 10.07,
        "valorVenda": 19.21,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD234",
        "nome": "Café  mo 250g",
        "empresa": "Cargil",
        "quantidade": 175,
        "valorCompra": 5.34,
        "valorVenda": 11.95,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-09",
            "quantidade": 77
        },
        {
            "id": "v2",
            "data": "2027-01-27",
            "quantidade": 31
        },
        {
            "id": "v3",
            "data": "2026-07-16",
            "quantidade": 67
        }
        ]
    },
    {
        "id": "PRD235",
        "nome": "Requeijão Clássico 2L",
        "empresa": "Tr",
        "quantidade": 159,
        "valorCompra": 4.04,
        "valorVenda": 9.12,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-25",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2026-12-25",
            "quantidade": 105
        }
        ]
    },
    {
        "id": "PRD236",
        "nome": "Sopa Sopa 300g",
        "empresa": "Vr",
        "quantidade": 39,
        "valorCompra": 2.36,
        "valorVenda": 4.48,
        "loja": {
        "corredor": "G",
        "gondola": "G1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-17",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2027-01-03",
            "quantidade": 7
        },
        {
            "id": "v3",
            "data": "2026-12-03",
            "quantidade": 13
        }
        ]
    },
    {
        "id": "PRD237",
        "nome": "Sopa Sopa 500g",
        "empresa": "Pr",
        "quantidade": 165,
        "valorCompra": 11.09,
        "valorVenda": 14.47,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-06",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2026-08-27",
            "quantidade": 137
        }
        ]
    },
    {
        "id": "PRD238",
        "nome": "Macarrão Com 250g",
        "empresa": "Braun",
        "quantidade": 64,
        "valorCompra": 9.77,
        "valorVenda": 15.01,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD239",
        "nome": "Arroz Long Rapido 250g",
        "empresa": "Ml",
        "quantidade": 156,
        "valorCompra": 5.18,
        "valorVenda": 11.67,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-27",
            "quantidade": 64
        },
        {
            "id": "v2",
            "data": "2026-11-23",
            "quantidade": 92
        }
        ]
    },
    {
        "id": "PRD240",
        "nome": "Cacau Pasta 200g",
        "empresa": "Lti",
        "quantidade": 70,
        "valorCompra": 6.66,
        "valorVenda": 9.24,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-29",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD241",
        "nome": "Chocolate Pasta 500g",
        "empresa": "Bemgel",
        "quantidade": 87,
        "valorCompra": 2.75,
        "valorVenda": 4.07,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-20",
            "quantidade": 87
        }
        ]
    },
    {
        "id": "PRD242",
        "nome": "Cacau Pasta 2L",
        "empresa": "Nata",
        "quantidade": 154,
        "valorCompra": 10.63,
        "valorVenda": 14.29,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 68
        },
        {
            "id": "v2",
            "data": "2026-06-12",
            "quantidade": 86
        }
        ]
    },
    {
        "id": "PRD243",
        "nome": "Açúcar Com 400g",
        "empresa": "Itambé",
        "quantidade": 36,
        "valorCompra": 4.67,
        "valorVenda": 9.01,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-02",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2027-03-10",
            "quantidade": 23
        }
        ]
    },
    {
        "id": "PRD244",
        "nome": "Sopa Sopa 200g",
        "empresa": "Fl",
        "quantidade": 53,
        "valorCompra": 2.97,
        "valorVenda": 5.31,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-02",
            "quantidade": 53
        }
        ]
    },
    {
        "id": "PRD245",
        "nome": "Torrada Torrada 300g",
        "empresa": "Nestlé",
        "quantidade": 133,
        "valorCompra": 6.61,
        "valorVenda": 13.25,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-31",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2027-05-21",
            "quantidade": 51
        },
        {
            "id": "v3",
            "data": "2026-11-12",
            "quantidade": 60
        }
        ]
    },
    {
        "id": "PRD246",
        "nome": "Macarrão Com 1L",
        "empresa": "Bemgel",
        "quantidade": 37,
        "valorCompra": 10.08,
        "valorVenda": 17.73,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-18",
            "quantidade": 37
        }
        ]
    },
    {
        "id": "PRD247",
        "nome": "Bolo Bolo 1L",
        "empresa": "Itambé",
        "quantidade": 124,
        "valorCompra": 1.67,
        "valorVenda": 3.6,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-30",
            "quantidade": 124
        }
        ]
    },
    {
        "id": "PRD248",
        "nome": "Iogurte Vegante 200g",
        "empresa": "Zr",
        "quantidade": 167,
        "valorCompra": 6.08,
        "valorVenda": 9.52,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-24",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2026-06-26",
            "quantidade": 135
        }
        ]
    },
    {
        "id": "PRD249",
        "nome": "Arroz Tapi 250g",
        "empresa": "Braun",
        "quantidade": 200,
        "valorCompra": 7.29,
        "valorVenda": 16.48,
        "loja": {
        "corredor": "C",
        "gondola": "C10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-16",
            "quantidade": 200
        }
        ]
    },
    {
        "id": "PRD250",
        "nome": "Açúcar Com 1kg",
        "empresa": "Pr",
        "quantidade": 127,
        "valorCompra": 4.48,
        "valorVenda": 7.1,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-16",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-07-19",
            "quantidade": 25
        },
        {
            "id": "v3",
            "data": "2026-08-15",
            "quantidade": 69
        }
        ]
    },
    {
        "id": "PRD251",
        "nome": "Pão Com 250g",
        "empresa": "Italac",
        "quantidade": 116,
        "valorCompra": 12.1,
        "valorVenda": 19.36,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-09",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2027-05-24",
            "quantidade": 27
        },
        {
            "id": "v3",
            "data": "2026-12-21",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD252",
        "nome": "Macarrão Com 1kg",
        "empresa": "Lti",
        "quantidade": 34,
        "valorCompra": 10.44,
        "valorVenda": 22.5,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-05",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2027-05-14",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD253",
        "nome": "Chocolate Pasta 2L",
        "empresa": "Hachebuch",
        "quantidade": 91,
        "valorCompra": 9.83,
        "valorVenda": 14.99,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-16",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2026-10-14",
            "quantidade": 27
        },
        {
            "id": "v3",
            "data": "2026-07-04",
            "quantidade": 45
        }
        ]
    },
    {
        "id": "PRD254",
        "nome": "Pão Comum 300g",
        "empresa": "Lti",
        "quantidade": 173,
        "valorCompra": 14.92,
        "valorVenda": 26.74,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-01",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-10-26",
            "quantidade": 63
        },
        {
            "id": "v3",
            "data": "2026-10-08",
            "quantidade": 85
        }
        ]
    },
    {
        "id": "PRD255",
        "nome": "Leite Orgânico 250g",
        "empresa": "Sr",
        "quantidade": 175,
        "valorCompra": 10.17,
        "valorVenda": 25.13,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-01",
            "quantidade": 175
        }
        ]
    },
    {
        "id": "PRD256",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "El either",
        "quantidade": 130,
        "valorCompra": 2.26,
        "valorVenda": 4.82,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 130
        }
        ]
    },
    {
        "id": "PRD257",
        "nome": "Feijão Tipo 1 2L",
        "empresa": "Italac",
        "quantidade": 148,
        "valorCompra": 11.37,
        "valorVenda": 19.39,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-28",
            "quantidade": 67
        },
        {
            "id": "v2",
            "data": "2026-10-23",
            "quantidade": 81
        }
        ]
    },
    {
        "id": "PRD258",
        "nome": "Açúcar Com 1kg",
        "empresa": "Tr",
        "quantidade": 176,
        "valorCompra": 9.52,
        "valorVenda": 23.0,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-24",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2026-07-07",
            "quantidade": 137
        }
        ]
    },
    {
        "id": "PRD259",
        "nome": "Requeijão Clássico 500g",
        "empresa": "Perdiguer",
        "quantidade": 97,
        "valorCompra": 14.96,
        "valorVenda": 28.81,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-29",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2026-08-06",
            "quantidade": 42
        },
        {
            "id": "v3",
            "data": "2027-02-14",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD260",
        "nome": "Leite Orgânico 250g",
        "empresa": "Italac",
        "quantidade": 157,
        "valorCompra": 10.12,
        "valorVenda": 14.08,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-08",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2026-09-09",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2027-04-04",
            "quantidade": 90
        }
        ]
    },
    {
        "id": "PRD261",
        "nome": "Feijão Parbrizado 500g",
        "empresa": "Ml",
        "quantidade": 186,
        "valorCompra": 2.9,
        "valorVenda": 7.18,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-14",
            "quantidade": 186
        }
        ]
    },
    {
        "id": "PRD262",
        "nome": "Arroz Long Rapido 1L",
        "empresa": "Braun",
        "quantidade": 164,
        "valorCompra": 7.95,
        "valorVenda": 15.63,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-27",
            "quantidade": 164
        }
        ]
    },
    {
        "id": "PRD263",
        "nome": "Manteiga Sem Sal 300g",
        "empresa": "Piracanjuba",
        "quantidade": 94,
        "valorCompra": 2.3,
        "valorVenda": 3.83,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-06",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2027-05-24",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD264",
        "nome": "Bolo Bolo 200g",
        "empresa": "Amula",
        "quantidade": 112,
        "valorCompra": 8.1,
        "valorVenda": 17.84,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-18",
            "quantidade": 27
        },
        {
            "id": "v2",
            "data": "2026-12-23",
            "quantidade": 85
        }
        ]
    },
    {
        "id": "PRD265",
        "nome": "Feijão Tapi 500g",
        "empresa": "Sadia",
        "quantidade": 151,
        "valorCompra": 5.86,
        "valorVenda": 13.15,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-07",
            "quantidade": 59
        },
        {
            "id": "v2",
            "data": "2026-12-20",
            "quantidade": 20
        },
        {
            "id": "v3",
            "data": "2026-11-19",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD266",
        "nome": "Iogurte Vegante 1kg",
        "empresa": "Ml",
        "quantidade": 32,
        "valorCompra": 13.91,
        "valorVenda": 24.37,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-28",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD267",
        "nome": "Torrada Torrada 400g",
        "empresa": "Perdiguer",
        "quantidade": 131,
        "valorCompra": 6.86,
        "valorVenda": 16.7,
        "loja": {
        "corredor": "A",
        "gondola": "A2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-06",
            "quantidade": 131
        }
        ]
    },
    {
        "id": "PRD268",
        "nome": "Leite Sem Creme 1L",
        "empresa": "Bemgel",
        "quantidade": 50,
        "valorCompra": 9.9,
        "valorVenda": 16.56,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-01",
            "quantidade": 50
        }
        ]
    },
    {
        "id": "PRD269",
        "nome": "Queijo Italiano 250g",
        "empresa": "Gul",
        "quantidade": 154,
        "valorCompra": 10.1,
        "valorVenda": 22.52,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-11",
            "quantidade": 154
        }
        ]
    },
    {
        "id": "PRD270",
        "nome": "Feijão Parbrizado 500g",
        "empresa": "Sadia",
        "quantidade": 137,
        "valorCompra": 6.82,
        "valorVenda": 9.05,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-11",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2027-05-07",
            "quantidade": 92
        }
        ]
    },
    {
        "id": "PRD271",
        "nome": "Feijão Parbrizado 300g",
        "empresa": "Braun",
        "quantidade": 44,
        "valorCompra": 3.11,
        "valorVenda": 7.15,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-27",
            "quantidade": 14
        },
        {
            "id": "v2",
            "data": "2027-03-01",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD272",
        "nome": "Pão Integral 1L",
        "empresa": "Tr",
        "quantidade": 72,
        "valorCompra": 1.12,
        "valorVenda": 2.66,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-29",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD273",
        "nome": "Chocolate Pasta 250g",
        "empresa": "Braun",
        "quantidade": 156,
        "valorCompra": 5.28,
        "valorVenda": 7.36,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-20",
            "quantidade": 86
        },
        {
            "id": "v2",
            "data": "2027-02-13",
            "quantidade": 10
        },
        {
            "id": "v3",
            "data": "2027-01-14",
            "quantidade": 12
        },
        {
            "id": "v4",
            "data": "2026-06-19",
            "quantidade": 48
        }
        ]
    },
    {
        "id": "PRD274",
        "nome": "Sopa Sopa 500g",
        "empresa": "Piracanjuba",
        "quantidade": 186,
        "valorCompra": 12.74,
        "valorVenda": 18.94,
        "loja": {
        "corredor": "D",
        "gondola": "D7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-04",
            "quantidade": 72
        },
        {
            "id": "v2",
            "data": "2026-06-18",
            "quantidade": 114
        }
        ]
    },
    {
        "id": "PRD275",
        "nome": "Queijo Fresco 300g",
        "empresa": "Fl",
        "quantidade": 87,
        "valorCompra": 9.22,
        "valorVenda": 16.18,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-11",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2027-05-10",
            "quantidade": 66
        }
        ]
    },
    {
        "id": "PRD276",
        "nome": "Leite Orgânico 1L",
        "empresa": "Ban",
        "quantidade": 98,
        "valorCompra": 4.45,
        "valorVenda": 9.94,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-14",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2026-11-20",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD277",
        "nome": "Requeijão Cremoso 1L",
        "empresa": "Gul",
        "quantidade": 81,
        "valorCompra": 4.31,
        "valorVenda": 7.77,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-23",
            "quantidade": 31
        },
        {
            "id": "v2",
            "data": "2027-01-19",
            "quantidade": 50
        }
        ]
    },
    {
        "id": "PRD278",
        "nome": "Cacau Pasta 500g",
        "empresa": "Kr",
        "quantidade": 149,
        "valorCompra": 6.21,
        "valorVenda": 11.42,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-09",
            "quantidade": 50
        },
        {
            "id": "v2",
            "data": "2026-07-11",
            "quantidade": 34
        },
        {
            "id": "v3",
            "data": "2026-10-17",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD279",
        "nome": "Requeijão Light 400g",
        "empresa": "Bemgel",
        "quantidade": 101,
        "valorCompra": 6.03,
        "valorVenda": 12.2,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-13",
            "quantidade": 31
        },
        {
            "id": "v2",
            "data": "2027-01-15",
            "quantidade": 30
        },
        {
            "id": "v3",
            "data": "2026-12-02",
            "quantidade": 14
        },
        {
            "id": "v4",
            "data": "2027-01-15",
            "quantidade": 26
        }
        ]
    },
    {
        "id": "PRD280",
        "nome": "Bolo Bolo 500g",
        "empresa": "El either",
        "quantidade": 112,
        "valorCompra": 13.92,
        "valorVenda": 24.99,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-13",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2026-05-14",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD281",
        "nome": "Macarrão Com 400g",
        "empresa": "Sadia",
        "quantidade": 188,
        "valorCompra": 6.09,
        "valorVenda": 12.11,
        "loja": {
        "corredor": "D",
        "gondola": "D7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-17",
            "quantidade": 36
        },
        {
            "id": "v2",
            "data": "2026-07-15",
            "quantidade": 51
        },
        {
            "id": "v3",
            "data": "2027-05-09",
            "quantidade": 101
        }
        ]
    },
    {
        "id": "PRD282",
        "nome": "Macarrão Com 500g",
        "empresa": "Sadia",
        "quantidade": 154,
        "valorCompra": 5.99,
        "valorVenda": 14.71,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-03",
            "quantidade": 154
        }
        ]
    },
    {
        "id": "PRD283",
        "nome": "Torrada Torrada 250g",
        "empresa": "Pr",
        "quantidade": 147,
        "valorCompra": 3.46,
        "valorVenda": 7.61,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-15",
            "quantidade": 147
        }
        ]
    },
    {
        "id": "PRD284",
        "nome": "Requeijão Bár 1L",
        "empresa": "Ban",
        "quantidade": 63,
        "valorCompra": 7.06,
        "valorVenda": 9.53,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-07",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-07-27",
            "quantidade": 8
        },
        {
            "id": "v3",
            "data": "2026-12-01",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD285",
        "nome": "Bolo Bolo 1L",
        "empresa": "Zr",
        "quantidade": 56,
        "valorCompra": 11.34,
        "valorVenda": 15.32,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2026-09-15",
            "quantidade": 28
        }
        ]
    },
    {
        "id": "PRD286",
        "nome": "Iogurte Desnatado 1kg",
        "empresa": "Italac",
        "quantidade": 53,
        "valorCompra": 2.61,
        "valorVenda": 3.65,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-15",
            "quantidade": 23
        },
        {
            "id": "v2",
            "data": "2027-03-31",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD287",
        "nome": "Iogurte Desnatado 200g",
        "empresa": "Fl",
        "quantidade": 26,
        "valorCompra": 10.36,
        "valorVenda": 23.86,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-25",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2026-05-27",
            "quantidade": 19
        }
        ]
    },
    {
        "id": "PRD288",
        "nome": "Iogurte Light 1kg",
        "empresa": "Amula",
        "quantidade": 116,
        "valorCompra": 9.01,
        "valorVenda": 14.31,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-17",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2026-12-27",
            "quantidade": 71
        }
        ]
    },
    {
        "id": "PRD289",
        "nome": "Açúcar Com 200g",
        "empresa": "Sr",
        "quantidade": 140,
        "valorCompra": 7.75,
        "valorVenda": 13.14,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-05",
            "quantidade": 37
        },
        {
            "id": "v2",
            "data": "2026-10-12",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD290",
        "nome": "Pão Comum 200g",
        "empresa": "Piracanjuba",
        "quantidade": 21,
        "valorCompra": 12.27,
        "valorVenda": 27.84,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-30",
            "quantidade": 21
        }
        ]
    },
    {
        "id": "PRD291",
        "nome": "Iogurte Light 200g",
        "empresa": "Braun",
        "quantidade": 67,
        "valorCompra": 2.27,
        "valorVenda": 4.46,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 67
        }
        ]
    },
    {
        "id": "PRD292",
        "nome": "Requeijão Cremoso 1L",
        "empresa": "Sadia",
        "quantidade": 87,
        "valorCompra": 4.38,
        "valorVenda": 6.94,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-27",
            "quantidade": 23
        },
        {
            "id": "v2",
            "data": "2026-09-10",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD293",
        "nome": "Açúcar Com 1kg",
        "empresa": "Vr",
        "quantidade": 119,
        "valorCompra": 1.71,
        "valorVenda": 4.27,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-16",
            "quantidade": 35
        },
        {
            "id": "v2",
            "data": "2027-02-20",
            "quantidade": 41
        },
        {
            "id": "v3",
            "data": "2027-01-19",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD294",
        "nome": "Iogurte Natural 1L",
        "empresa": "Braun",
        "quantidade": 156,
        "valorCompra": 9.4,
        "valorVenda": 16.17,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-26",
            "quantidade": 92
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2026-06-13",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD295",
        "nome": "Manteiga Com Sal 1L",
        "empresa": "Ml",
        "quantidade": 90,
        "valorCompra": 2.64,
        "valorVenda": 5.19,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-08",
            "quantidade": 17
        },
        {
            "id": "v2",
            "data": "2027-01-16",
            "quantidade": 73
        }
        ]
    },
    {
        "id": "PRD296",
        "nome": "Feijão Tipo 1 250g",
        "empresa": "Bemgel",
        "quantidade": 102,
        "valorCompra": 4.22,
        "valorVenda": 7.54,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-07",
            "quantidade": 56
        },
        {
            "id": "v2",
            "data": "2026-11-07",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD297",
        "nome": "Açúcar Com 400g",
        "empresa": "Nestlé",
        "quantidade": 25,
        "valorCompra": 1.1,
        "valorVenda": 2.49,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-03",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-10-04",
            "quantidade": 16
        }
        ]
    },
    {
        "id": "PRD298",
        "nome": "Sopa Sopa 200g",
        "empresa": "Vr",
        "quantidade": 42,
        "valorCompra": 11.8,
        "valorVenda": 18.83,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-14",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2026-08-12",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD299",
        "nome": "Pão Com 300g",
        "empresa": "Hachebuch",
        "quantidade": 198,
        "valorCompra": 13.89,
        "valorVenda": 32.51,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 198
        }
        ]
    },
    {
        "id": "PRD300",
        "nome": "Torrada Torrada 400g",
        "empresa": "Sadia",
        "quantidade": 193,
        "valorCompra": 3.62,
        "valorVenda": 6.24,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-23",
            "quantidade": 193
        }
        ]
    },
    {
        "id": "PRD301",
        "nome": "Requeijão Bár 2L",
        "empresa": "Sadia",
        "quantidade": 180,
        "valorCompra": 3.55,
        "valorVenda": 5.02,
        "loja": {
        "corredor": "D",
        "gondola": "D7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-15",
            "quantidade": 42
        },
        {
            "id": "v2",
            "data": "2026-10-14",
            "quantidade": 138
        }
        ]
    },
    {
        "id": "PRD302",
        "nome": "Açúcar Com 1L",
        "empresa": "El either",
        "quantidade": 91,
        "valorCompra": 3.36,
        "valorVenda": 4.78,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-10",
            "quantidade": 91
        }
        ]
    },
    {
        "id": "PRD303",
        "nome": "Sopa Sopa 1L",
        "empresa": "Nata",
        "quantidade": 177,
        "valorCompra": 8.54,
        "valorVenda": 19.94,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-23",
            "quantidade": 78
        },
        {
            "id": "v2",
            "data": "2026-08-20",
            "quantidade": 99
        }
        ]
    },
    {
        "id": "PRD304",
        "nome": "Cacau Pasta 400g",
        "empresa": "Bemgel",
        "quantidade": 147,
        "valorCompra": 5.33,
        "valorVenda": 10.05,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-04",
            "quantidade": 78
        },
        {
            "id": "v2",
            "data": "2027-02-10",
            "quantidade": 69
        }
        ]
    },
    {
        "id": "PRD305",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Nestlé",
        "quantidade": 70,
        "valorCompra": 9.83,
        "valorVenda": 20.39,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-21",
            "quantidade": 24
        },
        {
            "id": "v2",
            "data": "2026-12-15",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD306",
        "nome": "Iogurte Desnatado 200g",
        "empresa": "Bemgel",
        "quantidade": 32,
        "valorCompra": 13.43,
        "valorVenda": 22.18,
        "loja": {
        "corredor": "C",
        "gondola": "C10"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 5
        },
        {
            "id": "v2",
            "data": "2027-03-27",
            "quantidade": 27
        }
        ]
    },
    {
        "id": "PRD307",
        "nome": "Cacau Pasta 250g",
        "empresa": "Pr",
        "quantidade": 132,
        "valorCompra": 8.8,
        "valorVenda": 16.43,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-29",
            "quantidade": 55
        },
        {
            "id": "v2",
            "data": "2026-10-19",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2026-12-22",
            "quantidade": 66
        }
        ]
    },
    {
        "id": "PRD308",
        "nome": "Requeijão Desnatado 500g",
        "empresa": "Perdiguer",
        "quantidade": 40,
        "valorCompra": 7.1,
        "valorVenda": 12.24,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-19",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2027-05-08",
            "quantidade": 33
        }
        ]
    },
    {
        "id": "PRD309",
        "nome": "Bolo Bolo 500g",
        "empresa": "Hachebuch",
        "quantidade": 47,
        "valorCompra": 2.7,
        "valorVenda": 5.75,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2027-04-28",
            "quantidade": 28
        }
        ]
    },
    {
        "id": "PRD310",
        "nome": "Sopa Sopa 2L",
        "empresa": "Perdiguer",
        "quantidade": 160,
        "valorCompra": 13.14,
        "valorVenda": 22.07,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-14",
            "quantidade": 27
        },
        {
            "id": "v2",
            "data": "2026-11-17",
            "quantidade": 34
        },
        {
            "id": "v3",
            "data": "2027-04-21",
            "quantidade": 99
        }
        ]
    },
    {
        "id": "PRD311",
        "nome": "Sopa Sopa 1L",
        "empresa": "Sr",
        "quantidade": 40,
        "valorCompra": 8.1,
        "valorVenda": 19.68,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-14",
            "quantidade": 40
        }
        ]
    },
    {
        "id": "PRD312",
        "nome": "Sopa Sopa 400g",
        "empresa": "Nata",
        "quantidade": 137,
        "valorCompra": 9.31,
        "valorVenda": 16.81,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-27",
            "quantidade": 72
        },
        {
            "id": "v2",
            "data": "2027-02-12",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD313",
        "nome": "Feijão Car Urb 250g",
        "empresa": "Itambé",
        "quantidade": 63,
        "valorCompra": 2.78,
        "valorVenda": 6.91,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-07",
            "quantidade": 14
        },
        {
            "id": "v2",
            "data": "2026-10-16",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD314",
        "nome": "Torrada Torrada 300g",
        "empresa": "Italac",
        "quantidade": 127,
        "valorCompra": 4.91,
        "valorVenda": 6.89,
        "loja": {
        "corredor": "C",
        "gondola": "C2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 127
        }
        ]
    },
    {
        "id": "PRD315",
        "nome": "Manteiga Com Óleo 400g",
        "empresa": "Tr",
        "quantidade": 135,
        "valorCompra": 1.49,
        "valorVenda": 3.43,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-14",
            "quantidade": 71
        },
        {
            "id": "v2",
            "data": "2026-12-27",
            "quantidade": 23
        },
        {
            "id": "v3",
            "data": "2027-04-10",
            "quantidade": 41
        }
        ]
    },
    {
        "id": "PRD316",
        "nome": "Café  mo 1L",
        "empresa": "Italac",
        "quantidade": 155,
        "valorCompra": 10.04,
        "valorVenda": 16.73,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-30",
            "quantidade": 46
        },
        {
            "id": "v2",
            "data": "2026-10-21",
            "quantidade": 109
        }
        ]
    },
    {
        "id": "PRD317",
        "nome": "Requeijão Light 300g",
        "empresa": "Braun",
        "quantidade": 146,
        "valorCompra": 11.94,
        "valorVenda": 18.62,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-03",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-10-30",
            "quantidade": 125
        }
        ]
    },
    {
        "id": "PRD318",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "Amula",
        "quantidade": 170,
        "valorCompra": 12.67,
        "valorVenda": 21.41,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-05",
            "quantidade": 170
        }
        ]
    },
    {
        "id": "PRD319",
        "nome": "Bolo Bolo 500g",
        "empresa": "Ban",
        "quantidade": 167,
        "valorCompra": 7.35,
        "valorVenda": 16.55,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 73
        },
        {
            "id": "v2",
            "data": "2026-11-20",
            "quantidade": 39
        },
        {
            "id": "v3",
            "data": "2026-08-21",
            "quantidade": 55
        }
        ]
    },
    {
        "id": "PRD320",
        "nome": "Chocolate Pasta 300g",
        "empresa": "Braun",
        "quantidade": 163,
        "valorCompra": 7.52,
        "valorVenda": 18.76,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-17",
            "quantidade": 163
        }
        ]
    },
    {
        "id": "PRD321",
        "nome": "Sopa Sopa 400g",
        "empresa": "Piracanjuba",
        "quantidade": 181,
        "valorCompra": 14.81,
        "valorVenda": 23.12,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-11",
            "quantidade": 181
        }
        ]
    },
    {
        "id": "PRD322",
        "nome": "Cacau Pasta 1L",
        "empresa": "Vr",
        "quantidade": 163,
        "valorCompra": 9.24,
        "valorVenda": 14.63,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-02",
            "quantidade": 163
        }
        ]
    },
    {
        "id": "PRD323",
        "nome": "Manteiga Organica 1L",
        "empresa": "Piracanjuba",
        "quantidade": 80,
        "valorCompra": 4.42,
        "valorVenda": 10.07,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-16",
            "quantidade": 80
        }
        ]
    },
    {
        "id": "PRD324",
        "nome": "Açúcar Com 400g",
        "empresa": "Braun",
        "quantidade": 166,
        "valorCompra": 9.11,
        "valorVenda": 22.53,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-01",
            "quantidade": 42
        },
        {
            "id": "v2",
            "data": "2027-04-19",
            "quantidade": 124
        }
        ]
    },
    {
        "id": "PRD325",
        "nome": "Sopa Sopa 300g",
        "empresa": "Vr",
        "quantidade": 142,
        "valorCompra": 14.56,
        "valorVenda": 26.83,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-13",
            "quantidade": 66
        },
        {
            "id": "v2",
            "data": "2026-07-09",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD326",
        "nome": "Macarrão Com 1L",
        "empresa": "Braun",
        "quantidade": 112,
        "valorCompra": 1.85,
        "valorVenda": 3.4,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-29",
            "quantidade": 18
        },
        {
            "id": "v2",
            "data": "2026-06-22",
            "quantidade": 94
        }
        ]
    },
    {
        "id": "PRD327",
        "nome": "Queijo Rápido 1kg",
        "empresa": "Vr",
        "quantidade": 128,
        "valorCompra": 4.32,
        "valorVenda": 8.66,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-26",
            "quantidade": 61
        },
        {
            "id": "v2",
            "data": "2027-03-16",
            "quantidade": 67
        }
        ]
    },
    {
        "id": "PRD328",
        "nome": "Cacau Pasta 500g",
        "empresa": "Gul",
        "quantidade": 29,
        "valorCompra": 1.73,
        "valorVenda": 3.49,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-27",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD329",
        "nome": "Torrada Torrada 2L",
        "empresa": "Pr",
        "quantidade": 115,
        "valorCompra": 13.93,
        "valorVenda": 31.3,
        "loja": {
        "corredor": "D",
        "gondola": "D3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-11",
            "quantidade": 55
        },
        {
            "id": "v2",
            "data": "2027-01-12",
            "quantidade": 13
        },
        {
            "id": "v3",
            "data": "2026-09-20",
            "quantidade": 47
        }
        ]
    },
    {
        "id": "PRD330",
        "nome": "Requeijão Bár 1kg",
        "empresa": "Sadia",
        "quantidade": 143,
        "valorCompra": 6.92,
        "valorVenda": 16.22,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-23",
            "quantidade": 67
        },
        {
            "id": "v2",
            "data": "2026-06-22",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD331",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "Ban",
        "quantidade": 113,
        "valorCompra": 9.79,
        "valorVenda": 20.02,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2027-02-21",
            "quantidade": 81
        }
        ]
    },
    {
        "id": "PRD332",
        "nome": "Feijão Tapi 300g",
        "empresa": "Ml",
        "quantidade": 87,
        "valorCompra": 13.82,
        "valorVenda": 20.04,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-15",
            "quantidade": 35
        },
        {
            "id": "v2",
            "data": "2026-06-23",
            "quantidade": 16
        },
        {
            "id": "v3",
            "data": "2026-10-08",
            "quantidade": 36
        }
        ]
    },
    {
        "id": "PRD333",
        "nome": "Cacau Pasta 2L",
        "empresa": "Itambé",
        "quantidade": 189,
        "valorCompra": 7.84,
        "valorVenda": 19.14,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-11",
            "quantidade": 189
        }
        ]
    },
    {
        "id": "PRD334",
        "nome": "Leite Sem Creme 400g",
        "empresa": "Perdiguer",
        "quantidade": 69,
        "valorCompra": 3.14,
        "valorVenda": 7.77,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-01",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2026-07-23",
            "quantidade": 41
        }
        ]
    },
    {
        "id": "PRD335",
        "nome": "Feijão Tapi 500g",
        "empresa": "Gul",
        "quantidade": 153,
        "valorCompra": 6.64,
        "valorVenda": 10.57,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-26",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-08-24",
            "quantidade": 44
        },
        {
            "id": "v3",
            "data": "2026-11-08",
            "quantidade": 41
        },
        {
            "id": "v4",
            "data": "2027-06-08",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD336",
        "nome": "Requeijão A ervilha 1L",
        "empresa": "Perdiguer",
        "quantidade": 69,
        "valorCompra": 11.9,
        "valorVenda": 28.33,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-26",
            "quantidade": 15
        },
        {
            "id": "v2",
            "data": "2026-09-09",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD337",
        "nome": "Manteiga Light 250g",
        "empresa": "Pr",
        "quantidade": 126,
        "valorCompra": 3.47,
        "valorVenda": 8.17,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-13",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-12-26",
            "quantidade": 105
        }
        ]
    },
    {
        "id": "PRD338",
        "nome": "Feijão Parbrizado 1L",
        "empresa": "Cargil",
        "quantidade": 48,
        "valorCompra": 6.34,
        "valorVenda": 9.21,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-19",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2026-06-02",
            "quantidade": 21
        },
        {
            "id": "v3",
            "data": "2027-05-06",
            "quantidade": 17
        }
        ]
    },
    {
        "id": "PRD339",
        "nome": "Cereal Cereal 1L",
        "empresa": "Lti",
        "quantidade": 43,
        "valorCompra": 12.63,
        "valorVenda": 18.63,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2026-07-17",
            "quantidade": 31
        }
        ]
    },
    {
        "id": "PRD340",
        "nome": "Café Solúvel 300g",
        "empresa": "Braun",
        "quantidade": 79,
        "valorCompra": 7.36,
        "valorVenda": 16.03,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 79
        }
        ]
    },
    {
        "id": "PRD341",
        "nome": "Leite Sem Creme 1L",
        "empresa": "Itambé",
        "quantidade": 52,
        "valorCompra": 1.61,
        "valorVenda": 2.43,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-07",
            "quantidade": 20
        },
        {
            "id": "v2",
            "data": "2027-02-03",
            "quantidade": 17
        },
        {
            "id": "v3",
            "data": "2026-08-23",
            "quantidade": 15
        }
        ]
    },
    {
        "id": "PRD342",
        "nome": "Iogurte Vegante 500g",
        "empresa": "Braun",
        "quantidade": 118,
        "valorCompra": 2.29,
        "valorVenda": 4.81,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-11",
            "quantidade": 118
        }
        ]
    },
    {
        "id": "PRD343",
        "nome": "Açúcar Com 1kg",
        "empresa": "Bemgel",
        "quantidade": 118,
        "valorCompra": 5.57,
        "valorVenda": 12.89,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-02",
            "quantidade": 46
        },
        {
            "id": "v2",
            "data": "2027-05-03",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD344",
        "nome": "Arroz Integral 200g",
        "empresa": "Itambé",
        "quantidade": 67,
        "valorCompra": 12.04,
        "valorVenda": 26.31,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-07",
            "quantidade": 67
        }
        ]
    },
    {
        "id": "PRD345",
        "nome": "Pão Com 250g",
        "empresa": "Nata",
        "quantidade": 165,
        "valorCompra": 14.49,
        "valorVenda": 30.93,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-29",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2026-08-30",
            "quantidade": 126
        }
        ]
    },
    {
        "id": "PRD346",
        "nome": "Café Solúvel 300g",
        "empresa": "Hachebuch",
        "quantidade": 75,
        "valorCompra": 6.12,
        "valorVenda": 9.21,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-23",
            "quantidade": 75
        }
        ]
    },
    {
        "id": "PRD347",
        "nome": "Chocolate Pasta 2L",
        "empresa": "Italac",
        "quantidade": 22,
        "valorCompra": 2.12,
        "valorVenda": 4.69,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-24",
            "quantidade": 5
        },
        {
            "id": "v2",
            "data": "2027-05-13",
            "quantidade": 7
        },
        {
            "id": "v3",
            "data": "2027-05-31",
            "quantidade": 10
        }
        ]
    },
    {
        "id": "PRD348",
        "nome": "Manteiga Sem Sal 1kg",
        "empresa": "Fl",
        "quantidade": 129,
        "valorCompra": 12.99,
        "valorVenda": 30.85,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-21",
            "quantidade": 47
        },
        {
            "id": "v2",
            "data": "2027-05-09",
            "quantidade": 82
        }
        ]
    },
    {
        "id": "PRD349",
        "nome": "Café Solúvel 1kg",
        "empresa": "Lti",
        "quantidade": 54,
        "valorCompra": 7.07,
        "valorVenda": 10.05,
        "loja": {
        "corredor": "D",
        "gondola": "D8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-28",
            "quantidade": 20
        },
        {
            "id": "v2",
            "data": "2026-06-14",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD350",
        "nome": "Manteiga Proteânto 1L",
        "empresa": "Vr",
        "quantidade": 102,
        "valorCompra": 12.46,
        "valorVenda": 21.5,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 102
        }
        ]
    },
    {
        "id": "PRD351",
        "nome": "Cereal Cereal 1L",
        "empresa": "Vr",
        "quantidade": 137,
        "valorCompra": 10.58,
        "valorVenda": 20.54,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-22",
            "quantidade": 79
        },
        {
            "id": "v2",
            "data": "2026-11-17",
            "quantidade": 10
        },
        {
            "id": "v3",
            "data": "2027-01-08",
            "quantidade": 48
        }
        ]
    },
    {
        "id": "PRD352",
        "nome": "Bolo Bolo 400g",
        "empresa": "Kr",
        "quantidade": 84,
        "valorCompra": 3.89,
        "valorVenda": 5.54,
        "loja": {
        "corredor": "F",
        "gondola": "F9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-27",
            "quantidade": 35
        },
        {
            "id": "v2",
            "data": "2027-03-21",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD353",
        "nome": "Chocolate Pasta 1L",
        "empresa": "Ban",
        "quantidade": 133,
        "valorCompra": 13.25,
        "valorVenda": 20.86,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-21",
            "quantidade": 76
        },
        {
            "id": "v2",
            "data": "2027-05-06",
            "quantidade": 57
        }
        ]
    },
    {
        "id": "PRD354",
        "nome": "Chocolate Pasta 2L",
        "empresa": "Cargil",
        "quantidade": 171,
        "valorCompra": 9.97,
        "valorVenda": 14.14,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-05",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2026-07-12",
            "quantidade": 56
        },
        {
            "id": "v3",
            "data": "2026-05-11",
            "quantidade": 89
        }
        ]
    },
    {
        "id": "PRD355",
        "nome": "Pão Com 2L",
        "empresa": "Cargil",
        "quantidade": 43,
        "valorCompra": 12.19,
        "valorVenda": 17.61,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-05-22",
            "quantidade": 18
        }
        ]
    },
    {
        "id": "PRD356",
        "nome": "Manteiga Light 200g",
        "empresa": "Tr",
        "quantidade": 144,
        "valorCompra": 3.05,
        "valorVenda": 4.47,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-30",
            "quantidade": 41
        },
        {
            "id": "v2",
            "data": "2026-06-23",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD357",
        "nome": "Açúcar Com 200g",
        "empresa": "Vr",
        "quantidade": 105,
        "valorCompra": 8.5,
        "valorVenda": 18.79,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-08",
            "quantidade": 15
        },
        {
            "id": "v2",
            "data": "2027-04-03",
            "quantidade": 90
        }
        ]
    },
    {
        "id": "PRD358",
        "nome": "Café Solúvel 500g",
        "empresa": "Sadia",
        "quantidade": 22,
        "valorCompra": 6.36,
        "valorVenda": 15.33,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-19",
            "quantidade": 22
        }
        ]
    },
    {
        "id": "PRD359",
        "nome": "Sopa Sopa 2L",
        "empresa": "Gul",
        "quantidade": 136,
        "valorCompra": 10.63,
        "valorVenda": 19.2,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-18",
            "quantidade": 136
        }
        ]
    },
    {
        "id": "PRD360",
        "nome": "Arroz Tapi 300g",
        "empresa": "Cargil",
        "quantidade": 109,
        "valorCompra": 7.85,
        "valorVenda": 14.95,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-08",
            "quantidade": 63
        },
        {
            "id": "v2",
            "data": "2026-11-25",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD361",
        "nome": "Manteiga Sem Sal 2L",
        "empresa": "Hachebuch",
        "quantidade": 137,
        "valorCompra": 8.27,
        "valorVenda": 13.3,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-20",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2026-06-12",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD362",
        "nome": "Cereal Cereal 1L",
        "empresa": "Ml",
        "quantidade": 59,
        "valorCompra": 11.43,
        "valorVenda": 22.51,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-05",
            "quantidade": 11
        },
        {
            "id": "v2",
            "data": "2027-06-04",
            "quantidade": 15
        },
        {
            "id": "v3",
            "data": "2026-10-07",
            "quantidade": 33
        }
        ]
    },
    {
        "id": "PRD363",
        "nome": "Cereal Cereal 300g",
        "empresa": "Perdiguer",
        "quantidade": 75,
        "valorCompra": 11.34,
        "valorVenda": 27.75,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-25",
            "quantidade": 75
        }
        ]
    },
    {
        "id": "PRD364",
        "nome": "Arroz Tipo 1 1L",
        "empresa": "Italac",
        "quantidade": 192,
        "valorCompra": 13.46,
        "valorVenda": 17.77,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-26",
            "quantidade": 105
        },
        {
            "id": "v2",
            "data": "2027-03-28",
            "quantidade": 87
        }
        ]
    },
    {
        "id": "PRD365",
        "nome": "Chocolate Pasta 200g",
        "empresa": "Bemgel",
        "quantidade": 25,
        "valorCompra": 4.94,
        "valorVenda": 8.61,
        "loja": {
        "corredor": "G",
        "gondola": "G1"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD366",
        "nome": "Cacau Pasta 250g",
        "empresa": "Nata",
        "quantidade": 71,
        "valorCompra": 5.84,
        "valorVenda": 12.32,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-27",
            "quantidade": 71
        }
        ]
    },
    {
        "id": "PRD367",
        "nome": "Manteiga Com Óleo 200g",
        "empresa": "Italac",
        "quantidade": 82,
        "valorCompra": 6.93,
        "valorVenda": 11.05,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-24",
            "quantidade": 82
        }
        ]
    },
    {
        "id": "PRD368",
        "nome": "Cacau Pasta 1kg",
        "empresa": "Sadia",
        "quantidade": 182,
        "valorCompra": 12.53,
        "valorVenda": 19.42,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-20",
            "quantidade": 182
        }
        ]
    },
    {
        "id": "PRD369",
        "nome": "Pão Com 500g",
        "empresa": "Itambé",
        "quantidade": 92,
        "valorCompra": 3.0,
        "valorVenda": 3.93,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-04",
            "quantidade": 92
        }
        ]
    },
    {
        "id": "PRD370",
        "nome": "Feijão Tipo 1 300g",
        "empresa": "Sr",
        "quantidade": 81,
        "valorCompra": 4.31,
        "valorVenda": 8.82,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-28",
            "quantidade": 81
        }
        ]
    },
    {
        "id": "PRD371",
        "nome": "Iogurte Natural 400g",
        "empresa": "Cargil",
        "quantidade": 63,
        "valorCompra": 4.9,
        "valorVenda": 8.85,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-05",
            "quantidade": 63
        }
        ]
    },
    {
        "id": "PRD372",
        "nome": "Macarrão Com 1L",
        "empresa": "Amula",
        "quantidade": 94,
        "valorCompra": 3.99,
        "valorVenda": 9.16,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-06",
            "quantidade": 94
        }
        ]
    },
    {
        "id": "PRD373",
        "nome": "Torrada Torrada 200g",
        "empresa": "Fl",
        "quantidade": 54,
        "valorCompra": 7.98,
        "valorVenda": 17.75,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-17",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-12-24",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD374",
        "nome": "Manteiga Com Sal 300g",
        "empresa": "Italac",
        "quantidade": 81,
        "valorCompra": 1.99,
        "valorVenda": 4.22,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-12",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2027-05-09",
            "quantidade": 25
        },
        {
            "id": "v3",
            "data": "2027-06-10",
            "quantidade": 44
        }
        ]
    },
    {
        "id": "PRD375",
        "nome": "Queijo Prático 1L",
        "empresa": "Pr",
        "quantidade": 186,
        "valorCompra": 6.46,
        "valorVenda": 14.73,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-07",
            "quantidade": 93
        },
        {
            "id": "v2",
            "data": "2026-07-27",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD376",
        "nome": "Arroz Integral 2L",
        "empresa": "Sr",
        "quantidade": 63,
        "valorCompra": 1.89,
        "valorVenda": 2.47,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-10",
            "quantidade": 30
        },
        {
            "id": "v2",
            "data": "2026-10-19",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2026-07-15",
            "quantidade": 9
        },
        {
            "id": "v4",
            "data": "2026-11-02",
            "quantidade": 6
        }
        ]
    },
    {
        "id": "PRD377",
        "nome": "Cereal Cereal 2L",
        "empresa": "Amula",
        "quantidade": 36,
        "valorCompra": 3.77,
        "valorVenda": 6.77,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-21",
            "quantidade": 36
        }
        ]
    },
    {
        "id": "PRD378",
        "nome": "Feijão Preto 250g",
        "empresa": "Braun",
        "quantidade": 189,
        "valorCompra": 13.77,
        "valorVenda": 25.06,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-06",
            "quantidade": 56
        },
        {
            "id": "v2",
            "data": "2027-05-06",
            "quantidade": 32
        },
        {
            "id": "v3",
            "data": "2027-02-15",
            "quantidade": 101
        }
        ]
    },
    {
        "id": "PRD379",
        "nome": "Queijo Prático 300g",
        "empresa": "Sadia",
        "quantidade": 60,
        "valorCompra": 2.66,
        "valorVenda": 5.93,
        "loja": {
        "corredor": "G",
        "gondola": "G7"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-17",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-08-08",
            "quantidade": 27
        }
        ]
    },
    {
        "id": "PRD380",
        "nome": "Queijo Mussarela 250g",
        "empresa": "Lti",
        "quantidade": 107,
        "valorCompra": 9.49,
        "valorVenda": 19.21,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-11",
            "quantidade": 107
        }
        ]
    },
    {
        "id": "PRD381",
        "nome": "Macarrão Com 300g",
        "empresa": "Ml",
        "quantidade": 111,
        "valorCompra": 9.18,
        "valorVenda": 22.06,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-01",
            "quantidade": 111
        }
        ]
    },
    {
        "id": "PRD382",
        "nome": "Feijão Car Urb 400g",
        "empresa": "Vr",
        "quantidade": 185,
        "valorCompra": 10.58,
        "valorVenda": 20.12,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-05",
            "quantidade": 56
        },
        {
            "id": "v2",
            "data": "2026-06-12",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2026-07-20",
            "quantidade": 107
        }
        ]
    },
    {
        "id": "PRD383",
        "nome": "Café  mo 300g",
        "empresa": "Nestlé",
        "quantidade": 77,
        "valorCompra": 13.56,
        "valorVenda": 19.67,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-13",
            "quantidade": 38
        },
        {
            "id": "v2",
            "data": "2027-05-29",
            "quantidade": 39
        }
        ]
    },
    {
        "id": "PRD384",
        "nome": "Açúcar Com 200g",
        "empresa": "Nestlé",
        "quantidade": 114,
        "valorCompra": 3.61,
        "valorVenda": 6.11,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-30",
            "quantidade": 57
        },
        {
            "id": "v2",
            "data": "2026-06-25",
            "quantidade": 57
        }
        ]
    },
    {
        "id": "PRD385",
        "nome": "Torrada Torrada 2L",
        "empresa": "Hachebuch",
        "quantidade": 52,
        "valorCompra": 1.72,
        "valorVenda": 3.17,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-15",
            "quantidade": 16
        },
        {
            "id": "v2",
            "data": "2026-06-18",
            "quantidade": 10
        },
        {
            "id": "v3",
            "data": "2026-06-14",
            "quantidade": 26
        }
        ]
    },
    {
        "id": "PRD386",
        "nome": "Bolo Bolo 200g",
        "empresa": "Piracanjuba",
        "quantidade": 149,
        "valorCompra": 6.84,
        "valorVenda": 14.39,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-02",
            "quantidade": 77
        },
        {
            "id": "v2",
            "data": "2026-09-28",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD387",
        "nome": "Iogurte Com Fruta 400g",
        "empresa": "Gul",
        "quantidade": 23,
        "valorCompra": 4.23,
        "valorVenda": 5.52,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-14",
            "quantidade": 12
        },
        {
            "id": "v2",
            "data": "2026-11-29",
            "quantidade": 11
        }
        ]
    },
    {
        "id": "PRD388",
        "nome": "Cereal Cereal 200g",
        "empresa": "Vr",
        "quantidade": 70,
        "valorCompra": 2.9,
        "valorVenda": 4.96,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-13",
            "quantidade": 38
        },
        {
            "id": "v2",
            "data": "2026-05-24",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD389",
        "nome": "Macarrão Com 300g",
        "empresa": "Sr",
        "quantidade": 62,
        "valorCompra": 13.07,
        "valorVenda": 29.67,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-16",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-07-12",
            "quantidade": 16
        },
        {
            "id": "v3",
            "data": "2027-01-17",
            "quantidade": 21
        }
        ]
    },
    {
        "id": "PRD390",
        "nome": "Iogurte Com Fruta 500g",
        "empresa": "Nestlé",
        "quantidade": 91,
        "valorCompra": 5.36,
        "valorVenda": 13.01,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-12",
            "quantidade": 91
        }
        ]
    },
    {
        "id": "PRD391",
        "nome": "Iogurte Natural 1kg",
        "empresa": "Zr",
        "quantidade": 107,
        "valorCompra": 7.82,
        "valorVenda": 12.67,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 58
        },
        {
            "id": "v2",
            "data": "2026-08-26",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD392",
        "nome": "Sopa Sopa 400g",
        "empresa": "Fl",
        "quantidade": 63,
        "valorCompra": 14.29,
        "valorVenda": 21.86,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2027-03-05",
            "quantidade": 50
        }
        ]
    },
    {
        "id": "PRD393",
        "nome": "Bolo Bolo 1L",
        "empresa": "Pr",
        "quantidade": 61,
        "valorCompra": 6.36,
        "valorVenda": 12.54,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-24",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD394",
        "nome": "Sopa Sopa 2L",
        "empresa": "Nestlé",
        "quantidade": 177,
        "valorCompra": 8.97,
        "valorVenda": 12.64,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-18",
            "quantidade": 69
        },
        {
            "id": "v2",
            "data": "2026-09-23",
            "quantidade": 108
        }
        ]
    },
    {
        "id": "PRD395",
        "nome": "Açúcar Com 2L",
        "empresa": "Piracanjuba",
        "quantidade": 197,
        "valorCompra": 7.11,
        "valorVenda": 12.59,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-04",
            "quantidade": 197
        }
        ]
    },
    {
        "id": "PRD396",
        "nome": "Cacau Pasta 500g",
        "empresa": "Kr",
        "quantidade": 158,
        "valorCompra": 6.16,
        "valorVenda": 9.01,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-20",
            "quantidade": 94
        },
        {
            "id": "v2",
            "data": "2026-06-15",
            "quantidade": 64
        }
        ]
    },
    {
        "id": "PRD397",
        "nome": "Café  mo 250g",
        "empresa": "Piracanjuba",
        "quantidade": 71,
        "valorCompra": 14.04,
        "valorVenda": 20.97,
        "loja": {
        "corredor": "C",
        "gondola": "C10"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-23",
            "quantidade": 20
        },
        {
            "id": "v2",
            "data": "2026-11-26",
            "quantidade": 51
        }
        ]
    },
    {
        "id": "PRD398",
        "nome": "Chocolate Pasta 200g",
        "empresa": "El either",
        "quantidade": 139,
        "valorCompra": 2.94,
        "valorVenda": 6.17,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 60
        },
        {
            "id": "v2",
            "data": "2026-10-20",
            "quantidade": 79
        }
        ]
    },
    {
        "id": "PRD399",
        "nome": "Macarrão Com 1L",
        "empresa": "Nata",
        "quantidade": 127,
        "valorCompra": 2.0,
        "valorVenda": 4.75,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-31",
            "quantidade": 76
        },
        {
            "id": "v2",
            "data": "2026-06-11",
            "quantidade": 51
        }
        ]
    },
    {
        "id": "PRD400",
        "nome": "Bolo Bolo 2L",
        "empresa": "Zr",
        "quantidade": 126,
        "valorCompra": 14.76,
        "valorVenda": 22.19,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-16",
            "quantidade": 70
        },
        {
            "id": "v2",
            "data": "2026-10-02",
            "quantidade": 56
        }
        ]
    },
    {
        "id": "PRD401",
        "nome": "Cereal Cereal 250g",
        "empresa": "Nata",
        "quantidade": 99,
        "valorCompra": 7.46,
        "valorVenda": 12.34,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-23",
            "quantidade": 45
        },
        {
            "id": "v2",
            "data": "2027-02-23",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2026-06-13",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD402",
        "nome": "Feijão Tapi 200g",
        "empresa": "Hachebuch",
        "quantidade": 159,
        "valorCompra": 1.03,
        "valorVenda": 1.41,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-15",
            "quantidade": 159
        }
        ]
    },
    {
        "id": "PRD403",
        "nome": "Arroz Long Rapido 300g",
        "empresa": "Vr",
        "quantidade": 176,
        "valorCompra": 11.23,
        "valorVenda": 26.92,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 176
        }
        ]
    },
    {
        "id": "PRD404",
        "nome": "Cacau Pasta 1L",
        "empresa": "Sr",
        "quantidade": 190,
        "valorCompra": 14.81,
        "valorVenda": 32.74,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-13",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-08-19",
            "quantidade": 55
        },
        {
            "id": "v3",
            "data": "2027-06-02",
            "quantidade": 102
        }
        ]
    },
    {
        "id": "PRD405",
        "nome": "Chocolate Pasta 1kg",
        "empresa": "Gul",
        "quantidade": 34,
        "valorCompra": 6.27,
        "valorVenda": 14.11,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-11",
            "quantidade": 18
        },
        {
            "id": "v2",
            "data": "2027-03-09",
            "quantidade": 6
        },
        {
            "id": "v3",
            "data": "2026-05-27",
            "quantidade": 10
        }
        ]
    },
    {
        "id": "PRD406",
        "nome": "Feijão Orgânico 400g",
        "empresa": "Itambé",
        "quantidade": 80,
        "valorCompra": 3.47,
        "valorVenda": 6.08,
        "loja": {
        "corredor": "A",
        "gondola": "A7"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-28",
            "quantidade": 80
        }
        ]
    },
    {
        "id": "PRD407",
        "nome": "Requeijão Desnatado 2L",
        "empresa": "Sadia",
        "quantidade": 149,
        "valorCompra": 14.11,
        "valorVenda": 32.69,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-27",
            "quantidade": 76
        },
        {
            "id": "v2",
            "data": "2026-09-17",
            "quantidade": 73
        }
        ]
    },
    {
        "id": "PRD408",
        "nome": "Pão Com 2L",
        "empresa": "Ml",
        "quantidade": 155,
        "valorCompra": 1.46,
        "valorVenda": 3.63,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-17",
            "quantidade": 88
        },
        {
            "id": "v2",
            "data": "2026-11-24",
            "quantidade": 26
        },
        {
            "id": "v3",
            "data": "2026-06-22",
            "quantidade": 41
        }
        ]
    },
    {
        "id": "PRD409",
        "nome": "Iogurte Desnatado 2L",
        "empresa": "Zr",
        "quantidade": 116,
        "valorCompra": 13.59,
        "valorVenda": 29.25,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-24",
            "quantidade": 116
        }
        ]
    },
    {
        "id": "PRD410",
        "nome": "Leite Com Vitamina A 250g",
        "empresa": "Fl",
        "quantidade": 164,
        "valorCompra": 14.24,
        "valorVenda": 21.96,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-23",
            "quantidade": 59
        },
        {
            "id": "v2",
            "data": "2026-11-17",
            "quantidade": 105
        }
        ]
    },
    {
        "id": "PRD411",
        "nome": "Requeijão Bár 250g",
        "empresa": "Italac",
        "quantidade": 37,
        "valorCompra": 10.37,
        "valorVenda": 16.06,
        "loja": {
        "corredor": "C",
        "gondola": "C10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-04",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2026-11-30",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD412",
        "nome": "Leite Desnatado 400g",
        "empresa": "El either",
        "quantidade": 91,
        "valorCompra": 3.49,
        "valorVenda": 7.91,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-11",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2026-09-23",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2026-06-12",
            "quantidade": 38
        }
        ]
    },
    {
        "id": "PRD413",
        "nome": "Requeijão Light 400g",
        "empresa": "Italac",
        "quantidade": 160,
        "valorCompra": 13.07,
        "valorVenda": 18.23,
        "loja": {
        "corredor": "B",
        "gondola": "B6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 160
        }
        ]
    },
    {
        "id": "PRD414",
        "nome": "Manteiga Proteânto 1L",
        "empresa": "Vr",
        "quantidade": 78,
        "valorCompra": 2.49,
        "valorVenda": 3.81,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-03",
            "quantidade": 78
        }
        ]
    },
    {
        "id": "PRD415",
        "nome": "Requeijão Desnatado 1L",
        "empresa": "Gul",
        "quantidade": 132,
        "valorCompra": 4.07,
        "valorVenda": 7.09,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 67
        },
        {
            "id": "v2",
            "data": "2026-06-19",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD416",
        "nome": "Leite Com Vitamina A 400g",
        "empresa": "Sadia",
        "quantidade": 184,
        "valorCompra": 6.39,
        "valorVenda": 10.79,
        "loja": {
        "corredor": "A",
        "gondola": "A9"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-17",
            "quantidade": 91
        },
        {
            "id": "v2",
            "data": "2026-10-18",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD417",
        "nome": "Café  mo 1L",
        "empresa": "Ban",
        "quantidade": 135,
        "valorCompra": 13.24,
        "valorVenda": 26.72,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-12",
            "quantidade": 135
        }
        ]
    },
    {
        "id": "PRD418",
        "nome": "Sopa Sopa 2L",
        "empresa": "Pr",
        "quantidade": 99,
        "valorCompra": 4.38,
        "valorVenda": 7.48,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-24",
            "quantidade": 18
        },
        {
            "id": "v2",
            "data": "2026-05-23",
            "quantidade": 37
        },
        {
            "id": "v3",
            "data": "2027-01-24",
            "quantidade": 17
        },
        {
            "id": "v4",
            "data": "2027-03-21",
            "quantidade": 27
        }
        ]
    },
    {
        "id": "PRD419",
        "nome": "Leite Com Vitamina A 200g",
        "empresa": "Vr",
        "quantidade": 158,
        "valorCompra": 2.02,
        "valorVenda": 4.66,
        "loja": {
        "corredor": "F",
        "gondola": "F6"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-07",
            "quantidade": 34
        },
        {
            "id": "v2",
            "data": "2026-11-16",
            "quantidade": 59
        },
        {
            "id": "v3",
            "data": "2026-06-12",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD420",
        "nome": "Arroz Tapi 1kg",
        "empresa": "Fl",
        "quantidade": 136,
        "valorCompra": 7.86,
        "valorVenda": 14.64,
        "loja": {
        "corredor": "D",
        "gondola": "D3"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-22",
            "quantidade": 136
        }
        ]
    },
    {
        "id": "PRD421",
        "nome": "Requeijão Light 200g",
        "empresa": "Kr",
        "quantidade": 76,
        "valorCompra": 5.62,
        "valorVenda": 7.42,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-17",
            "quantidade": 30
        },
        {
            "id": "v2",
            "data": "2026-12-08",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD422",
        "nome": "Cereal Cereal 400g",
        "empresa": "Nestlé",
        "quantidade": 59,
        "valorCompra": 11.01,
        "valorVenda": 23.18,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 59
        }
        ]
    },
    {
        "id": "PRD423",
        "nome": "Feijão Parbrizado 200g",
        "empresa": "Sadia",
        "quantidade": 190,
        "valorCompra": 6.94,
        "valorVenda": 13.0,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-03",
            "quantidade": 190
        }
        ]
    },
    {
        "id": "PRD424",
        "nome": "Feijão Tapi 250g",
        "empresa": "Fl",
        "quantidade": 152,
        "valorCompra": 13.0,
        "valorVenda": 23.29,
        "loja": {
        "corredor": "G",
        "gondola": "G1"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-11",
            "quantidade": 152
        }
        ]
    },
    {
        "id": "PRD425",
        "nome": "Macarrão Com 1kg",
        "empresa": "Italac",
        "quantidade": 124,
        "valorCompra": 2.61,
        "valorVenda": 3.96,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-18",
            "quantidade": 52
        },
        {
            "id": "v2",
            "data": "2026-07-27",
            "quantidade": 15
        },
        {
            "id": "v3",
            "data": "2026-09-09",
            "quantidade": 57
        }
        ]
    },
    {
        "id": "PRD426",
        "nome": "Leite Desnatado 2L",
        "empresa": "Tr",
        "quantidade": 46,
        "valorCompra": 12.89,
        "valorVenda": 28.48,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-21",
            "quantidade": 46
        }
        ]
    },
    {
        "id": "PRD427",
        "nome": "Queijo Italiano 1L",
        "empresa": "Tr",
        "quantidade": 35,
        "valorCompra": 12.73,
        "valorVenda": 19.12,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-17",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD428",
        "nome": "Queijo Minas 300g",
        "empresa": "Kr",
        "quantidade": 52,
        "valorCompra": 11.16,
        "valorVenda": 24.84,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-11",
            "quantidade": 7
        },
        {
            "id": "v2",
            "data": "2027-03-29",
            "quantidade": 9
        },
        {
            "id": "v3",
            "data": "2026-10-14",
            "quantidade": 36
        }
        ]
    },
    {
        "id": "PRD429",
        "nome": "Pão Com 1kg",
        "empresa": "Italac",
        "quantidade": 63,
        "valorCompra": 6.32,
        "valorVenda": 14.79,
        "loja": {
        "corredor": "E",
        "gondola": "E10"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-30",
            "quantidade": 32
        },
        {
            "id": "v2",
            "data": "2026-11-11",
            "quantidade": 8
        },
        {
            "id": "v3",
            "data": "2027-04-03",
            "quantidade": 23
        }
        ]
    },
    {
        "id": "PRD430",
        "nome": "Cereal Cereal 1kg",
        "empresa": "Sadia",
        "quantidade": 115,
        "valorCompra": 12.61,
        "valorVenda": 31.23,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-20",
            "quantidade": 56
        },
        {
            "id": "v2",
            "data": "2027-02-23",
            "quantidade": 59
        }
        ]
    },
    {
        "id": "PRD431",
        "nome": "Macarrão Com 1kg",
        "empresa": "Nestlé",
        "quantidade": 126,
        "valorCompra": 3.58,
        "valorVenda": 6.37,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-26",
            "quantidade": 72
        },
        {
            "id": "v2",
            "data": "2026-10-18",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD432",
        "nome": "Cacau Pasta 2L",
        "empresa": "Nata",
        "quantidade": 161,
        "valorCompra": 6.46,
        "valorVenda": 15.0,
        "loja": {
        "corredor": "B",
        "gondola": "B7"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-03",
            "quantidade": 161
        }
        ]
    },
    {
        "id": "PRD433",
        "nome": "Bolo Bolo 1kg",
        "empresa": "Piracanjuba",
        "quantidade": 102,
        "valorCompra": 14.88,
        "valorVenda": 26.74,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-13",
            "quantidade": 102
        }
        ]
    },
    {
        "id": "PRD434",
        "nome": "Feijão Tipo 1 200g",
        "empresa": "Nata",
        "quantidade": 76,
        "valorCompra": 3.72,
        "valorVenda": 8.0,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-26",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD435",
        "nome": "Queijo Italiano 400g",
        "empresa": "Italac",
        "quantidade": 175,
        "valorCompra": 4.25,
        "valorVenda": 8.83,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-15",
            "quantidade": 74
        },
        {
            "id": "v2",
            "data": "2026-06-12",
            "quantidade": 101
        }
        ]
    },
    {
        "id": "PRD436",
        "nome": "Feijão Tipo 1 400g",
        "empresa": "Nata",
        "quantidade": 159,
        "valorCompra": 5.9,
        "valorVenda": 10.36,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-06",
            "quantidade": 159
        }
        ]
    },
    {
        "id": "PRD437",
        "nome": "Macarrão Com 1L",
        "empresa": "Ban",
        "quantidade": 149,
        "valorCompra": 6.34,
        "valorVenda": 11.78,
        "loja": {
        "corredor": "A",
        "gondola": "A2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-17",
            "quantidade": 149
        }
        ]
    },
    {
        "id": "PRD438",
        "nome": "Chocolate Pasta 2L",
        "empresa": "Bemgel",
        "quantidade": 167,
        "valorCompra": 5.76,
        "valorVenda": 10.8,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-23",
            "quantidade": 167
        }
        ]
    },
    {
        "id": "PRD439",
        "nome": "Feijão Parbrizado 2L",
        "empresa": "Tr",
        "quantidade": 105,
        "valorCompra": 14.49,
        "valorVenda": 24.4,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-15",
            "quantidade": 55
        },
        {
            "id": "v2",
            "data": "2027-02-16",
            "quantidade": 22
        },
        {
            "id": "v3",
            "data": "2027-02-27",
            "quantidade": 28
        }
        ]
    },
    {
        "id": "PRD440",
        "nome": "Requeijão Desnatado 300g",
        "empresa": "Lti",
        "quantidade": 83,
        "valorCompra": 12.53,
        "valorVenda": 29.47,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-03",
            "quantidade": 16
        },
        {
            "id": "v2",
            "data": "2026-11-06",
            "quantidade": 67
        }
        ]
    },
    {
        "id": "PRD441",
        "nome": "Chocolate Pasta 1L",
        "empresa": "Kr",
        "quantidade": 49,
        "valorCompra": 8.37,
        "valorVenda": 15.66,
        "loja": {
        "corredor": "A",
        "gondola": "A10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-13",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD442",
        "nome": "Feijão Car Urb 250g",
        "empresa": "Fl",
        "quantidade": 190,
        "valorCompra": 8.7,
        "valorVenda": 20.2,
        "loja": {
        "corredor": "C",
        "gondola": "C7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-06",
            "quantidade": 109
        },
        {
            "id": "v2",
            "data": "2027-04-14",
            "quantidade": 29
        },
        {
            "id": "v3",
            "data": "2027-02-05",
            "quantidade": 27
        },
        {
            "id": "v4",
            "data": "2027-05-01",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD443",
        "nome": "Requeijão A ervilha 400g",
        "empresa": "Pr",
        "quantidade": 175,
        "valorCompra": 3.84,
        "valorVenda": 8.67,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-09",
            "quantidade": 60
        },
        {
            "id": "v2",
            "data": "2026-11-02",
            "quantidade": 115
        }
        ]
    },
    {
        "id": "PRD444",
        "nome": "Manteiga Proteânto 400g",
        "empresa": "Vr",
        "quantidade": 199,
        "valorCompra": 14.92,
        "valorVenda": 19.98,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-16",
            "quantidade": 55
        },
        {
            "id": "v2",
            "data": "2026-11-25",
            "quantidade": 144
        }
        ]
    },
    {
        "id": "PRD445",
        "nome": "Manteiga Com Óleo 300g",
        "empresa": "Ml",
        "quantidade": 105,
        "valorCompra": 8.02,
        "valorVenda": 15.79,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-18",
            "quantidade": 19
        },
        {
            "id": "v2",
            "data": "2027-06-04",
            "quantidade": 86
        }
        ]
    },
    {
        "id": "PRD446",
        "nome": "Chocolate Pasta 1L",
        "empresa": "Nestlé",
        "quantidade": 142,
        "valorCompra": 12.68,
        "valorVenda": 19.65,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-11",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2026-10-09",
            "quantidade": 91
        }
        ]
    },
    {
        "id": "PRD447",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Zr",
        "quantidade": 164,
        "valorCompra": 7.63,
        "valorVenda": 9.92,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-18",
            "quantidade": 65
        },
        {
            "id": "v2",
            "data": "2026-09-22",
            "quantidade": 99
        }
        ]
    },
    {
        "id": "PRD448",
        "nome": "Torrada Torrada 400g",
        "empresa": "Tr",
        "quantidade": 41,
        "valorCompra": 7.85,
        "valorVenda": 15.76,
        "loja": {
        "corredor": "D",
        "gondola": "D3"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-30",
            "quantidade": 8
        },
        {
            "id": "v2",
            "data": "2026-09-08",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2027-02-25",
            "quantidade": 19
        }
        ]
    },
    {
        "id": "PRD449",
        "nome": "Cereal Cereal 200g",
        "empresa": "Bemgel",
        "quantidade": 40,
        "valorCompra": 11.02,
        "valorVenda": 24.85,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-25",
            "quantidade": 10
        },
        {
            "id": "v2",
            "data": "2027-02-28",
            "quantidade": 30
        }
        ]
    },
    {
        "id": "PRD450",
        "nome": "Arroz Tapi 2L",
        "empresa": "Ban",
        "quantidade": 72,
        "valorCompra": 6.84,
        "valorVenda": 10.11,
        "loja": {
        "corredor": "B",
        "gondola": "B9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-03",
            "quantidade": 72
        }
        ]
    },
    {
        "id": "PRD451",
        "nome": "Arroz Long Rapido 300g",
        "empresa": "Zr",
        "quantidade": 39,
        "valorCompra": 14.4,
        "valorVenda": 32.06,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-14",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-11-05",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2027-04-06",
            "quantidade": 12
        }
        ]
    },
    {
        "id": "PRD452",
        "nome": "Pão Integral 1kg",
        "empresa": "Bemgel",
        "quantidade": 182,
        "valorCompra": 12.35,
        "valorVenda": 28.59,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-10",
            "quantidade": 87
        },
        {
            "id": "v2",
            "data": "2027-03-06",
            "quantidade": 30
        },
        {
            "id": "v3",
            "data": "2026-07-15",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD453",
        "nome": "Leite Com Vitamina A 300g",
        "empresa": "Italac",
        "quantidade": 176,
        "valorCompra": 14.9,
        "valorVenda": 29.85,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-21",
            "quantidade": 77
        },
        {
            "id": "v2",
            "data": "2026-11-06",
            "quantidade": 99
        }
        ]
    },
    {
        "id": "PRD454",
        "nome": "Macarrão Com 500g",
        "empresa": "Nata",
        "quantidade": 189,
        "valorCompra": 6.26,
        "valorVenda": 12.17,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-11",
            "quantidade": 29
        },
        {
            "id": "v2",
            "data": "2027-04-07",
            "quantidade": 160
        }
        ]
    },
    {
        "id": "PRD455",
        "nome": "Bolo Bolo 300g",
        "empresa": "Fl",
        "quantidade": 195,
        "valorCompra": 13.88,
        "valorVenda": 31.02,
        "loja": {
        "corredor": "D",
        "gondola": "D5"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-03",
            "quantidade": 195
        }
        ]
    },
    {
        "id": "PRD456",
        "nome": "Chocolate Pasta 250g",
        "empresa": "Nestlé",
        "quantidade": 113,
        "valorCompra": 7.62,
        "valorVenda": 16.96,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-25",
            "quantidade": 52
        },
        {
            "id": "v2",
            "data": "2026-06-19",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD457",
        "nome": "Iogurte Desnatado 400g",
        "empresa": "Lti",
        "quantidade": 38,
        "valorCompra": 7.6,
        "valorVenda": 17.23,
        "loja": {
        "corredor": "D",
        "gondola": "D6"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-12",
            "quantidade": 38
        }
        ]
    },
    {
        "id": "PRD458",
        "nome": "Queijo Mussarela 1kg",
        "empresa": "Kr",
        "quantidade": 58,
        "valorCompra": 10.37,
        "valorVenda": 23.72,
        "loja": {
        "corredor": "A",
        "gondola": "A6"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-06",
            "quantidade": 11
        },
        {
            "id": "v2",
            "data": "2026-11-10",
            "quantidade": 7
        },
        {
            "id": "v3",
            "data": "2026-08-22",
            "quantidade": 40
        }
        ]
    },
    {
        "id": "PRD459",
        "nome": "Leite Sem Creme 400g",
        "empresa": "Italac",
        "quantidade": 96,
        "valorCompra": 9.61,
        "valorVenda": 23.76,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-31",
            "quantidade": 96
        }
        ]
    },
    {
        "id": "PRD460",
        "nome": "Bolo Bolo 500g",
        "empresa": "Braun",
        "quantidade": 39,
        "valorCompra": 1.73,
        "valorVenda": 3.71,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-22",
            "quantidade": 39
        }
        ]
    },
    {
        "id": "PRD461",
        "nome": "Açúcar Com 500g",
        "empresa": "Ban",
        "quantidade": 164,
        "valorCompra": 10.65,
        "valorVenda": 24.67,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-16",
            "quantidade": 76
        },
        {
            "id": "v2",
            "data": "2026-06-22",
            "quantidade": 88
        }
        ]
    },
    {
        "id": "PRD462",
        "nome": "Café  mo 2L",
        "empresa": "Sadia",
        "quantidade": 31,
        "valorCompra": 4.92,
        "valorVenda": 12.17,
        "loja": {
        "corredor": "G",
        "gondola": "G5"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 13
        },
        {
            "id": "v2",
            "data": "2026-07-06",
            "quantidade": 9
        },
        {
            "id": "v3",
            "data": "2027-05-05",
            "quantidade": 9
        }
        ]
    },
    {
        "id": "PRD463",
        "nome": "Cacau Pasta 200g",
        "empresa": "Piracanjuba",
        "quantidade": 24,
        "valorCompra": 12.46,
        "valorVenda": 21.14,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-05",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD464",
        "nome": "Açúcar Com 2L",
        "empresa": "Italac",
        "quantidade": 37,
        "valorCompra": 11.0,
        "valorVenda": 22.09,
        "loja": {
        "corredor": "B",
        "gondola": "B1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-12",
            "quantidade": 37
        }
        ]
    },
    {
        "id": "PRD465",
        "nome": "Sopa Sopa 250g",
        "empresa": "Nestlé",
        "quantidade": 120,
        "valorCompra": 9.8,
        "valorVenda": 16.0,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-03",
            "quantidade": 49
        },
        {
            "id": "v2",
            "data": "2027-04-30",
            "quantidade": 39
        },
        {
            "id": "v3",
            "data": "2026-08-17",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD466",
        "nome": "Requeijão A ervilha 2L",
        "empresa": "Italac",
        "quantidade": 58,
        "valorCompra": 12.64,
        "valorVenda": 23.76,
        "loja": {
        "corredor": "A",
        "gondola": "A8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-23",
            "quantidade": 58
        }
        ]
    },
    {
        "id": "PRD467",
        "nome": "Feijão Car Urb 250g",
        "empresa": "Vr",
        "quantidade": 173,
        "valorCompra": 10.15,
        "valorVenda": 14.49,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-15",
            "quantidade": 70
        },
        {
            "id": "v2",
            "data": "2026-12-07",
            "quantidade": 27
        },
        {
            "id": "v3",
            "data": "2026-05-27",
            "quantidade": 76
        }
        ]
    },
    {
        "id": "PRD468",
        "nome": "Sopa Sopa 200g",
        "empresa": "Tr",
        "quantidade": 53,
        "valorCompra": 13.64,
        "valorVenda": 30.26,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-01",
            "quantidade": 53
        }
        ]
    },
    {
        "id": "PRD469",
        "nome": "Arroz Tipo 1 1L",
        "empresa": "Fl",
        "quantidade": 141,
        "valorCompra": 14.39,
        "valorVenda": 27.02,
        "loja": {
        "corredor": "D",
        "gondola": "D9"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-15",
            "quantidade": 77
        },
        {
            "id": "v2",
            "data": "2026-10-14",
            "quantidade": 36
        },
        {
            "id": "v3",
            "data": "2027-01-30",
            "quantidade": 28
        }
        ]
    },
    {
        "id": "PRD470",
        "nome": "Açúcar Com 200g",
        "empresa": "Hachebuch",
        "quantidade": 192,
        "valorCompra": 11.96,
        "valorVenda": 24.65,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-25",
            "quantidade": 109
        },
        {
            "id": "v2",
            "data": "2026-09-20",
            "quantidade": 41
        },
        {
            "id": "v3",
            "data": "2027-01-31",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD471",
        "nome": "Açúcar Com 2L",
        "empresa": "Braun",
        "quantidade": 99,
        "valorCompra": 7.11,
        "valorVenda": 15.76,
        "loja": {
        "corredor": "F",
        "gondola": "F5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-16",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-11-27",
            "quantidade": 78
        }
        ]
    },
    {
        "id": "PRD472",
        "nome": "Feijão Car Urb 2L",
        "empresa": "Perdiguer",
        "quantidade": 37,
        "valorCompra": 13.04,
        "valorVenda": 31.6,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-02",
            "quantidade": 37
        }
        ]
    },
    {
        "id": "PRD473",
        "nome": "Pão Integral 1kg",
        "empresa": "Zr",
        "quantidade": 120,
        "valorCompra": 3.58,
        "valorVenda": 6.56,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-25",
            "quantidade": 47
        },
        {
            "id": "v2",
            "data": "2027-05-04",
            "quantidade": 73
        }
        ]
    },
    {
        "id": "PRD474",
        "nome": "Arroz Tapi 1kg",
        "empresa": "Hachebuch",
        "quantidade": 111,
        "valorCompra": 11.87,
        "valorVenda": 18.51,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "5",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-01",
            "quantidade": 111
        }
        ]
    },
    {
        "id": "PRD475",
        "nome": "Manteiga Com Sal 1L",
        "empresa": "Pr",
        "quantidade": 125,
        "valorCompra": 1.78,
        "valorVenda": 2.9,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-28",
            "quantidade": 39
        },
        {
            "id": "v2",
            "data": "2026-09-12",
            "quantidade": 86
        }
        ]
    },
    {
        "id": "PRD476",
        "nome": "Queijo Italiano 1L",
        "empresa": "Fl",
        "quantidade": 166,
        "valorCompra": 14.6,
        "valorVenda": 19.77,
        "loja": {
        "corredor": "E",
        "gondola": "E9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-18",
            "quantidade": 86
        },
        {
            "id": "v2",
            "data": "2027-01-21",
            "quantidade": 35
        },
        {
            "id": "v3",
            "data": "2026-08-25",
            "quantidade": 13
        },
        {
            "id": "v4",
            "data": "2027-02-12",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD477",
        "nome": "Leite Com Ferro 400g",
        "empresa": "Italac",
        "quantidade": 65,
        "valorCompra": 5.08,
        "valorVenda": 8.44,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-06",
            "quantidade": 65
        }
        ]
    },
    {
        "id": "PRD478",
        "nome": "Açúcar Com 2L",
        "empresa": "Amula",
        "quantidade": 181,
        "valorCompra": 14.6,
        "valorVenda": 19.27,
        "loja": {
        "corredor": "G",
        "gondola": "G2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-27",
            "quantidade": 181
        }
        ]
    },
    {
        "id": "PRD479",
        "nome": "Macarrão Com 500g",
        "empresa": "Vr",
        "quantidade": 195,
        "valorCompra": 13.14,
        "valorVenda": 25.88,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-09",
            "quantidade": 53
        },
        {
            "id": "v2",
            "data": "2027-02-24",
            "quantidade": 72
        },
        {
            "id": "v3",
            "data": "2027-01-16",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD480",
        "nome": "Requeijão Cremoso 300g",
        "empresa": "Perdiguer",
        "quantidade": 54,
        "valorCompra": 5.0,
        "valorVenda": 8.19,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-04",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD481",
        "nome": "Arroz Integral 1L",
        "empresa": "Amula",
        "quantidade": 37,
        "valorCompra": 4.75,
        "valorVenda": 9.64,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-01",
            "quantidade": 37
        }
        ]
    },
    {
        "id": "PRD482",
        "nome": "Chocolate Pasta 400g",
        "empresa": "Bemgel",
        "quantidade": 32,
        "valorCompra": 3.5,
        "valorVenda": 5.89,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-01",
            "quantidade": 32
        }
        ]
    },
    {
        "id": "PRD483",
        "nome": "Feijão Car Urb 200g",
        "empresa": "Tr",
        "quantidade": 141,
        "valorCompra": 8.31,
        "valorVenda": 12.73,
        "loja": {
        "corredor": "B",
        "gondola": "B3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-03",
            "quantidade": 27
        },
        {
            "id": "v2",
            "data": "2027-01-16",
            "quantidade": 114
        }
        ]
    },
    {
        "id": "PRD484",
        "nome": "Arroz Long Rapido 500g",
        "empresa": "Tr",
        "quantidade": 72,
        "valorCompra": 10.19,
        "valorVenda": 20.78,
        "loja": {
        "corredor": "B",
        "gondola": "B10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-10",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-10-09",
            "quantidade": 51
        }
        ]
    },
    {
        "id": "PRD485",
        "nome": "Café  mo 250g",
        "empresa": "Sr",
        "quantidade": 162,
        "valorCompra": 13.11,
        "valorVenda": 32.04,
        "loja": {
        "corredor": "D",
        "gondola": "D3"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-26",
            "quantidade": 162
        }
        ]
    },
    {
        "id": "PRD486",
        "nome": "Macarrão Com 200g",
        "empresa": "Lti",
        "quantidade": 27,
        "valorCompra": 13.9,
        "valorVenda": 32.92,
        "loja": {
        "corredor": "D",
        "gondola": "D8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-18",
            "quantidade": 27
        }
        ]
    },
    {
        "id": "PRD487",
        "nome": "Torrada Torrada 300g",
        "empresa": "Piracanjuba",
        "quantidade": 159,
        "valorCompra": 2.89,
        "valorVenda": 6.43,
        "loja": {
        "corredor": "G",
        "gondola": "G10"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-12",
            "quantidade": 54
        },
        {
            "id": "v2",
            "data": "2026-06-13",
            "quantidade": 30
        },
        {
            "id": "v3",
            "data": "2026-12-13",
            "quantidade": 75
        }
        ]
    },
    {
        "id": "PRD488",
        "nome": "Iogurte Natural 250g",
        "empresa": "Itambé",
        "quantidade": 54,
        "valorCompra": 12.48,
        "valorVenda": 18.02,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-16",
            "quantidade": 54
        }
        ]
    },
    {
        "id": "PRD489",
        "nome": "Pão Com 250g",
        "empresa": "Hachebuch",
        "quantidade": 78,
        "valorCompra": 5.39,
        "valorVenda": 13.15,
        "loja": {
        "corredor": "B",
        "gondola": "B7"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-24",
            "quantidade": 78
        }
        ]
    },
    {
        "id": "PRD490",
        "nome": "Queijo Italiano 300g",
        "empresa": "Cargil",
        "quantidade": 26,
        "valorCompra": 10.18,
        "valorVenda": 21.5,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-11",
            "quantidade": 14
        },
        {
            "id": "v2",
            "data": "2027-03-12",
            "quantidade": 12
        }
        ]
    },
    {
        "id": "PRD491",
        "nome": "Cacau Pasta 300g",
        "empresa": "Piracanjuba",
        "quantidade": 55,
        "valorCompra": 11.23,
        "valorVenda": 25.13,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-11",
            "quantidade": 26
        },
        {
            "id": "v2",
            "data": "2027-03-28",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD492",
        "nome": "Macarrão Com 1kg",
        "empresa": "Italac",
        "quantidade": 28,
        "valorCompra": 10.32,
        "valorVenda": 14.21,
        "loja": {
        "corredor": "B",
        "gondola": "B8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-19",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-11-03",
            "quantidade": 19
        }
        ]
    },
    {
        "id": "PRD493",
        "nome": "Manteiga Com Sal 250g",
        "empresa": "Perdiguer",
        "quantidade": 103,
        "valorCompra": 2.27,
        "valorVenda": 5.48,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-13",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD494",
        "nome": "Pão Com 250g",
        "empresa": "Amula",
        "quantidade": 107,
        "valorCompra": 8.19,
        "valorVenda": 14.41,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-10",
            "quantidade": 107
        }
        ]
    },
    {
        "id": "PRD495",
        "nome": "Manteiga Sem Sal 500g",
        "empresa": "Pr",
        "quantidade": 24,
        "valorCompra": 14.35,
        "valorVenda": 20.68,
        "loja": {
        "corredor": "B",
        "gondola": "B5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-11",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-09-22",
            "quantidade": 18
        }
        ]
    },
    {
        "id": "PRD496",
        "nome": "Café Solúvel 500g",
        "empresa": "Nestlé",
        "quantidade": 35,
        "valorCompra": 7.84,
        "valorVenda": 12.63,
        "loja": {
        "corredor": "E",
        "gondola": "E8"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-27",
            "quantidade": 35
        }
        ]
    },
    {
        "id": "PRD497",
        "nome": "Chocolate Pasta 200g",
        "empresa": "Piracanjuba",
        "quantidade": 181,
        "valorCompra": 12.01,
        "valorVenda": 16.41,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-02",
            "quantidade": 107
        },
        {
            "id": "v2",
            "data": "2026-11-12",
            "quantidade": 14
        },
        {
            "id": "v3",
            "data": "2027-05-21",
            "quantidade": 60
        }
        ]
    },
    {
        "id": "PRD498",
        "nome": "Torrada Torrada 500g",
        "empresa": "Zr",
        "quantidade": 180,
        "valorCompra": 13.51,
        "valorVenda": 28.51,
        "loja": {
        "corredor": "E",
        "gondola": "E4"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-15",
            "quantidade": 59
        },
        {
            "id": "v2",
            "data": "2027-02-16",
            "quantidade": 33
        },
        {
            "id": "v3",
            "data": "2027-04-29",
            "quantidade": 45
        },
        {
            "id": "v4",
            "data": "2026-10-31",
            "quantidade": 43
        }
        ]
    },
    {
        "id": "PRD499",
        "nome": "Manteiga Organica 500g",
        "empresa": "Zr",
        "quantidade": 20,
        "valorCompra": 5.06,
        "valorVenda": 7.1,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-10",
            "quantidade": 20
        }
        ]
    },
    {
        "id": "PRD500",
        "nome": "Arroz Tapi 200g",
        "empresa": "Cargil",
        "quantidade": 94,
        "valorCompra": 1.47,
        "valorVenda": 3.45,
        "loja": {
        "corredor": "D",
        "gondola": "D1"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-27",
            "quantidade": 41
        },
        {
            "id": "v2",
            "data": "2027-04-05",
            "quantidade": 11
        },
        {
            "id": "v3",
            "data": "2026-11-21",
            "quantidade": 42
        }
        ]
    },
    {
        "id": "PRD501",
        "nome": "Queijo Mussarela 500g",
        "empresa": "Nata",
        "quantidade": 96,
        "valorCompra": 1.8,
        "valorVenda": 2.39,
        "loja": {
        "corredor": "B",
        "gondola": "B2"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-18",
            "quantidade": 96
        }
        ]
    },
    {
        "id": "PRD502",
        "nome": "Pão Com 200g",
        "empresa": "Sr",
        "quantidade": 85,
        "valorCompra": 8.35,
        "valorVenda": 14.42,
        "loja": {
        "corredor": "C",
        "gondola": "C5"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-16",
            "quantidade": 44
        },
        {
            "id": "v2",
            "data": "2026-06-13",
            "quantidade": 18
        },
        {
            "id": "v3",
            "data": "2026-12-14",
            "quantidade": 23
        }
        ]
    },
    {
        "id": "PRD503",
        "nome": "Leite Orgânico 200g",
        "empresa": "Nestlé",
        "quantidade": 59,
        "valorCompra": 5.36,
        "valorVenda": 10.75,
        "loja": {
        "corredor": "C",
        "gondola": "C4"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-14",
            "quantidade": 59
        }
        ]
    },
    {
        "id": "PRD504",
        "nome": "Iogurte Natural 250g",
        "empresa": "Kr",
        "quantidade": 149,
        "valorCompra": 5.91,
        "valorVenda": 14.26,
        "loja": {
        "corredor": "C",
        "gondola": "C1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-18",
            "quantidade": 149
        }
        ]
    },
    {
        "id": "PRD505",
        "nome": "Macarrão Com 1L",
        "empresa": "Amula",
        "quantidade": 112,
        "valorCompra": 11.42,
        "valorVenda": 25.17,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-09",
            "quantidade": 112
        }
        ]
    },
    {
        "id": "PRD506",
        "nome": "Bolo Bolo 2L",
        "empresa": "Ban",
        "quantidade": 23,
        "valorCompra": 7.13,
        "valorVenda": 13.23,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-13",
            "quantidade": 23
        }
        ]
    },
    {
        "id": "PRD507",
        "nome": "Sopa Sopa 200g",
        "empresa": "Cargil",
        "quantidade": 155,
        "valorCompra": 13.02,
        "valorVenda": 26.26,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-12",
            "quantidade": 72
        },
        {
            "id": "v2",
            "data": "2027-06-10",
            "quantidade": 36
        },
        {
            "id": "v3",
            "data": "2026-06-17",
            "quantidade": 47
        }
        ]
    },
    {
        "id": "PRD508",
        "nome": "Café Solúvel 2L",
        "empresa": "Ml",
        "quantidade": 44,
        "valorCompra": 6.23,
        "valorVenda": 14.37,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-25",
            "quantidade": 44
        }
        ]
    },
    {
        "id": "PRD509",
        "nome": "Chocolate Pasta 200g",
        "empresa": "Bemgel",
        "quantidade": 170,
        "valorCompra": 8.81,
        "valorVenda": 21.21,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-26",
            "quantidade": 58
        },
        {
            "id": "v2",
            "data": "2027-02-18",
            "quantidade": 112
        }
        ]
    },
    {
        "id": "PRD510",
        "nome": "Cacau Pasta 250g",
        "empresa": "Itambé",
        "quantidade": 128,
        "valorCompra": 8.2,
        "valorVenda": 20.27,
        "loja": {
        "corredor": "F",
        "gondola": "F10"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-31",
            "quantidade": 65
        },
        {
            "id": "v2",
            "data": "2026-11-21",
            "quantidade": 30
        },
        {
            "id": "v3",
            "data": "2027-02-17",
            "quantidade": 33
        }
        ]
    },
    {
        "id": "PRD511",
        "nome": "Iogurte Light 400g",
        "empresa": "Itambé",
        "quantidade": 146,
        "valorCompra": 14.09,
        "valorVenda": 29.98,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-13",
            "quantidade": 146
        }
        ]
    },
    {
        "id": "PRD512",
        "nome": "Manteiga Light 1kg",
        "empresa": "Bemgel",
        "quantidade": 21,
        "valorCompra": 3.33,
        "valorVenda": 4.65,
        "loja": {
        "corredor": "C",
        "gondola": "C6"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-03",
            "quantidade": 3
        },
        {
            "id": "v2",
            "data": "2026-06-03",
            "quantidade": 9
        },
        {
            "id": "v3",
            "data": "2026-06-26",
            "quantidade": 9
        }
        ]
    },
    {
        "id": "PRD513",
        "nome": "Cereal Cereal 500g",
        "empresa": "Ban",
        "quantidade": 61,
        "valorCompra": 14.63,
        "valorVenda": 22.56,
        "loja": {
        "corredor": "G",
        "gondola": "G3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "1",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-05",
            "quantidade": 21
        },
        {
            "id": "v2",
            "data": "2026-10-19",
            "quantidade": 16
        },
        {
            "id": "v3",
            "data": "2026-06-16",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD514",
        "nome": "Torrada Torrada 1kg",
        "empresa": "Fl",
        "quantidade": 68,
        "valorCompra": 9.64,
        "valorVenda": 15.03,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-07",
            "quantidade": 30
        },
        {
            "id": "v2",
            "data": "2026-07-14",
            "quantidade": 38
        }
        ]
    },
    {
        "id": "PRD515",
        "nome": "Chocolate Pasta 250g",
        "empresa": "Gul",
        "quantidade": 22,
        "valorCompra": 14.82,
        "valorVenda": 30.05,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-04",
            "quantidade": 22
        }
        ]
    },
    {
        "id": "PRD516",
        "nome": "Arroz Parbrizado 300g",
        "empresa": "Ml",
        "quantidade": 200,
        "valorCompra": 10.55,
        "valorVenda": 24.92,
        "loja": {
        "corredor": "E",
        "gondola": "E3"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "2",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-08",
            "quantidade": 109
        },
        {
            "id": "v2",
            "data": "2027-02-26",
            "quantidade": 25
        },
        {
            "id": "v3",
            "data": "2027-01-08",
            "quantidade": 66
        }
        ]
    },
    {
        "id": "PRD517",
        "nome": "Arroz Parbrizado 1L",
        "empresa": "Piracanjuba",
        "quantidade": 157,
        "valorCompra": 7.5,
        "valorVenda": 9.82,
        "loja": {
        "corredor": "E",
        "gondola": "E1"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "4",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-11-18",
            "quantidade": 35
        },
        {
            "id": "v2",
            "data": "2026-09-29",
            "quantidade": 122
        }
        ]
    },
    {
        "id": "PRD518",
        "nome": "Bolo Bolo 300g",
        "empresa": "Italac",
        "quantidade": 93,
        "valorCompra": 9.26,
        "valorVenda": 17.25,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-05",
            "quantidade": 93
        }
        ]
    },
    {
        "id": "PRD519",
        "nome": "Macarrão Com 500g",
        "empresa": "Nestlé",
        "quantidade": 24,
        "valorCompra": 9.54,
        "valorVenda": 22.12,
        "loja": {
        "corredor": "A",
        "gondola": "A4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-30",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2027-04-09",
            "quantidade": 15
        }
        ]
    },
    {
        "id": "PRD520",
        "nome": "Chocolate Pasta 2L",
        "empresa": "Bemgel",
        "quantidade": 106,
        "valorCompra": 3.95,
        "valorVenda": 5.78,
        "loja": {
        "corredor": "A",
        "gondola": "A3"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-26",
            "quantidade": 106
        }
        ]
    },
    {
        "id": "PRD521",
        "nome": "Sopa Sopa 1kg",
        "empresa": "Sr",
        "quantidade": 155,
        "valorCompra": 2.33,
        "valorVenda": 4.39,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-15",
            "quantidade": 25
        },
        {
            "id": "v2",
            "data": "2026-12-23",
            "quantidade": 35
        },
        {
            "id": "v3",
            "data": "2027-01-04",
            "quantidade": 95
        }
        ]
    },
    {
        "id": "PRD522",
        "nome": "Queijo Fresco 500g",
        "empresa": "Vr",
        "quantidade": 53,
        "valorCompra": 7.8,
        "valorVenda": 14.96,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-06",
            "quantidade": 9
        },
        {
            "id": "v2",
            "data": "2026-07-15",
            "quantidade": 12
        },
        {
            "id": "v3",
            "data": "2026-06-29",
            "quantidade": 17
        },
        {
            "id": "v4",
            "data": "2027-06-04",
            "quantidade": 15
        }
        ]
    },
    {
        "id": "PRD523",
        "nome": "Bolo Bolo 300g",
        "empresa": "Sadia",
        "quantidade": 169,
        "valorCompra": 9.52,
        "valorVenda": 13.59,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D9",
        "armario": "3",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 56
        },
        {
            "id": "v2",
            "data": "2026-12-26",
            "quantidade": 42
        },
        {
            "id": "v3",
            "data": "2027-03-10",
            "quantidade": 71
        }
        ]
    },
    {
        "id": "PRD524",
        "nome": "Chocolate Pasta 500g",
        "empresa": "Perdiguer",
        "quantidade": 72,
        "valorCompra": 1.41,
        "valorVenda": 3.42,
        "loja": {
        "corredor": "C",
        "gondola": "C9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-07-29",
            "quantidade": 23
        },
        {
            "id": "v2",
            "data": "2026-10-16",
            "quantidade": 8
        },
        {
            "id": "v3",
            "data": "2026-06-29",
            "quantidade": 7
        },
        {
            "id": "v4",
            "data": "2026-06-17",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD525",
        "nome": "Feijão Preto 400g",
        "empresa": "Sadia",
        "quantidade": 99,
        "valorCompra": 8.86,
        "valorVenda": 20.61,
        "loja": {
        "corredor": "E",
        "gondola": "E7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-08",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2026-05-14",
            "quantidade": 48
        }
        ]
    },
    {
        "id": "PRD526",
        "nome": "Iogurte Vegante 2L",
        "empresa": "Amula",
        "quantidade": 58,
        "valorCompra": 6.13,
        "valorVenda": 8.64,
        "loja": {
        "corredor": "D",
        "gondola": "D4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "5",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-25",
            "quantidade": 58
        }
        ]
    },
    {
        "id": "PRD527",
        "nome": "Queijo Mussarela 400g",
        "empresa": "Fl",
        "quantidade": 184,
        "valorCompra": 5.46,
        "valorVenda": 8.36,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-25",
            "quantidade": 184
        }
        ]
    },
    {
        "id": "PRD528",
        "nome": "Pão Com 250g",
        "empresa": "Amula",
        "quantidade": 158,
        "valorCompra": 11.09,
        "valorVenda": 22.67,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-04-03",
            "quantidade": 158
        }
        ]
    },
    {
        "id": "PRD529",
        "nome": "Queijo Prático 1L",
        "empresa": "Sadia",
        "quantidade": 108,
        "valorCompra": 4.51,
        "valorVenda": 6.67,
        "loja": {
        "corredor": "F",
        "gondola": "F4"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-17",
            "quantidade": 108
        }
        ]
    },
    {
        "id": "PRD530",
        "nome": "Manteiga Sem Sal 1L",
        "empresa": "Lti",
        "quantidade": 145,
        "valorCompra": 7.26,
        "valorVenda": 11.23,
        "loja": {
        "corredor": "E",
        "gondola": "E2"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-13",
            "quantidade": 85
        },
        {
            "id": "v2",
            "data": "2026-06-12",
            "quantidade": 60
        }
        ]
    },
    {
        "id": "PRD531",
        "nome": "Queijo Prático 2L",
        "empresa": "Sr",
        "quantidade": 147,
        "valorCompra": 5.66,
        "valorVenda": 10.14,
        "loja": {
        "corredor": "D",
        "gondola": "D2"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "2",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-28",
            "quantidade": 86
        },
        {
            "id": "v2",
            "data": "2026-06-20",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD532",
        "nome": "Manteiga Proteânto 1L",
        "empresa": "El either",
        "quantidade": 83,
        "valorCompra": 2.2,
        "valorVenda": 3.04,
        "loja": {
        "corredor": "G",
        "gondola": "G4"
        },
        "deposito": {
        "corredor": "D4",
        "armario": "4",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-12-15",
            "quantidade": 83
        }
        ]
    },
    {
        "id": "PRD533",
        "nome": "Cereal Cereal 200g",
        "empresa": "Kr",
        "quantidade": 139,
        "valorCompra": 12.49,
        "valorVenda": 19.6,
        "loja": {
        "corredor": "E",
        "gondola": "E6"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-22",
            "quantidade": 139
        }
        ]
    },
    {
        "id": "PRD534",
        "nome": "Cacau Pasta 2L",
        "empresa": "Piracanjuba",
        "quantidade": 150,
        "valorCompra": 12.93,
        "valorVenda": 27.3,
        "loja": {
        "corredor": "D",
        "gondola": "D10"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-02-06",
            "quantidade": 40
        },
        {
            "id": "v2",
            "data": "2026-12-08",
            "quantidade": 28
        },
        {
            "id": "v3",
            "data": "2027-05-06",
            "quantidade": 33
        },
        {
            "id": "v4",
            "data": "2027-05-21",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD535",
        "nome": "Cacau Pasta 1L",
        "empresa": "El either",
        "quantidade": 49,
        "valorCompra": 10.44,
        "valorVenda": 23.6,
        "loja": {
        "corredor": "G",
        "gondola": "G6"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "3",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-16",
            "quantidade": 49
        }
        ]
    },
    {
        "id": "PRD536",
        "nome": "Arroz Parbrizado 1kg",
        "empresa": "Cargil",
        "quantidade": 62,
        "valorCompra": 11.95,
        "valorVenda": 27.96,
        "loja": {
        "corredor": "B",
        "gondola": "B4"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "G"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-08",
            "quantidade": 28
        },
        {
            "id": "v2",
            "data": "2026-11-14",
            "quantidade": 34
        }
        ]
    },
    {
        "id": "PRD537",
        "nome": "Feijão Preto 1kg",
        "empresa": "Ml",
        "quantidade": 179,
        "valorCompra": 7.16,
        "valorVenda": 11.89,
        "loja": {
        "corredor": "F",
        "gondola": "F2"
        },
        "deposito": {
        "corredor": "D8",
        "armario": "5",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-16",
            "quantidade": 53
        },
        {
            "id": "v2",
            "data": "2026-11-15",
            "quantidade": 126
        }
        ]
    },
    {
        "id": "PRD538",
        "nome": "Queijo Mussarela 250g",
        "empresa": "Nata",
        "quantidade": 29,
        "valorCompra": 1.73,
        "valorVenda": 3.38,
        "loja": {
        "corredor": "B",
        "gondola": "B5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-31",
            "quantidade": 29
        }
        ]
    },
    {
        "id": "PRD539",
        "nome": "Manteiga Light 400g",
        "empresa": "Pr",
        "quantidade": 128,
        "valorCompra": 1.47,
        "valorVenda": 3.6,
        "loja": {
        "corredor": "C",
        "gondola": "C3"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-03-15",
            "quantidade": 128
        }
        ]
    },
    {
        "id": "PRD540",
        "nome": "Cacau Pasta 200g",
        "empresa": "Sadia",
        "quantidade": 153,
        "valorCompra": 10.27,
        "valorVenda": 24.96,
        "loja": {
        "corredor": "A",
        "gondola": "A1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "3",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-14",
            "quantidade": 22
        },
        {
            "id": "v2",
            "data": "2026-09-09",
            "quantidade": 70
        },
        {
            "id": "v3",
            "data": "2026-10-27",
            "quantidade": 61
        }
        ]
    },
    {
        "id": "PRD541",
        "nome": "Macarrão Com 300g",
        "empresa": "Ml",
        "quantidade": 145,
        "valorCompra": 12.52,
        "valorVenda": 27.06,
        "loja": {
        "corredor": "F",
        "gondola": "F1"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "5",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-21",
            "quantidade": 58
        },
        {
            "id": "v2",
            "data": "2026-11-18",
            "quantidade": 87
        }
        ]
    },
    {
        "id": "PRD542",
        "nome": "Macarrão Com 500g",
        "empresa": "Perdiguer",
        "quantidade": 70,
        "valorCompra": 14.49,
        "valorVenda": 20.8,
        "loja": {
        "corredor": "E",
        "gondola": "E5"
        },
        "deposito": {
        "corredor": "D5",
        "armario": "2",
        "prateleira": "A"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-14",
            "quantidade": 70
        }
        ]
    },
    {
        "id": "PRD543",
        "nome": "Bolo Bolo 500g",
        "empresa": "Vr",
        "quantidade": 111,
        "valorCompra": 9.63,
        "valorVenda": 13.77,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D10",
        "armario": "1",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-01-02",
            "quantidade": 111
        }
        ]
    },
    {
        "id": "PRD544",
        "nome": "Leite Com Ferro 200g",
        "empresa": "Fl",
        "quantidade": 103,
        "valorCompra": 13.73,
        "valorVenda": 24.88,
        "loja": {
        "corredor": "C",
        "gondola": "C8"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "2",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-06-02",
            "quantidade": 103
        }
        ]
    },
    {
        "id": "PRD545",
        "nome": "Iogurte Light 500g",
        "empresa": "Sr",
        "quantidade": 81,
        "valorCompra": 8.17,
        "valorVenda": 19.78,
        "loja": {
        "corredor": "A",
        "gondola": "A5"
        },
        "deposito": {
        "corredor": "D2",
        "armario": "5",
        "prateleira": "D"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-05-25",
            "quantidade": 48
        },
        {
            "id": "v2",
            "data": "2027-03-08",
            "quantidade": 33
        }
        ]
    },
    {
        "id": "PRD546",
        "nome": "Macarrão Com 1kg",
        "empresa": "El either",
        "quantidade": 31,
        "valorCompra": 14.68,
        "valorVenda": 20.31,
        "loja": {
        "corredor": "C",
        "gondola": "C2"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "4",
        "prateleira": "B"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2027-05-22",
            "quantidade": 6
        },
        {
            "id": "v2",
            "data": "2026-10-30",
            "quantidade": 25
        }
        ]
    },
    {
        "id": "PRD547",
        "nome": "Iogurte Light 1L",
        "empresa": "Lti",
        "quantidade": 57,
        "valorCompra": 10.27,
        "valorVenda": 21.11,
        "loja": {
        "corredor": "G",
        "gondola": "G8"
        },
        "deposito": {
        "corredor": "D3",
        "armario": "4",
        "prateleira": "C"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-09-29",
            "quantidade": 33
        },
        {
            "id": "v2",
            "data": "2026-08-13",
            "quantidade": 24
        }
        ]
    },
    {
        "id": "PRD548",
        "nome": "Leite Com Ferro 1kg",
        "empresa": "Zr",
        "quantidade": 132,
        "valorCompra": 8.33,
        "valorVenda": 11.42,
        "loja": {
        "corredor": "D",
        "gondola": "D7"
        },
        "deposito": {
        "corredor": "D1",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-08-12",
            "quantidade": 51
        },
        {
            "id": "v2",
            "data": "2027-04-11",
            "quantidade": 81
        }
        ]
    },
    {
        "id": "PRD549",
        "nome": "Torrada Torrada 500g",
        "empresa": "Perdiguer",
        "quantidade": 191,
        "valorCompra": 14.89,
        "valorVenda": 36.66,
        "loja": {
        "corredor": "F",
        "gondola": "F7"
        },
        "deposito": {
        "corredor": "D7",
        "armario": "4",
        "prateleira": "F"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-06-19",
            "quantidade": 114
        },
        {
            "id": "v2",
            "data": "2026-06-14",
            "quantidade": 77
        }
        ]
    },
    {
        "id": "PRD550",
        "nome": "Cereal Cereal 300g",
        "empresa": "Nestlé",
        "quantidade": 182,
        "valorCompra": 11.04,
        "valorVenda": 19.22,
        "loja": {
        "corredor": "G",
        "gondola": "G9"
        },
        "deposito": {
        "corredor": "D6",
        "armario": "1",
        "prateleira": "E"
        },
        "validades": [
        {
            "id": "v1",
            "data": "2026-10-02",
            "quantidade": 182
        }
        ]
    }
    ]

    function carregar() {
        const raw = localStorage.getItem(KEY);
        if (!raw) { salvarTodos(DEMO); return JSON.parse(JSON.stringify(DEMO)); }
        return JSON.parse(raw);
    }

    function salvarTodos(lista) { localStorage.setItem(KEY, JSON.stringify(lista)); }
    function listar() { return carregar(); }
    function buscarPorId(id) { return listar().find(p => p.id === id) || null; }

    function salvar(produto) {
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

    return { listar, buscarPorId, salvar, excluir, gerarId, adicionarValidade, excluirValidade, proximaValidade, statusValidade, exportarJSON, importarJSON, exportarExcel, importarExcel };
})();
