import { Navigate, Outlet, useModel } from '@umijs/max';

const useAuthWrapper = () => {
  const { data } = useModel('auth');

  if (!data) {
    return <Navigate to={'/login'} />;
  } else {
    return <Outlet />;
  }
};
export default useAuthWrapper;
