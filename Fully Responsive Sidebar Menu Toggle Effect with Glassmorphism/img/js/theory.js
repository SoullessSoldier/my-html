'use strict';
//Рекурсия
//Вызов функции внутри функции

function changeTires(snowTires){
    /* если у нас на машине колеса с зимней резиной, то
    надо провести следующие дейтсвия:
    демонтаж, давление, балансировка, монтаж  */
    snowTires--;
    console.log('snowTires: ', snowTires);
    if (snowTires>0){
        changeTires(snowTires);
    }
    
}
changeTires(4);

//Циклы
//while
let n =0;
while(n < 5){
    console.log(n);
    n++;
}

//do ... while
//В любом случае выполнит итерацию цикла
n = 0;
do {
    console.log(n);
    n++;  
}
while(n<5);

//for
for(let i = 0; i< 5; i++){
    console.log(i);
}
//break - выход из цикла
for(let i = 0; i< 5; i++){
    if (i === 3){
        break;
    }
    console.log(i);
}
//continue - пропуск итерации
for(let i = 0; i< 5; i++){
    if (i === 3){
        continue;
    }
    console.log(i);
}