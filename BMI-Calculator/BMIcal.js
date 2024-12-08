window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    
    let height = document.querySelector("#height").value; 
    

    
    let weight = document.querySelector("#weight").value;

    let result = document.querySelector("#result");

 
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";


    else {

        
        let bmi = (weight /((height * height)/ 10000)).toFixed(2);

        
        if (bmi < 18.5) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            `Healthy : <span>${bmi}</span>`;
            
        else if (bmi >=25 && bmi < 29.9)
            result.innerHTML = 
            `OverWeight : <span>${bmi}</span>`;
        
        else if (bmi >=30 && bmi < 34.9)
            result.innerHTML = 
            `Obese : <span>${bmi}</span>`;
            

        else result.innerHTML =
            `Extremely Obese : <span>${bmi}</span>`;
    }
}