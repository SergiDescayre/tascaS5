const Card = ({ step, tutorialData, nextStep }) => {
  return (
    <>
      <img src={tutorialData[step].image} alt="" />
      <h3>{tutorialData[step].title}</h3>
      <span>{tutorialData[step].description}</span>
      <div>
       
        <button onClick={nextStep}>Next step</button>
      </div>
    </>
  );
};

export default Card;
