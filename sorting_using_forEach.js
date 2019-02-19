var number=[21,3,22,5,4,1,4];
number.forEach(function (param,k,ar) {
    for(var i=0;i<number.length;i++){
        for(var j=i+1;j<number.length;j++){
            if(ar[j]<ar[i]){
                temp=ar[j];
                ar[j]=ar[i];
                ar[i]=temp;
            }
        }
    }
    console.log(ar);
});
