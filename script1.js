function reporteSueldo(){
    var  Sueldo1=Number(document.getElementById('s1').value);
    var  Sueldo2=Number(document.getElementById('s2').value);
    var   Sueldo3=Number(document.getElementById('s3').value);
    var reporte1=Sueldo1*1.10;
    var reporte2=Sueldo2*1.12;
    var reporte3=Sueldo3*1.15;
    document.getElementById('reporte1').value=reporte1;
    document.getElementById('reporte2').value=reporte2;  
    document.getElementById('reporte3').value=reporte3;    

};