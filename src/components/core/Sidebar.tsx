import Button from "../shared/Button";
import { Icon } from "@iconify/react";

function Sidebar() {
  return (
    <div className="bg-[#070206] h-full w-40 flex flex-col justify-between items-center border-r border-[#f8f9fa]">
      <div className="text-white pt-10">Logo</div>
      <div className="flex flex-col gap-10">
        <Button href="community">
          <Icon
            icon="iconoir:community"
            color="#f8f9fa"
            width="24"
            height="24"
          />
        </Button>
        <Button href="/">
          <Icon
            icon="ep:chat-dot-round"
            color="#f8f9fa"
            width="24"
            height="24"
          />
        </Button>
        <Button href="settings">
          <Icon
            icon="fluent:settings-20-regular"
            color="#f8f9fa"
            width="24"
            height="24"
          />
        </Button>
      </div>
      <div className="pb-10">
        <Button href="settings">
          <Icon
            icon="material-symbols:logout"
            color="#f8f9fa"
            width="24"
            height="24"
          />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
