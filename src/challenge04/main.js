import * as fs from 'fs'
import { challenge04 } from './challenge04.js'

function main() {
  fs.readFile(
    './src/challenge04/files_quarantine.txt',
    {
      encoding: 'utf-8',
    },
    function (err, filesQuarantine) {
      if (err) throw err
      let count = 0
      filesQuarantine.split('\n').forEach((file) => {
        const { valid, checksum } = challenge04(file)
        if (valid) {
          count++
          console.log(count, file, checksum)
        }
      })
    }
  )
}

main()
