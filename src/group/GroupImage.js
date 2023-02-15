import groupImage from "../assets/friend.jpg";

export default function GroupImage({ image }) {
  return (
    <img
      className="rounded-md justify-center"
      src={image || groupImage}
      alt="cover"
      width={400}
      height={400}
      //   width={`${size}px`}
      //   height={size}
    />
  );
}
