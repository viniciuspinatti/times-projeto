class ResultadoController{
    
    constructor(){
        // Semelhante ao jQuery
        let $ = document.querySelector.bind(document);

        // Tansformar os elementos em atributos evita percorrer o DOM diversas vezes
        this._timeCasa = $('#time-casa');
        this._timeVisitante = $('#time-visitante');
        this._golsCasa = $('#gols-casa');
        this._golsVisitante = $('#gols-visitante');
        this._dataPartida = $('#data-partida');

        // Instância da lista para adicionar os resultados
        this._listaResultado = new ListaResultado();
        // Captura o elemento para inserir os resultados
        this._resultadoView = new ResultadoView($('#resultadosView'));
        // Carrega a primeira lista vazia
        this._resultadoView.update(this._listaResultado);
    }

    adiciona(event){
        event.preventDefault();

        let resultado = this._criaResultado();
        this._listaResultado.adiciona(resultado);
        this._resultadoView.update(this._listaResultado);
        this._limpaFormulario();
    }

    _criaResultado(){
        return new Resultado(this._timeCasa.value, 
            this._timeVisitante.value, 
            this._golsCasa.value, 
            this._golsVisitante.value,
            DateHelper.textoParaData(this._dataPartida.value));
    }

    _limpaFormulario(){
        this._timeCasa.value = '';
        this._timeVisitante.value = '';
        this._golsCasa.value = '';
        this._golsVisitante.value = '';
        this._dataPartida.value = '';

        this._timeCasa.focus();
    }

}