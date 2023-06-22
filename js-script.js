let buffer= "0";
let currentCalc = 0;

let currentTotal = 0;
let previousSymbol = null;

/* let screenTop = document.querySelector('.top-screen'); */
let screenBottom = document.querySelector('.bottom-screen');

function getEvents(){
    const nbres = document.querySelectorAll('.calc-button');
    nbres.forEach((nbre) => {
        nbre.addEventListener('click', function(e){
            handleClick(e.target.innerText);
        });
    });
}

getEvents(); 
 
function handleClick(value){ 
    if(isNaN(value)){ 
        handleSymbol(value);
        previousSymbol = value;
    } 
    else{  
        handleNumber(value);  
    };     
    screenBottom.textContent = parseInt(buffer);
} 

function handleSymbol(symbol){    
        switch(symbol){
            case 'C':  
                buffer = '0';
                currentTotal = 0; 
                break;  
            case '←':   
                if(buffer.length === 1){ 
                    buffer = '0';
                }
                else{
                    buffer = buffer.slice(0, buffer.length - 1);
                }
            break; 
            case '÷':
            case '×':
            case '+':
            case '−':   
            calcul(buffer); 
                break;
            case '=': 
                if(previousSymbol === null){
                    return
                }
                solve(parseInt(buffer));
                previousSymbol = null;
                buffer = currentTotal;
                currentTotal = 0;
                break;    
        };   
}   
   
function handleNumber(number){    
    if(buffer === "0"){   
        buffer = number;    
    }
    else{  
        buffer += number; 
    }
}     

function calcul(symbol){
    if (buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(currentTotal === 0){
        currentTotal = intBuffer;
    }else{
        solve(intBuffer);
    }
    previousSymbol = symbol;
    buffer = '0';
}

function solve(intBuffer){ 
    if(previousSymbol === '+'){   
        currentTotal += intBuffer;
    }
    else if(previousSymbol === '−'){ 
        currentTotal -= intBuffer;
  
    }
    else if(previousSymbol === '×'){    
        currentTotal *= intBuffer;

    } 
    else if(previousSymbol === '÷'){  
        currentTotal /= intBuffer;
    }
}