function abrir_preparar(){
    let pag_preparar = window.document.querySelector('#preparar');
    pag_preparar.addEventListener('click',function(){
        window.location.replace('https://localhost/jw/ambiente_de_estudos.php');
    });
}

function abrir_consulta(){
    let pag_consultar = window.document.querySelector('#consultar');
    pag_consultar.addEventListener('click',function(){
        window.location.replace('https://localhost/jw/consulta.php');
    });
}







abrir_preparar();
abrir_consulta();