import { Link } from "react-router-dom";
import UserImage from "../component/UserImage";

export default function ChatAuthor({
  posts: {
    User: { id, firstName, lastName, profileImage },
  },
}) {
  return (
    <div className="flex align-middle gap-2">
      <div>
        <Link to={`/profile/${id}`}>
          <UserImage size="40" src={profileImage} />
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to={`/profile/${id}`} className="text-base fw-bold text-left">
          {firstName} {lastName}
        </Link>
      </div>
    </div>
  );
}
