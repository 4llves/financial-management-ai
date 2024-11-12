'use server'

import { db } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client'
import { upseartTransactionSchema } from './schema'
import { revalidatePath } from 'next/cache'

interface UpseartTransactionParams {
  id?: string
  name: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  payment_method: TransactionPaymentMethod
  date: Date
}

export const upseartTransaction = async (params: UpseartTransactionParams) => {
  upseartTransactionSchema.parse(params)

  const { userId: user_id } = await auth()

  if (!user_id) {
    throw new Error('Unauthorized')
  }

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, user_id },
    create: { ...params, user_id },
  })

  revalidatePath('/transactions')
}
