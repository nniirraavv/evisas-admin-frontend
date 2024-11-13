import { ConfigProvider, Divider } from 'antd';

const CustomDivider = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          margin: 0,
          marginLG: 0,
        },
        components: {
          Divider: {
            textPaddingInline: 0,
            verticalMarginInline: 0,
          },
        },
      }}
    >
      <Divider dashed orientation="left" plain className="mb-3"></Divider>
    </ConfigProvider>
  );
};

export default CustomDivider;
