import styles from './styles.module.scss'
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProps) {
  return <input className={styles.input} {...rest} />
}

export function Textarea({ ...rest }: TextareaProps) {
  return <textarea className={styles.input} {...rest}></textarea>
}
