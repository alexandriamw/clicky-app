import React from 'react';
import './App.css';
import Groant from './components/Groant';

function App() {
  const Groants = [
    <Groant photoId={"07"} alt={"a photo of Groant"} />,
    <Groant photoId={"02"} alt={"a photo of Groant"} />,
    <Groant photoId={"03"} alt={"a photo of Groant"} />,
    <Groant photoId={"04"} alt={"a photo of Groant"} />,
    <Groant photoId={"05"} alt={"a photo of Groant"} />,
    <Groant photoId={"06"} alt={"a photo of Groant"} />,
    <Groant photoId={"08"} alt={"a photo of Groant"} />,
    <Groant photoId={"09"} alt={"a photo of Groant"} />,
    <Groant photoId={"10"} alt={"a photo of Groant"} />,
    <Groant photoId={"11"} alt={"a photo of Groant"} />,
    <Groant photoId={"12"} alt={"a photo of Groant"} />,
    <Groant photoId={"01"} alt={"a photo of Groant"} />
  ];

  return (
    <div className="App">
      <header>
        <h1>Kitty Game!</h1>
        <h2>Click on the kitty to earn points, but don't click on any image more than once!</h2>
        <h3>Score: <span>0</span></h3>
      </header>
      <div className="grid-container">
        {Groants}
      </div>
    </div>
  );
}

export default App;
