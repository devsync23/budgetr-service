import { Request, Response } from 'express';
import Portfolio from './portfolio.model';

export async function getPortfolios(req: Request, res: Response) {
  try {
    const portfolios = await Portfolio.find().populate('owner').populate('transactions');
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function createPortfolio(req: Request, res: Response) {
  try {
    const { name, description, owner } = req.body;
    const portfolio = new Portfolio({ name, description, owner });
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

export async function getPortfolioById(req: Request, res: Response) {
  try {
    const portfolio = await Portfolio.findById(req.params.id).populate('owner').populate('transactions');
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updatePortfolio(req: Request, res: Response) {
  try {
    const { name, description } = req.body;
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

export async function deletePortfolio(req: Request, res: Response) {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
