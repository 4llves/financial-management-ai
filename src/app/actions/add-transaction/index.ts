'use server'

import { db } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client'
import { addTransactionSchema } from './schema'
import { revalidatePath } from 'next/cache'

interface AddTransactionParams {
  name: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  payment_method: TransactionPaymentMethod
  date: Date
}

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params)

  const { userId: user_id } = await auth()

  if (!user_id) {
    throw new Error('Unauthorized')
  }

  await db.transaction.create({
    data: { ...params, user_id },
  })

  revalidatePath('/transactions')
}
