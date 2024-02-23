import "./App.css"
import Card from "./components/Card"
import { useState } from "react"



const App = () => {

     const [step, setStep] =   useState(0)
     let tutorialData = [
        {
            title : "Dedica moltes hores",
            description : "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al rpincipi sembla impossibe, però notaras una millora rapidament.",
            bgColor: "red",
            image: "image"
        },
        {
            title : "Programa projectes propis",
            description : "dMés vañ 10 hores treballamt en projectes propis que 10 hores mirant tutorials. La motvació i la implicació en el projecte ajudarà a accelerar el teu aprenentate.",
            bgColor: "red",
            image: "image"
        },
        {
            title : "Procura descansar",
            description : "Descansar bé i desconectar son vitals. D'aquest manera reduiràs l'estrés i l'ansietat. Millorars la teva concentració i consolidaras el teu aprenentatge.",
            bgColor: "red",
            image: "image"
        }
    ]
    
    return(
        <>
         <Card 
            step = {step}
            tutorialData = {tutorialData}/>
        </>
       
    )
}

export default App