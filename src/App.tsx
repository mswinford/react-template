import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => setCount(count + 1);

  return <h1 onClick={onClick}>{count}</h1>;
};

export default App;
