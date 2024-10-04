import { rateLimit } from 'express-rate-limit';

export const rateLimitMiddleware = rateLimit({
  windowMs: 30000,
  max: 5,
  message: 'Request Limit reached. Please try again in 30 seconds',
});
