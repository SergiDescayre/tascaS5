import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import meditation from "./assets/meditation.svg";
import programming from "./assets/programming.svg";
import time from "./assets/time.svg";

const App = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    if(step < 2){
        setStep( prev => prev + 1 );
    }
  };

  let tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al rpincipi sembla impossibe, però notaras una millora rapidament.",
      bgColor: "red",
      image: meditation,
    },
    {
      title: "Programa projectes propis",
      description:
        "dMés vañ 10 hores treballamt en projectes propis que 10 hores mirant tutorials. La motvació i la implicació en el projecte ajudarà a accelerar el teu aprenentate.",
      bgColor: "red",
      image: programming,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconectar son vitals. D'aquest manera reduiràs l'estrés i l'ansietat. Millorars la teva concentració i consolidaras el teu aprenentatge.",
      bgColor: "red",
      image: time,
    },
  ];

  return (
    <>
      <Card step={step} tutorialData={tutorialData} nextStep={nextStep} />
    </>
  );
};

export default App;
