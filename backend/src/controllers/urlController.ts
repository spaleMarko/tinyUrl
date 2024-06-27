import { Request, Response } from 'express';
import shortid from 'shortid';

// Models
import UrlModel from '../models/urlModel';

const createShortenUrl = async (req: Request, res: Response) => {
  const { longUrl } = req.body;
  const shortId = shortid.generate();

  const url = new UrlModel({ shortId, longUrl });

  const createdUrl = await url.save();

  res.status(201).json({ createdUrl });
};

const redirectUrl = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Redirect URL' });
};

const getMostPopularDomansForLastDay = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Most popular domains' });
};

export { createShortenUrl, redirectUrl, getMostPopularDomansForLastDay };
