// 1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA')
var angka = 2;
while(angka <= 20) {
  console.log(angka + ' - I love coding'); 
  angka = angka+2;
}
console.log('LOOPING KEDUA')
var angka1 = 20;
while(angka1 >= 2 ){
  console.log(angka1 + ' - I will become fullstack developer'); 
  angka1 = angka1-2;
}
console.log()


// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for ( var angka = 1; angka <= 20; angka++){
  console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA')
for ( var angka1 = 20; angka1 >=1; angka1--){
  console.log(angka1 + ' - I will become fullstack developer')
}
console.log()


// 3. Angka Ganjil dan Genap

for (angka=0; angka <=100; angka++){
  
  if (angka % 2 == 0){
    console.log("GENAP broo");
  }
  else {
    console.log("GANJIL cyin");
  }
}

console.log()

for (var angka1=1; angka1 <=100; angka1+=2){
  if (angka1%3==0){
  console.log(angka1 + ' KELIPATAN 3');
  }
}
console.log()

for (var angka2=1; angka2 <=100; angka2+=5){
  if (angka2%6==0){
  console.log(angka2 + ' KELIPATAN 6');
  }
}
console.log()

for (var angka2=1; angka2 <=100; angka2+=9){
  if (angka2%10==0){
  console.log(angka2 + ' KELIPATAN 10');
  }
}