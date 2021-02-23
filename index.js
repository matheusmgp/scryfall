const axios = require('axios').default;



const metodoGet = async () => {
    try {
      let retorno = await  axios.get('https://api.scryfall.com/cards/named?fuzzy=ayara');
      return retorno.data;
    } catch (err) {
      
        console.error(err);
    }
};

/*const metodoPost = async () => {
    try {
      let retorno = await  axios.get('https://scryfall.com/docs/api/cards/named=fuzzy=${cardNome}');
       return retorno.data;
    } catch (err) {
        console.error(err);
    }
};*/

//funcao auto invocada apenas para fins didaticos
(async function  () {
    var retorno = await metodoGet();
    // aqui esta o retorno que vc precisa agora vc faz oq quiser com ele 
    // pode passar pra uma funcao de insert no banco por exemplo
    var url = retorno.image_uris.normal
    console.log("url",url);


    // insiro o valor no objeto
    // obs: nao sei se é no cardNome mas foi so exemplo
    var objeto = {
        "cardNome": url,
        "cardEstado": "MN",
        "cardPreco": "25.50",
        "cardTroca": "true",
      }
      console.log("objeto",objeto)
  }());


 

  