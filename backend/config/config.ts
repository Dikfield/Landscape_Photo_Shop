import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

class Config {
  PORT: string | undefined;
  NODE_ENV: string | undefined;
  DATABASE_URI: string | undefined;
  DATABASE_PASSWORD: string | undefined;
  JWT_SECRET: string | undefined;
  PAYPAL_CLIENT_ID: string | undefined;
  PAGINATION_LIMIT: number;
  EMAIL_SECRET: string | undefined;
  NODEMAIL_CLIENT_ID: string | undefined;
  NODEMAIL_CLIENT_SECRET: string | undefined;
  NODEMAIL_MAIL: string | undefined;
  NODEMAIL_PASS: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.DATABASE_URI = process.env.DATABASE_URI || '';
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
    this.JWT_SECRET = process.env.JWT_SECRET || '';
    this.PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || '';
    this.PAGINATION_LIMIT = process.env.PAGINATION_LIMIT
      ? Number(process.env.PAGINATION_LIMIT)
      : 2;
    this.EMAIL_SECRET = process.env.EMAIL_SECRET || '';
    this.NODEMAIL_CLIENT_ID= process.env.NODEMAIL_CLI || '';
    this.NODEMAIL_CLIENT_SECRET= process.env.NODEMAIL_CLIENT_SECRET || '';
    this.NODEMAIL_MAIL = process.env.NODEMAIL_MAIL || '';
    this.NODEMAIL_PASS = process.env.NODEMAIL_PASS || '';
  }

  public validationConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} undefined`);
      }
    }
  }
}

export const config: Config = new Config();
