import { useState } from "react";
import {
  Button,
  Card, 
  Switch,
  Typography,
} from "@mui/material";
import MultiStepProgressBar from "../component/progressBar";


export const Cards=()=>{
    const [idx, setIdex] = useState(1);
    const [autoTopup, setAutoTopup] = useState(true);
    const SliderData = [
      { name: 5, credit: 500 },
      { name: 10, credit: 1200 },
      { name: 15, credit: 1700 },
      { name: 20, credit: 2500 },
      { name: 25, credit: 3900 },
      { name: 30, credit: 5000 },
    ];
  
    return (
        <>
        <Card
          variant="outlined"
          style={{
            width: "90vw", 
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "16px",
            gap: "16px",
            borderRadius: "24px",
            opacity: "0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: 24,
                  color: "#262D31",
                  paddingLeft: 15,
                }}
              >
                Setup Auto Top-up
              </Typography>
              <Switch  />
            </div>
            <Typography
              variant="body2"
              style={{
                color: "#7B7B7B",
                fontWeight: "400",
                fontSize: 16,
                paddingLeft: 15,
              }}
            >
              Once the credit goes below the threshold value, credits can be auto
              purchased. Setup auto top-up to enjoy uninterrupted services. You
              can disable this anytime to stop auto top-up.
            </Typography>
          </div>
        </Card>
        <Card
          variant="outlined"
          style={{
            width: "90vw",
            position: "absolute",
            top: "185px", 
            left: "20px",
            padding: "16px",
            gap: "16px",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: 24,
                  color: "#262D31",
                  paddingLeft: 15,
                }}
              >
                Setup Auto Top-up
              </Typography>
              <Switch
                {...{ inputProps: { "aria-label": "Switch demo" } }}
                defaultChecked={autoTopup}
                onClick={() => setAutoTopup(!autoTopup)}
              />
            </div>
            <Typography
              variant="body2"
              style={{
                color: "#7B7B7B",
                fontWeight: "400",
                fontSize: 16,
                paddingLeft: 15,
              }}
            >
              Once the credit goes below a minimum threshold{" "}
              <span style={{ color: "#9747FF", fontWeight: "700", fontSize: 16,cursor:"pointer" }}>
                50
              </span>
              , we will auto-purchase{" "}
              <span style={{ color: "#9747FF", fontWeight: "700", fontSize: 16 , cursor:"pointer" }}>
                1200
              </span>{" "}
              credits and add them to your account.{" "}
              <span style={{ textDecoration: "underline", cursor:"pointer" }}>Learn more</span>
            </Typography>
  
            <MultiStepProgressBar percentage={[...SliderData].length} idx={idx} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: -25,
                paddingLeft: 15,
                cursor:"pointer"
              }}
            >
              {[...SliderData].map((e, i) => (
                <div
                  onClick={() => {
                    setIdex(i);
                  }}
                >
                  <h5>${e?.name}</h5>
                  <h6
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      color: "#7B7B7B",
                      marginTop: -20,
                    }}
                  >
                    {e?.credit} credits
                  </h6>
                </div>
              ))}
            </div>
            <Button
              style={{
                backgroundColor: "#9747FF",
                color: "#FFFFFF",
                textTransform: "none",
                marginTop: -20,
                marginLeft: 15,
              }}
              onClick={() => console.log(SliderData[idx]?.credit)}
            >
              Confirm auto-purchase
            </Button>
          </div>
        </Card>
      </>
    )
}