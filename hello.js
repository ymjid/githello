function hello (){
	var name = prompt ("Indiquez le nom de la personne à saluer");
	var nb = prompt("Indiquez le nombre de 'Hello' à afficher");
	var i = 0;
	var msg = "Hello " + name;
	msgdiv = document.getElementById('msg');
	while (i<nb){
	 newmsg = document.createElement("p");
	 newmsgtxt = document.createTextNode(msg);
	 msgdiv.appendChild(newmsg);
	 newmsg.appendChild(newmsgtxt);		 
	 i++;
        }
	
}
