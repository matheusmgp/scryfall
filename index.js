const axios = require('axios').default;



const metodoGet = async (nome) => {
    try {
      
      let url  = `https://api.scryfall.com/cards/named?fuzzy=${nome}`     
      let retorno = await  axios.get(url);
      return retorno.data;
    } catch (err) {
      
        console.error(err);
    }
};



//funcao auto invocada apenas para fins didaticos
(async function  () {

    // no caso essa variavel ayara vai vim do seu frontend 
    var cardNome = 'ayara'
    var retorno = await metodoGet(cardNome);
    // aqui esta o retorno que vc precisa agora vc faz oq quiser com ele 
    // pode passar pra uma funcao de insert no banco por exemplo

    if(retorno != undefined){
        var url = retorno.image_uris.normal
        console.log("url",url);
    }else {
        console.log('not found')
    }
   


  
  }());


 

  