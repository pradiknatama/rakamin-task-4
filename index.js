// function untuk set arraynya
function setArray() {
  // set variabel array
  let arr = Array();
  //   looping 100 x
  for (let i = 0; i < 100; i++) {
    // mendapatkan nilai random mulai dari 1-50 (+1 digunakan supaya start awal dari 1)
    const random = Math.floor(Math.random() * 50) + 1;
    //untuk push nilai random ke dalam array
    arr.push(random);
  }
  console.log("Soal 1 : ");
  console.log(arr);
  //   masuk ke function split array
  return splitArray(arr);
}
// untuk membagi menjadi 2 bagian ganjil,genap
function splitArray(array) {
  // variabel penampung untuk array ganjil
  let arr_ganjil = [];
  // variabel penampung untuk array genap
  let arr_genap = [];
  for (let i = 0; i < array.length; i++) {
    // cek apakah index habis dibagi 2 apabila habis dibagi 2 maka nilai array[i] akan di push ke array genap
    if (i % 2 == 0) {
      arr_genap.push(array[i]);
    } else {
      // apabila tidak habis dibagi 2 maka nilai array[i] akan di push ke array ganjil
      arr_ganjil.push(array[i]);
    }
  }
  console.log("Soal 2 :");
  console.log("Array Genap");
  console.log(arr_genap);
  console.log("Array Ganjil");
  console.log(arr_ganjil);
  //   masuk ke function untuk get array dari array ganjil, dan juga array genap
  return getArray(arr_genap, arr_ganjil);
}

function getArray(arr_genap, arr_ganjil) {
  console.log("Soal 3:");
  //get min genap
  let min_genap = getMinVal(arr_genap);
  console.log("Min Genap : " + min_genap);
  //get min ganjil
  let min_ganjil = getMinVal(arr_ganjil);
  console.log("Min Ganjil : " + min_ganjil);

  //get max genap
  let max_genap = getMaxVal(arr_genap);
  console.log("Max Genap : " + max_genap);

  //get max ganjil
  let max_ganjil = getMaxVal(arr_ganjil);
  console.log("Max Ganjil : " + max_ganjil);

  //get total
  let total_genap = getTotalVal(arr_genap);
  console.log("Total Genap : " + total_genap);

  let total_ganjil = getTotalVal(arr_ganjil);
  console.log("Total Ganjil : " + total_ganjil);

  //   get avg (get nilai total dari perhitungan diatas, dan panjang array)
  let avg_genap = getAvgVal(total_genap,arr_genap.length);
  console.log("Total Rata-rata Genap : " + avg_genap);

  let avg_ganjil = getAvgVal(total_ganjil,arr_ganjil.length);
  console.log("Total Rata-rata Ganjil : " + avg_ganjil);

  console.log("Soal 4:");
  console.log(
    "Perbandingan min : " + getConclusion(min_genap, min_ganjil, "Min")
  );
  console.log(
    "Perbandingan max : " + getConclusion(max_genap, max_ganjil, "Max")
  );
  console.log(
    "Perbandingan Total : " + getConclusion(total_genap, total_ganjil, "Total")
  );
  return (
    "Perbandingan Rata rata  : " +
    getConclusion(avg_genap, avg_ganjil, "Rata rata ")
  );

  // return arr_genap;
}

function getConclusion(genap, ganjil, condition) {
  // cek apakah genap==ganjil
  if (genap == ganjil) {
    return condition + " memiliki nilai sama antara array genap dan ganjil ";
  } else if (genap > ganjil) {
    // cek apakah genap > ganjil
    return condition + " lebih besar array genap ";
  } else {
    return condition + " lebih besar array ganjil ";
  }
}
// function untuk get nilai min
function getMinVal(array) {
  // set min val dengan mengambil nilai array pertama atau array[0]
  var min_val = array[0];
  //   looping dimulai dari 1 karena array 0 sudah di set menjadi nilai min_val. sehingga hanya perlu membandingkan index ke 1 dst
  for (let i = 1; i < array.length; i++) {
    // cek apakah isi array pada index ke i kurang dari min_val
    if (array[i] < min_val) {
      // jika kurang maka min_val nilainya akan diubah dengan array pada index ke i
      min_val = array[i];
    }
  }
  return min_val;
}
// function untuk get nilai max
function getMaxVal(array) {
  // set max val dengan mengambil nilai array pertama atau array[0]
  var max_val = array[0];
  //   looping dimulai dari 1 karena array 0 sudah di set menjadi nilai max_val. sehingga hanya perlu membandingkan index ke 1 dst
  for (let i = 1; i < array.length; i++) {
    // cek apakah isi array pada index ke i lebih dari max_val
    if (array[i] > max_val) {
      // jika lebih maka max_val nilainya akan diubah dengan array pada index ke i
      max_val = array[i];
    }
  }
  return max_val;
}
// function untuk mendapatkan nilai total
function getTotalVal(array) {
  // set variabel total =0 
  var total = 0;
  // looping 
  for (let i = 0; i < array.length; i++) {
    // menjumlahkan total dengan array pada index ke i
    total += array[i];
  }
  return total;
}
function getAvgVal(total, length) {

  return total / length;
}
console.log(setArray());
