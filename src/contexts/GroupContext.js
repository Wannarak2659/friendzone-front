import { createContext, useState } from "react";
import { getAccessToken } from "../utils/local-storage";

export const GroupContext = createContext();

export default function GroupContextProvider({ children }) {
  const [currentGroup, setCurrentGroup] = useState();
  // getAccessToken() ? true : null;

  const editGroup = async (data) => {
    setCurrentGroup({ ...currentGroup, ...data });
  };
  return (
    <GroupContext.Provider value={{ currentGroup, editGroup, setCurrentGroup }}>
      {children}
    </GroupContext.Provider>
  );
}
