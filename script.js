/* PRIMER EJERCICIO*/

function promedio(){
    var  nota1=Number(document.getElementById('n1').value);
    var  nota2=Number(document.getElementById('n2').value);
    var   nota3=Number(document.getElementById('n3').value);
    var promedioFinal=(nota1+nota2+nota3)/3;
    document.getElementById('promedio').value=promedioFinal;  

};

