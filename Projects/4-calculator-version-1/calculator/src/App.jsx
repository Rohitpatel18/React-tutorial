import Display from "./components/Display.jsx";
import ButtonContainer from "./components/buttonContainer.jsx";
import styles from './App.module.css';

function App() {
  

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
       
    </div>
  )
}

export default App
