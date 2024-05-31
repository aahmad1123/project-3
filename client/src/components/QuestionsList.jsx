import {Link, NavLink} from "react-router-dom"
function QuestionsList(props){
    return(
        <div>
           <div className="card" style={{width: "70rem",}}>
           <div className="card-body">
           <h2 className="card-title"><Link className= "link" to="/Questions" >{props.question}</Link></h2>
           <h6 class="card-subtitle mb-2 text-muted">{props.username}</h6>
           <p className="card-text">{props.questionText}</p>
  </div>
</div>
        </div>
    )
};

export default QuestionsList;