import { useParams, Link } from 'react-router-dom';
import { useGetEmailConfirmationQuery } from '../slices/usersApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const EmailConfirmationScreen = () => {
  const { confirmationCode } = useParams();

  const { isLoading, error } = useGetEmailConfirmationQuery({
    confirmationCode,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}{' '}
        </Message>
      ) : (
        <>
          <div>
            <header>
              <h3>
                <strong>Email validated</strong>
              </h3>
            </header>
            <Link to="/login">Click here to Login</Link>
          </div>
        </>
      )}
    </>
  );
};

export default EmailConfirmationScreen;
