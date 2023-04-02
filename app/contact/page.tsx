"use client";
import ContactIcon from "./contact-icon";

interface ContactFieldProps {
  label: string;
  onKeyDown?: () => void;
  required?: boolean;
  type: string;
}

export function ContactField(props: ContactFieldProps) {
  const {label, required, type, onKeyDown} = props;

  switch (type) {
    case "text":
      return (
        <div className="flex flex-col p-2 m-5">
          <label htmlFor={label}>{label}</label>
          <input
            className="border-[#666] border border-solid border-opacity-20"
            name={label}
            id={label}
            type={type}
            required={required ?? true}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="flex flex-col p-2 resize-none">
          <label htmlFor={label}>{label}</label>
          <textarea
            name={label}
            id={label}
            required={required ?? true}
            maxLength={1000}
          />
        </div>
      );
    default:
      return null;
  }
}

const contactFields = [
  {name: "name", type: "text"},
  {name: "email", type: "text"},
  {name: "subject", type: "text"},
  {name: "message", type: "textarea"},
];

export default function Contact() {
  console.log("rerendering contact");
  return (
    <div className="flex flex-col items-center w-screen">
      <ContactIcon />
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact?success"
      >
        {contactFields.map(field => {
          const {name, type} = field;
          return <ContactField label={name} key={name} type={type} />;
        })}
      </form>
    </div>
  );
}
