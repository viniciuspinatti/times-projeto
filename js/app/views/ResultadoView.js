class ResultadoView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        let vencedor = 'vencedor';

        return `
            <table>
                <thead>
                    <tr>
                        <th>Casa</th>
                        <th>Gols</th>
                        <th>Gols</th>
                        <th>Visitante</th>
                        <th>Data</th>
                    <tr>
                </thead>
                <tbody>
                    ${model.resultados.map(r =>
                        `
                        <tr>
                            <td class='${r.vencedor == r.timeCasa ? vencedor : ''}'>${r.timeCasa}</td>
                            <td>${r.golsCasa}</td>
                            <td>${r.golsVisitante}</td>
                            <td class='${r.vencedor == r.timeVisitante ? vencedor : ''}'>${r.timeVisitante}</td>
                            <td>${DateHelper.dataParaTexto(r.dataPartida)}</td>
                        </tr>
                        `).join('')}
                </tbody>
            </table>
            `;
    }

}