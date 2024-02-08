
var porcen = document.getElementById('load');
var num = 0;
var home = document.querySelector('.cir-home');
var intro = document.querySelector('.intro');

// setInterval(function(){
    
//     if(num == 100){
//         clearInterval(porcen);
//         porcen.classList.add('load-hide')
//         home.classList.add('cir-show');
//         intro.classList.remove('intro');
//     }
//     else{
//         num++
//         porcen.innerText = num + "%";
//     }
// }, 23)

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

// Adiciona um evento de clique ao documento para interromper o intervalo quando clicar em qualquer lugar
document.addEventListener('click', function() {
    porcen.innerText = "100%";
    clearInterval(intervaloId);
    porcen.classList.add('load-hide');
    home.classList.add('cir-show');
    intro.classList.remove('intro');
});



// icone.addEventListener('transitionend', function (event){
//     var icone = document.querySelector('.borda-icon');
//     var box = document.querySelector('naosei');
//     var transicao = event.transicao

//     if(transicao == '')
// })











// var icone = document.querySelector('.borda-icon');
// var hidden = document.querySelector('.hidden');

// icone.addEventListener('transitionend', function(event) {
//     console.log(event)

//     if(icone == event.isTruted){
//         hidden.classList.remove('hidden')
//     }

// });




// var name_tec = document.querySelector('.borda-icon');
// var hidden = document.querySelector('.hidden');

// name_tec.addEventListener('transitionend', function(oi) {
//     // Remove a classe 'hidden' quando a transição do elemento .dois termina
//     hidden.classList.remove('hidden');
// });

// name_tec.addEventListener('mouseout', function() {
//     // Adiciona a classe 'hidden' quando o mouse sai do objeto
//     hidden.classList.add('hidden');
// });

var bordaIcons = document.querySelectorAll('.borda-icon');
var hidden = document.querySelectorAll('.hidden');

bordaIcons.forEach(function(name_tec, index) {
    name_tec.addEventListener('transitionend', function() {
        // Remove a classe 'hidden' quando a transição do elemento .borda-icon termina
        hidden[index].classList.remove('hidden');
    });

    name_tec.addEventListener('mouseout', function() {
        // Adiciona a classe 'hidden' quando o mouse sai do objeto .borda-icon
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


// var load = document.querySelector('#load')
// if(porcen == 100){
//     load.classList.add('load-hide');
// }



// var introducao = document.querySelector('.cir-home')

// elemento.addEventListener('animationend', function (event) {
//     var animationName = event.animationName;

    
//     if (animationName === 'load-hide'){
//       elemento.classList.add('cir-show');
//     }
//   });


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




var toTop = document.querySelector('.toTop');


// window.addEventListener('scroll', function() {
//     if(window.scrollY > 300){
//         toTop.classList.add('showTop');
//     } else {
//         toTop.classList.remove('showTop');
//     }
// });

toTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
});



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









