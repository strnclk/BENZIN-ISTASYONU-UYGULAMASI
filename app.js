/*
     1-DİZEL : 24.53
   

     Gelen müşteriden alacağımız bilgiler;
     2-Yüklenecek yakıt litresi

*/

let dizel = 24.53;
const yeniSatir = "\r\n";

    
let yakitLitresi = Number(prompt("YAKIT LİTRESİNİ GİRİNİZ"));
let bakiye = Number(prompt("BAKİYENİZİ GİRİNİZ"));

if (dizel == "24.53"){
    //DİZEL
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
        //bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı" + yeniSatir
            + "kalan bakiye:" + (bakiye - odenecekTutar));
    } else {
        //bakiye yeterli değil
        alert("Bakiyeniz Yeterli Değildir" + yeniSatir
            + "Ödenecek tutar:" + odenecekTutar + yeniSatir
            + "Bakiye:" + bakiye + yeniSatir
            + "Eksik tutar:" + (odenecekTutar - bakiye));
    }

}