import './BMI.css';

function BMI(){
    function bmi(){
        var h = document.getElementById('height').value;
        var w = document.getElementById('weight').value;
        var bmi  = w / (h/100 * h/100);
        var total = bmi.toFixed(2);
        document.getElementById('bmi').innerHTML = "Your BMI is " + total;

    }
    return(
        <div className='const'>
            <h2>BMI Calculator</h2>
            <p className='text'>Height</p>
            <input type='text' id='height'/>
            <p className='text'>Weight</p>
            <input type='text' id='weight'/>
            <p id='bmi'/>
            <input className='btn' type="button" name="Calculate" value="Calculate" onClick={bmi}></input>
            <p id='info'>Please enter height[cm] and weight [kg]</p>
        </div>
    )
}
export default BMI;