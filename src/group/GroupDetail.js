import React, { useState } from "react";

import LoginForm from "../feature/auth/LoginForm";
import useGroup from "../hooks/useGroup";

export default function GroupDetail() {
  const { currentGroup } = useGroup();

  return (
    <div>
      <p className="font-normal mb-3">{currentGroup?.detail}</p>
    </div>
  );
}
