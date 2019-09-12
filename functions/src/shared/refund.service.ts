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
  const partialRefund = { date: new Date().getTime(), status: 'Draft', reason: req.body.reason }
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
    .update({ status: req.body.status, reason: req.body.reason })
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

export default { getRefunds, postRefund, putRefund, deleteRefund }
