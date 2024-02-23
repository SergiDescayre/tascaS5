
const Card = ({step,tutorialData}) => {
    return(
        <>
         <h3>{tutorialData[step].title}</h3>
         <span>{tutorialData[step].description}</span>
        </>
    )

}


export default Card