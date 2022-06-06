let readline = require('readline-sync');

function operationQuestion(){
    let username = readline.question('Posso avere il tuo nome? : ');
    console.log('Ciao ', username);

    let firstNumber = readline.questionInt('Inserisci il primo numero: ');
    let secondNumber = readline.questionInt('Inserisci il secondo numero: ');
    let operation = readline.question('Che tipo di operazione vuoi fare?: ');

    let result = 0;

    try{
        switch(operation){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '%':
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

    console.log('Questo è il risultato:', result);

}



operationQuestion();