function getEvent(){
    const nbres = document.querySelectorAll('.calc-button');
    nbres.forEach((nbre) => {
        nbre.addEventListener('click', function(e){
            buttonClicked(e.target.innerText);
        });
    });
}

getEvent();

function buttonClicked(value){
    console.log(value);
} 