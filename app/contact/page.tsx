import {capitalize} from "../page.utils";
import ContactField from "./contact-field";
import ContactIcon from "./contact-icon";

const contactFields = [
  {name: "name", type: "text"},
  {name: "email", type: "text"},
  {name: "subject", type: "text"},
  {name: "message", type: "textarea"},
];

export default function Contact() {
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
          return (
            <ContactField label={capitalize(name)} key={name} type={type} />
          );
        })}
      </form>
      <button name="send-msg" type="submit">
        Send
      </button>
    </div>
  );
}
