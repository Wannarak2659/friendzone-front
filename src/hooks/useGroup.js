import { useContext } from "react";
import { GroupContext } from "../contexts/GroupContext";

export default function useGroup() {
  return useContext(GroupContext);
}
