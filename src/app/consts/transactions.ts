import { TransactionType } from '@prisma/client'

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: 'Educação',
  ENTERTAINMENT: 'Entretenimento',
  FOOD: 'Alimentação',
  HEALTH: 'Saúde',
  HOUSING: 'Moradia',
  OTHER: 'Outros',
  SALARY: 'Salário',
  TRANSPORTATION: 'Transporte',
  UTILITY: 'Utilidades',
}

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  BANK_TRANSFER: 'Transferência Bancária',
  BANK_SLIP: 'Boleto Bancário',
  CASH: 'Dinheiro',
  PIX: 'Pix',
  OTHER: 'Outros',
}

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: 'Despesa',
  },
  {
    value: TransactionType.DEPOSIT,
    label: 'Deposíto',
  },
  {
    value: TransactionType.INVESTIMENT,
    label: 'Investimento',
  },
]
