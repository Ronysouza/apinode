import {Model, DataTypes } from 'sequelize';
import {sequelize} from '../instances/conexaoDb';

export interface PhraseInstance extends Model {
       
    id: number;
    nome: string;
    login: string;
    senha:string;
    rua:string;
    bairro:string;
    cidade:string;
    estado:string




}
export const Dbr7block = sequelize.define<PhraseInstance>('Dbr7block',{
    id:{
        primaryKey: true,
         autoIncrement: true,
          type: DataTypes.INTEGER

    }, 
    nome:{
        type:DataTypes.STRING
    },
    login:{
        type: DataTypes.STRING
    } ,
    senha:{
        type: DataTypes.STRING
    },
    rua:{
        type:DataTypes.STRING
    },
    bairro:{
        type:DataTypes.STRING
    },
    cidade:{

        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.STRING
    }    
    

},
{
        tableName: 'usuario',
        timestamps:false
     }
)
