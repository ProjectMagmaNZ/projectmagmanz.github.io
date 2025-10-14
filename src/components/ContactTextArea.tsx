import { useState, useEffect } from "react"
import './styles/contact.css'

type Props = {
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  placeholder?: string
  title?: string
  className?: string
  value?: string // Add value prop
}

export default function ContactTextArea({ onChange, onSubmit, placeholder, title, className, value }: Props) {
  const [text, setText] = useState(value || "")

  // Update internal state when value prop changes (for clearing)
  useEffect(() => {
    setText(value || "")
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
    onChange?.(e.target.value)
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    onSubmit?.(text)
  }

  return (
    <div>
      <div className="title-wrapper">
        <p className="text-area-title">{title}</p>
      </div>
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