import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client'

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

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionPaymentMethod.OTHER],
  },
]

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: 'EDUCATION',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: 'ENTERTAINMENT',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: 'FOOD',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: 'HEALTH',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: 'HOUSING',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: 'OTHER',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: 'SALARY',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: 'TRANSPORTATION',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: 'UTILITY',
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
]
