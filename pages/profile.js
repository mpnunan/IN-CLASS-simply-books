import React from 'react';
import { useAuth } from '../utils/context/authContext';
import User from '../components/User';

function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User key={user} userObj={user} />
    </>
  );
}

export default Profile;
