var nama = 'Shando';  // Masukkan nama siapa saja
var peran = 'Ksatria'; // Pilih salah satu : Tabib, Ksatria, Penyihir  

if (nama == ''){
   console.log("Nama harus diisi!")
}
else if   (peran =='') {
   console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}
else if (peran == 'Ksatria' )
{
  console.log ("Selamat datang di Dunia Proxytia, " + nama)
  console.log ("Halo "  + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}

else if (peran == 'Tabib' )
{
  console.log ("Selamat datang di Dunia Proxytia, " + nama)
  console.log ("Halo "  + peran + " " + nama + ", kamu akan membantu temanmu yang terluka!")
}

else if (peran == 'Penyihir' )
{
  console.log ("Selamat datang di Dunia Proxytia, " + nama)
  console.log ("Halo "  + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}