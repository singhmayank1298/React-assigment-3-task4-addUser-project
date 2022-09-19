import './Cards.css'


const Card2=(props)=>{
    const classes='card ' + props.className;   // this line is importent space aafter card
        return <div className={classes} >{props.children}</div> 
    }

export default Card2