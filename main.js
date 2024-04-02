// Get reference to our elements
let number = document.getElementById('number');
let counter = 0;

setInterval(() => {
    if(counter == 65){
        clearInterval;
    }else{
        counter += 1;
        number.innerHTML = `${counter}%`;
    }
}, 30);