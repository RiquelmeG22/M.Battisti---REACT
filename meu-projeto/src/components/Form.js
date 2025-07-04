import { useState } from "react"


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(passaword)
    }

const [name, setName] = useState()
const [passaword, setPassaword] = useState()

    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div>
                    <label htmlFor="passaword">Senha:</label>
                    <input type="password"
                    id="password"
                    name="password "
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassaword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </>
    )
}

export default Form