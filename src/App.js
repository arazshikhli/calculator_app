import { useState } from "react";
import { Buttons } from "./components/Buttons/Buttons";
import { Display } from "./components/Display/Display";
import { LogicPage } from "./components/LogicPage/LogicPage";

function App() {

  const [value,setValue]=useState();
  const [result,setResult]=useState();

  const operations={
   value,
   setValue,
   result,
   setResult
  }
  return (
<div>
  <LogicPage/>
</div>
  );
}

export default App;
