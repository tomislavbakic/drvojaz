//funkcija za slike na pocetnoj strani
function slideSwitch()
{
	var $active = $("#slider img.active");
	var $next = $active.next().length ? $active.next() : $("#slider img:first");

	$active.addClass("last-active");
	$next.css({opacity:0.0})
	.addClass("active")
	.animate({opacity:1.0},1000,function(){
		$active.removeClass("active last-active");
	});
}

//interval promene slike
$(function(){
	setInterval("slideSwitch()",3500);
});


//funkcija za vreme
function startTime()
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	m = provera(m);
	h = provera(h);
	document.getElementById("txt").innerHTML = h + ":"+ m + ":"+s;
	t = setTimeout(function(){startTime()},500);
}	


//funkcija za proveru ispravnosti vremena
function provera(x)
{
	if(x<10)
	{
		x = "0"+x;
	}
	return x;
}

//radionica je otvorena ako je  vreme izmedju 9 i 17
function radiLiRadionica()
{
	pocetak = 9;
	kraj = 17;

	var today = new Date();
	var h = today.getHours();
	var d = today.getDay();
	
	h = provera(h);
	x = document.getElementById("open");
	if( h >= pocetak && h < kraj &&  d != 0)
	{
		x.innerHTML = "OTVORENO";
		x.style.color = "white";
	}
	else
	{
		x.innerHTML = "ZATVORENO";
		x.style.color = "darkred";
	}
}


//opis informacija o uslugama
function dodatneInformacije(id)
{
	x = document.getElementById(id);
	opis = document.getElementById("opis");
	if(id == "us")
		opis.innerHTML = "U ponudi imamo veliki izbor unutrašnjih vrata od različitih vrsta drveta. Kompletan idejni plan, nabavka materijala, izrada i ugradnja.";	
	else if (id == "ss")
		opis.innerHTML = "U ponudi imamo veliki izbor spoljnih vrata, prozora i balkonaca. Kompletan idejni plan, nabavka materijala, izrada i ugradnja.";
	else if(id == "kuh")
		opis.innerHTML = "U ponudi imamo veliki izbor kuhinjog nameštaja, sudopera, visećih polica i komoda. Kompletan idejni plan, nabavka materijala, izrada i ugradnja.";
	else if(id == "nam")
		opis.innerHTML = "U ponudi imamo veliki izbor polica, komoda, regala, kreveta, stolica i stolova. Kompletan idejni plan, nabavka materijala, izrada i ugradnja.";
	else if (id == "more")
		opis.innerHTML = "Više informacija o uslugama koje pružamo možete naći na delu sajta predviđenom za to.";
}


//validacija
function validacijaForme()
{
	var ime = document.getElementById("ime");
	var prezime = document.getElementById("prezime");
	var adresa = document.getElementById("adresa");
	var telefon = document.getElementById("telefon");
	var email = document.getElementById("email");
	var rok = document.getElementById("rok");

	if(samoSlova(ime,"Molimo Vas u polje za ime je moguće unositi samo slova!"))
	{
		if(samoSlova(prezime,"Molimo Vas u polje za prezime je moguće unositi samo slova!"))
		{
			if(slovaBrojevi(adresa,"Molimo Vas u polje za adresu je moguće unositi samo slova i brojeve."))
			{
				if(samoBrojevi(telefon,"Molimo Vas broj telefona je moguće unositi samo brojeve."))
				{
					if(emailProvera(email,"Molimo Vas unesite email adresu u ispravnom formatu."))
					{	
						if(samoBrojevi(rok,"Molimo Vas da za rok unesete samo broj dana"))
						{
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}


function samoSlova(input,poruka)
{
	var sablon = RegExp(/^[a-zA-Z]+$/);
	if(sablon.test(input.value))
	{
		return true;
	}
	else
	{
		alert(poruka);
		input.focus();
		return false;
	}
}

function samoBrojevi(input,poruka)
{
	var sablon = /^[0-9]+$/;
	if(input.value.match(sablon))
	{
		return true;
	}
	else
	{
		alert(poruka);
		input.focus();
		return false;
	}
}

function slovaBrojevi(input,poruka)
{
	var sablon = RegExp(/^(" ")|[a-zA-Z0-9]+$/);
	if(input.value.match(sablon))
	{
		return true;
	}
	else
	{
		alert(poruka);
		input.focus();
		return false;
	}
}

function emailProvera(input, poruka){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(input.value.match(emailExp)){
		return true;
	}else{
		alert(poruka);
		elem.focus();
		return false;
	}
}


function resetForme()
{
	document.forms["forma"].reset();
}

//ucitavanje informacija o uslugama
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("info_usluge").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../txt/usluge.txt", true);
  xhttp.send();
}