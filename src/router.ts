import express from 'express'

const router = express.Router()

// Routes
router.route('/')
  .get((req, res) => {
    res.send({ get: "GET" })
  })
  .post((req, res) => {
    res.send({ post: "POST" })
  })

export default router