import { Request, Response } from 'express'
import Transaction from './transaction.model'

export async function getTranscation(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json({ transaction });
  } catch (err) {
    console.error("Error fetching transaction:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getTransactions(req: Request, res: Response) {
  try {
    const transactions = await Transaction.find();
    res.status(200).send({ transactions })
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function createTransaction(req: Request, res: Response) {
  try {
    const transaction = new Transaction({
      date: req.body.date,
      merchants: req.body.merchants,
      price: req.body.price
    })
    await transaction.save()
    res.send({
      transaction
    })
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
export async function updateOrder(req: Request, res: Response) {
  try {
    res.send("Update order");
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}


export async function archiveOrder(req: Request, res: Response) {
  try {
    res.send("Archive order");
  } catch (err) {
    console.error("Error archiving order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    res.send("Delete order");
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
