interface ContactFieldProps {
  label: string;
  onKeyDown?: () => void;
  required?: boolean;
  type: string;
}

export default function ContactField(props: ContactFieldProps) {
  const {label, required, type, onKeyDown} = props;

  switch (type) {
    case "text":
      return (
        <div className="flex flex-col m-5 w-96 indent-1">
          <label htmlFor={label}>{label}</label>
          <input
            className="p-1 indent-1 border-[#666] border border-solid border-opacity-20 rounded outline-none focus:ring-1 focus:ring-[#666] transition-shadow ease-in duration-300"
            name={label}
            id={label}
            type={type}
            required={required ?? true}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="flex flex-col m-5 w-96 resize-none">
          <label className="my-1" htmlFor={label}>
            {label}
          </label>
          <textarea
            className="p-1 indent-1 border-[#666] border border-solid border-opacity-20 rounded outline-none focus:ring-1 focus:ring-[#666] transition-shadow ease-in duration-300"
            name={label}
            id={label}
            rows={7}
            required={required ?? true}
            maxLength={1000}
          />
        </div>
      );
    default:
      return null;
  }
}
