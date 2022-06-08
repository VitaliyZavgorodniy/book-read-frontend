import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LoginGoogle = ({ onRefreshToken }) => {
  const [params] = useSearchParams();

  useEffect(() => {
    onRefreshToken(params.get('token'));
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default LoginGoogle;
