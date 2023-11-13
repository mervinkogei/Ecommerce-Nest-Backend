/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'admin',
    database:'ecommerce',
    entities:[],
    migrations:[],
logging:false,
synchronize: false

}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
