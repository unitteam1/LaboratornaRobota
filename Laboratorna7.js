var x;
x = prompt("Enter number:  ")
if(isNaN(x))
{
    console.log("Is not number");
}
else
{
   console.log("Is number");
}
if(x%2==0)
{
    console.log("Number is even ");
}
else
{
    console.log("Number is odd  ");
}

    let array = [1,2,3,4,5,6,7,8,9];
    let sortarray =[];
    let sum = 0;
function findprimes(array)
{
    if(array < 2) return false;
    for(let i = 2; i < array; i++)
    {
      if(array % i == 0)
      {
        return false;
      }
    }
    
    return true;
    
}

array.forEach(function (element)
{
    const item = findprimes(element);
    if (item)
    {
        sortarray.push(element);
    }
});
function sumprime (array)
{
    for(let element = 0; element < array.length; element++){
        if(!findprimes(array[element])){
           continue;
        };
        sum += array[element];
     };
     return sum;
  };
  console.log(sumprime(array));

console.log(sortarray);

function summation(n) 
{
    let sum = 0, j = 1;
    for ( let i = 1; i <= n; i++) 
    {
        sum = sum + j;
        j = (j * 10) + 1;
    }
    return sum;
}
    let n = 9;
  console.log(summation(n));