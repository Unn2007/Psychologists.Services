import css from './OptionalButton.module.css';

export default function OptionalButton({
  children,
  type = 'button',
  handleClick,

  isPrimaryButton = true,
  externalClass = '',
}) {
  return (
    <button
      className={`${css.button} ${
        isPrimaryButton ? css.primary : ''
      } ${externalClass}`}
      type={type}
      onClick={type === 'button' && handleClick ? handleClick : undefined}
    >
      {children}
    </button>
  );
}
