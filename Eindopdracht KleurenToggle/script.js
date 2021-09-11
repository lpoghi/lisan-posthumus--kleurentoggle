let toggleNavStatus = false;
let getSideBarUl = document.querySelector('.toggle-nav ul');
let toggleNavBtn = document.querySelector('.toggle-nav');

toggleNavBtn.addEventListener('click', function () {
    if (toggleNavStatus === false) {
        getSideBarUl.style.visibility = 'visible';
        toggleNavStatus = true;
        
    }
    else {
        getSideBarUl.style.visibility = 'hidden';
        toggleNavStatus = false;  
    }
});



const bodyBackground = document.querySelector('body');

/* rood */
let redColor = document.querySelector('.red');

redColor.addEventListener('click' , function(){
   bodyBackground.className = 'red'
}); 


/* standaard */
let defaultColor = document.querySelector('.default');

defaultColor.addEventListener('click' , function(){
   bodyBackground.className = 'default'
}); 

/* Oranje */
let orangeColor = document.querySelector('.orange');

orangeColor.addEventListener('click' , function(){
   bodyBackground.className = 'orange'
}); 

/* Geel */
let yellowColor = document.querySelector('.yellow');

yellowColor.addEventListener('click' , function(){
   bodyBackground.className = 'yellow'
}); 

/* Groen */
let greenColor = document.querySelector('.green');

greenColor.addEventListener('click' , function(){
   bodyBackground.className = 'green'
}); 

/* Blauw */
let blueColor = document.querySelector('.blue');

blueColor.addEventListener('click' , function(){
   bodyBackground.className = 'blue'
}); 

/* paars */
let purpleColor = document.querySelector('.purple');

purpleColor.addEventListener('click' , function(){
   bodyBackground.className = 'purple'
}); 