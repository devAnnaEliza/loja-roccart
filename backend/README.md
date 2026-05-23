# StoreKit Core — Backend

Backend do StoreKit Core desenvolvido com FastAPI, PostgreSQL e SQLAlchemy.

---

# Stack

- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- Neon

---

# Funcionalidades atuais

- API de produtos
- Variantes de produto
- Integração com PostgreSQL
- Migrations com Alembic
- Estrutura modular
- Preparação para expansão futura

---

# Estrutura

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

# Rotas atuais

```txt
GET /products
GET /products/{id}
GET /health
```

---

# Executando

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# Objetivo

Fornecer uma API reutilizável e escalável para múltiplas lojas utilizando a mesma base estrutural.