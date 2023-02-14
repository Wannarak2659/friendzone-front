import groupImage from "../assets/friend.jpg";

export default function GroupImage({ src, width, height }) {
  return (
    <img
      className="rounded-t-md justify-center"
      src={src || groupImage}
      alt="cover"
      width={width}
      height={height}
      //   width={`${size}px`}
      //   height={size}
    />
  );
}
