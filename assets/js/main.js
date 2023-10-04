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
  "Aki skypeot használ az nem normális"
];

var rnd = Math.floor(Math.random() * szovegek.length);

document.getElementById("szoveg").innerHTML = szovegek[rnd];

var ido = 0;
var mehet = true;

document.getElementById("bemenet").addEventListener("input", () => {
  if (mehet) {
    mehet = false;
    var idozito = setInterval(() => {
      ido++;
      document.getElementById("ido").innerHTML = ido / 10 + " mp";
      var cpm = Math.round((szovegek[rnd].length / (ido / 10)) * 100) / 100;
      var p = Math.floor((cpm/20)*100);
      if (p>100) p = 100;
      document.getElementById("progress").style.width = p+"%";
      if (szovegek[rnd] == document.getElementById("bemenet").value) {
        clearInterval(idozito);
        document.getElementById("cpm").innerHTML = cpm + " karakter / mp";
        document.getElementById("kesz").style.display = "block";
      }
    }, 100);
  }
});

var szin = () => {
  var beirt = document.getElementById("bemenet").value;
  document.getElementById("szoveg").innerHTML = "";
  for (var i = 0; i < szovegek[rnd].length; i++) {
    if (szovegek[rnd][i] == beirt[i]) {
      document.getElementById("szoveg").innerHTML +=
        "<span style='color:green'>" + szovegek[rnd][i] + "</span>";
    } else {
      document.getElementById("szoveg").innerHTML +=
        "<span style='color:red'>" + szovegek[rnd][i] + "</span>";
    }
  }
};
