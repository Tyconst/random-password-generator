let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
let genButton = document.getElementById("generate-btn")
let isGenerated = false

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomPassword1() {
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    return characters[randomIndexOne]
}

function getRandomPassword2() {
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    return characters[randomIndexTwo]
}

function generateRandomPasswords (){
        if (isGenerated === false) {
            for (let i = 0; i < 16; i++){
                pass1El.textContent += (getRandomPassword1(i))
                pass2El.textContent += (getRandomPassword2(i))
                isGenerated = true
        }
    }
}

function clearField () {
        if (isGenerated === true) {
            pass1El.textContent = ""
            pass2El.textContent = ""
            isGenerated = false
    }
}


function generateAndReset (){
    if (isGenerated === false){
        generateRandomPasswords();
    } else if (isGenerated === true) {
        clearField();
        generateRandomPasswords();
    }
}