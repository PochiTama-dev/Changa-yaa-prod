import { Sequelize } from 'sequelize';

const connection = new Sequelize('changadb', 'root', '', {
  host: 'host.docker.internal',
  dialect: 'mysql',
  port: 3306
});

export default connection;