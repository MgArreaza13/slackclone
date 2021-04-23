import React from "react";
import { db } from "../../firebase";
import { SidebarOptionContainer, SidebarOptionChannel } from "./styles";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";

function SidebarOption({ Icon, title, key, addChannelOption, id }) {
  const dispath = useDispatch();

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

  const selectChannel = () => {
    if (id) {
      dispath(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

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
