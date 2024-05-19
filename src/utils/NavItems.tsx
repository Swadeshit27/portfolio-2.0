import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";

export const NavItemList: ItemsType[] = [
  {
    name: "home",
    path: "/",
    icon: <AiFillHome  size={18} />
  },
  {
    name: "about",
    path: "/about",
    icon: <IoMdContact  size={18} />
  },
  {
    name: "projects",
    path: "/projects",
    icon: <IoSettingsSharp  size={18} />
  },
  {
    name: "achievement",
    path: "/achievements",
    icon: <GiAchievement  size={18}   />
  },
  {
    name: "contact",
    path: "/contact",
    icon: <MdContactSupport  size={18} />
  }
]
