var tinggi = [160,155,177,167,165,177,166,145,187,178];
for (let i=0; i<=tinggi.length; i++){
  console.log(tinggi[i]);
}

for (var x of tinggi) {
  console.log(x);
}

// Pada perulangan biasa diperlukan parameter, Sedangkan perulangan for of tidak memerlukannya untuk batasi perulangan
