import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authenticated = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        let authenticated = sessionStorage.getItem('authenticated');
        if (authenticated) {
          console.log('Authenticated');
          setAuthorized(true);
        } else {
          console.log('Not Authenticated');
          setAuthorized(false);
        }
      } catch (error) {
        console.error('Authentication error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (!loading && !authorized) {
      // Delay the alert to ensure it's displayed after the rendering
      setTimeout(() => {
        alert("You aren't supposed to be here!");
        navigate('/'); // Redirect to login
      }, 0);
    }
  }, [loading, authorized, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Authenticated user:');
  return <></>;
};

export default Authenticated;
