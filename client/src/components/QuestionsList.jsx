import { Link }from "react-router-dom"
const QuestionsList = ({questions}) => {
    return(
//         <div>
//            <div className="card" style={{width: "70rem",}}>
//            <div className="card-body">
//            <h2 className="card-title"><Link className= "link" to="/Questions" >{questions.question}</Link></h2>
//            <h6 class="card-subtitle mb-2 text-muted">{questions.username}</h6>
//            <p className="card-text">{props.questionText}</p>
//   </div>
// </div>
//         </div>

            questions.map((question) => (
                <div key= {question._id}>
                    <div >{question.body}</div>
                </div>
            )
  )
)};

export default QuestionsList;