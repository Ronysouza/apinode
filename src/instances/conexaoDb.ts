 
/*const mysql = require('mysql2')

const connection = mysql.createConnection({
   
   host:'localhost',
    user:'root',
    database:'phrases',
    password:''  


})

module.exports = connection*/


 

//conexao ao banco de dados

import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();
   

     //aqui faz a conexao ao banco de dados diretamente
export const sequelize = new Sequelize(
    
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    
    {
       dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT as string)

    }
) 