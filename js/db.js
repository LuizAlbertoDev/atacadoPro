/**
 * AtacadoPro | db.js
 * Gerencia produtos com suporte a múltiplas validades por lote.
 */

const DB = (() => {
    const KEY = 'atacadopro_produtos';

    const DEMO = [
        {
            id: 'PRD001', nome: 'Arroz Tipo 1 5kg', empresa: 'Tio João',
            quantidade: 240, valorCompra: 12.50, valorVenda: 18.90,
            loja: { corredor: 'A', gondola: 'A3' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-03-15', quantidade: 150 },
                { id: 'v2', data: '2026-09-20', quantidade: 90 }
            ]
        },
        {
            id: 'PRD002', nome: 'Feijão Carioca 1kg', empresa: 'Camil',
            quantidade: 180, valorCompra: 5.80, valorVenda: 8.49,
            loja: { corredor: 'A', gondola: 'A5' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'A' },
            validades: [{ id: 'v1', data: '2026-08-20', quantidade: 180 }]
        },
        {
            id: 'PRD003', nome: 'Óleo de Soja 900ml', empresa: 'Liza',
            quantidade: 96, valorCompra: 7.20, valorVenda: 10.99,
            loja: { corredor: 'B', gondola: 'B2' },
            deposito: { corredor: 'D2', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2025-11-30', quantidade: 40 },
                { id: 'v2', data: '2026-05-15', quantidade: 56 }
            ]
        },
        {
            id: 'PRD004', nome: 'Macarrão Espaguete 500g', empresa: 'Barilla',
            quantidade: 312, valorCompra: 4.10, valorVenda: 6.49,
            loja: { corredor: 'B', gondola: 'B7' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'A' },
            validades: [{ id: 'v1', data: '2027-01-10', quantidade: 312 }]
        },
        {
            id: 'PRD005', nome: 'Leite Integral 1L', empresa: 'Italac',
            quantidade: 576, valorCompra: 3.40, valorVenda: 5.29,
            loja: { corredor: 'C', gondola: 'C1' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2025-09-05', quantidade: 200 },
                { id: 'v2', data: '2025-12-10', quantidade: 376 }
            ]
        },
        {
            id: 'PRD006', nome: 'Açúcar Refinado 2kg', empresa: 'União',
            quantidade: 200, valorCompra: 6.90, valorVenda: 10.49,
            loja: { corredor: 'A', gondola: 'A8' },
            deposito: { corredor: 'D1', armario: '5', prateleira: 'B' },
            validades: [{ id: 'v1', data: '2027-06-01', quantidade: 200 }]
        },
        {
            id: 'PRD007', nome: 'Salgadinho de Frango 500g', empresa: 'Assaí',
            quantidade: 150, valorCompra: 4.50, valorVenda: 7.20,
            loja: { corredor: 'A', gondola: 'A1' },
            deposito: { corredor: 'D1', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-08-15', quantidade: 90 },
                { id: 'v2', data: '2027-02-20', quantidade: 60 }
            ]
        },
        {
            id: 'PRD008', nome: 'Milho Curto 400g', empresa: 'Petit',
            quantidade: 120, valorCompra: 3.20, valorVenda: 5.49,
            loja: { corredor: 'A', gondola: 'A2' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-10-10', quantidade: 70 },
                { id: 'v2', data: '2027-04-15', quantidade: 50 }
            ]
        },
        {
            id: 'PRD009', nome: 'Café Prego 1kg', empresa: 'Café Bruto',
            quantidade: 280, valorCompra: 22.00, valorVenda: 34.90,
            loja: { corredor: 'A', gondola: 'A4' },
            deposito: { corredor: 'D2', armario: '3', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-12-05', quantidade: 160 },
                { id: 'v2', data: '2027-06-10', quantidade: 120 }
            ]
        },
        {
            id: 'PRD010', nome: 'Biscoito Recheado', empresa: 'Oreo',
            quantidade: 200, valorCompra: 2.80, valorVenda: 4.99,
            loja: { corredor: 'A', gondola: 'A6' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-09-20', quantidade: 110 },
                { id: 'v2', data: '2027-03-25', quantidade: 90 }
            ]
        },
        {
            id: 'PRD011', nome: 'Leite em Pó 400g', empresa: 'Nestlé',
            quantidade: 180, valorCompra: 18.50, valorVenda: 27.90,
            loja: { corredor: 'A', gondola: 'A7' },
            deposito: { corredor: 'D3', armario: '5', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-11-15', quantidade: 100 },
                { id: 'v2', data: '2027-05-20', quantidade: 80 }
            ]
        },
        {
            id: 'PRD012', nome: 'Tomate Pelado 400g', empresa: 'Gallego',
            quantidade: 140, valorCompra: 4.80, valorVenda: 7.99,
            loja: { corredor: 'A', gondola: 'A9' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-07-30', quantidade: 80 },
                { id: 'v2', data: '2027-01-05', quantidade: 60 }
            ]
        },
        {
            id: 'PRD013', nome: 'Farinha de Trigo 1kg', empresa: 'Yoki',
            quantidade: 320, valorCompra: 3.90, valorVenda: 6.49,
            loja: { corredor: 'A', gondola: 'A10' },
            deposito: { corredor: 'D4', armario: '2', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-03-10', quantidade: 190 },
                { id: 'v2', data: '2027-09-15', quantidade: 130 }
            ]
        },
        {
            id: 'PRD014', nome: 'Atum em Fatias 150g', empresa: 'Gervais',
            quantidade: 160, valorCompra: 6.20, valorVenda: 10.99,
            loja: { corredor: 'B', gondola: 'B1' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-08-25', quantidade: 95 },
                { id: 'v2', data: '2027-02-30', quantidade: 65 }
            ]
        },
        {
            id: 'PRD015', nome: 'Chá Verde 20un', empresa: 'Kangh',
            quantidade: 100, valorCompra: 3.50, valorVenda: 5.99,
            loja: { corredor: 'B', gondola: 'B3' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-10-20', quantidade: 60 },
                { id: 'v2', data: '2027-04-25', quantidade: 40 }
            ]
        },
        {
            id: 'PRD016', nome: 'Hambúrguer 100g', empresa: 'Sad',
            quantidade: 90, valorCompra: 5.80, valorVenda: 9.49,
            loja: { corredor: 'B', gondola: 'B4' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-07-15', quantidade: 55 },
                { id: 'v2', data: '2026-12-20', quantidade: 35 }
            ]
        },
        {
            id: 'PRD017', nome: 'Queijo Mussarola 200g', empresa: 'Prado',
            quantidade: 130, valorCompra: 8.90, valorVenda: 14.99,
            loja: { corredor: 'B', gondola: 'B5' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-09-10', quantidade: 78 },
                { id: 'v2', data: '2027-03-15', quantidade: 52 }
            ]
        },
        {
            id: 'PRD018', nome: 'Extrato de Tomate 340g', empresa: 'Fioritti',
            quantidade: 175, valorCompra: 2.90, valorVenda: 4.99,
            loja: { corredor: 'B', gondola: 'B6' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-01-20', quantidade: 105 },
                { id: 'v2', data: '2027-07-25', quantidade: 70 }
            ]
        },
        {
            id: 'PRD019', nome: 'Pão de Formiga 400g', empresa: 'Marajo',
            quantidade: 210, valorCompra: 5.20, valorVenda: 8.99,
            loja: { corredor: 'B', gondola: 'B8' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-08-05', quantidade: 126 },
                { id: 'v2', data: '2026-11-10', quantidade: 84 }
            ]
        },
        {
            id: 'PRD020', nome: 'Gelatina Uva 20g', empresa: 'Dr. Oetker',
            quantidade: 145, valorCompra: 1.80, valorVenda: 3.49,
            loja: { corredor: 'B', gondola: 'B9' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-02-15', quantidade: 87 },
                { id: 'v2', data: '2027-08-20', quantidade: 58 }
            ]
        },
        {
            id: 'PRD021', nome: 'Aveia em Grãos 500g', empresa: 'NuSoilh',
            quantidade: 115, valorCompra: 6.40, valorVenda: 10.99,
            loja: { corredor: 'B', gondola: 'B10' },
            deposito: { corredor: 'D2', armario: '5', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-11-30', quantidade: 69 },
                { id: 'v2', data: '2027-05-05', quantidade: 46 }
            ]
        },
        {
            id: 'PRD022', nome: 'Iogurte Natural 200g', empresa: 'Yoki',
            quantidade: 240, valorCompra: 3.10, valorVenda: 5.49,
            loja: { corredor: 'C', gondola: 'C2' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-07-20', quantidade: 144 },
                { id: 'v2', data: '2026-10-25', quantidade: 96 }
            ]
        },
        {
            id: 'PRD023', nome: 'Manteiga sem Sal 200g', empresa: 'Bressan',
            quantidade: 165, valorCompra: 9.80, valorVenda: 15.99,
            loja: { corredor: 'C', gondola: 'C3' },
            deposito: { corredor: 'D3', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-12-15', quantidade: 99 },
                { id: 'v2', data: '2027-06-20', quantidade: 66 }
            ]
        },
        {
            id: 'PRD024', nome: 'Ervilha Fina 400g', empresa: 'Petit',
            quantidade: 135, valorCompra: 4.10, valorVenda: 6.99,
            loja: { corredor: 'C', gondola: 'C4' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-03-25', quantidade: 81 },
                { id: 'v2', data: '2027-09-30', quantidade: 54 }
            ]
        },
        {
            id: 'PRD025', nome: 'Maionese de Legumes 340g', empresa: 'Heinz',
            quantidade: 155, valorCompra: 5.60, valorVenda: 9.49,
            loja: { corredor: 'C', gondola: 'C5' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-09-05', quantidade: 93 },
                { id: 'v2', data: '2027-03-10', quantidade: 62 }
            ]
        },
        {
            id: 'PRD026', nome: 'Coco Ralado 100g', empresa: 'Gildo',
            quantidade: 125, valorCompra: 4.70, valorVenda: 7.99,
            loja: { corredor: 'C', gondola: 'C6' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-10-30', quantidade: 75 },
                { id: 'v2', data: '2027-04-05', quantidade: 50 }
            ]
        },
        {
            id: 'PRD027', nome: 'Vinagre Branco 500ml', empresa: 'Carte Dor',
            quantidade: 185, valorCompra: 3.80, valorVenda: 6.49,
            loja: { corredor: 'C', gondola: 'C7' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-05-15', quantidade: 111 },
                { id: 'v2', data: '2028-01-20', quantidade: 74 }
            ]
        },
        {
            id: 'PRD028', nome: 'Pimenta do Reino 50g', empresa: 'Dyni',
            quantidade: 95, valorCompra: 7.20, valorVenda: 12.99,
            loja: { corredor: 'C', gondola: 'C8' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-08-10', quantidade: 57 },
                { id: 'v2', data: '2028-02-15', quantidade: 38 }
            ]
        },
        {
            id: 'PRD029', nome: 'Mostarda Clássica 150g', empresa: 'Heinz',
            quantidade: 140, valorCompra: 4.90, valorVenda: 8.49,
            loja: { corredor: 'C', gondola: 'C9' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-11-25', quantidade: 84 },
                { id: 'v2', data: '2027-05-30', quantidade: 56 }
            ]
        },
        {
            id: 'PRD030', nome: 'Ketchup Original 250g', empresa: 'Heinz',
            quantidade: 170, valorCompra: 5.30, valorVenda: 9.29,
            loja: { corredor: 'C', gondola: 'C10' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-12-10', quantidade: 102 },
                { id: 'v2', data: '2027-06-15', quantidade: 68 }
            ]
        },
        {
            id: 'PRD031', nome: 'Chocolate em Pó 200g', empresa: 'Nestlé',
            quantidade: 195, valorCompra: 8.40, valorVenda: 14.29,
            loja: { corredor: 'D', gondola: 'D1' },
            deposito: { corredor: 'D2', armario: '5', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-04-20', quantidade: 117 },
                { id: 'v2', data: '2027-10-25', quantidade: 78 }
            ]
        },
        {
            id: 'PRD032', nome: 'Leite Condensado 200g', empresa: 'Nestlé',
            quantidade: 225, valorCompra: 4.60, valorVenda: 7.99,
            loja: { corredor: 'D', gondola: 'D2' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-10-05', quantidade: 135 },
                { id: 'v2', data: '2027-04-10', quantidade: 90 }
            ]
        },
        {
            id: 'PRD033', nome: 'Salmão em Fatias 100g', empresa: 'Santa Maria',
            quantidade: 88, valorCompra: 12.50, valorVenda: 21.99,
            loja: { corredor: 'D', gondola: 'D3' },
            deposito: { corredor: 'D3', armario: '2', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-07-25', quantidade: 53 },
                { id: 'v2', data: '2026-10-30', quantidade: 35 }
            ]
        },
        {
            id: 'PRD034', nome: 'Patê de Frango 85g', empresa: 'Gourmet',
            quantidade: 112, valorCompra: 6.80, valorVenda: 11.49,
            loja: { corredor: 'D', gondola: 'D4' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-09-15', quantidade: 67 },
                { id: 'v2', data: '2027-03-20', quantidade: 45 }
            ]
        },
        {
            id: 'PRD035', nome: 'Risoto de Limão 400g', empresa: 'Barilla',
            quantidade: 158, valorCompra: 7.90, valorVenda: 13.49,
            loja: { corredor: 'D', gondola: 'D5' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-01-30', quantidade: 95 },
                { id: 'v2', data: '2027-07-05', quantidade: 63 }
            ]
        },
        {
            id: 'PRD036', nome: 'Pasta de Amendoim 200g', empresa: 'Sol levels',
            quantidade: 134, valorCompra: 11.20, valorVenda: 18.99,
            loja: { corredor: 'D', gondola: 'D6' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-06-10', quantidade: 80 },
                { id: 'v2', data: '2028-01-15', quantidade: 54 }
            ]
        },
        {
            id: 'PRD037', nome: 'Melaço de Canela 250ml', empresa: 'Flor d sleeve',
            quantidade: 146, valorCompra: 9.50, valorVenda: 16.29,
            loja: { corredor: 'D', gondola: 'D7' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-09-20', quantidade: 88 },
                { id: 'v2', data: '2028-03-25', quantidade: 58 }
            ]
        },
        {
            id: 'PRD038', nome: 'ರು radio 1kg', empresa: 'Tio João',
            quantidade: 178, valorCompra: 15.80, valorVenda: 26.49,
            loja: { corredor: 'D', gondola: 'D8' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2026-11-05', quantidade: 107 },
                { id: 'v2', data: '2027-05-10', quantidade: 71 }
            ]
        },
        {
            id: 'PRD039', nome: 'Chiclete de Fruta 50g', empresa: 'Halls',
            quantidade: 205, valorCompra: 2.40, valorVenda: 4.29,
            loja: { corredor: 'D', gondola: 'D9' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-02-28', quantidade: 123 },
                { id: 'v2', data: '2027-08-05', quantidade: 82 }
            ]
        },
        {
            id: 'PRD040', nome: 'Bala de Goma 100g', empresa: 'Super Bala',
            quantidade: 188, valorCompra: 3.10, valorVenda: 5.49,
            loja: { corredor: 'D', gondola: 'D10' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-04-15', quantidade: 113 },
                { id: 'v2', data: '2027-10-20', quantidade: 75 }
            ]
        },
        {
            id: 'PRD041', nome: 'Ninho 400g', empresa: 'Nestlé',
            quantidade: 162, valorCompra: 24.50, valorVenda: 39.99,
            loja: { corredor: 'E', gondola: 'E1' },
            deposito: { corredor: 'D2', armario: '5', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-07-30', quantidade: 97 },
                { id: 'v2', data: '2028-01-05', quantidade: 65 }
            ]
        },
        {
            id: 'PRD042', nome: 'Cracker de Queijo 150g', empresa: 'Prado',
            quantidade: 147, valorCompra: 7.60, valorVenda: 12.99,
            loja: { corredor: 'E', gondola: 'E2' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-12-20', quantidade: 88 },
                { id: 'v2', data: '2027-06-25', quantidade: 59 }
            ]
        },
        {
            id: 'PRD043', nome: 'Sopa de Legumes 300g', empresa: 'Gourmet',
            quantidade: 173, valorCompra: 5.40, valorVenda: 9.29,
            loja: { corredor: 'E', gondola: 'E3' },
            deposito: { corredor: 'D3', armario: '2', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-03-05', quantidade: 104 },
                { id: 'v2', data: '2027-09-10', quantidade: 69 }
            ]
        },
        {
            id: 'PRD044', nome: 'Talino de Espinha 500g', empresa: 'Barilla',
            quantidade: 236, valorCompra: 4.80, valorVenda: 7.99,
            loja: { corredor: 'E', gondola: 'E4' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-08-15', quantidade: 142 },
                { id: 'v2', data: '2028-02-20', quantidade: 94 }
            ]
        },
        {
            id: 'PRD045', nome: 'Creme de Leite 200ml', empresa: 'Italac',
            quantidade: 258, valorCompra: 3.90, valorVenda: 6.49,
            loja: { corredor: 'E', gondola: 'E5' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-08-10', quantidade: 155 },
                { id: 'v2', data: '2026-11-15', quantidade: 103 }
            ]
        },
        {
            id: 'PRD046', nome: 'Requeijão Creamy 200g', empresa: 'Italac',
            quantidade: 214, valorCompra: 5.10, valorVenda: 8.99,
            loja: { corredor: 'E', gondola: 'E6' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-09-25', quantidade: 128 },
                { id: 'v2', data: '2026-12-30', quantidade: 86 }
            ]
        },
        {
            id: 'PRD047', nome: 'Margarina sem Sal 200g', empresa: 'Bressan',
            quantidade: 182, valorCompra: 6.70, valorVenda: 11.49,
            loja: { corredor: 'E', gondola: 'E7' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-01-15', quantidade: 109 },
                { id: 'v2', data: '2027-07-20', quantidade: 73 }
            ]
        },
        {
            id: 'PRD048', nome: 'Queijo Minas 200g', empresa: 'Prado',
            quantidade: 196, valorCompra: 8.20, valorVenda: 14.29,
            loja: { corredor: 'E', gondola: 'E8' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2026-07-30', quantidade: 118 },
                { id: 'v2', data: '2026-10-05', quantidade: 78 }
            ]
        },
        {
            id: 'PRD049', nome: 'Prato Pronto de Frango 300g', empresa: 'Gourmet',
            quantidade: 128, valorCompra: 9.80, valorVenda: 16.99,
            loja: { corredor: 'E', gondola: 'E9' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2026-08-20', quantidade: 77 },
                { id: 'v2', data: '2026-11-25', quantidade: 51 }
            ]
        },
        {
            id: 'PRD050', nome: 'Victoria de Tomate 400g', empresa: 'Fioritti',
            quantidade: 164, valorCompra: 4.30, valorVenda: 7.49,
            loja: { corredor: 'E', gondola: 'E10' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-05-05', quantidade: 98 },
                { id: 'v2', data: '2027-11-10', quantidade: 66 }
            ]
        },
        {
            id: 'PRD051', nome: 'Purê de Batata 400g', empresa: 'Gourmet',
            quantidade: 192, valorCompra: 6.50, valorVenda: 11.29,
            loja: { corredor: 'F', gondola: 'F1' },
            deposito: { corredor: 'D2', armario: '5', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2027-09-15', quantidade: 115 },
                { id: 'v2', data: '2028-03-20', quantidade: 77 }
            ]
        },
        {
            id: 'PRD052', nome: 'Sopa de Feijão 300g', empresa: 'Camil',
            quantidade: 156, valorCompra: 5.70, valorVenda: 9.99,
            loja: { corredor: 'F', gondola: 'F2' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-02-10', quantidade: 94 },
                { id: 'v2', data: '2027-08-15', quantidade: 62 }
            ]
        },
        {
            id: 'PRD053', nome: 'Arroz Integral 1kg', empresa: 'Tio João',
            quantidade: 224, valorCompra: 9.20, valorVenda: 15.99,
            loja: { corredor: 'F', gondola: 'F3' },
            deposito: { corredor: 'D3', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-10-25', quantidade: 134 },
                { id: 'v2', data: '2028-04-30', quantidade: 90 }
            ]
        },
        {
            id: 'PRD054', nome: 'Quinoa em Grãos 500g', empresa: 'NuSoilh',
            quantidade: 142, valorCompra: 14.80, valorVenda: 24.99,
            loja: { corredor: 'F', gondola: 'F4' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2028-01-15', quantidade: 85 },
                { id: 'v2', data: '2028-07-20', quantidade: 57 }
            ]
        },
        {
            id: 'PRD055', nome: 'Lentilha 500g', empresa: 'Camil',
            quantidade: 168, valorCompra: 7.40, valorVenda: 12.49,
            loja: { corredor: 'F', gondola: 'F5' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2027-11-30', quantidade: 101 },
                { id: 'v2', data: '2028-05-05', quantidade: 67 }
            ]
        },
        {
            id: 'PRD056', nome: 'Grão de Bico 500g', empresa: 'Camil',
            quantidade: 186, valorCompra: 6.80, valorVenda: 11.99,
            loja: { corredor: 'F', gondola: 'F6' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2027-12-20', quantidade: 112 },
                { id: 'v2', data: '2028-06-25', quantidade: 74 }
            ]
        },
        {
            id: 'PRD057', nome: 'Azeite de Dendê 250ml', empresa: 'Carla',
            quantidade: 134, valorCompra: 11.50, valorVenda: 19.99,
            loja: { corredor: 'F', gondola: 'F7' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2028-03-10', quantidade: 80 },
                { id: 'v2', data: '2028-09-15', quantidade: 54 }
            ]
        },
        {
            id: 'PRD058', nome: 'Óleo de Oliva 500ml', empresa: 'Carla',
            quantidade: 158, valorCompra: 18.90, valorVenda: 32.99,
            loja: { corredor: 'F', gondola: 'F8' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2028-06-25', quantidade: 95 },
                { id: 'v2', data: '2029-01-30', quantidade: 63 }
            ]
        },
        {
            id: 'PRD059', nome: 'Sal Rosa 500g', empresa: 'Natur',
            quantidade: 112, valorCompra: 8.70, valorVenda: 15.49,
            loja: { corredor: 'F', gondola: 'F9' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2028-09-05', quantidade: 67 },
                { id: 'v2', data: '2029-03-10', quantidade: 45 }
            ]
        },
        {
            id: 'PRD060', nome: 'Coentros em Grãos 50g', empresa: 'Dyni',
            quantidade: 98, valorCompra: 6.20, valorVenda: 10.99,
            loja: { corredor: 'F', gondola: 'F10' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2028-12-15', quantidade: 59 },
                { id: 'v2', data: '2029-06-20', quantidade: 39 }
            ]
        },
        {
            id: 'PRD061', nome: 'Alecrim Seco 30g', empresa: 'Dyni',
            quantidade: 86, valorCompra: 5.40, valorVenda: 9.49,
            loja: { corredor: 'G', gondola: 'G1' },
            deposito: { corredor: 'D2', armario: '5', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2029-02-28', quantidade: 52 },
                { id: 'v2', data: '2029-08-05', quantidade: 34 }
            ]
        },
        {
            id: 'PRD062', nome: 'Orégano Seco 40g', empresa: 'Dyni',
            quantidade: 94, valorCompra: 4.90, valorVenda: 8.99,
            loja: { corredor: 'G', gondola: 'G2' },
            deposito: { corredor: 'D3', armario: '1', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2029-05-10', quantidade: 56 },
                { id: 'v2', data: '2029-11-15', quantidade: 38 }
            ]
        },
        {
            id: 'PRD063', nome: 'Salsinha Seca 35g', empresa: 'Dyni',
            quantidade: 88, valorCompra: 4.60, valorVenda: 8.29,
            loja: { corredor: 'G', gondola: 'G3' },
            deposito: { corredor: 'D3', armario: '2', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2029-07-20', quantidade: 53 },
                { id: 'v2', data: '2030-01-25', quantidade: 35 }
            ]
        },
        {
            id: 'PRD064', nome: 'Pimenta Calabresa 50g', empresa: 'Dyni',
            quantidade: 102, valorCompra: 7.80, valorVenda: 13.99,
            loja: { corredor: 'G', gondola: 'G4' },
            deposito: { corredor: 'D4', armario: '3', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2029-10-05', quantidade: 61 },
                { id: 'v2', data: '2030-04-10', quantidade: 41 }
            ]
        },
        {
            id: 'PRD065', nome: 'Cominho em Grãos 60g', empresa: 'Dyni',
            quantidade: 96, valorCompra: 6.50, valorVenda: 11.49,
            loja: { corredor: 'G', gondola: 'G5' },
            deposito: { corredor: 'D4', armario: '4', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2029-12-15', quantidade: 58 },
                { id: 'v2', data: '2030-06-20', quantidade: 38 }
            ]
        },
        {
            id: 'PRD066', nome: 'Cúrcuma em Pó 50g', empresa: 'Natur',
            quantidade: 108, valorCompra: 9.20, valorVenda: 16.49,
            loja: { corredor: 'G', gondola: 'G6' },
            deposito: { corredor: 'D5', armario: '5', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2030-03-05', quantidade: 65 },
                { id: 'v2', data: '2030-09-10', quantidade: 43 }
            ]
        },
        {
            id: 'PRD067', nome: 'Gengibre em Pó 40g', empresa: 'Natur',
            quantidade: 92, valorCompra: 8.40, valorVenda: 14.99,
            loja: { corredor: 'G', gondola: 'G7' },
            deposito: { corredor: 'D5', armario: '1', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2030-05-20', quantidade: 55 },
                { id: 'v2', data: '2030-11-25', quantidade: 37 }
            ]
        },
        {
            id: 'PRD068', nome: 'Cardamomo 30g', empresa: 'Natur',
            quantidade: 78, valorCompra: 12.80, valorVenda: 22.99,
            loja: { corredor: 'G', gondola: 'G8' },
            deposito: { corredor: 'D1', armario: '2', prateleira: 'B' },
            validades: [
                { id: 'v1', data: '2030-08-10', quantidade: 47 },
                { id: 'v2', data: '2031-02-15', quantidade: 31 }
            ]
        },
        {
            id: 'PRD069', nome: 'Canela em Pó 50g', empresa: 'Dyni',
            quantidade: 114, valorCompra: 7.10, valorVenda: 12.49,
            loja: { corredor: 'G', gondola: 'G9' },
            deposito: { corredor: 'D1', armario: '3', prateleira: 'C' },
            validades: [
                { id: 'v1', data: '2030-11-25', quantidade: 68 },
                { id: 'v2', data: '2031-05-30', quantidade: 46 }
            ]
        },
        {
            id: 'PRD070', nome: 'Noz Moscada 25g', empresa: 'Dyni',
            quantidade: 72, valorCompra: 14.50, valorVenda: 26.99,
            loja: { corredor: 'G', gondola: 'G10' },
            deposito: { corredor: 'D2', armario: '4', prateleira: 'A' },
            validades: [
                { id: 'v1', data: '2031-02-15', quantidade: 43 },
                { id: 'v2', data: '2031-08-20', quantidade: 29 }
            ]
        },
    ];

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
