import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TokenCheckPage = ({ onRefreshToken }) => {
  const params = useParams();

  useEffect(() => {
    onRefreshToken(params.token);
  }, []);

  return <div></div>;
};

export default TokenCheckPage;
