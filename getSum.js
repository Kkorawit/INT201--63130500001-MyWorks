//7 kyu
function getSum(a,b){
    if(a==b) return a;

    var c =0;
    for(i=((a<b)?a:b);i<=((a<b)?b:a);i++)c+=i;
    return c;
}
console.log(getSum(3,4));