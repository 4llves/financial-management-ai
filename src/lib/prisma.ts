import { PrismaClient } from '@prisma/client'

// global.d.ts
interface Global {
  cachedPrisma: PrismaClient
}

declare const global: Global

// ...

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = global.cachedPrisma
} else {
  global.cachedPrisma = new PrismaClient()
  prisma = global.cachedPrisma
}

export const db = prisma
