import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!<br>Testing Node delpoyment on EC2 Ubuntu')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})