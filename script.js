let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let formulaire = document.querySelector('#info');
let erreurA = document.querySelector('.erreurA');
let erreurB = document.querySelector('.erreurB');
let btn    = document.querySelector('#submit');
let restart = document.querySelector('#restart');
let resultat = document.querySelector('#result');
let instrucion = document.querySelector('.output');


erreurA.style.display = 'none';
erreurB.style.display = 'none';
restart.style.display = 'none';
height.focus();

height.addEventListener('keyup',() =>{
    if(isNaN(height.value)){
        erreurA.style.display = 'inline';
    }
    else{
        erreurA.style.display = 'none';
 
    }
});

weight.addEventListener('keyup',() =>{
    if(isNaN(weight.value)){
        erreurB.style.display = 'inline';
    }
    else{
        erreurB.style.display = 'none';
 
    }
});
    function afficherResultat(){
        const imc = (weight.value)/((height.value) * (height.value));
        resultat.textContent = ("Votre IMC est : " + imc.toFixed(2));
        if(imc<18.5){
            instrucion.textContent = "Vous êtes maigre."
            instrucion.style.color ="blue"
        } else if (imc >= 18.5 && imc < 25){
            instrucion.textContent = " Vous êtes à la normale" 
            instrucion.style.color = "green";
        } else if(imc >= 25 && imc < 30){
            instrucion.textContent = "surpoids" 
            instrucion.style.color="orange"
        } else if(imc >= 30 && imc <= 40){
            instrucion.textContent = "Obesité moderée" 
            instrucion.style.color ="red"
        }  else if(imc > 40){
            para.textContent = "Obesité sévère" 
            para.style.color = "red";
        }
    };
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        if(isNaN(height.value) || height.value == '',isNaN(weight.value) || weight.value == ''){
            height.style.border = ' 3px solid red';
            weight.style.border = '3px solid red';
        }  
        else{
            afficherResultat();
            height.style.border = ' 3px solid silver';
            weight.style.border = '3px solid silver';
            height.value = '';
            height.disabled = true;
            weight.value = '';
            weight.disabled = true;
            restart.style.display='inline';
            btn.disabled = true;

        }

    });    
    restart.addEventListener('click',() =>{
        restart.style.display = "none";
        document.querySelector('#height').textContent= '';
        document.querySelector('#weight').textContent = '';
        document.querySelector('#result').textContent= '';
        document.querySelector('.output').textContent= '';
        height.disabled = false;
        weight.disabled = false;
        btn.disabled = false;

        height.focus();
    })