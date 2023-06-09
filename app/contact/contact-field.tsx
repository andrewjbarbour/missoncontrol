import * as React from "react";

interface ContactFieldProps {
  label: string;
  required?: boolean;
  type: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function ContactField(props: ContactFieldProps) {
  const {label, required, type, handleChange} = props;
  const [msgLength, setMsgLength] = React.useState(0);

  switch (type) {
    case "text":
      return (
        <div className="flex flex-col m-5 w-11/12 sm:w-96 indent-1">
          <label htmlFor={label}>{label}</label>
          <input
            className="p-1 indent-1 border-[#666] border border-solid border-opacity-20 rounded outline-none focus:ring-1 focus:ring-[#666] transition-shadow ease-in duration-300 dark:bg-dark-secondary"
            name={label}
            id={label}
            type={label === "email" ? label : type}
            required={required ?? true}
            onChange={e => handleChange(e)}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="flex flex-col m-5 w-11/12 sm:w-96">
          <label className="my-1" htmlFor={label}>
            {label}
          </label>
          <textarea
            className="py-1 px-2 resize-none border-[#666] border border-solid border-opacity-20 rounded outline-none focus:ring-1 focus:ring-[#666] transition-shadow ease-in duration-300 dark:bg-dark-secondary"
            name={label}
            id={label}
            rows={7}
            required={required ?? true}
            maxLength={1000}
            onChange={e => handleChange(e)}
            onKeyUp={e =>
              setMsgLength((e.target as HTMLTextAreaElement).value.length)
            }
          />
          {msgLength > 0 ? (
            <small className="text-sm -mb-5">
              {1000 - msgLength} characters left
            </small>
          ) : null}
        </div>
      );
    default:
      return null;
  }
}
