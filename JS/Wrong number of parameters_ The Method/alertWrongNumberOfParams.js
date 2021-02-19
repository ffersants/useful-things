
function showName(nome, sobrenome){
    checkArgs(2, 'nome, sobrenome')
    console.log(nome, sobrenome);
}

function checkArgs(numOfParamsExpected, ...paramsExpected){
    if(checkArgs.caller.arguments.length !== numOfParamsExpected){
        alertWrongNumberOfParams(numOfParamsExpected, paramsExpected)
    }
}

function alertWrongNumberOfParams(numOfParams, paramNames){
    throw new Error('Error: ' + numOfParams + ' arguments are expected: ' + paramNames + '.')
}
//showName('Fernando');
showName('Fernando', 'Santos', 'Ferreira');
showName('Fernando', 'Santos Ferreira',);
