import { Request, Response, NextFunction } from 'express'
import Transcation from './transaction.model'

export async function getTranscation(req: Request, res: Response) {
  try {
    const order = await Transcation.findById('asdf')
    res.send({ order })
  } catch (err) {
    res.send(err)
  }
}

export async function getOrders(req: Request, res: Response) {
  res.send(req.url)
}

export async function createOrder(req: Request, res: Response) {
  res.send(req.url)
}

export async function updateOrder(req: Request, res: Response) {
  res.send(req.url)
}

export async function archiveOrder(req: Request, res: Response) {
  res.send(req.url)
}

export async function deleteOrder(req: Request, res: Response) {
  res.send(req.url)
}
