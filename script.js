
// ANIMAÇÃO DO HOME //

var porcen = document.getElementById('load');
var num = 0;
var home = document.querySelector('.cir-home');
var intro = document.querySelector('.intro');

var intervaloId = setInterval(function() {
    if (num == 100) {
        clearInterval(intervaloId);
        porcen.classList.add('load-hide');
        home.classList.add('cir-show');
        intro.classList.remove('intro');
    } else {
        num++;
        porcen.innerText = num + "%";
    }
}, 23);

// ------------------------ //

// SKIP ANIMAÇÃO DO HOME //

document.addEventListener('click', function() {
    porcen.innerText = "100%";
    clearInterval(intervaloId);
    porcen.classList.add('load-hide');
    home.classList.add('cir-show');
    intro.classList.remove('intro');
});

// ------------------------ //

// ANIMAÇÃO NOME TECS USADAS //

var bordaIcons = document.querySelectorAll('.borda-icon');
var hidden = document.querySelectorAll('.hidden');

bordaIcons.forEach(function(name_tec, index) {
    name_tec.addEventListener('transitionend', function() {
        hidden[index].classList.remove('hidden');
    });

    name_tec.addEventListener('mouseout', function() {
        hidden[index].classList.add('hidden');
    });
});

var borda_in = document.querySelectorAll('.circulo-in-on');
var borda_out = document.querySelectorAll('.circulo-out-on');

borda_in.forEach(function(bordas, index){
    bordas.addEventListener('mouseover', function() {
        borda_in[index].classList.add('.circulo-in-on');
    })
})

// ------------------------ //

// ANIMAÇÃO TITULOS //

const observer = new IntersectionObserver(entries => {
    console.log(entries);

    Array.from(entries).forEach( entry => {
        entry.target.classList.add('hidden-tituOff');
    })
}, {
    threshold: [0, 0.5, 1]
}
)

Array.from(document.querySelectorAll('.hidden-titu')).forEach(element => {
    observer.observe(element);
})

// ------------------------ //

// BOTÃO PARA O TOP //

var toTop = document.querySelector('.toTop');
toTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
});

// ------------------------ //

// ANIMAÇÃO SOBRE MIM //

const observe = new IntersectionObserver(entries => {
    Array.from(entries).forEach((entry, index) => {
        if (entry.isIntersecting) {
            const classeShow = `show${index + 1}`;
            entry.target.classList.add(classeShow);
            console.log(observe);
        }
    })
}, { threshold: 0.22 });

const elements = document.querySelectorAll('.hidden-elemen');

elements.forEach((element) => observe.observe(element));

// ------------------------ //

// BOTÃO VER MAIS/MENOS //

var mais_menos = document.querySelector('.mais_menos span');

mais_menos.addEventListener('click', function(){
    var projs = document.querySelector('.container-proj');

    if(projs.classList.contains('ver_mais')){
        mais_menos.textContent = 'Ver Mais'
        projs.classList.remove('ver_mais');
    }
    else{
        mais_menos.textContent = 'Ver Menos'
        projs.classList.add('ver_mais');
    }
});

// ------------------------ //

// BOTAO PARA O TOP APARECER/SUMIR //

window.addEventListener('scroll', function() {
    var alturaTotal = document.body.scrollHeight - window.innerHeight;
    var porcentagemRolagem = (window.scrollY / alturaTotal) * 100;
    var toTop = document.querySelector('.toTop');

    if (porcentagemRolagem < 10) {
        toTop.classList.remove('showTop');
    } 
    else {
        toTop.classList.add('showTop');
    }
});

// ------------------------ //






