import { useState } from "react";
import { LogicPage } from "./components/LogicPage/LogicPage";

function App() {

  const [inputValue, setInputValue] = useState('');

  // Обработчик для изменения значения input через пользовательский ввод
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик для изменения значения input через нажатие кнопки
  const handleButtonClick = (newValue) => {
    setInputValue(newValue);
  };
 
  return (
<div>
  <LogicPage/>
  <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Введите текст"
      />
      <br />
      <button onClick={() => handleButtonClick('Пример 1')}>Вставить "Пример 1"</button>
      <button onClick={() => handleButtonClick('Пример 2')}>Вставить "Пример 2"</button>
    </div>
</div>
  );
}

export default App;
