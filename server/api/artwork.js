const artworkRouter = require('express').Router()
const {Artwork} = require('../db/index')

artworkRouter.get('/', async (req, res, next) => {
  try {
    const artworks = await Artwork.findAll()
    res.status(200).send(artworks)
  } catch (error) {
    next(error)
  }
})

artworkRouter.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const singleArtwork = await Artwork.findByPk(id)
    res.json(singleArtwork)
  } catch (error) {
    next(error)
  }
})

module.exports = artworkRouter
