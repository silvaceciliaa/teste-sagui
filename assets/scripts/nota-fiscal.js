function gerarNotaFiscal(){
    const valorVenda = parseFloat(document.getElementById('valorVenda').value)


    if(NaN(valorVenda)){
        return alert('por favor digite um valor válido');
    }
}