import React, { useState } from "react"

import Layout from "../components/Layout/Layout"
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@material-ui/core"
import Stepper from "../components/Stepper/Stepper"

const About = () => {
  const [ageValue, setAgeValue] = useState("4-6")
  const [activeStep, setActiveStep] = useState(0)
  const [timeValue, setTimeValue] = useState("10-11")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")

  const steps = [
    { name: "Select Age Range", value: ["4-6", "6-8", "8-10"] },
    { name: "Select time", value: ["10-11", "11-12"] },
    "Enter Details",
  ]

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <FormGroup row>
            <RadioGroup value={ageValue}>
              {steps[0].value.map((step, index) => {
                return (
                  <FormControlLabel
                    control={<Radio />}
                    label={step}
                    value={step}
                    onChange={handleChange}
                  />
                )
              })}
            </RadioGroup>
          </FormGroup>
        )
      case 1:
        return (
          <FormGroup row>
            <RadioGroup value={timeValue}>
              {steps[1].value.map((step, index) => {
                return (
                  <FormControlLabel
                    control={<Radio />}
                    label={step}
                    value={step}
                    onChange={handleChange}
                  />
                )
              })}
            </RadioGroup>
          </FormGroup>
        )
      case 2:
        return (
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="/"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              value={name}
              onChange={event => setName(event.target.value)}
              type="text"
              label="Name"
            />
            <TextField
              value={email}
              type="email"
              label="Email"
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              value={telephone}
              type="tnumber"
              label="Telephone Number"
              onChange={event => setTelephone(event.target.value)}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )
      default:
        return
    }
  }

  const handleChange = event => {
    switch (activeStep) {
      case 0:
        return setAgeValue(event.target.value)
      case 1:
        return setTimeValue(event.target.value)
      default:
        return
    }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSubmit = e => {
    const details = {
      name: name,
      email: email,
      contactNumber: telephone,
      age: ageValue,
      time: timeValue,
    }
    alert(JSON.stringify(details))
  }

  return (
    <Layout>
      <Typography variant="h3">We can't wait to meet you</Typography>
      <Stepper
        steps={["Select Age Range", "Select time", "Enter Details"]}
        activeStep={activeStep}
        stepContent={getStepContent(activeStep)}
        submit={handleSubmit}
        nextStep={handleNext}
        backStep={handleBack}
      />
    </Layout>
  )
}

export default About
