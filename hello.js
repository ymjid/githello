function hello (){
	msgdiv = document.getElementById('msg');
	msgdiv.innerHTML = "";
	var name = prompt ("Indiquez le nom de la personne a saluer");
	if (name != null){
		var nb = prompt("Indiquez le nombre de 'Hello' a afficher");
	}
	else {
		var errormsg1 = "Aucun nom n'a été renseigné";
		newmsg = document.createElement("p");
		newmsg.setAttribute("class", "errormsg");
         	newmsgtxt = document.createTextNode(errormsg1);
         	msgdiv.appendChild(newmsg);
         	newmsg.appendChild(newmsgtxt);
		return;
	}
	if (nb != null) {
		var i = 0;
		var msg = "Hello " + name;
		while (i<nb){
	 		newmsg = document.createElement("p");
	 		newmsgtxt = document.createTextNode(msg);
	 		msgdiv.appendChild(newmsg);
	 		newmsg.appendChild(newmsgtxt);		 
	 		i++;
        	}
	}
	else {
                var errormsg1 = "Aucun nombre n'a été renseigné";
                newmsg = document.createElement("p");
		newmsg.setAttribute("class", "errormsg");
                newmsgtxt =  document.createTextNode(errormsg1);
                msgdiv.appendChild(newmsg);
                newmsg.appendChild(newmsgtxt);
		return;
	}
	
}
