function gerarNota() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.split(',');
    const irpf = parseFloat(document.getElementById('irpf').value);
    const cofins = parseFloat(document.getElementById('cofins').value);

    const calculoIrpf = (irpf / 100) * valorVenda;
    const calculoCofins = (cofins / 100) * valorVenda;
  
    const notaFiscal = `
        <h2>Nota Fiscal de Serviço (NFS-e)</h2>
        <p><strong>Valor da Venda:</strong> R$${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong></p>
        <ul> 
            ${itens.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>Impostos Calculados:</strong></p>
        <ul>
            <li>IRPF: R$${calculoIrpf.toFixed(2)}</li>
            <li>COFINS: R$${calculoCofins.toFixed(2)}</li>
        </ul>

    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
