import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_QUESTION } from '../utils/queries';

const Questions = () => {

    const questionId = useParams()
    console.log(questionId)
  
   const {loading, data} = useQuery(QUERY_QUESTION,{
        variables: {_id: questionId}
    } )

    const questionData = data?.question
    console.log(questionData)

    

    
    return(
    <div></div>
    )
}
export default Questions;