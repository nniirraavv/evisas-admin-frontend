import { UserOutlined } from '@ant-design/icons';
import { Link, useModel } from '@umijs/max';
import { Button, Dropdown, Spin } from 'antd';
import { MenuProps } from 'antd/lib';
import { useState } from 'react';

const UserAvatar = () => {
  const { data, logout } = useModel('auth');
  const [spinning, setSpinning] = useState(false);

  const handleLogout = async () => {
    try {
      setSpinning(true);
      await logout();
    } catch (error) {
      console.log('Error:logout', error);
    } finally {
      setSpinning(false);
    }
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <Link to={'/settings'} className="px-2">
          Setting
        </Link>
      ),
      key: 'Setting',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div onClick={handleLogout} className="px-2">
          <Spin spinning={spinning}>Logout</Spin>
        </div>
      ),
      key: 'logout',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button type="text" onClick={(e) => e.preventDefault()}>
        <UserOutlined /> {data?.name}
      </Button>
    </Dropdown>
  );
};

export default UserAvatar;
