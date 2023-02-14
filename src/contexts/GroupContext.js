import { createContext, useState } from "react";

export const GroupContext = createContext();

export default function GroupContextProvider({ children }) {
  const [currentGroup, setCurrentGroup] = useState({});
  console.log(currentGroup);
  return (
    <GroupContext.Provider value={{ currentGroup, setCurrentGroup }}>
      {children}
    </GroupContext.Provider>
  );
}
