# Loja Roccart

Loja virtual desenvolvida para a CIA Roccart com o objetivo de comercializar camisetas, produtos oficiais e materiais relacionados às produções da companhia.

O projeto foi desenvolvido utilizando como base o StoreKit Core, uma arquitetura reutilizável criada para acelerar o desenvolvimento de lojas virtuais personalizadas, recebendo nesta implementação toda a identidade visual, catálogo e configurações específicas da Roccart.


# Objetivo

Desenvolver uma plataforma simples, responsiva e de fácil utilização para que clientes possam visualizar os produtos disponíveis, selecionar variações, adicionar itens ao carrinho e concluir o pedido diretamente pelo WhatsApp.


# Tecnologias utilizadas

## Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL (Neon)
- Alembic


# Funcionalidades

- Catálogo de produtos
- Produto em destaque na página inicial
- Página individual de produtos
- Variações por tamanho
- Controle de estoque
- Carrinho de compras
- Persistência local do carrinho
- Checkout via WhatsApp
- Integração entre frontend e backend
- Layout totalmente responsivo


# Estrutura do projeto

```text
loja-roccart/
├── frontend/
├── backend/
└── README.md
```

# Organização

### Frontend

```text
src/
├── app/
├── assets/
├── components/
├── config/
├── features/
├── layouts/
├── lib/
└── styles/
```

### Backend

```text
backend/
├── app/
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── routes/
│   └── schemas/
├── migrations/
└── requirements.txt
```

## Acesse o projeto
🧷 Loja: https://loja-roccart.vercel.app/ 

# Licença

Projeto desenvolvido exclusivamente para a CIA Roccart.