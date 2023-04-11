
const reports = [  
    ["01/01/2023", 120, 5, 0, 0.002, 0.004, 0.009],
    ["05/01/2023", 240, 10, 0, 0.032, 0.010, 0.050],
    ["21/02/2023", 120, 2, 0, 0.009, 0.017, 0.014],
    ["12/03/2023", 240, 1, 0, 0.001, 0.014, 0.020]
];

const createHtml = (reports) => {
  let div = document.querySelector(".report");
  let html = "";
  
  if (reports.length > 0) {
    for (let i = 0; i < reports.length; i++) {
      html += `
        <div>
          <h2>Relatório do dia ${reports[i][0]}</h2>
          <p><b>Tensão: </b>${reports[i][1]}</p>
          <p><b>Corrente: </b>${reports[i][2]}</p>
          <p><b>Phi: </b>${reports[i][3]}</p>
          <p><b>Erro: </b>${reports[i][4]}</p>
          <p><b>Erro Médio: </b>${reports[i][5]}</p>
          <p><b>Erro Desvio: </b>${reports[i][6]}</p>
          <hr/>
        </div>
      `;
    }

    div.innerHTML = html;
  } else {
    div.innerHTML = "Nenhum relatório encontrado!!!";
  }
};



