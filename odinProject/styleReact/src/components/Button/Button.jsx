import styles from './Button.module.css';

const Button = ({type="primary", label="Button"}) => {
  return (
    <button className={styles[type]}>
      {label}
    </button>
  )
}

export default Button

