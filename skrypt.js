function oblicz(){
    let liczbaA=parseInt(document.getElementById("liczbaA").value);
    let liczbaB=parseInt(document.getElementById("liczbaB").value);
    while (liczbaA !== liczbaB){
        if(liczbA > liczbB){
            liczbaA=liczbaA-liczbaB;
        }else{
            liczbaB=liczbaB-liczbaA;
        }
    }
    Document.getElementById("wynik").value=liczbA;
}
