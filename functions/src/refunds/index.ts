import * as functions from 'firebase-functions'
import { refundService } from '../shared'

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', refundService.getRefunds)
app.post('/', refundService.postRefund)
app.put('/:id', refundService.putRefund)
app.delete('/:id', refundService.deleteRefund)

app.post('/:id/expenses', refundService.postExpense)
app.delete('/:id/expenses/:idExpense', refundService.deleteExpense)

export default functions.https.onRequest(app)
