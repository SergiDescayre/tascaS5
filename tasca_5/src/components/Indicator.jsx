import { CheckLg } from "react-bootstrap-icons"
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

const Indicator = ({step,tutorialData,setStep}) => {
    return(
        <div className="d-flex gap-2 align-items-end">
            {tutorialData.map((data,index) => {
                if(index === step){
                    return <IndicatorLongBall onClick={() => setStep(index) }/>
                }
                return <IndicatorBall onClick={() => setStep(index)  }/>
            }
            )}
            
        </div>
    )
}

export default Indicator