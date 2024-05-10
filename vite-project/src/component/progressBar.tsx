
import "./progressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ percentage,idx, }:{ percentage:number,idx:number,}) => {
//   let stepPercentage:number = percentage;
 

  return (
    <ProgressBar percent={(100/(percentage - 1))*(idx) } style={{marginLeft:-20}}>
     {
        [1,1,1,1,1,1].map((e:any )=>(
            <Step>
        { ({ accomplished, index }:{accomplished:unknown , index:number})=> (
          <div
            className={`indexedStep accomplished`}
          
            style={{display: index !==idx && "none" , padding:5 , backgroundColor:"#9747FF" }}
          >
            <h1 style={{padding:5, backgroundColor:"#FFFFFF" ,borderRadius:20 }}></h1>
          </div>
        )}
      </Step>
        ))
     }
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
