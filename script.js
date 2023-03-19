var mouseX=0;
var mouseY=0;

function init(){
    document.getElementById("naissance").innerHTML = `Né le 19/01/2004 (${age(19,01,2004)} ans)`
}

/**@param {HTMLElement} element */
function demandNumTel(){
    if(!document.getElementById("numTel").innerHTML.endsWith("07 -- -- -- 50")) return;
    document.getElementById("captcha-container").style.display = 'flex'
    document.getElementById("captcha-container").style.left = `${mouseX}px`
    document.getElementById("captcha-container").style.top = `${mouseY}px`

    // l'utilisateur a 5 secondes pour appuyer sur le captcha
    setTimeout(() => {
        document.getElementById("captcha-container").style.display = 'none'
    }, 5000)


}

function notRobot(){
    document.getElementById("captcha-container").style.display = 'none'
    document.getElementById("captcha-checkbox").checked = false;

    var num = [06,77,23,87,49]

    document.getElementById("numTel").innerHTML = document.getElementById("numTel").innerHTML.replace("07 -- -- -- 50",'0'+num.map(x => x+1).join(" "))
}

function sendEmail(){
    //document.open("axel.roget@gmail.com", "", "noopener=true")
}

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX + document.body.scrollLeft
    mouseY = event.clientY + document.body.scrollTop
})



/**
 * @description Permet de calculer l'âge d'une personne en fonction de sa date de naissance
 * @param {Number} day 
 * @param {Number} month 
 * @param {Number} year 
 * @returns {Number} age de la personne
 */
function age(day, month, year) {
    const currentDate = new Date();
    const dateOfBirth = new Date(year, month - 1, day);
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = currentDate.getMonth() - dateOfBirth.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
      age--;
    }
  
    return age;
  }



