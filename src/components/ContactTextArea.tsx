import { useState } from "react"
import './styles/contact.css'

type Props = {
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  placeholder?: string
  title?: string
  className?: string
}

/* Controlled textarea that reports changes and supports submit */
export default function ContactTextArea({ onChange, onSubmit, placeholder, title, className }: Props) {
  const [text, setText] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
    onChange?.(e.target.value)
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    onSubmit?.(text)
     setText("")
  }

  return (
    <div>
        <div className="title-wrapper">
        <p className="text-area-title">{title}</p></div>
    <form className="contact-form-wrapper" onSubmit={handleSubmit}>
      <textarea
        className={className}
        value={text}
        onChange={handleChange}
        placeholder={placeholder ?? "Write your message..."}
      />
      
    </form>
    </div>
  )
}