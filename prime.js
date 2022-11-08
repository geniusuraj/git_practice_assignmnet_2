
let factor=0; 
let n=1;

for(let i=1; i<=n; i++){
    if(n%i==0){
        factor++;
    }
}

if(factor==2){
    console.log(n,"is Prime");
}else{
    console.log(n,"is Not Prime");
}
