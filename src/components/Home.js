import './Home.css';
import { useHistory } from "react-router-dom";

function Home() {

    let history = useHistory();

    return (
       
            <div className='chart'>
                
                <div class="newtext">
                    <div className='btn'>
                    <button type="submit" class="bttext" onClick={() => { history.push("/age")}}>AGE CALCULATOR</button>
                    </div>
                    <div className='btn'>
                    <button type="submit" class="bttext" onClick={() => { history.push("/bmi")}}>BMI CALCULATOR</button>
                    </div>
                    </div>

                </div>
    )
}
export default Home
