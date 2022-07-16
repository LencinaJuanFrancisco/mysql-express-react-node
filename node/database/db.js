import {Sequelize} from 'sequelize'

const db = new Sequelize(
    'mysql-express-react-node',
    'root',
    'admin123',
    {
        host: 'localhost',
        dialect:'mysql'
    }
)

export default  db