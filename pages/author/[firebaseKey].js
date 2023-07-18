import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const allAuthorDetails = (key) => {
    viewAuthorDetails(key).then(setAuthorDetails);
  };

  useEffect(() => {
    allAuthorDetails(firebaseKey);
  }, [firebaseKey]);

  return (
    <div>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name}{authorDetails.last_name}
          </h5>
          Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
          <hr />
          <p>
            {authorDetails.favorite ? '🤍' : ''}
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={allAuthorDetails} />
        ))}
      </div>
    </div>
  );
}
