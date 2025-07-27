import styles from './Button.module.scss'
import clsx from 'clsx'

function Button({primary, danger, children}) {
    const buttonClasses = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.danger]: danger,
    });

    return <button className={buttonClasses}>{children}</button>;
}
export default Button;