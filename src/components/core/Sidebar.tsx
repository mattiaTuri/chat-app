import { useEffect } from "react";
import Button from "../shared/Button";
import { Icon } from "@iconify/react";
import { changeMenu } from "./sidebarFunctions";

function Sidebar() {
  useEffect(() => {
    let sectionActive: string = window.location.pathname.replace("/", "");
    if (sectionActive === "") sectionActive = "chat";
    changeMenu(sectionActive);
  }, []);

  return (
    <div className="bg-[#070206] h-full w-40 flex flex-col justify-between items-center border-r border-[#f8f9fa]">
      <div className="text-white pt-10 text-center">
        <h1>CHAT</h1>
        <h1>APP</h1>
      </div>
      <div id="menuLink" className="flex flex-col gap-10">
        <Button id="community" href="community" clickFunction={changeMenu}>
          <Icon icon="iconoir:community" width="24" height="24" />
        </Button>
        <Button id="chat" href="/" clickFunction={changeMenu}>
          <Icon icon="ep:chat-dot-round" width="24" height="24" />
        </Button>
        <Button id="settings" href="settings" clickFunction={changeMenu}>
          <Icon icon="fluent:settings-20-regular" width="24" height="24" />
        </Button>
      </div>
      <div className="pb-10">
        <Button
          id="logout"
          href="settings"
          clickFunction={() => console.log("")}
        >
          <Icon icon="material-symbols:logout" width="24" height="24" />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
