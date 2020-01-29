// 1. Menyusun Barisan Bintang

for ( var rows=1; rows<=5; rows++){
    var rows1= '*'
    console.log(rows1)
  }
console.log()

// 2. Menyusun Barisan Bintang Dengan Nested Looping

for ( var rows2=1; rows2<=5; rows2++){
    var bintang= ''
    for( var rows3=1 ; rows3<=5; rows3++){
      var bintang= bintang + '*'
    }
    console.log(bintang)
  }
  console.log()

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for ( var rows4=1; rows4<=5; rows4++){
    var bintang= ''
    for( var rows5=1 ; rows5<=rows4; rows5++){
      var bintang= bintang + '*'
    }
    console.log(bintang)
  }
  
  