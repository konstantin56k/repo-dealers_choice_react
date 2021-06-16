#!/usr/bin/env node

const fs = require('fs')
const { db, models: {Employee, Department} } = require('../server/db');

const seed = async () => {
  await db.sync({force: true})

  const [moe, lucy, larry, hr, engineering] = await Promise.all([
    Employee.create({ name: 'moe' }),
    Employee.create({ name: 'lucy' }),
    Employee.create({ name: 'larry' }),
    Department.create({ name: 'hr'}),
    Department.create({ name: 'engineering'}),
  ]);

  hr.managerId = lucy.id;
  await hr.save();
  moe.supervisorId = lucy.id;
  larry.supervisorId = lucy.id
  await Promise.all([
    moe.save(),
    larry.save()
  ]);

  db.close()
  console.log(`
    Seeding successful!
    Dealer is now ready to rock!
  `)
}

seed().catch(err => {
  db.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})