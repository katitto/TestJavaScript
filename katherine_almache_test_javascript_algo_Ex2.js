/*(2pt) Create a JAVASCRIPT "F21" function which accepts 1 input parameter "A" of
table type with 9 positions as input.*/
function askNumberOnetoNine(num)
{	/*Check num as a number*/
	var valoresAceptados = "^[1-9]+$";
	var contador = 0;
	var array = new Array(9);
	
	if (num == 9)
	{
        alert ("The parameter It's  number 9 ");
		while(contador<num){			
		num_input = prompt("Insert a number: ");
		/*Check num as a number*/
		if(num>=1 && num<=9)
		{	
			alert ("It's  a number  between 1 -9 ")
			/*put in array is it 's the first position there is nothing to compare*/
			if(contador == 0){
				var exist = false;					
				array[contador] = num_input;
				console.log(array);
				contador++
			}else{
				/*we need to compare with the previous values*/
				if(checkNumber(array)){
					prompt("Number exist in array");
				}else{
					array[contador] = num_input
					console.log(array);
					contador++
				}						
			}
		}else{
			alert ("It's not a number, enter a number correct between 1-9 ")
		}
		
		}
		 
    } else {
         alert ("It's not  anumber, please use a correct number as a parameter");
      }
}	


function checkNumber(array){
	var exist = false;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[i] == array[j] && i != j) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
				exist= true;
				}
			}
		}
	return exist;
}
		

