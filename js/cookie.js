
    var novikolacic = document.cookie;
    var delovikolacica = novikolacic.split("=");
    var imekolacica = delovikolacica[0];
    var vrednostkolacica =  decodeURI(delovikolacica[1]);
    var prethodnavrednost = vrednostkolacica;
    if (imekolacica != "brojac" || vrednostkolacica == null) {
        prethodnavrednost = 0;
    }
    var novavrednost = parseInt(prethodnavrednost) + 1;
    var noviDatum = new Date();
    noviDatum.setTime(noviDatum.getTime() + 2592000000);
    document.cookie = "brojac=" + novavrednost + ";expires=" + noviDatum.toGMTString();

    // onemogucavanje desnog klika
    document.oncontextmenu = function() { return false;};	
   