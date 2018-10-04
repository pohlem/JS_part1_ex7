function show(){
	var size = parseInt(document.getElementById("shoeSize").value);
	var year = parseFloat(document.getElementById("yearOfBirth").value);
	var result = (((size*2)+5)*50)-year+1766;
	alert("Résultat : "+result);
}