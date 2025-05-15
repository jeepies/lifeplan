import 'dotenv/config';

interface Config {
  ENVIRONMENT: string;
  BCRYPT_COST: number;
  SESSION_SECRET: string;
}

const config: Config = {
  ENVIRONMENT: process.env.NODE_ENV || 'production',
  BCRYPT_COST: Number(process.env.BCRYPT_COST) || 10,
  SESSION_SECRET: process.env.SESSION_SECRET || 'i_dont_have_a_lifeplan',
};

export default config;
