const id = document.getElementById('container');        //Answer 1

const idC = document.querySelector('#container');       //Answer 2

const second = document.querySelectorAll('.second');    //Answer 3

const olThird = document.querySelector('ol .third');    //Answer 4

idC.innerText = 'hello';                                //Answer 5

const DivF = document.querySelector('.footer');         //Answer 6
DivF.classList.add('main');                             

DivF.classList.remove('main');                          //Answer 7
                
const li = document.createElement('li');                //Answer 8

li.innerText = 'four';                                  //Answer 9

const ul = document.querySelector('ul');                //Answer 10
ul.appendCHild(li);                                          

const allOlLi = document.querySelectorAll('ol li');     //Answer 11
for (let li of allOlLi){
    li.style.color = 'green';
}

DivF.remove();                                          //Answer 12
