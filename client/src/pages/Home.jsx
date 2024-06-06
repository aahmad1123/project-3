import React from 'react';
import { useQuery } from '@apollo/client';
import auth from '../utils/auth';

import QuestionsList from '../components/QuestionsList';
import QuestionForm from '../components/QuestionForm';

import { QUERY_QUESTIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  const isLoggedIn = auth.loggedIn();

  console.log(questions);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {isLoggedIn && (
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="modal"
                    data-target="#addQuestionModal"
                    onClick={() => console.log("Button clicked")}
                  >
                    Add Question
                  </button>

                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="addQuestionModal"
                    tabIndex="-1"
                    aria-labelledby="addQuestionModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="addQuestionModalLabel">
                            Add Question
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <QuestionForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <QuestionsList questions={questions} title="Questions" />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;