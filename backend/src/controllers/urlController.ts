import { Request, Response } from 'express';
import shortid from 'shortid';

// Models
import UrlModel from '../models/urlModel';

// @desc Create shortId and save to DB
// @route POST /api/shorten
// @access Public
const createShortenUrl = async (req: Request, res: Response) => {
  const { longUrl } = req.body;
  const shortId = shortid.generate();

  const url = new UrlModel({ shortId, longUrl });

  const createdUrl = await url.save();

  res.status(201).json({ createdUrl });
};

// @desc Redirect to long URL
// @route GET /api/:shortId
// @access Public
const redirectUrl = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const findUrl = await UrlModel.findOne({ shortId });

  if (findUrl) {
    findUrl.numOfClicks += 1;
    await findUrl.save();

    res.redirect(findUrl.longUrl);
  } else {
    res.status(404).json({ message: 'Url not found' });
  }
};

// @desc Show most popular domains in last 24h
// @route POST /api/admin/most-popular-domains
// @access Public
const getMostPopularDomansForLastDay = async (req: Request, res: Response) => {
  try {
    const lastDay = new Date();
    lastDay.setDate(lastDay.getDate() - 1);

    const mostPopularDomains = await UrlModel.aggregate([
      { $match: { createdAt: { $gte: lastDay } } },
      {
        $group: {
          _id: {
            $substr: ['$longUrl', 0, { $indexOfCP: ['$longUrl', '/', 8] }],
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.status(200).json({ mostPopularDomains });
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching data', error });
  }
};

export { createShortenUrl, redirectUrl, getMostPopularDomansForLastDay };
