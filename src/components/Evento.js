function Evento({number}) {

    function evento() {
        console.log(`Evento nº ${number} ativado!`)
    }

    return (
        <>
            <p>Clique para ativar um evento</p>
            <button onClick={evento}>Ativar!</button>
        </>
    )
}

export default Evento