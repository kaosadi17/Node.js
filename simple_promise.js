let roomPromise = new Promise(function(resolve,reject){
    let isRoomClean = true;

    if(isRoomClean){
        resolve('clean');
    }else{
        reject('dirty');
    }

});

roomPromise.then(function(fromResolve){
    console.log('the Room is ' + fromResolve);
});

