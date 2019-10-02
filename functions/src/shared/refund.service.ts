import { Response, Request } from 'express'

import db from './db'

function getRefunds(_req: Request, res: Response) {
  db.getInstance()
    .collection('refunds')
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
  const partialRefund = { date: new Date().getTime(), reason: req.body.reason, status: 'draft' }
  db.getInstance()
    .collection('refunds')
    .add(partialRefund)
    .then((doc: any) => {
      res.status(200).send({ id: doc.id, ...partialRefund })
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function putRefund(req: Request, res: Response) {
  const { reason, status } = req.body
  db.getInstance()
    .collection('refunds')
    .doc(req.params.id)
    .update({ reason, status })
    .then(() => {
      res.status(200).send()
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

function deleteRefund(req: Request, res: Response) {
  db.getInstance()
    .collection('refunds')
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
