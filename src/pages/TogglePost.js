import React from "react";

export default function TogglePost() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  return (
    <div>
      {/* <div className=" mt-24">
  <div className="flex space-x-12 ">
    <div className="ml-10 mt-5 font-bold">Username</div>
    <div className=" mt-5 text-red-400 ">
      {toggleEdit ? (
        <>
          <input
            className="border rounded "
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={(e) => {
              setToggleEdit(false);
            }}
          >
            OK
          </button>
        </>
      ) : (
        <button
          className="ml-30"
          onClick={(e) => {
            setToggleEdit(true);
          }}
        >
          Set Now
        </button>
      )}
    </div>
  </div>

  <div className=" mt-5">
    <SmallLine />
  </div>
  
</div>
<div className=" ">
  <div className="flex space-x-16 ">
    <div className="ml-10 mt-5 font-bold">Phone</div>
    <div className=" mt-5 text-red-400 ">
      {toggleEdit ? (
        <>
          <input
            className="border rounded"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={(e) => {
              setToggleEdit(false);
            }}
          >
            OK
          </button>
        </>
      ) : (
        <button
          className="ml-30"
          onClick={(e) => {
            setToggleEdit(true);
          }}
        >
          Set Now
        </button>
      )}
    </div>
  </div>
  {/* --------------------- */}
      {/* <div className=" mt-5">
  <BigLine />
</div> */}
      {/* --------------------- */}
      {/* </div>   */}
    </div>
  );
}
