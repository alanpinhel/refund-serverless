import { Expense } from './expense'

export class Refund {
  id: number
  date: number
  reason: string
  status: string
  expenses: Expense[]
}
