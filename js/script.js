$(function(){
  
     // esconder o menu no início com transform



    $('.nav').css('transform', 'translateX(100%)');

    //abre e fecha menu quando clicar no botão de toggle
    $('.nav-toggle, .nav-close ').click(function(e) {
        e.preventDefault();
        $('.nav').css('transform', 'translateX(0)');
    });

    // fecha o menu quando um item do menu é clicado
    $('.nav a').click(function(e) {
        $('.nav').css('transform', 'translateX(100%)');
    });

    

  $('.nav-toggle, .nav-close').click(function(e) {
    e.preventDefault();
    $('.nav').toggleClass('active');
  });
  
    //fixar header
    $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
        $('.header').addClass('fixed')
      }else{
        $('.header').removeClass('fixed')
      }
  });
});



//Rolagem suave
document.querySelectorAll('a.scroll[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const btnToggle = document.querySelector(".load1");
const imagens = document.querySelectorAll(".imagem");

btnToggle.addEventListener("click", function() {
  imagens.forEach(function(imagem) {
    if (imagem.style.display === "none") {
      imagem.style.display = "block";
      btnToggle.textContent = "CAREGAR MENOS";
    } else {
      imagem.style.display = "none";
      btnToggle.textContent = "CARREGAR MAIS";
    }
  });
});


const btnToggle1 = document.querySelector(".load");
const imagens1 = document.querySelectorAll(".imagem1");


btnToggle1.addEventListener("click", function() {
  imagens1.forEach(function(imagem) {
    if (imagem.style.display === "none") {
      imagem.style.display = "block";
      btnToggle1.textContent = "CAREGAR MENOS";
    } else {
      imagem.style.display = "none";
      btnToggle1.textContent = "CARREGAR MAIS";
    }
  });
});


const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne o envio padrão do formulário
  const searchTerm = searchInput.value.trim();
  
  // verifica se o campo de pesquisa foi preenchido
  if (searchTerm === '') {
    resultsDiv.innerHTML = '<p>Por favor, digite algo para pesquisar.</p>';
    return;
  }
  
  // faz a pesquisa
  const results = fazerPesquisa(searchTerm);
  
  // exibe os resultados
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>Nenhum resultado encontrado para sua pesquisa.</p>';
  } else {
    let html = '';
    for (let result of results) {
      html += `<div class="result">
                 <h3><a href="${result.url}">${result.title}</a></h3>
                 <p>${result.description}</p>
               </div>`;
    }
    resultsDiv.innerHTML = html;
  }
  
  // exibe a div com os resultados
  resultsDiv.style.display = 'block';
});

// função de exemplo para fazer a pesquisa
function fazerPesquisa(termo) {
  const resultados = [
     { 
      title: 'Iphone 14 Pro Max', 
      description: ' ',
      url: 'https://www.apple.com/br/iphone-14-pro/'
    },
    { 
      title: 'Iphone 13',
      description: ' ',
      url: 'https://www.apple.com/br/shop/buy-iphone/iphone-13'
    },
    { 
      title: 'Iphone 12', 
      description: ' ',
      url: 'https://www.apple.com/br/shop/buy-iphone/iphone-12'
    },
    { 

      title: 'Iphone SE', 
      description: ' ',
      url: 'https://www.apple.com/br/iphone-se/'
    },
   { 
      title: 'MacBook Pro M2', 
      description: ' ',
      url: 'https://www.apple.com/br/shop/buy-mac/macbook-pro/14-polegadas'
    },
    {
      title: 'MacBook Air M1', 

      description: ' ',
      url: 'https://www.apple.com/br/shop/buy-mac/macbook-air/chip-m1'
    },
    {

      title: 'IMac M1', 
      description: ' ',
      url: 'https://www.apple.com/br/shop/buy-mac/imac'
    },
    {
      title: 'Ipad Pro M2',
      description: ' ',
      url: 'https://www.apple.com/br/ipad-pro/'
    },
    {
      title: 'Apple Watch Ultra',
      description: ' ',
      url: 'https://www.apple.com/br/apple-watch-ultra/'
    },
    {
      title: 'Airpods 3ª Geraçāo',
      description: ' ',
      url: 'https://www.apple.com/br/airpods-3rd-generation/'
    },
    {
      title: 'Airpods Max',
      description: ' ',
      url: 'https://www.apple.com/br/airpods-max/'
    },
    {
      title:'Apple Tv 4K',
      description: ' ',
      url: 'https://www.apple.com/br/apple-tv-4k/'
    },
    
  ];
  
  // filtra os resultados que contém o termo de pesquisa
  return resultados.filter(result => {
    return result.title.toLowerCase().includes(termo.toLowerCase()) ||
           result.description.toLowerCase().includes(termo.toLowerCase());
  });
}
