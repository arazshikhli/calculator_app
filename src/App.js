import { useState } from "react";
import { LogicPage } from "./components/LogicPage/LogicPage";
import { ThemeProvider } from "./data/ThemeProvider";

function App() {
 

  return (
    <ThemeProvider>
        <LogicPage/>
    </ThemeProvider>

  );
}

export default App;
