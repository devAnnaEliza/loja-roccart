# StoreKit Core

StoreKit Core é uma base reutilizável de e-commerce desenvolvida para acelerar a criação de lojas online modernas com arquitetura escalável, white-label e preparada para expansão futura.

O projeto foi pensado para:
- entrega rápida
- reutilização entre clientes
- integração futura com outros módulos do ecossistema
- manutenção simplificada
- crescimento progressivo sem retrabalho estrutural

---

# Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Context API
- Axios

## Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- Neon

---

# Funcionalidades atuais

- Catálogo de produtos
- Página individual de produto
- Variantes
- Carrinho multi-produto
- Persistência local
- Checkout via WhatsApp
- White-label básico
- Responsividade
- Estrutura modular
- Integração frontend/backend

---

# Estrutura do projeto

```txt
storekit-core/
├── frontend/
├── backend/
└── README.md
```

---

# Arquitetura

## Frontend

```txt
src/
├── components/
├── config/
├── features/
├── layouts/
├── styles/
└── utils/
```

## Backend

```txt
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

---

# White-label

O projeto foi estruturado para:
- múltiplos clientes
- customização visual
- branding configurável
- integração futura com Landing Core
- expansão modular sem acoplamento excessivo

---

# Roadmap futuro

- Painel administrativo
- Upload de imagens
- Gateway de pagamento
- Gestão de pedidos
- Autenticação
- Estoque avançado
- Multi-tenant
- Analytics

---

# Executando o frontend

```bash
cd frontend
npm install
npm run dev
```

# Executando o backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# Status

Demo comercializável em desenvolvimento.