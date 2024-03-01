import express from 'express'
import { createUser } from './users/user.controller'
import { createTransaction, getTransactions } from './transactions/transaction.controller'
const router = express.Router()

// Routes
router.route('/')
  .get((req, res) => {
    res.send({ get: "GET" })
  })
  .post((req, res) => {
    res.send({ post: "POST" })
  })

router.route('/users')
  .post(createUser)

router.route('/transactions')
  .get(getTransactions)
  .post(createTransaction)






export default router
