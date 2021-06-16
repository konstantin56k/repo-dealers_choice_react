const router = require('express').Router()
const { models: { Employee, Department } } = require('../db');

router.get('/', async (req, res, next) => {
    try {
      res.send(await Employee.findAll({
        include: [
            {
              model: Employee,
              as: 'supervisor'
            },
            Employee,
            Department
          ]
      }))
    }
    catch(ex) {
      next(ex);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
      res.send(await Employee.findAll({
        where: { id: req.params.id},
        include: [
            {
              model: Employee,
              as: 'supervisor'
            },
            Employee,
            Department
          ]
      }))
    }
    catch(ex) {
      next(ex);
    }
})


module.exports = router