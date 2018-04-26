let firstProm = function(){
    return new Promise(function(resolve,reject){
        resolve('This is the first promise');
    });
}

let secondProm = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' This is the second promise');
    });
}

let thirdProm = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' This is the third promise');
    });
}

firstProm().then(function(result){
    return secondProm(result);
}).then (function(result){
    return thirdProm(result);
}).then(function(result){
    console.log('All promises are finished ' +  result);
})