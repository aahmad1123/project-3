import QuestionsList from "../components/QuestionsList";
import AnswerList from "../components/AnswerList";
import { Link } from "react-router-dom";

function Questions(){
    const questions = [
        {
            question: "AFI Top 100 Search Engine",
            username: "john",
            questionText: "AFI Top 100 Search Engine",
        },
        {
            question: "Custom Workout Playlist",
            username: "john",
            questionText: "Custom Workout Playlist Website",
        },
        {
            question: "Weather Forecast",
            username: "john",
            questionText: "Weather Forecast Site",
        },
        {
            question: "Note Taking Website",
            username: "john",
            questionText: "Note Taking Website",
        },
        {
            question: "Day Planner",
            username: "john",
            questionText: "Day Planner Website",
        },
        {
            question: "Password Generator",
            username: "john",
            questionText: "Password Generator",
        },
    ]
    const answer = [
        {
            answer: "Text",
            username: "andy"
        }
    ]

    return(
<div>
    <h1>Final Project</h1>
    <h5 className="nav-list"><Link className="link" to="/" activeClassName = "active">Home</Link></h5>
    <div className="container ">
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <QuestionsList
                        question={question.question}
                        username = {question.username}
                        questionText={question.questionText}
                   />
                        <div className="answer"> 
                            {answer.map((answer, index) => (
                                <AnswerList
                                    answer={answer.answer}
                                    username={answer.username}

                                      /> 
                        ))}
 
                   </div>
                </div>
            ))}
        </div>
    </div>
</div>
    )
};

export default Questions;