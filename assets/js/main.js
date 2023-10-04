var szovegek = [
    "lorem ipsum dolor sit amet",
    "sanyi és peti mindig ötös",
    "tomi mosóport vettem tegnap",
    "nincs kettő négy nélkül",
    "ki mint veti ágyát úgy alussza álmát",
    "minden majom telefonál naponta",
    "a kockázatok és mellékhatások",
    "csabi egy dobozfejű titán",
    "Thozo the freaking GOAT",
    "Aki skypeot használ az nem normális",
];

var rnd = Math.floor(Math.random()*szovegek.length);

document.getElementById("szoveg").innerHTML = szovegek[rnd];

var ido = 0;
var mehet = true;

document.getElementById("bemenet").addEventListener("input", () => {
if (mehet)
{
    mehet = false;
var idozito = setInterval(() => 
{
    ido++;
    document.getElementById("ido").innerHTML = (ido/10)+" mp";
    if (szovegek[rnd] == document.getElementById("bemenet").value)
    {
        clearInterval(idozito);
        var cpm = Math.round(szovegek[rnd].length/(ido/10)*100)/100;
        document.getElementById("cpm").innerHTML = cpm+" karakter / mp";

        document.getElementById("kesz").style.display = "block";
    }
}, 100);
}
});

