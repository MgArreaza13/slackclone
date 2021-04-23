import React from "react";
import { db } from "../../firebase";
import { SidebarOptionContainer, SidebarOptionChannel } from "./styles";


function SidebarOption({ Icon, title, key, addChannelOption, id}) {

  const addChannel = () => {
    const channelName = prompt(
      "Please enter the channel name, that you want create"
    );

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      key={key}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
