import { Response, Request } from 'express'

const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

function getRefunds(_req: Request, res: Response) {
  db.collection('refunds')
    .get()
    .then((snapshot: any[]) => {
      const refunds: any[] = []
      snapshot.forEach(doc => {
        refunds.push({ id: doc.id, ...doc.data() })
      })
      res.status(200).json(refunds)
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function postRefund(req: Request, res: Response) {
  const partialRefund = { date: new Date().getTime(), reason: req.body.reason, status: 'draft', expenses: [], total: 0 }
  db.collection('refunds')
    .add(partialRefund)
    .then((doc: any) => {
      res.status(200).send({ id: doc.id, ...partialRefund })
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function putRefund(req: Request, res: Response) {
  db.collection('refunds')
    .doc(req.params.id)
    .update({ reason: req.body.reason, status: req.body.status, expenses: req.body.expenses, total: req.body.total })
    .then(() => {
      res.status(200).send()
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function deleteRefund(req: Request, res: Response) {
  db.collection('refunds')
    .doc(req.params.id)
    .delete()
    .then(() => {
      res.status(200).send()
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function postExpense(req: Request, res: Response) {
  const refundRef = db.collection('refunds').doc(req.params.id)
  refundRef
    .get()
    .then((doc: any) => {
      const { expenses, total } = doc.data()
      const updatedExpenses = [...expenses, { id: expenses.length + 1, type: req.body.type, date: req.body.date, value: req.body.value }]
      refundRef
        .update({
          id: doc.id,
          total: +total + req.body.value,
          expenses: updatedExpenses,
        })
        .then(() => {
          res.status(200).send()
        })
        .catch((err: any) => {
          res.status(500).send(err)
        })
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function deleteExpense(req: Request, res: Response) {
  const refundRef = db.collection('refunds').doc(req.params.id)
  refundRef
    .get()
    .then((doc: any) => {
      const { expenses, total } = doc.data()
      const deletedExpense = expenses.find((e: any) => e.id === +req.params.idExpense)
      const updatedExpenses = expenses.filter((e: any) => e !== deletedExpense)
      refundRef
        .update({
          id: doc.id,
          total: +total - deletedExpense.value,
          expenses: updatedExpenses,
        })
        .then(() => {
          res.status(200).send()
        })
        .catch((err: any) => {
          res.status(500).send(err)
        })
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

export default { getRefunds, postRefund, putRefund, deleteRefund, postExpense, deleteExpense }
