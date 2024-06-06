import { Link } from 'react-router-dom';

const ProfileList = ({ questions, title }) => {
  if (!questions.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {questions &&
          questions.map((questions) => (
            <div key={questions._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <div>
                  {questions.title}
                </div>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {questions.body} <br />
                  {questions.user.firstName} {questions.user.lastName}
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/Questions/${questions._id}`}
                >
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
