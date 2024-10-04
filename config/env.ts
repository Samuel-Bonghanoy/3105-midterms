export const env = {
  JWT_SECRET:
    process.env.JWT_SECRET || 'ivebeencodingfor6hoursstraightiwannakms',
  PORT: process.env.PORT || 4200,
  RATE_LIMIT_MAX_REQ: Number(process.env.MAX_REQUESTS) || 5,
  RATE_LIMIT_WINDOW_MS: Number(process.env.RATE_LIMIT_WINDOW_MS) || 30000,
};
