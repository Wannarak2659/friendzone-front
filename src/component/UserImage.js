import profileImage from "../assets/profile.jpg";

export default function UserImage({ src, size }) {
  return (
    <img
      src={src || profileImage}
      className="rounded-full"
      width={size}
      height={size}
    />
  );
}
