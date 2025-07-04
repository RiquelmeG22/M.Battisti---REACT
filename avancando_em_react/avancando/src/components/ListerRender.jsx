import { useState } from "react"

const ListerRender = () => {

    const [list] = useState(["Riquelme", "Maria", "Ana"])

    const [users, setUsers] = useState([
        { id: 1, name: "Riquelme", age: 24 },
        { id: 2, name: "Maria", age: 20 },
        { id: 3, name: "Ana", age: 18 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        
        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    };

  return (
    <div>
        {/* Render sem KEY */}
        <ul>
            {list.map((item) =>(
                <li>{item}</li>
            ))}
        </ul>
        {/* Reder com KEY */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* previous state */}

        <button onClick={deleteRandom}>Delete o usuario aqui</button>
    </div>
  )
}

export default ListerRender