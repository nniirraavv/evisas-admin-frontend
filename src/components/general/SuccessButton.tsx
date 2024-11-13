import { Button, ButtonProps, ConfigProvider } from 'antd';
import { FC } from 'react';

const SuccessButton: FC<
  ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: 'rgb(82,196,26)',
            defaultBorderColor: 'rgb(82,196,26)',
            defaultColor: 'rgba(255,255,255,0.88)',
            defaultHoverBg: 'rgb(107,228,47)',
            defaultHoverBorderColor: 'rgb(107,228,47)',
            defaultHoverColor: 'rgb(255,255,255)',
          },
        },
      }}
    >
      <Button icon={props?.icon} type="default" {...props}>
        {props.children}
      </Button>
    </ConfigProvider>
  );
};

export default SuccessButton;
