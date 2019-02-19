var ar = [1, 7, 2, 8, 3, 4, 5, 0, 9];


for (var i = 1; i < ar.length; i++)

    for (var j = 0; j < i; j++)

        if (ar[i] < ar[j])
 	{

		var x = ar[i];
	        ar[i] = ar[j];

	        ar[j] = x;

        }


console.log(ar);