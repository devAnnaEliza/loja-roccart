"""create products table

Revision ID: 9b44649d7c4f
Revises:
Create Date: 2026-05-19 19:30:39.255322
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = "9b44649d7c4f"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "products",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("description", sa.String(), nullable=False),
        sa.Column("price", sa.Float(), nullable=False),
        sa.Column("image", sa.String(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_products_id"), "products", ["id"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_products_id"), table_name="products")
    op.drop_table("products")