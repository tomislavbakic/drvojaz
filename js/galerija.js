function galerijaSlika(x)
{
	var galerija = document.getElementById("content_slike");

	if(x.value == "unutrasnja")
	{
		galerija.innerHTML = '<a href="../images/stepenice.jpg"><img src="../images/stepenice.jpg" class="vertikalne"></a>'+
					'<a href="../images/stepenice2.JPG"><img src="../images/stepenice2.JPG" class="vertikalne"></a>'+
					'<a href="../images/soba.jpg"><img src="../images/soba.jpg" class="vertikalne"></a>'+
					'<a href="../images/vrata1.jpg"><img src="../images/vrata1.jpg" class="vertikalne"></a>'+
					'<a href="../images/vrata2.jpg"><img src="../images/vrata2.jpg" class="vertikalne"> </a>'+
					'<a href="../images/lamperija.jpg"><img src="../images/lamperija.jpg" class="vertikalne"> </a>'+
					'<a href="../images/klizni.jpg"><img src="../images/klizni.jpg" class="vertikalne"> </a>'+
					'<a href="../images/soba2.jpg"><img src="../images/soba2.jpg" class="vertikalne"> </a>'
	}
	else if(x.value == "spoljna")	
	{
		galerija.innerHTML = '<a href="../images/ograd2.jpg"><img src="../images/ograda2.jpg" class="horizontalne"></a>'+
					'<a href="../images/balkon.JPG"><img src="../images/balkon.JPG" class="horizontalne"></a>'+
					'<a href="../images/klupasto.jpg"><img src="../images/klupasto.jpg" class="horizontalne"></a>'+
					'<a href="../images/vrata.jpg"><img src="../images/vrata.jpg" class="horizontalne"></a>'+
					'<a href="../images/prozor.JPG"><img src="../images/prozor.JPG" class="horizontalne"></a>'+
					'<a href="../images/ograda.jpg"><img src="../images/ograda.jpg" class="horizontalne"></a>'+
					'<a href="../images/balkonac.jpg"><img src="../images/balkonac.jpg" class="horizontalne"> </a>'+
					'<a href="../images/park.jpg"><img src="../images/park.jpg" class="horizontalne"> </a>'
	}
	else if(x.value == "kuhinje")
	{
		galerija.innerHTML='<a href="../images/kuhinja1.jpg"><img src="../images/kuhinja1.jpg" class="vertikalne"></a>'+
					'<a href="../images/kuhinja2.jpg"><img src="../images/kuhinja2.jpg" class="vertikalne"></a>'+
					'<a href="../images/kuhinja3.jpg"><img src="../images/kuhinja3.jpg" class="vertikalne"></a>'+
					'<a href="../images/kuhinja4.jpg"><img src="../images/kuhinja4.jpg" class="vertikalne"></a>'+
					'<a href="../images/kuhinja5.jpg"><img src="../images/kuhinja5.jpg" class="vertikalne"> </a>'+
					'<a href="../images/kuhinja6.jpg"><img src="../images/kuhinja6.jpg" class="vertikalne"> </a>'+
					'<a href="../images/kuhinja7.jpg"><img src="../images/kuhinja7.jpg" class="vertikalne"> </a>'+
					'<a href="../images/kuhinja8.jpg"><img src="../images/kuhinja8.jpg" class="vertikalne"> </a>'
	}
	else if(x.value == "namestaj")
	{
		galerija.innerHTML='<a href="../images/komoda2.jpg"><img src="../images/komoda2.jpg" class="vertikalne"></a>'+
					'<a href="../images/komodica.jpg"><img src="../images/komodica.jpg" class="vertikalne"></a>'+
					'<a href="../images/krevet.jpg"><img src="../images/krevet.jpg" class="vertikalne"></a>'+
					'<a href="../images/krevet2.jpg"><img src="../images/krevet2.jpg" class="vertikalne"></a>'+
					'<a href="../images/regal.jpg"><img src="../images/regal.jpg" class="vertikalne"> </a>'+
					'<a href="../images/regal2.jpg"><img src="../images/regal2.jpg" class="vertikalne"> </a>'+
					'<a href="../images/stocic.jpg"><img src="../images/stocic.jpg" class="vertikalne"> </a>'+
					'<a href="../images/plakar.jpg"><img src="../images/plakar.jpg" class="vertikalne"> </a>'
	}
	else if(x.value = "ostalo")
	{
		galerija.innerHTML='<a href="../images/saksija.jpg"><img src="../images/saksija.jpg" class="vertikalne"></a>'+
					'<a href="../images/svecnjak.jpg"><img src="../images/svecnjak.jpg" class="vertikalne"></a>'+
					'<a href="../images/stalak.jpg"><img src="../images/stalak.jpg" class="vertikalne"> </a>'+
					'<a href="../images/stafelaj.jpg"><img src="../images/stafelaj.jpg" class="vertikalne"> </a>'+
					'<a href="../images/vaga.jpg"><img src="../images/vaga.jpg" class="horizontalne"> </a>'+
					'<a href="../images/gitara.jpg"><img src="../images/gitara.jpg" class="horizontalne"></a>'+
					'<a href="../images/sanducad.jpg"><img src="../images/sanducad.jpg" class="horizontalne"></a>'+
					'<a href="../images/posluzavnik.jpg"><img src="../images/posluzavnik.jpg" class="horizontalne"> </a>'
	}
}