import { useState } from 'react'
import { Button, Card, LinearProgress, Switch, Typography } from '@mui/material'


import MultiStepProgressBar from './component/progressBar';
function App() {
  const [percentage, setPercentage] = useState(0)
  const [idx, setIdex] = useState(1)
  const nextPageNumber = () => {
  console.log("page")
  };
  console.log(idx , "idex")
  return (
    <>
      <Card
        variant="outlined"
        style={{
          width: '90vw',
          // height: '170px',
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '16px',
          gap: '16px',
          borderRadius: '24px',
          opacity: '0px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{display:"flex"}}>
            <Typography  variant="body1" style={{ fontWeight: "600", fontSize: 24, color: "#262D31",}}>
              Setup Auto Top-up
            </Typography>
            <Switch {...{ inputProps: { 'aria-label': 'Switch demo' } }} />
          </div>
          <Typography variant="body2" style={{color:"#7B7B7B" , fontWeight:"400", fontSize:16}}>
            Once the credit goes below the threshold value, credits can be auto purchased. Setup auto top-up to  enjoy uninterrupted services.  You can disable this anytime to stop auto top-up. 
          </Typography>
        </div>
      </Card>
      <Card
        variant="outlined"
        style={{
          width: '90vw',
          // height: '170px',
          position: 'absolute',
          top: '185px', // Adjust the top position to add a gap between the cards
          left: '20px',
          padding: '16px',
          gap: '16px',
          borderRadius: '24px',
          opacity: '0px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{display:"flex"}}>
            <Typography variant="body1" style={{ fontWeight: "600", fontSize: 24, color: "#262D31",}}>
              Setup Auto Top-up
            </Typography>
            <Switch {...{ inputProps: { 'aria-label': 'Switch demo' } }} defaultChecked />
          </div>
          <Typography variant="body2" style={{color:"#7B7B7B" , fontWeight:"400", fontSize:16}}>
          Once the credit goes below a minimum threshold <span style={{color:"#9747FF" , fontWeight:"700", fontSize:16}}>50</span>, we will auto-purchase <span style={{color:"#9747FF" , fontWeight:"700", fontSize:16}}>1200</span> credits and add them to your account. <span style={{textDecoration:"underline"}}>Learn more</span></Typography>
  
          <MultiStepProgressBar percentage={ [1,1,1,1,1,1].length} idx={idx} setPercentage={setPercentage} />
        <div style={{display:"flex" , justifyContent:"space-between" , marginTop:-25 }}>
         {
          [1,1,1,1,1,1].map((e:any , i:any)=>(
            <div onClick={()=>{
              setIdex(i)
            }}>
              <h5>${5*(i+1)}</h5>
              <h6 style={{fontWeight:"500" , fontSize:16 , color:"#7B7B7B", marginTop:-20}}>500 credits</h6>
            </div>
          ))
         }
          
          </div>       
          <Button
  style={{
    backgroundColor: "#9747FF",
    color: "#FFFFFF",
    textTransform: "none",
    marginTop:-20
  }}
>
  Confirm auto-purchase
</Button>
        </div>
     
      </Card>
    </>
  )
}

export default App

