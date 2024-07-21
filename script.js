let data = function () {
    const nama = document.getElementById ("name").value
    console.log("Nama: " + nama);
    const harga = document.getElementById ("price").value
    console.log("Price: " + harga);
    const cdt = document.querySelector ("input[name=condition]:checked").value
    console.log("Kondisi: "+cdt);
    const toko = document.getElementById ("warehouse").value        //output sesuai dengan value pada HTML
    console.log("Warehouse: " + toko);
    const kurir = document.querySelectorAll ("input[name=jasa]:checked")  //hasil Array, perlu di 'forEach'
    
    let pengantar = ""
    for (let x =0;x<kurir.length;x++) {
        pengantar += kurir[x].value
        pengantar += " "
    }
    console.log("Kurir: " + pengantar);

    const resume = document.getElementById ("hasil");
    resume.innerHTML = `Nama ${nama} <br> Harga: ${harga} <br> Kondisi: ${cdt} <br> Warehouse: ${toko} <br> Kurir: ${pengantar}`
}