"use client";
const CustomTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  children,
  disabled,
}: {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  name?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <div className=" flex gap-4 items-center">
      <div className=" bg-white w-full pl-4 pr-2 shadow-[0px_0px_2px] shadow-grayscale-900  rounded-md">
        <span className=" text-[10px] font-semibold text-grayscale-900 opacity-90 ">
          {label}
        </span>
        <textarea
          name={name}
          id=""
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className=" w-full h-16 min-h-16 py-2 text-sm font-normal placeholder-grayscale-700 bg-transparent outline-none"
        ></textarea>
      </div>
      {children}
    </div>
  );
};

export default CustomTextArea;
