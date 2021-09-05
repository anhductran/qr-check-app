import React, { ReactNode } from 'react';
import { Button } from 'antd';
import classnames from 'classnames';

type QrCheckButtonProps = {
  text?: string;
  className?: string | any;
  varient?: string;
  prefix?: ReactNode | any;
  icon?: ReactNode | any;
};

function QrCheckButton({
  text,
  className,
  varient,
  ...props
}: QrCheckButtonProps) {
  return (
    <Button
      className={classnames('button', {
        [className]: !!className,
        [`button--${varient}`]: !!varient,
      })}
      {...props}
    >
      {text}
    </Button>
  );
}

export default QrCheckButton;
