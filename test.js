const multiply = (a,b) =>a*b;
const multiply = (a) => (b) => a*b;
const multiplyBy5 = multiply(5);




const compose = ( f,g) =>(a)=>f(g(a));
const sum = (num) => (num+1)
compose(sum,sum)


console