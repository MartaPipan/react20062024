import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/', { replace: true });
  }, 3000);                            //setTimeout did not used correct here !!!
  return <div>Error</div>;
};

export default ErrorPage;
