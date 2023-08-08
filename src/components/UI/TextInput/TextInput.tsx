import styles from './TextInput.module.scss';

interface TextInputProps {
  id: string,
  placeholder: string
}

export const TextInput = (props: TextInputProps): JSX.Element => {
  return (
    <input type="text" placeholder={props.placeholder} id={props.id} className={styles.textInput}/>
  )
}