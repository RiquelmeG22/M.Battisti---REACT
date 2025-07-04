import Button from "./evento/Button"


function Evento() {

    function meuEvento() {
        console.log("Ativando 1 evento")
    }

    function segundoEvento() {
        console.log("Ativando 2 evento")
    }

        
    return (
        <div>
            <h1>Clique para disparar um evento</h1>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento Ativado"/>
        </div>
    )
}

export default Evento