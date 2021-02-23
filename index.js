const axios = require('axios').default;



const metodoGet = async () => {
    try {
      let retorno = await  axios.get('https://api.scryfall.com/cards/named?fuzzy=ayara');
       return retorno.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const metodoPost = async () => {
    try {
      let retorno = await  axios.get('https://scryfall.com/docs/api/cards/named=fuzzy=${cardNome}');
       return retorno.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

//funcao auto invocada apenas para fins didaticos
(async function  () {
    var retorno = await metodoGet();
    // aqui esta o retorno que vc precisa agora vc faz oq quiser com ele 
    // pode passar pra uma funcao de insert no banco por exemplo
    console.log(retorno.image_uris.normal);
  }());



  