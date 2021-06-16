const router = require('express').Router()
const { models: { Employee, Department } } = require('../db');

router.get('/', async (req, res, next) => {
    try {
      res.send(await Department.findAll({
        include: [
            {
              model: Employee,
              as: 'manager'
            }
          ]
      }))
    }
    catch(ex) {
      next(ex);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
      res.send(await Department.findAll({
        where: { id: req.params.id},
        include: [
            {
              model: Employee,
              as: 'manager'
            }
          ]
      }))
    }
    catch(ex) {
      next(ex);
    }
})


module.exports = router