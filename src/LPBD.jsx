import { useState, useEffect } from "react";

const LPBD = () => {
        
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
  <td> Linguagem de Programação com Banco de Dados  </td>
</tr>
<tr>
  <th>Carga Horária:</th>
  <td> 120 h </td>
</tr>
<tr>
  <th rowspan="2">Ementa:</th>
  <td>Estudo dos conceitos básicos: Modelos de Banco de Dados, Projeto de Banco de Dados e
SQL (DDL e DML). <br /> Apresentação de conceitos de Programação para a Web: formulários, serviços e
interação da linguagem de programação com o banco de dados. <br /> Realização de consultas, inserções,
exclusões e alterações.</td>
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
export default LPBD;