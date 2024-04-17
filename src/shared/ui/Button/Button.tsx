import styles from './Button.module.css';

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Disabled = 'disabled',
}

export enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariants;
  type?: ButtonTypes;
  isDisabled?: boolean;
  tabIndex?: number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = ButtonVariants.Primary,
  type = ButtonTypes.Button,
  isDisabled = false,
  tabIndex,
}) => {
  const buttonClass = `${styles.button} ${isDisabled ? styles.disabled : styles[variant]} ${className}`;

  return (
    <button
      tabIndex={tabIndex}
      className={buttonClass}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
