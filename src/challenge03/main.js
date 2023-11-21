import * as fs from 'fs'
import { challenge03 } from './challenge03.js'

function main() {
  fs.readFile(
    './src/challenge03/encryption_policies.txt',
    { encoding: 'utf-8' },
    function (err, message) {
      if (err) throw err
      const result = challenge03(message)
      let count = 0
      result.forEach((item) => {
        if (!item.valid) {
          count++
          if (count === 42) {
            console.log(item)
          }
        }
      })
    }
  )
}

main()
