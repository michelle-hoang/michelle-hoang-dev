const router = require('express').Router()
module.exports = router

router.use('/users', require('./user'))
router.use('/projects', require('./project'))
router.use('/artworks', require('./artwork'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
