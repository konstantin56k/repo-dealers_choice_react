const Sequelize = require('sequelize');
const db = require('./db')
const { STRING, UUID, UUIDV4 } = Sequelize;

const Department = db.define('department', {
    name: {
      type: STRING(20)
    }
  });

  module.exports = Department;