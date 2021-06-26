//Program -1

function is_array(arr){
    return Array.isArray(arr);}
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));


//Program -2

function array_Clone(arr)
{
    return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Program -3

function first(arr,n)
{
    if(n<0)
    return [];
    else if(n==null)
    return arr[0];
  return arr.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//Program -4

myColor = ["Red","Green","White","Black"];
console.log(myColor.join(','));
console.log(myColor.join(','));
console.log(myColor.join('+'));


//Program -5

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max=1;
var item;
for(let i=0;i<arr1.length;i++)
{
    m=0;
  for(let j=i;j<arr1.length;j++)
  {
    if(arr1[i]==arr1[j])
    m++;
    if(max<m)
    {
    max=m;
    item=arr1[i];
    }

  }    

}
console.log( item +" ( "+max+" times )");


