


//   import React, { createContext, useState, useContext } from 'react';

// // 1. Создаем контекст
// const MyContext = createContext();

// // 2. Определяем провайдер контекста
// const MyProvider = ({ children }) => {
//   const [value, setValue] = useState('Начальное значение');

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // 3. Компонент 1: Отображение данных
// const Component1 = () => {
//   const { value } = useContext(MyContext);

//   return (
//     <div>
//       <h1>Component 1</h1>
//       <p>Текущее значение: {value}</p>
//     </div>
//   );
// };

// // 4. Компонент 2: Изменение данных
// const Component2 = () => {
//   const { setValue } = useContext(MyContext);

//   return (
//     <div>
//       <h1>Component 2</h1>
//       <button onClick={() => setValue('Новое значение')}>
//         Изменить значение
//       </button>
//     </div>
//   );
// };

// // Основной компонент
// const App = () => {
//   return (
//     <MyProvider>
//       <Component1 />
//       <Component2 />
//     </MyProvider>
//   );
// };

// export default App;