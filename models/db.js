const Sequelize = require('sequelize')

// conexão com o banco de dados mysql
const sequelize = new Sequelize(
  'React', 'usuario', 'senha', {
  host: 'servidor',
  dialect: 'mssql',

 // dialectOptions: {
    //  instanceName : "SQLEXPRESS"
 // }


  

});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    sequelize: sequelize
}
//Usuario.sync({force: true})