"use client";
import * as React from "react";
import {capitalize} from "../page.utils";
import ContactField from "./contact-field";
import {MdEmail} from "react-icons/md";

const contactFields = [
  {name: "name", type: "text"},
  {name: "email", type: "text"},
  {name: "subject", type: "text"},
  {name: "message", type: "textarea"},
];

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: JSON.stringify({"form-name": "contact"}),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <MdEmail className="w-[20pt] h-[20pt]" />
      <form
        className="flex flex-col items-center w-full"
        name="contact"
        method="POST"
        data-netlify="true"
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
            className="border-black border bg-black dark:bg-white rounded-full py-1 px-4 my-4 text-white dark:text-black transition-all ease-in-out hover:scale-110"
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
