import * as fs from 'fs'
import { challenge05 } from './challenge05.js'

function main() {
  fs.readFile(
    './src/challenge05/database_attacked.txt',
    {
      encoding: 'utf-8',
    },
    function (err, database_attacked) {
      if (err) throw err
      const result = database_attacked
        .split('\n')
        .filter((line) => !challenge05(line))
        .map((line) => line.split(',')[1])
        .map((username) => username.charAt(0))
        .join('')
      console.log(result)
    }
  )
}

main()
