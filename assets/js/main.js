var szovegek = [
    "lorem ipsum dolor sit amet",
    "sanyi és peti mindig ötös",
    "tomi mosóport vettem tegnap",
    "nincs kettő négy nélkül",
    "ki mint veti ágyát úgy alussza álmát",
    "minden majom telefonál naponta",
    "a kockázatok és mellékhatások",
    "csabi egy dobozfejű titán"
];

var rnd = Math.floor(Math.random()*szovegek.length);

document.getElementById("szoveg").innerHTML = szovegek[rnd];