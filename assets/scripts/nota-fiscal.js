function gerarNota() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.split(',');
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valorVenda) || itens.length === 0 || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const calculoIrpf = (irpf / 100) * valorVenda;
    const calculoPis = (pis / 100) * valorVenda;
    const calculoCofins = (cofins / 100) * valorVenda;
    const calculoInss = (inss / 100) * valorVenda;
    const calculoIssqn = (issqn / 100) * valorVenda;
  
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
            <li>PIS: R$${calculoPis.toFixed(2)}</li>
            <li>COFINS: R$${calculoCofins.toFixed(2)}</li>
            <li>INSS: R$${calculoInss.toFixed(2)}</li>
            <li>ISSQN: R$${calculoIssqn.toFixed(2)}</li>
        </ul>

    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
