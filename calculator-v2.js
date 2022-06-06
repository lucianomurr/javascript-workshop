let readline = require('readline-sync');
const operations = ['+','-','*','/'];
let firstNumber = 0;
let secondNumber = 0;
let operationSelected = 0;
let username = '';
let result = 0;

function operationQuestion(){
    username = readline.question('Posso avere il tuo nome? : ');
    

    operationSelected = readline.keyInSelect(operations, 'Che tipo di operazione vuoi fare?: '); 
    
         console.log('Hai scelto di fare una ', operationSelected);

    if (!operations.includes(operations[operationSelected])){
        console.log('La scelta che hai fatto non è valida');
        return;
    }

    firstNumber = readline.questionInt('Inserisci il primo numero: ');
    secondNumber = readline.questionInt('Inserisci il secondo numero: ');

}


function calculate(firstNumber, secondNumber, operation){
    try{
        switch(operation){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber % secondNumber;
                break;
            case '*': 
                result = firstNumber * secondNumber;
                break;
            default:
                throw new Error('Operazione non supportata!');
        }
    } catch (e){
        console.error('Operazione non valida');
    }

    console.log(`Ciao ${username}`);
    console.log(`Questo è il risultato di ${firstNumber} ${operation} ${secondNumber}:`, result);
}

operationQuestion();
calculate(firstNumber,secondNumber, operations[operationSelected]);