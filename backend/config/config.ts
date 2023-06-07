import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

class Config {
  PORT: string | undefined;
  NODE_ENV: string | undefined;
  DATABASE_URI: string | undefined;
  DATABASE_PASSWORD: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.DATABASE_URI = process.env.DATABASE_URI || '';
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
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
