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
            className="p-1 indent-2 border-[#666] border border-solid border-opacity-20 rounded"
            name={label}
            id={label}
            type={type}
            required={required ?? true}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="flex flex-col m-5 w-96 indent-1 resize-none">
          <label htmlFor={label}>{label}</label>
          <textarea
            className="p-1 indent-2 border-[#666] border border-solid border-opacity-20 rounded"
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
