import './BMI.css';
import { useHistory } from "react-router-dom";

function BMI(){
    function bmi(){
        var h = document.getElementById('height').value;
        var w = document.getElementById('weight').value;
        var bmi  = w / (h/100 * h/100);
        var total = bmi.toFixed(2);
        document.getElementById('bmi').innerHTML = "Your BMI is " + total;

    }
    let home = useHistory();
    return(
        <div className='const'>
            <h2>BMI Calculator</h2>
            <p className='text'>Height</p>
            <input type='text' id='height'/>
            <p className='text'>Weight</p>
            <input type='text' id='weight'/>
            <p id='bmi'/>
            <input className='btn' type="button" name="Submit" value="Submit" onClick={bmi}></input>
            <input className="btn" type="button" name="close" value="Close" onClick={() => { home.push("/home")}}></input>

            <p id='info'>Please enter height[cm] and weight [kg]</p>
        </div>
    )
}
export default BMI;
