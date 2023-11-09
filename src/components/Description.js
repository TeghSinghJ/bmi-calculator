import React from 'react'
import banner from '../assets/banner-1.png'
const Description = () => {
    return (
        <div className='container'>
            <div className="row py-lg-5">
                <h1 className="fw-bolder text-center my-3">What is BMI?</h1>
                
                <div className="col-lg-8 col-md-6 mx-auto">
                    <p className="lead text-muted">A person’s Body-Mass Index, or BMI, helps them check whether they’re a healthy weight for their height. If a person weighs less or more than the recommended weight for their height, it could lead to health issues in the future. While BMI is not the only factor individuals should consider while working on their health and fitness, it is a good starting point. To understand what your BMI is, you need to know your height and weight. You can then use an online BMI calculator to check your BMI, which will help you understand if you’re underweight, a healthy weight, overweight or obese. Or, you can measure your height in metres and weight in kilograms. Divide your weight by your height squared to calculate your BMI.</p>
                    <p className="lead">Underweight – BMI less than 18.5</p>
                    <p>Normal weight – BMI between 18.5 and 24</p>
                    <p>Overweight – BMI between 25 and 29.9</p>
                    <p>Obese – BMI above 30
                    </p>
                </div>
                <div className="col-lg-4 col-md-8 mx-auto">
                    <img src='https://png.pngtree.com/png-clipart/20231005/original/pngtree-medical-checkup-and-insurance-the-essentials-for-optimal-healthcare-stethoscope-and-png-image_12961672.png' width="450px"></img>
                </div>
            </div>
        </div>
    )
}

export default Description
