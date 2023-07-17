/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';

function Authors() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default Authors;
