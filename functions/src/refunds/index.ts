import * as functions from 'firebase-functions'
import { refundService } from '../shared'

const express = require('express')
const app = express()

app.get('/', refundService.getRefunds)
app.post('/', refundService.postRefund)
app.put('/:id', refundService.putRefund)
app.delete('/:id', refundService.deleteRefund)

export default functions.https.onRequest(app)
