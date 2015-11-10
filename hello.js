function hello (){
	var name = prompt ("Indiquez le nom de la personne à saluer");
	var nb = prompt("Indiquez le nombre de 'Hello' à afficher");
	var i = 0;
	while (i<nb){
	 alert ('Hello ' + name);
	 i++;
        }
}
