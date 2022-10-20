const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  username: 'rifajade',
  password: 'Bvcdjad2uw9ntB9',
  database: 'rifajade',
  host: 'mysql.rifajade.kinghost.net',
  dialect: 'mariadb',
});

module.exports=sequelize;
