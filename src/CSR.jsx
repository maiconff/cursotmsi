import { useState, useEffect } from "react";

const CSR = () => {
        
    const [Trab1, setTrab1] = useState(0);
    const [Trab2, setTrab2] = useState(0);
    const [Ativ, setAtiv] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        console.log('Criou o componente Calculo');
    }, []);

    useEffect(() => {
        console.log('Alterou o state valor1');
    }, [Trab1]);


    return (
        <div className="container" style={{ padding: '20px' }}>

<div>
        <h6> <table border="2">
<tr>
  <th>Disciplina:</th>
  <td> Configuração de Serviços de Rede </td>
</tr>
<tr>
  <th>Carga Horária:</th>
  <td> 60 h </td>
</tr>
<tr>
  <th rowspan="2">Ementa:</th>
  <td>Analise dos princípios da tecnologia cliente/servidor, avaliando as possibilidades de
utilização dos serviços e protocolos de comunicação de redes de computadores. <br /> Estudo de servidores
de redes de computadores, Protocolo TCP/IP, Serviços DHCP, DNS, NAT, Telnet, SSH, FTP, IIS,
Apache, IMAP, SMTP, POP3, NIS, NFS e SAMBA, distribuições LINUX. <br /> Aprofundamento de
conhecimentos em tópicos avançados de serviços de rede</td>
</tr>
</table> </h6>
  </div>

            <h2>Para realizar o calculo das notas da disciplina, preencha os compos abaixo:</h2>
            <div className="mb-3">
                <label htmlFor="txtValor1" className="form-label">Nota do Trabalho 1</label>
                <input type="number" className="form-control"
                    id="txtValor1" placeholder="Trabalho 1 - Obrigatório"
                    value={Trab1}
                    onChange={e => setTrab1(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtValor2" className="form-label">Nota do Trabalho 2</label>
                <input type="number" className="form-control"
                    id="txtValor2" placeholder="Trabalho 2 - Obrigatório"
                    value={Trab2}
                    onChange={e => setTrab2(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtValor2" className="form-label">Nota das atividades</label>
                <input type="number" className="form-control"
                    id="txtValor2" placeholder="Atividades - Obrigatório"
                    value={Ativ}
                    onChange={e => setAtiv(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary col-3"
                onClick={
                    () => setResultado(Number(Trab1*4/10) + Number(Trab2*4/10 + Number(Ativ*2/10)))
                }>Calcular!</button>
            
            <h1>Resultado: {resultado}</h1>
        </div>
    )
        
};
export default CSR;