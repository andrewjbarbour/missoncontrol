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
  const [formData, setFormData] = React.useState({});

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "missioncontrol", ...formData}),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <MdEmail className="w-[20pt] h-[20pt]" />
      <form
        className="flex flex-col items-center w-full"
        name="missioncontrol"
        method="POST"
        data-netlify="true"
        onSubmit={e => handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value="missioncontrol" />
        {contactFields.map(field => {
          const {name, type} = field;
          return (
            <ContactField
              label={capitalize(name)}
              key={name}
              type={type}
              handleChange={handleChange}
            />
          );
        })}
        {submitted ? (
          <div className="text-center p-[4px] w-11/12 mt-4">
            {"Thanks for your message. I'll be in touch shortly."}
          </div>
        ) : (
          <input
            className="border-black border bg-black dark:bg-white rounded-full py-1 px-4 my-4 text-white dark:text-black transition-all ease-in-out hover:scale-110"
            name="send-msg"
            type="submit"
            value="Send"
          ></input>
        )}
      </form>
    </div>
  );
}
