import { useEffect, useState } from "react";

const [showGroup, setShowGroup] = useState();

useEffect(() => {
  const fetchCreateGroup = async () => {
    const res = await getAllGroup();
    setShowGroup(res.data);
  };
  fetchCreateGroup();
}, []);
