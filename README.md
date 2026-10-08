# AtacadoPro — operações e localização de produtos em atacado

Aplicação web de estudos que reúne **mapa interativo de uma loja**, localização de produtos e módulos simulados de cadastro, estoque e caixa.

## O que o projeto demonstra

- **Mapa de loja:** corredores, setores e gôndolas gerados e manipulados em SVG.
- **Roteamento visual:** interação com o mapa para indicar caminhos até produtos/setores.
- **Cadastro e estoque:** produtos, quantidades e acompanhamento de lotes com datas de validade.
- **Caixa:** fluxo demonstrativo de vendas, com histórico armazenado no navegador.
- **Perfis simulados:** modos de visualização para cliente, administração, conferência e caixa.
- **Importação/exportação:** operações com JSON e planilhas, conforme os recursos implementados.

## Tecnologias da versão atual

- HTML5, CSS3 e JavaScript puro.
- SVG para visualização da planta da loja.
- LocalStorage para guardar dados no navegador.
- Biblioteca XLSX para recursos de planilhas (quando carregada no ambiente).

> **Limitação importante:** os perfis do arquivo `js/auth.js` representam apenas um controle demonstrativo de interface. **Não são login, autenticação ou autorização seguros.** Não há backend ou banco de dados de servidor nesta versão.

## Organização

```text
atacadoPro/
├── index.html
├── css/
│   ├── variables.css
│   ├── styles.css
│   ├── cadastro.css
│   ├── dashboard.css
│   └── caixa.css
└── js/
    ├── auth.js
    ├── cadastro.js
    ├── caixa.js
    ├── db.js
    ├── map.config.js
    ├── map.builder.js
    └── map.router.js
```

**Principais responsabilidades:**

| Arquivo | Responsabilidade |
| --- | --- |
| `js/map.config.js` | Configuração da loja e posições de corredores e setores |
| `js/map.builder.js` | Montagem visual do mapa SVG |
| `js/map.router.js` | Cálculo e representação de rotas no mapa |
| `js/db.js` | Produtos, lotes, vendas e importação/exportação local |
| `js/cadastro.js` | Interface e operações de cadastro |
| `js/caixa.js` | Fluxos de caixa e vendas |
| `js/auth.js` | Troca de perfis simulados na interface |

## Executar localmente

Clone ou baixe o repositório. Na pasta do projeto, você pode usar um servidor local:

```bash
npx serve .
```

Abra a URL informada pelo comando. Como alternativa, experimente abrir `index.html` diretamente no navegador.

## Limitações e oportunidades de evolução

O projeto usa dados locais e não é adequado, nessa versão, para transações reais, autenticação de funcionários ou múltiplos dispositivos. Etapas futuras possíveis: API de produtos, banco relacional, login seguro, testes e deploy.

## Objetivo de aprendizagem

Estudar organização de JavaScript, manipulação de DOM/SVG, estruturas de dados e regras de negócio a partir de um problema de varejo.

[Perfil no GitHub](https://github.com/LuizAlbertoDev)
