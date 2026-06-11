# AtacadoPro — Localizador de Produtos

Mapa interativo de supermercado atacadista com dark mode, geração dinâmica de gôndolas e roteamento visual até o produto.

---

## 📁 Estrutura do Projeto

```
AtacadoPro/
│
├── index.html              ← Ponto de entrada principal
│
├── css/
│   ├── variables.css       ← Design tokens (cores, espaçamentos, tipografia)
│   └── styles.css          ← Layout, componentes e animações
│
└── js/
    ├── map.config.js       ← Configuração da loja (corredores, setores, dimensões)
    ├── map.builder.js      ← Geração dinâmica dos elementos SVG
    └── map.router.js       ← Motor de roteamento e interações do mapa
```

---

## 🧩 Responsabilidades dos Arquivos JS

| Arquivo          | O que faz                                                      |
|------------------|----------------------------------------------------------------|
| `map.config.js`  | Dados e dimensões da loja. **Edite aqui** para expandir.       |
| `map.builder.js` | Lê o config e gera os `<g>` das prateleiras e caixas no SVG.  |
| `map.router.js`  | Calcula o caminho, anima a rota e atualiza o painel lateral.   |

---

## ✏️ Como adicionar um novo corredor

Abra `js/map.config.js` e adicione ao array `corredores`:

```js
{ id: 'H', x: 1010, color: 'var(--cor-a)' },
```

Nenhum outro arquivo precisa ser alterado.

---

## ✏️ Como mudar as cores

Abra `css/variables.css` e altere os valores das variáveis CSS. As mudanças se propagam automaticamente por todo o projeto.

---

## 🚀 Como rodar

Abra o `index.html` diretamente no navegador **ou** use um servidor local:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Depois acesse `http://localhost:8080`.

---

## 🛠️ Melhorias implementadas

- **Separação de responsabilidades** (HTML, CSS e JS em arquivos dedicados)
- **Design Tokens centralizados** em `variables.css`
- **Padrão de módulo JS** (`IIFE`) com `MapBuilder` e `MapRouter` — sem poluição do escopo global
- **Configuração externalizada** — adicionar corredores/setores não exige mexer na lógica
- **Cache de elementos DOM** no roteador (evita `querySelector` repetido)
- **Animação de entrada** no painel de informação
- **Acessibilidade básica**: `aria-label`, `aria-live`, `role="img"`, `user-select: none`
- **Responsividade** para telas menores
- **`prefers-reduced-motion`** respeitado
