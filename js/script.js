let startBtn = document.querySelector('button');
let answerLog = document.querySelector('.resultLog');
let answerLogWin = document.querySelector('.resultLogWin');

let shipN1 = {
    shipName: 'ShipOne',
    shipHealth: 300,
    shipDamage: 5,
};
let shipN2 = {
    shipName: 'ShipTwo',
    shipHealth: 100,
    shipDamage: 20,
};

startBtn.addEventListener('click', function(){

    
    while (shipN1.shipHealth > 1 && shipN2.shipHealth > 1 ){
        
        one = shipN1.shipHealth -= shipN2.shipDamage;
        response1 = `${shipN1.shipName} наносит урон в ${shipN1.shipDamage} единиц по  ${shipN2.shipName};`;
        two = shipN2.shipHealth -= shipN1.shipDamage;
        response2 = `${shipN2.shipName} наносит урон в ${shipN2.shipDamage} единиц по  ${shipN1.shipName};`;
        
        let response = '';
        let responseWin = '';
        if (shipN1.shipHealth > shipN2.shipHealth){
            responseWin = `${shipN1.shipName} Winn`;
        }else if (shipN2.shipHealth > shipN1.shipHealth){
            responseWin = `${shipN2.shipName} Winn`;
        }else{
            responseWin = `Nothin to win`;
        }
        let arr = `${response1} <br> ${response2}`;
        
        
        for (let i = 0;  i < responseWin.length ; i++){
            response = `${answerLog.innerHTML}<div>${arr}</div>`;
        }
        answerLog.innerHTML = `${response}`;

        if (responseWin.length > 0){
            answerLogWin.innerHTML = `${responseWin}<br>Остаток HP ${shipN1.shipName}:${shipN1.shipHealth}<br><br>Остаток HP ${shipN2.shipName}:${shipN2.shipHealth}`;
        }
        console.log(`${shipN1.shipHealth} - ${shipN1.shipName}`);
        console.log(`${shipN2.shipHealth} - ${shipN2.shipName}`);
        
    }
    
});
