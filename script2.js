function calificacionFinal(){
    var  calificacion1=Number(document.getElementById('c1').value);
    var  calificacion2=Number(document.getElementById('c2').value);
    var  calificacion3=Number(document.getElementById('c3').value);
    var notaFinal=(calificacion1*0.3+calificacion2*0.3+calificacion3*0.5);
    
    document.getElementById('calificacionFinal').value=notaFinal;
      

};