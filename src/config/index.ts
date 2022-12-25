// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// import yargs from 'yargs/yargs';
import yargs from 'yargs';

export const { MONGO_URI } = process.env;

const argv = yargs(process.argv.slice(2))
  .options({
    p: { type: 'number', default: 8080, alias: 'PORT' },
    m: { type: 'string', default: 'FORK', alias: 'MODE' },
    db: { type: 'string', default: 'MONGO', alias: 'DATABASE' },
  })
  .parseSync();

export const BASE_URL = `http://localhost:${argv.PORT}/products`;

export const { PORT, MODE, DATABASE } = argv;
