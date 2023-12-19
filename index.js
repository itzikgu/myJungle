/*find the first buttton, create an event listener and listen to clicks. 
when the button is clickes, invoke the function.
when using event listeners, we will not call the function with the ().
if we will use () in event listener, the function will be immidienty triggered, not when clicked*/

window.addEventListener("load", function(){
    var jungleAudio=new Audio("./sounds/african-rhythm.mp3");
    jungleAudio.volume=0.4;
    jungleAudio.play();
});

//creating all buttons array
var buttons=document.querySelectorAll(".animal");

//adding event listener to the mouse click
for (var i=0;i<buttons.length;i++){
    //void function that take the innerHTML of the button[i] and sends it to the makeSound function
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    )}

//adding event listener to the keyboard press
//using void function that sends the key that was pressed to the makeSound function
//event.key returns the specific key that was pressed
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


/*the function recieves a key as an input. based on the key (mouse click or keypress) 
the relevant audio is being played*/
var currentAudio; // variable to store the currently playing audio

function makeSound(key) {

    // Pause the currently playing audio (if any)
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
        case 'w':
            currentAudio = new Audio("./sounds/Chicken.mp3");
            break;
        case 'a':
            currentAudio = new Audio("./sounds/Dog.mp3");
            break;
        case 's':
            currentAudio = new Audio("./sounds/Duck.mp3");
            break;
        case 'd':
            currentAudio = new Audio("./sounds/Elephant.mp3");
            break;
        case 'j':
            currentAudio = new Audio("./sounds/Lion.mp3");
            break;
        case 'k':
            currentAudio = new Audio("./sounds/Monkey.mp3");
            break;
        case 'l':
            currentAudio = new Audio("./sounds/parot.mp3");
            break;
        default:
            alert("No such drum type!");
            return; // exit the function if the key is not recognized
    }

    // Play the new audio
    currentAudio.play();
}


/*to allow anumation while pressing a drum we will use the addition and removal of a class*/
function buttonAnimation(currentKey){ //based on the key that was pressed
    var activeButton=document.querySelector("."+currentKey); //we'll create a variable to store the pressed key
    activeButton.classList.add("pressed"); //will add a class of "pressed" to the pressed button
    setTimeout(function(){activeButton.classList.remove("pressed");},150); //after a delay of 100ms we'll remove the class
}



