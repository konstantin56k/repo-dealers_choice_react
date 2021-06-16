const Sequelize = require('sequelize');
const db = require('./db')
const { STRING, UUID, UUIDV4 } = Sequelize;

const Employee = db.define('employee', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: STRING(20)
    }
  });

  module.exports = Employee;