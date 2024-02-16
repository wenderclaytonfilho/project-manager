function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário')
    }

    return(
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                    <input type="password" placeholder="Digite sua senha"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </>
    )
}

export default Form