
import { Request, Response, NextFunction } from 'express'
import User from './user.model'
import bcrypt from 'bcrypt';

export async function getUserById(req: Request, res: Response) {
    try {
        const users = await User.find()
        res.send(users)
      } catch (err) {
        res.send(err)
      }
}

export async function createUser(req: Request, res: Response) {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
          name:req.body.name,
          email:req.body.email,
          password:hashPassword})
        await user.save()
        res.send({message:"User input received!",
      userData: user})
      } catch (err) {
        res.status(500).send({
          message: err
        })
      }

}

export async function updateUser(req: Request, res: Response) {
    res.send(req.url)
}

export async function archiveUser(req: Request, res: Response) {
    res.send(req.url)
}

export async function deleteUser(req: Request, res: Response) {
    res.send(req.url)
}
