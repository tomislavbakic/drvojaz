var x;

function loadXML()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","../xml/newXMLDocument.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    x = xmlDoc.getElementsByTagName("usluga");
   
}

function prikazi()
{
  
    txt = "<table cellpadding='5'>";
    txt += "<tr><th>Tip</th><th>Velicina</th><th>Cena(€)</th></tr>";
    for (i = 0; i < x.length; i++) 
    {
        tip = x[i].getElementsByTagName("vrsta")[0].firstChild.nodeValue; 
        size = x[i].getElementsByTagName("size")[0].firstChild.nodeValue;
        cena = x[i].getElementsByTagName("price")[0].firstChild.nodeValue;
       //alert(tip + size + cena);
        txt += "<tr><td>";
        txt += tip +"</td><td>" + size + "</td><td class='cena'>" + cena + "</td>";
        txt += "</tr>";
    }
   
    txt +="</table>";
    document.getElementById("tabela_cena").innerHTML = txt;
}