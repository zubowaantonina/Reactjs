 import React, { useState } from 'react';
 import './App.css';
 import MyComponent from './MyComponent';

 function App() {
     const [inputText, setInputText] = useState('')
     return ( < div className = "input" > < span className = "MyComponent" > Настоящий программист сначала пишет программу карандашом на листочке, чтобы потом было проще стирать.... < /
         span >
         <
         textarea rows = "5"
         cols = "45"
         name = "text"
         value = { inputText }
         onChange = { e => setInputText(e.target.value) }
         / > <
         MyComponent textToShow = { inputText }
         / > < /
         div > );
 }

 export default App;