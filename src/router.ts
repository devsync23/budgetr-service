import express from 'express'
import { createUser } from './users/user.controller'
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
export default router
