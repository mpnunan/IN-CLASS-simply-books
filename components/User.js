import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';

function User({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={userObj.photoURL} alt={userObj.displayName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{userObj.displayName}</Card.Title>
        <Card.Text>{userObj.email}</Card.Text>
        <Card.Text>{userObj.metadata.lastSignInTime}</Card.Text>
        <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </Card.Body>
    </Card>
  );
}

User.propTypes = {
  userObj: ({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    lastSignInTime: PropTypes.string,
  }).isRequired,
};

export default User;
