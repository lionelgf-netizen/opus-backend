const express = require('express')
const cors = require('cors')
const ytdlp = require('yt-dlp-exec')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀')
})

app.post('/youtube-info', async (req, res) => {

  try {

    const { url } = req.body

    const info = await ytdlp(url, {
      dumpSingleJson: true
    })

    res.json({
      title: info.title,
      duration: info.duration,
      thumbnail: info.thumbnail
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

app.listen(3000, () => {
  console.log('Servidor funcionando')
})
