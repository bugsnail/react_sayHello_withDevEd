import React from "react";
import Tweet from "./Tweet";

function App(){

  return(
    <div className="App">
        <Tweet name="Dev Ed" message="Random tweet"/>
        <Tweet name="John Snow" message="Yeah"/>
        <Tweet name="Winter" message="700k"/>
        <Tweet name="Mosh" message="Hahah"/>
    </div>
  );
}

export default App;