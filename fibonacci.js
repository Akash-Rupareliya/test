function funct(x)
{
    var n1=0;
    var n2=1;
    
    console.log(n1);
    console.log(n2);
    
    for(var i=2;i<x;i++)
    {
        n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;

    }
    return 0;
}
funct(3);