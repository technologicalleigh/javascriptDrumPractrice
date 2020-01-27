/* add event listener to buttons to make different sound noises*/

let indexOfDrumButtons = document.querySelectorAll('.drum').length;
//let indexOfSounds =


for(var i=0; i<indexOfDrumButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        //create a switch statement to switch between buttons
        /*declaring a variable for this.innerHTML; because 
        was receiving an Uncaught ReferenceError: innerHTML is not defined at
        HTMLButtonElement*/
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });

    document.addEventListener('keypress', function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);

    });
       
    function makeSound(key){
    
        switch(key) {
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play();
                //break statement to tell the code to break and continue with rest of HTML
                break;
            case 'a':
                let tom2= new Audio('sounds/tom-2.mp3')
                tom2.play();
                break;
            case 's':
                let tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play();
                break;
            case 'd':
                let tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play();
                break;
            case 'j':
                let snare = new Audio('sounds/snare.mp3')
                snare.play();
                break;
            case 'k':
                let crash = new Audio('sounds/crash.mp3')
                crash.play();
                break;
            case 'l':
                let kickBass = new Audio('sounds/kick-bass.mp3')
                kickBass.play();
                break;
            default: 
        }
    }

    function buttonAnimation(currentKey){
        /* in order to change the CSS of the buttons when they are either
        clicked or the key is pressed, have to concatenate a period before the 
        keyboard letter in order reach the CSS class. this will be assigned 
        to the variable activeButton*/
        let activeButton = document.querySelector('.'+currentKey);
        //applying the CSS class pressed which changes to opacity of the button
        activeButton.classList.add('pressed');
        /*need to reset the opacity after button is done being "pressed"
        to do so, need to set a setTimeout method to .1 second
        1000 milliseconds is the equivalent to 1 second*/
        setTimeout(function(){
            activeButton.classList.remove('pressed')}, 100);
    };
}



