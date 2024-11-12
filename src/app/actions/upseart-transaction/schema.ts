import {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from '@prisma/client'
import { z } from 'zod'

export const upseartTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive().min(1),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  payment_method: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
})
