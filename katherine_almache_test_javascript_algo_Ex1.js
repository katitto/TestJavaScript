		//Declare funtion for Verify
function toVerify()
{
		
/*Create a multidimentional array 9*9*/		
	var arrayBidimensional= new Array(9);
	document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
	for (var i = 0; i < arrayBidimensional.length; i++) 
	{
		document.write("<tr>")
		arrayBidimensional[i] = new Array(9);
		for (j=0;j<arrayBidimensional[i].length;j++)
		{ 
			arrayBidimensional[i][j] = " ";
			document.write("<td>" + arrayBidimensional[i][j] + "</td>") 
		}
		document.write("</tr>") 
	}
	document.write("</table>")						
}

/*Insert the array provided by teacher in our table 9*9*/
/*call the file pending to know how to call js in other js*/

function toInsert(){
	/*Insert the array provided by teacher in our table 9*9*/
	/*call the file pending to know how to call js in other js*/
var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6"; 
array_number[1]= "9 8 3 7 6 2 5 1 4"; 
array_number[2]= "1 5 6 8 9 4 7 2 3"; 
array_number[3]= "2 3 9 1 8 5 4 6 7"; 
array_number[4]= "7 4 1 6 3 9 2 5 8"; 
array_number[5]= "5 6 8 2 4 7 1 3 9"; 
array_number[6]= "8 7 2 9 1 3 6 4 5"; 
array_number[7]= "3 9 5 4 2 6 8 7 1"; 
array_number[8]= "6 1 4 5 7 8 3 9 6";


var arrayNew= new Array(9);
var array_Aux = new Array(9);

	/*bidimensional array to get*/
	for (var i = 0; i < arrayNew.length; i++) 
	{
		arrayNew[i] = new Array(9);
	} 
/*funciona*/
	for (var j = 0; j < array_number.length; j++) 
	{
		array_Aux[j] = array_number[j].split(' ');
		for (var k = 0; k < array_Aux[j].length; k++)
		{		
				arrayNew[j][k] = array_Aux[j][k]

		}
	}

	document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
	for (i = 0; i < arrayNew.length; i++) 
	{
		document.write("<tr>")
		
		for ( j=0;j<arrayNew[i].length;j++)
		{ 
			document.write("<td>" + arrayNew[i][j] + "</td>") 
		}
		document.write("</tr>") 
	}
	document.write("</table>")	

}
	

