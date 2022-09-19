import Card2 from "../Ui/Cards"
import './ErrorModel.css'


const ErrorModel=(props)=>{
const hendeler=()=>{
    props.Errorok()
}


    return(<div className="backdrop">
    
    <Card2>
        <header className="header">
            <h2>Error</h2>
        </header>
        <div className="content">
            <p>
                {props.age===2?"You have enter wrong input":"you have entered wrong age"}
            </p>
        </div>
        <footer className="actions">
            <button  className="button" onClick={hendeler}>Okay</button>
        </footer>
    </Card2>
    </div>)
}

export default ErrorModel