function Pessoa(props){

    return (
        <div>
           <img src={props.foto} alt={props.nome}/>
           <p>Nome: {props.nome}</p>
           <h1>Idade: {props.idade}</h1>
           
        </div>
    )
}

export default Pessoa