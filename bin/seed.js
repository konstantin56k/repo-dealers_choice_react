#!/usr/bin/env node

const fs = require('fs')
const { db, models: {Album, Artist, Song} } = require('../server/db')
const songs = JSON.parse(fs.readFileSync('songs.json', 'utf8'))

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
}

seed().catch(err => {
  db.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})