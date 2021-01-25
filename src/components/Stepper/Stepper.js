import React from "react"

import { Stepper, Step, StepLabel, Button } from "@material-ui/core"

const Steps = props => {
  const stepsArray = props.steps
    ? props.steps.map((step, index) => {
        return (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      })
    : null
  return (
    <React.Fragment>
      <Stepper activeStep={props.activeStep ? props.activeStep : null}>
        {stepsArray}
      </Stepper>
      {props.activeStep === stepsArray.length ? (
        <div>
          <p>Thank you. We will be in touch shortly.</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{props.stepContent}</p>
          <div style={{ display: "flex" }}>
            <Button disabled={props.activeStep === 0} onClick={props.backStep}>
              Back
            </Button>
            <Button
              style={{
                display:
                  props.activeStep === stepsArray.length - 1 ? "none" : "block",
                backgroundColor: "green",
              }}
              type="submit"
              variant="contained"
              color="primary"
              onClick={props.nextStep}
            >
              {props.activeStep === stepsArray.length - 1 ? null : "Next"}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Steps
