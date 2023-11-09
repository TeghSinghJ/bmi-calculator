import React, { useState } from 'react'
import BMIChart from './BMIChart';
const BMICalculator = () => {
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [percentage,setPercentage] = useState(0);
    const [message,setMessage] = useState("Please enter values to calculate!")
    const onChangew=(e)=>{
        setWeight(e.target.value);
    }
    const onChangeh=(e)=>{
        setHeight(e.target.value);
    }
    function getPercentage(bmi, lowerBound, upperBound, segmentAdjustment) {
        return (
          (bmi - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment
        );
      }
    const handleSubmit=()=>{
        // console.log("Height = "+height+", Weight = "+weight)
        let bmi_value = (weight / (height * height)*100);
        bmi_value = bmi_value.toFixed(2);
        console.log(bmi_value)
        if(bmi_value>=16  && bmi_value <= 18.5){
            setMessage("Underweight");
            const bmi_percent = getPercentage(bmi_value,16,18.5,0.25);
            setPercentage(bmi_percent);
        }
        else if(bmi_value > 18.5 && bmi_value<=24.9){
            setMessage("Normal");
            const bmi_percent = getPercentage(bmi_value,18.5,24.9,0.33);
            setPercentage(bmi_percent);
        }
        else if(bmi_value >= 25.0 && bmi_value<=29.9){
            setMessage("Overweight");
            const bmi_percent = getPercentage(bmi_value,25.0,29.9,0.66);
            setPercentage(bmi_percent);
        }
        else if(bmi_value >= 30){
            setMessage("Very Overweight");
            setPercentage(1);
        }
        console.log(percentage)
    }
    return (
        <div className='container my-3'>
            <h1><strong className='text-primary'>BMI</strong><strong className='text-danger'> Calculator</strong></h1>
            <p className="lead text-muted">BMI (Body Mass Index) is a number calculated from a person's weight and height. BMI is a fairly reliable indicator of body fatness for most people. Additionally, BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems.</p>
            <div class="row py-lg-5 container shadow-sm p-3 mb-5 bg-body rounded">
                <div class="col-lg-6 col-md-6 mx-auto">
                <form className=''>
                <div className="form-group mb-3 w-30 my-3">
                    <label htmlFor="weight" className="form-label">Weight</label>
                    <input type="number" className="form-control" id="weight" value={weight} onChange={onChangew} placeholder="Enter weight (in kgs)" />
                    {/* <label htmlFor="weightmetric">Kgs</label> */}
                    </div>
                <div className="form-group mb-3 w-30 my-3">
                    <label htmlFor="height" className="form-label">Height</label>
                    <input type="number" className="form-control " id="height" value = {height} onChange={onChangeh} placeholder="Enter height (in metres)" />
                    {/* <label htmlFor="heightmetric" className='form-inline'>Metres</label> */}
                    </div>
                <button type="button" className="btn btn-primary my-3" onClick={handleSubmit}>Calculate BMI</button><br/>
            </form>
                </div>
                <div class="col-lg-6 col-md-8 mx-auto ">
                <BMIChart percentage={percentage}/>
                <label className="form-label item-aligns-end" htmlFor="message" id="message">{message}</label>
                </div>
            </div>
            
           
        </div>
        
    )
}

export default BMICalculator
