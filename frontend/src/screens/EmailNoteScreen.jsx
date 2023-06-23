import { Link } from 'react-router-dom';

const EmailNoteScreen = () => {
  return (
    <div>
      <header>
        <h3>
          <strong>Please confirm your email before login</strong>
        </h3>
      </header>
      <Link to="/login">Click here to Login</Link>
    </div>
  );
};

export default EmailNoteScreen;
