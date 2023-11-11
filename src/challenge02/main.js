import * as fs from 'fs';
import { challenge02 } from './challenge02.js';

function main() {
  fs.readFile(
    './src/challenge02/message_02.txt',
    { encoding: 'utf-8' },
    function (err, message) {
      if (err) throw err;
      const result = challenge02(message);
      console.log(result);
    }
  );
}

main();
