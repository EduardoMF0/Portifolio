
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

// var icon_menu = document.querySelector('.menu-mob');
// var sidebar = document.querySelector('.sidebar');
// var side_blur = document.querySelector('.side-blur');

// icon_menu.addEventListener('click', function(){
//     sidebar.classList.toggle('ativo-side');
// })



// var icon_menu = document.querySelector('.menu-mob');
// var sidebar = document.querySelector('.sidebar');
// var tela = document.querySelector('body');
// var links_side = document.querySelectorAll('.links_side');

// icon_menu.addEventListener('click', function(){
//     sidebar.classList.toggle('ativo-side');
//     tela.classList.toggle('azul-background');
// })

// tela.addEventListener('click', function(event){
//     if (!sidebar.contains(event.target) && !icon_menu.contains(event.target)){
//         sidebar.classList.remove('ativo-side');
//         tela.classList.remove('azul-background');
//     }
// });

// links_side.forEach(link => {
//     link.addEventListener('click', function(){
//         sidebar.classList.remove('ativo-side');
//         tela.classList.remove('azul-background');
//     });
// });




// var icon_menu = document.querySelector('.menu-mob');
// var sidebar = document.querySelector('.sidebar');
// // var tela = document.querySelector('body');
//  var blur_side = document.querySelector('.side-blur')
// var links_side = document.querySelectorAll('.links_side');

// icon_menu.addEventListener('click', function(){
//     sidebar.classList.toggle('ativo-side');
//     blur_side.classList.toggle('side-blur');
// })

// tela.addEventListener('click', function(event){
//     if (!sidebar.contains(event.target) && !icon_menu.contains(event.target)){
//         sidebar.classList.remove('ativo-side');
//         tela.classList.remove('azul-background');
//     }
// });

// links_side.forEach(link => {
//     link.addEventListener('click', function(e){
//         e.preventDefault(); // Impede o comportamento padrão do link
//         var targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo
//         var targetElement = document.getElementById(targetId); // Obtém o elemento de destino
//         targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o destino
//         sidebar.classList.remove('ativo-side'); // Remova a classe ativo-side
//         sidebar.classList.add('fecha-side'); // Adiciona a classe fecha-side
//         tela.classList.remove('azul-background');
//     });
// });



var icon_menu = document.querySelector('.menu-mob');
var sidebar = document.querySelector('.sidebar');
var sideBlur = document.querySelector('.side-blur');
var links_side = document.querySelectorAll('.links_side');

icon_menu.addEventListener('click', function(){
    sidebar.classList.toggle('ativo-side');
    sideBlur.classList.toggle('side-blur-active');
});

document.addEventListener('click', function(event){
    if (!sidebar.contains(event.target) && !icon_menu.contains(event.target)){
        sidebar.classList.remove('ativo-side');
        sideBlur.classList.remove('side-blur-active');
    }
});

links_side.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); // Impede o comportamento padrão do link
        var targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo
        var targetElement = document.getElementById(targetId); // Obtém o elemento de destino
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o destino
        sidebar.classList.remove('ativo-side');
        sideBlur.classList.remove('side-blur-active');
    });
});
// ---------------------------------------------//

// REDES/CONTATOS //

var redes = document.querySelector('.redes');
var lista_redes = document.querySelector('.lista-redes');
var seta_redes = document.querySelector('.seta-redes');

redes.addEventListener('click', function(){
    if(lista_redes.style.display == "flex"){
        lista_redes.style.display = "none";
        seta_redes.classList.remove('anima-seta1');
        seta_redes.classList.add('anima-seta2');
    }
    else{
        lista_redes.style.display = "flex";
        seta_redes.classList.remove('anima-seta2');
        seta_redes.classList.add('anima-seta1');
    }
});

// ---------------------------------------------//
