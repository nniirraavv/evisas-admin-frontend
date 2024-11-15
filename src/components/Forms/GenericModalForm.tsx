import { ModalForm, ModalFormProps } from '@ant-design/pro-components';
import { Form } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';
import ButtonWithTooltip from '../general/ButtonWithTooltip';

interface Props<T>
  extends Omit<
    ModalFormProps,
    'form' | 'modalProps' | 'trigger' | 'onFinish' | 'autoFocusFirstInput'
  > {
  buttonType?: 'link' | 'text' | 'primary' | 'default' | 'dashed';
  buttonTitle?: React.ReactNode;
  buttonTooltipTitle?: string;
  buttonTooltipPlacement?: TooltipPlacement | undefined;
  buttonBlock?: boolean;
  buttonLoading?: boolean;
  onFinish?: ((formData: T) => Promise<boolean | void> | void) &
    ((formData: T) => Promise<any>);
}
export default function GenericModalForm<T = Record<string, any>>(
  props: Props<T>,
) {
  const [form] = Form.useForm<T>();

  return (
    <div
      onClick={(e) => {
        e?.preventDefault();
        e?.stopPropagation();
      }}
    >
      <ModalForm<T>
        title={props?.title}
        form={form}
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          width: 500,
          okText: 'Go',
          onOk: (e) => {
            console.log('Ok clicked : ', e);
          },
          bodyProps: { style: { marginTop: 15 } },
        }}
        trigger={
          <ButtonWithTooltip
            onClick={(e) => {
              e?.preventDefault();
              e?.stopPropagation();
            }}
            title={props?.buttonTooltipTitle}
            block={props?.buttonBlock}
            type={props?.buttonType}
            loading={props?.buttonLoading}
            placement={props?.buttonTooltipPlacement}
          >
            {props?.buttonTitle}
          </ButtonWithTooltip>
        }
        onFinish={props?.onFinish}
      >
        {props?.children}
      </ModalForm>
    </div>
  );
}
