import React from "react";
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";

const HomePage = (user) => {
  return (
    <div>
      <WindowWork />
      <Tree user={user} />
    </div>
  );
};

export default HomePage;
