import React from 'react'

const Overview = () => {
  return (
    <div className='container'>
      <h2 className='text-center my-3'>Overview</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is a BMI Calculator?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>A BMI calculator is an online or offline device which measures your body mass index. The body mass index or BMI is a measure of how much body mass you have in relation to your height and weight.</li>
                <li>Body mass refers not only to the fat within your body but also within muscles and bones. It is calculated by taking your weight and dividing it by the square of your height. The BMI figures let you know whether you are within normal weight range, or if you are underweight or overweight.</li>
                <li>Both high BMIs and low ones are known to raise a host of health problems, especially as you age. However, a high BMI in itself is not always, medically speaking, a cause for alarm. It should be viewed in conjunction with other health parameters.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How to calculate BMI?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>To find out if your BMI or someone else’s BMI, the calculation process is simple. You can do this yourself by using a handheld calculator or do this online via websites or apps containing body mass index calculators.</li>
                <li>To arrive at the result yourself, you simply divide your weight in kilograms by the square of your height in metres. Or simply input your height and weight in an app or website and the BMI results will flash on your screen.</li>
                <li>If the numbers show that your BMI is above normal or below the normal range, you should get yourself checked by a doctor at least once every six months or at least once a year.</li>
                <li>A number between 18.5 to 25 kg/m2 is considered normal BMI. Less than 15 is classified as very severely underweight, from 15 to 18 is categorized as underweight, from 25 to 30 is considered overweight. From 30 to 40 is classified as obese and above 40 as very severely obese.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Ideal BMI for Men
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>Being overweight can lead to a host of health problems. If you are feeling sluggish or lacking energy, chances are that you have too much fat for your height and weight or comparatively less fat than what is recommended. Knowing what your BMI or body mass index is a good way to find out whether you are obese or underweight. Body mass index is thus basically an indicator of how much fat one’s body has depending on that person’s height and weight. The ideal BMI varies from person to person depending not only on height and weight but other factors too.</li>
                <li>Broadly speaking, irrespective of whether you are male or female, a BMI in the range of 18.5 to 24.9 is considered normal. Less than 18.5 is termed underweight. Over 24.9 to 30 considered overweight. Anything above 30 is categorised as obese. These figures apply across the board irrespective of ages as well. BMI is expressed in kg/m2. All you need here is common sense to know that if a person with a height of 4 feet has a BMI equal to that of a 6-feet individual, the shorter person’s BMI is clearly not ideal. Of late, there has been a consensus in the medical fraternity that the BMI cut off for Asian populations should be 23 since these populations have been found to be more vulnerable to diabetes. These indicates that there is no ideal BMI range for a gender category or even particularly for age ranges.</li>
                <li>The ideal BMI chart for men</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
