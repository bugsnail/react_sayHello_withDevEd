import React, { useState } from "react";
import Tweet from "./Tweet";

function App(){

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello'},
    {name: 'John', message: 'Im John'},
    {name: 'Trav', message: 'Yeah, yeah' } 
  ]);

  return(
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;