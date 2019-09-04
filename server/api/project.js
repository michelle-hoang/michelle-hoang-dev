const projectRouter = require('express').Router()
const {Project} = require('../db/index')

projectRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.status(200).send(projects)
  } catch (error) {
    next(error)
  }
})

projectRouter.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const singleProject = await Project.findByPk(id)
    res.json(singleProject)
  } catch (error) {
    next(error)
  }
})

module.exports = projectRouter
