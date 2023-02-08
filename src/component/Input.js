export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className={`shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black ${
          error ? "invalid:text-red-500" : ""
        }`}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="text-red-500 text-sm mb-2 pl-4">{error}</div>}
    </>
  );
}
