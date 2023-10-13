import {Request,Response} from 'express';
import {Dbr7block} from '../models/Dbr7block'


       
 
             // adicionando informações no banco de dados
/*export const createPhrase = async (req: Request, res:Response)=>{     
    
     let nome: string = req.body.author;
     let login: string = req.body.login;
     
     let newPhrase = await Dbr7block.create({
        nome,
        login       

     })
     
     res.status(201)
     res.json({id: newPhrase.id, author, txt})      
}*/ 



//--------------------------------------------------------------------------


      // Listando/recebendo informações no banco de dados
export const listPhrases = async (req:Request, res:Response)=>{
   
    let list = await Dbr7block.findAll();
  
 

    res.json({list})

     console.log(list)



}


//--------------------------------------------------------------------------



     // Listando/recebendo informações no banco de dados por ID
      export const getPhrases = async (req:Request, res:Response)=>{
          
       
                   
        //console.log('result: ',req.params)
          
         

          //let {id} = req.params;
         //let phrase = await Dbr7block.findByPk(id); 

         let resultado = await Dbr7block.findAll({
            where:{
                login:req.params.login,
                senha:req.params.senha
            }
         }) ;  

        

            if(resultado.length > 0 ){
                res.json({resultado}) 

                console.log(resultado)


            }else{
                     
                
                res.json({error:'dados não encontrado'}) 

                //console.log('dados não encontrado')
            } 

           
         
                 
    
         //res.json({list})
    
         // console.log('sdfsdf')
    
    
    
    } 
    

//--------------------------------------------------------------------------






     // editando informações no banco de dados por id
/*export const updatePhrases = async (req:Request, res:Response)=>{
     
    //primeiro verificar se tem este dado no banco de dados
    let {id} = req.params;
    let {author, txt} = req.body;
    let phrase = await Dbr7block.findByPk(id); 

       if(phrase){
            
            phrase.author = author;
            phrase.txt = txt

            await phrase.save()
            res.json({phrase})
        



       }else{

           res.json({error:'dados não encontrado no banco de dados'})
       }

      
    
            

   //res.json({list})

    //console.log(list)



}*/









//--------------------------------------------------------------------------






     // delete informações no banco de dados por id
    /* export const deletePhrases = async (req:Request, res:Response)=>{
     
        //primeiro verificar se tem este dado no banco de dados
        let {id} = req.params;
        
         await Dbr7block. destroy({
            where:{id}
        }); 
        res.json({})
           
        
                
    
         
    
    
    
    }*/
    




















/*

      // rotas de testes


export const ping = (req: Request, res: Response)=>{

    res.json({pong: true})

}


export const random = (req: Request, res: Response)=>{

   
    let nRand: number = Math.floor(Math.random()  * 10)

    res.json({number: nRand})

}



export const nome  = (req: Request, res: Response)=>{

    let nome: string = req.params.nome

    res.json({nome})

}*/