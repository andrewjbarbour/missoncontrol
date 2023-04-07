"use client";
import * as React from "react";
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
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <ContactIcon />
      <form
        className="flex flex-col items-center"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact?success"
        onSubmit={e => handleSubmit(e)}
      >
        {contactFields.map(field => {
          const {name, type} = field;
          return (
            <ContactField label={capitalize(name)} key={name} type={type} />
          );
        })}
        {submitted ? (
          <div className="mt-4">
            {"Thanks for your message. I'll be in touch shortly."}
          </div>
        ) : (
          <button
            className="border-black border bg-black rounded-full py-1 px-4 my-4 text-white transition-all ease-in-out hover:scale-110"
            name="send-msg"
            type="submit"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}
