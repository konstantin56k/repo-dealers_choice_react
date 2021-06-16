const db = require('./db');
const Employee = require('./employee');
const Department = require('./department');

Department.belongsTo(Employee, { as: 'manager'});
Employee.hasMany(Department, { foreignKey: 'managerId' });

Employee.belongsTo(Employee, { as: 'supervisor'});
Employee.hasMany(Employee, { foreignKey: 'supervisorId'});

module.exports = {
    db,
    models: {
        Employee,
        Department
    }
  }