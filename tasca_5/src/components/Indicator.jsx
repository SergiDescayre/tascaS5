import { SwitchTransition, CSSTransition } from "react-transition-group"
import styled from "styled-components"

const IndicatorBall = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: grey;
cursor:pointer;
`

const IndicatorLongBall = styled.div`
width: 30px;
height: 10px;
border-radius: 5px;
background-color: #5222d0;
cursor:pointer;
`

const Indicator = ({ step, tutorialData, setStep }) => {
    return (
        <SwitchTransition>
            <CSSTransition
            key={step}
            classNames="fade_ball"
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            >
                <div className="container_balls d-flex gap-2 align-items-end">
                    {tutorialData.map((data, index) => {
                        if (index === step) {
                            return <IndicatorLongBall key={data.title} onClick={() => setStep(index)} />
                        }
                        return <IndicatorBall key={data.title} onClick={() => setStep(index)} />
                    }
                    )}
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default Indicator