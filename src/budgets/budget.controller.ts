import { Request, Response } from 'express'
import Budget from './budget.model'
import bcrypt from 'bcrypt';

export async function getBudgetById(req: Request, res: Response) {
    try {
        const budget = await Budget.find()
        res.send(budget)
      } catch (err) {
        res.send(err)
      }
}

export async function getBudgets(req: Request, res: Response) {
    try {
        const budgets = await Budget.find();
        res.status(200).json({ budgets });
    } catch (error) {
        console.error('Error fetching budgets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export async function createBudget(req: Request, res: Response) {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const budget = new Budget({
          name:req.body.name,
          amount:req.body.amount,
          category:req.body.category,
          description: req.body.description,
          archived: req.body.archived
        })
        await budget.save()
        res.send({message:"User input received!",
      budgetData: budget})
      } catch (err) {
        res.status(500).send({
          message: err
        })
      }

}

export async function updateBudget(req: Request, res: Response) {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        budget.name = req.body.name || budget.name;
        budget.amount = req.body.amount || budget.amount;
        budget.category = req.body.category || budget.category;
        budget.description = req.body.description || budget.description;
        budget.archived = req.body.archived || budget.archived;
        await budget.save();
        res.json({ message: 'Budget updated successfully', budgetData: budget });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function archiveBudget(req: Request, res: Response) {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        budget.archived = true;
        await budget.save();
        res.json({ message: 'Budget archived successfully', budgetData: budget });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteBudget(req: Request, res: Response) {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }
        await budget.delete();;
        res.json({ message: 'Budget deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
