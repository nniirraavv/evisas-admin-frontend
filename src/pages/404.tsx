import { useModel, useNavigate } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useModel('auth');

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        data ? (
          <Button onClick={() => navigate('/')} type="primary">
            Back Home
          </Button>
        ) : (
          <Button onClick={() => navigate('/login')} type="primary">
            Login
          </Button>
        )
      }
    />
  );
};

export default PageNotFound;
