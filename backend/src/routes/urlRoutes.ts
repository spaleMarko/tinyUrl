import { Router } from 'express';

// Controllers
import {
  createShortenUrl,
  redirectUrl,
  getMostPopularDomansForLastDay,
} from '../controllers/urlController';

const router = Router();

router.post('/shorten', createShortenUrl);
router.get('/:shortId', redirectUrl);
router.get('/admin/most-popular-domain', getMostPopularDomansForLastDay);

export default router;
