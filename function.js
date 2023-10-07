
function forstatement() {
  for (let i=0; i<7; i++) {
    console.log("Nilai = : " + i) ;
  }
}

function fwhile() {
  let peserta = 10;

  while (peserta <= 20) {
    console.log(peserta);
    peserta++;
  }
}

function dowhile() {
  let anakbabi = 1;

do {
  console.log("babi ke : " + anakbabi);
  anakbabi++;
} while (anakbabi <= 6);
}

function switchcase() {
  let anggota = "Araapp";

switch (anggota) {
  case "Hasan":
    console.log("hallo, my name is Hasan.");
    break;
  case "Rizky":
    console.log("hallo, my name is Rizky.");
    break;
  case "Mett":
    console.log("hallo, my name is Mett.");
    break;
  case "Putri":
    console.log("hallo, my name is Putri.");
    break;
  default:
    console.log("Anggota Tidak Tersedia.");
  }
}


function ifelse() {
  let Skor = 100;

  if (Skor > 70) {
    console.log("Selamat Anda Berhasil Mendapatkan Undian");
  } else {
    console.log("Anda Belum Beruntun");
  }
}


function nestedif() {
  let nilai = 200;

  if (nilai >= 150) {
    console.log("Tinggi");
  } else if (nilai == 150) {
    console.log("Sedang");
  } else if (nilai <= 150) {
    console.log("CPendek");
  } else {
    console.log("Tidak Terdefinisi");
  }
}








// MEMANGGIL FUNGSI 
forstatement();
ifelse();
nestedif();
fwhile();
dowhile();
switchcase();