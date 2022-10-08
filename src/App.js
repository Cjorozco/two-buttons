import { useState } from "react";
import './App.scss';
import Button from './components/Button';
import Modal from './components/Modal';

const App = () => {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);

  const handleColorBlue = () => {
    setColor("blue");
  };

  const handleColorRed = () => {
    setColor("red");
  };

  const handleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="App-container-header">
        <div className="App-header">
          <h1 className={color}>
            Prueba Básica
          </h1>
          <div>
            <Button 
              className="Button blue" 
              onClick={() => { handleColorBlue(); handleModal(); }}
              disabled={isOpen ? true : false}
            >Blue</Button>
            <Button 
              className="Button red" 
              onClick={() => {
                handleColorRed();
                handleModal();
              }}
              disabled={isOpen ? true : false}
            >Red</Button>
            
            {isOpen && <Modal setOpen={setOpen} color={color} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
