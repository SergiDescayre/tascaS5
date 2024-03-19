import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import Indicator from "./Indicator";
import { SwitchTransition, CSSTransition } from "react-transition-group"

const Card = ({ step, tutorialData, nextStep, prevStep, setStep }) => {

  return (
    <>
      <div className="row">
        <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3  mx-auto">
          <div className="card shadow rounded-3 ">
            <SwitchTransition>
              <CSSTransition
                key={tutorialData[step].title}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames="fade"
              >

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
              </CSSTransition>
            </SwitchTransition>
            <div className="card-body">
              <h5 className="card-title">{tutorialData[step].title}</h5>
              <p className="card-text">{tutorialData[step].description}</p>
              <div className="d-flex justify-content-between">
                <Indicator step={step} tutorialData={tutorialData} setStep={setStep} />
                <div className="d-flex gap-1">
                  <button
                    className={
                      step === 0
                        ? "hide"
                        : "btn_arrow btn btn-outline-dark rounded-circle"
                    }
                    onClick={prevStep}
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    className={
                      tutorialData.length - 1 === step
                        ? "hide"
                        : "btn_arrow btn btn-dark rounded-circle"
                    }
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
