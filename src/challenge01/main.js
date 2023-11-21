import * as fs from 'fs'
import { challenge01 } from './challenge01.js'

function main() {
  fs.readFile(
    './src/challenge01/data.txt',
    { encoding: 'utf-8' },
    function (err, data) {
      if (err) throw err
      const result = challenge01(data)
      console.log(result)
    }
  )
}

main()
