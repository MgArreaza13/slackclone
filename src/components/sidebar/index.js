import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
// icons
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from "../sidebarOption";
import AddIcon from "@material-ui/icons/Add";

import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [user] = useAuthState(auth)

  const sidebarOptions = [
    {
      title: "threads",
      icon: InsertCommentIcon,
    },
    {
      title: "Mentions & reactions",
      icon: InboxIcon,
    },
    {
      title: "Saved items",
      icon: DraftsIcon,
    },
    {
      title: "Channel browser",
      icon: BookmarkBorderIcon,
    },
    {
      title: "People & user groups",
      icon: PeopleAltIcon,
    },
    {
      title: "Apps",
      icon: AppsIcon,
    },
    {
      title: "File browser",
      icon: FileCopyIcon,
    },
    {
      title: "ShowLess",
      icon: ExpandLessIcon,
    },
  ];

  // firebase hooks
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.email}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      {sidebarOptions.map((option, i) => {
        return (
          <SidebarOption Icon={option.icon} title={option.title} key={i} />
        );
      })}
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {/* data from firebase */}
      {channels?.docs.map((doc, i) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
}

export default Sidebar;
