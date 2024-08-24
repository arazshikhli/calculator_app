import { useState } from "react";
import { Buttons } from "./components/Buttons/Buttons";
import { Display } from "./components/Display/Display";

function App() {

  const [value,setValue]=useState();
  const [result,setResult]=useState();

  return (
<div>
  <Display />
  <Buttons value={value} setResult={setResult}/>
</div>
  );
}

export default App;
