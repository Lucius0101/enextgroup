var i;
function buildFooter() {
		
	 var res = document.getElementById('footer');
	 var temp = "";
	 
		
		temp += '<table> <tr> <td>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
		+'<a href="#company" class = "link">COMPANY</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
		+'<a href="#contact" class = "link">CONTACT US</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
		+'<a href="#shipping" class = "link">SHIPPING</a> </br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
		+'<a href="#returns" class = "link"> RETURNS</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
		+'<a href="#carrers" class = "link">CARRERS</a> </br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
		+'<img src="imgs/icons/social/facebook.png" class ="socialicons">'
		+'<img src="imgs/icons/social/twitter.png" class ="socialicons">'
		+'<img src="imgs/icons/social/pinterest.png" class ="socialicons">'
		+'<img src="imgs/icons/social/google.png" class ="socialicons">'
		+'<img src="imgs/icons/social/facebook.png" class ="socialicons"> </br>'
		+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#169; 2015 Merlin&#39;s Potions. All Rights Reserved' 
		+'</td> <td> <p id = "subscribe">'
		+'<span class = "titulosub"> Sign up for our Newsletter </span> <span class = "textosub" >'
		+'</br>'
		+'Sign up for our newsletter & get exclusive discounts!</br></br>'
		+'<input type = "text" placeholder = "Enter your email" size = 17 style= "font-size: 20pt;"></span>'
		+'<input type="submit" class = "submitbtn" value="SUBMIT"></p></td> </tr>';
		
		
	
			
			res.innerHTML = temp;
			
	
}