const PersonagensConteudo = document.getElementById('personagens-conteudo');
const NavesConteudo = document.getElementById('naves-conteudo');
const PlanetasConteudo = document.getElementById('planetas-conteudo');





window.onload = () => {Promise.all([swapiGET('people'), swapiGET('planets'), swapiGET('vehicles')])
  .then(function (results) {

    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);

    CriarQuant(PersonagensConteudo, 'personagens-black.svg');
    CriarQuant(NavesConteudo, 'nave-black.svg');
    CriarQuant(PlanetasConteudo, 'planetas-black.svg');


    Exibir(results)

  });};

  function swapiGET(param) {
    return axios.get(`https://swapi.dev/api/${param}/`)
  }








  function CriarQuant(divprincipal, img) {

    const Quant = document.createElement('div');
    const Img = document.createElement('img');
    const Number = document.createElement('h2');
    
    Quant.classList.add('quantidade');
    Img.src = `assets/${img}`;
    
    
    Quant.appendChild(Img);
    Quant.appendChild(Number);
    divprincipal.appendChild(Quant)


   

  };





 function Exibir(results){
    PersonagensConteudo.getElementsByTagName('h2')[1].innerHTML = results[0].data.count;
    PlanetasConteudo.getElementsByTagName('h2')[1].innerHTML = results[1].data.count;
    NavesConteudo.getElementsByTagName('h2')[1].innerHTML = results[2].data.count;

    const Nome1 = document.getElementById('nome1').innerHTML = results[0].data.results[0].name;
    const Altura1 = document.getElementById('alt1').innerHTML = `${results[0].data.results[0].height} cm`;
    const Nasc1 = document.getElementById('nasc1').innerHTML = results[0].data.results[0].birth_year;

    const Nome2 = document.getElementById('nome2').innerHTML = results[0].data.results[3].name;
    const Altura2 = document.getElementById('alt2').innerHTML = `${results[0].data.results[3].height} cm`;
    const Nasc2 = document.getElementById('nasc2').innerHTML = results[0].data.results[3].birth_year;

    const Nome3 = document.getElementById('nome3').innerHTML = results[0].data.results[4].name;
    const Altura3 = document.getElementById('alt3').innerHTML = `${results[0].data.results[4].height} cm`;
    const Nasc3 = document.getElementById('nasc3').innerHTML = results[0].data.results[4].birth_year;

    const NomePlan1 = document.getElementById('nome-planeta1').innerHTML = results[1].data.results[0].name;
    const NomePlan2 = document.getElementById('nome-planeta2').innerHTML = results[1].data.results[5].name;
    const NomePlan3 = document.getElementById('nome-planeta3').innerHTML = results[1].data.results[9].name;

    const Planet1Clima = document.getElementById('planet1clima').innerHTML = results[1].data.results[0].climate;
    const Planet1Ter = document.getElementById('planet1ter').innerHTML = results[1].data.results[0].terrain;
    const Planet1Diam = document.getElementById('planet1diam').innerHTML = `${results[1].data.results[0].diameter} Km`;

    const Planet2Clima = document.getElementById('planet2clima').innerHTML = results[1].data.results[5].climate;
    const Planet2Ter = document.getElementById('planet2ter').innerHTML = results[1].data.results[5].terrain;
    const Planet2Diam = document.getElementById('planet2diam').innerHTML = `${results[1].data.results[5].diameter} Km`;

    const Planet3Clima = document.getElementById('planet3clima').innerHTML = results[1].data.results[9].climate;
    const Planet3Ter = document.getElementById('planet3ter').innerHTML = results[1].data.results[9].terrain;
    const Planet3Diam = document.getElementById('planet3diam').innerHTML = `${results[1].data.results[9].diameter} Km`;

    const Nave1 = document.getElementById('nave1').innerHTML = results[2].data.results[0].name;
    const Nave2 = document.getElementById('nave2').innerHTML = results[2].data.results[1].name;
    const Nave3 = document.getElementById('nave3').innerHTML = results[2].data.results[2].name;
    const Nave4 = document.getElementById('nave4').innerHTML = results[2].data.results[4].name;

};
