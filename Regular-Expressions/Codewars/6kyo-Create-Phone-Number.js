//переводит массив чисел в номер телефона ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
function createPhoneNumber(numbers){

    const str= numbers.join("");
    const regex = /(\d{3})(\d{3})(\d{4})/g;
     return str.replace(regex, "($1) $2-$3");
    }

//5head 
function createPhoneNumber1(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }