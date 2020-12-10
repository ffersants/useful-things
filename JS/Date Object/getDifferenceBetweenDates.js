day1 = new Date('4/26/2020');//it must follow the shape MM/DD/YYYY
//if DD or MM is shorter than 10, there must not have zeros on left
day2 = new Date('4/28/2020');

differenceBetweenDays = Math.abs(day2 - day1);//the greatest date - the shortest always!!
//Math.abs retorn um valor absoluto, sem negativo
differenceInDays = Math.ceil(differenceBetweenDays / (1000*60*60*24));//and this is the fundamental operation
/*Math.ceil retorna um valor inteiro
se x = 0.95
x = Math.ceil(x) = 1*/
x = 0.95
x = Math.ceil(x) 
console.error(differenceInDays);
