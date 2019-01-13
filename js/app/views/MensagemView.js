class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(model){
        
        if(model.texto){

            if(model.tipo == 'E')
                return `<p class='erro'>${model.texto}</p>`;
            else
                return `<p class='info'>${model.texto}</p>`;

        } else {
            return `<p></p>`;
        }
    }

}