import { Button, ButtonProps, Tooltip, TooltipProps } from 'antd';
import { FC } from 'react';

const ButtonWithTooltip: FC<
  ButtonProps & Pick<TooltipProps, 'title' | 'placement'>
> = ({ title, placement, ...buttonProps }) => {
  return (
    <Tooltip title={title} placement={placement}>
      <Button {...buttonProps}></Button>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
