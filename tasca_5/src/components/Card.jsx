import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";



const Card = ({ step, tutorialData, nextStep,prevStep }) => {
  console.log("paso " + step)
  console.log(tutorialData.length-1)
  return (
    <>
      <div className="row">
        <div className="col-sm-8 col-md-5 col-lg-5  mx-auto">
          <div className="card shadow rounded-3 ">
            <div
              className="container_img rounded-top pb-3"
              style={{ backgroundColor: tutorialData[step].bgColor }}
            >
              <img
                src={tutorialData[step].image}
                alt={tutorialData[step].title}
                height={200}
                width={200}
              />
            </div>
            <div className="card-body" >
              <h6 className="card-title">{tutorialData[step].title}</h6>
              <p className="card-text">{tutorialData[step].description}</p>
              <div className="d-flex justify-content-between" >
                <div className="d-flex gap-2 align-items-end" >
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <div className="d-flex gap-1">
                  <button
                    className={step===0 ? "hide" : "btn_arrow btn btn-outline-dark rounded-circle" }
                    onClick={prevStep}
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    className={(tutorialData.length-1 === step) ? "hide" : "btn_arrow btn btn-dark rounded-circle"}
                    onClick={nextStep}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
