import QuestionsList from "../components/QuestionsList";
import AnswerList from "../components/AnswerList";
import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { QUERY_QUESTIONS } from "../utils/queries";

const QuestionsContainer = () => {
    const { loading, data } = useQuery(QUERY_QUESTIONS);
    const questions = data?.questions || [];
     console.log(questions)
    
     if (!questions.length) {
        return <h3>No Questions Yet</h3>;
      } else {
        console.log(questions)
      }
    
    return (
      <div>
        {loading ? (
            <div>Loading...</div>) : (
              
             <div></div> 
        )}
      </div>
    );
  };
  
  export default QuestionsContainer;
