import { useQuery } from '@apollo/client';

import QuestionsList from '../components/QuestionsList';

import { QUERY_QUESTIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  console.log(questions)
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionsList
              questions={questions}
              title="Questions"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
