import { useState } from "react"
import "../components/MyForms.css"



const MyForms = ({userName, userEmail}) => {

    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");


    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)

        // limpando formulario

        setEmail("")
        setName("")
        setBio("")
        setRole("")

    }

  return (
    <div>
        {/* Criação de Form */}
        {/* Envio de Formulario */}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                onChange={handleName}
                // input controlled input 
                value={name || "" }/>
            </div>

        {/* Label envolvendo input */}

            <label>
                <span>E-mail:</span>
                <input
                type="text"
                name="email"
                placeholder="Digite seu e-mail"
                // Simplificando Manipulação
                onChange={(e) => setEmail(e.target.value)}
                value={email || "" }/> 
            </label>

            {/* textarea */}

            <label>
                <span>Bio:</span>
                <textarea 
                name="Bio"
                placeholder="Descrição do Usuario"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>
            </label>

            {/* Select */}
            
            <label>
                <span>Função do Sistema</span>
                <select
                name="role"
                onChange={(e) => setRole(e.target.value)}
                value={role}>
                    
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForms