var myList;
var i;
// Funcao chamada no carregamento do <body>
function buildHtmlTable() {

	 var res = document.getElementById('content');
	 
	 // temp: variavel temporaria para armazenar as tags html e depois imprimir na pagina
	 var temp = "";

	 
	request = new XMLHttpRequest();
	request.open('GET', 'potions.json', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400){
		// Successo


		myList = JSON.parse(request.responseText);
		console.log(myList.potions[1]);
		 i= 1;
		
		temp +='<table><tr>';
		
		
		// Enquanto ainda existir itens no JSON, continuar montando os produtos
		// "undefined" ocorre quando o item nao existe
		while (typeof(myList.potions[i]) != "undefined" ) {
			
			
			temp += '<td> <img  src="imgs/'+myList.potions[i].image+'" width="50%" height="8%" style="cursor:pointer" class = "caixa">'
			+'</br>'
			+'<p class="nome">'+myList.potions[i].name+' - <span class="preco"> $'+myList.potions[i].price+ ' </span></p></td>';
			
			// Organizar itens 3 por linha
			if(i%3 ==0){
				temp +='</tr>';
		
				temp +='<tr>';
		
			}
			i++;
		}
		
		
			temp +='</tr></table>';

			// Colocar todas as tags criadas na variavel temp, na pagina
			res.innerHTML = temp;
		
	  } else {
		// Erro
		alert('Um erro ocorreu, por favor tente novamente mais tarde');

	  }
	};

	request.onerror = function() {
		//Erro
		alert('Um erro ocorreu, por favor tente novamente mais tarde');
	};

	request.send();

	




}