import Item from "./Item"


function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2025}/>
                <Item marca="Honda" ano_lancamento={2001}/>
                <Item marca="Yamaha" ano_lancamento={2002}/>
                <Item marca="Kia" ano_lancamento={2010}/>
                <Item />
            </ul>
        </>
    )
}

export default List