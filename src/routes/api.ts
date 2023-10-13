 
import {Router} from 'express'

import * as ApiController from '../controllers/apiController'

const router = Router();

 //--------------------------------------------------------------------------


     // adicionando informações no banco de dados
//router.post('/frases',ApiController.createPhrase) 



//--------------------------------------------------------------------------




  

// Listando/recebendo informações no banco de dados
router.get('/frases', ApiController.listPhrases)



//--------------------------------------------------------------------------



// Listando/recebendo informações no banco de dados por id
 router.get('/frases/:login/:senha', ApiController.getPhrases)




//--------------------------------------------------------------------------





// editando informações no banco de dados por id
//router.put('/frases/:id', ApiController.updatePhrases)






//--------------------------------------------------------------------------







// deletando informações no banco de dados por id
//router.delete('/frases/:id', ApiController.deletePhrases)



















/*
   //rotas de testes
router.get('/ping', ApiController.ping)
router.get('/nome/:nome', ApiController.nome)
router.get('/random',ApiController.random)
*/   

       


 










 










export default router;