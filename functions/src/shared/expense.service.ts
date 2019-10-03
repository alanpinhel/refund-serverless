import { Response, Request } from 'express'
import db from './db'

function getExpenses(req: Request, res: Response) {
  db.getInstance()
    .collection('expenses')
    .where('refund', '==', req.query.refund)
    .get()
    .then((snapshot: any[]) => {
      const expenses: any[] = []
      snapshot.forEach(doc => {
        expenses.push({ id: doc.id, ...doc.data() })
      })
      res.status(200).json(expenses)
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function postExpense(req: Request, res: Response) {
  const { date, type, amount, refund } = req.body
  const partialExpense = { date, type, amount, refund }
  db.getInstance()
    .collection('expenses')
    .add(partialExpense)
    .then((doc: any) => {
      res.status(200).send({ id: doc.id, ...partialExpense })
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function putExpense(req: Request, res: Response) {
  const { date, type, amount } = req.body
  db.getInstance()
    .collection('expenses')
    .doc(req.params.id)
    .update({ date, type, amount })
    .then(() => {
      res.status(200).send()
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function deleteExpense(req: Request, res: Response) {
  db.getInstance()
    .collection('expenses')
    .doc(req.params.id)
    .delete()
    .then(() => {
      res.status(200).send()
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

export default { getExpenses, postExpense, putExpense, deleteExpense }
