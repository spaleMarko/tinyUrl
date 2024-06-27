import { Request, Response } from 'express';

const createShortenUrl = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Create shorten URL' });
};

const redirectUrl = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Redirect URL' });
};

const getMostPopularDomansForLastDay = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Most popular domains' });
};

export { createShortenUrl, redirectUrl, getMostPopularDomansForLastDay };
