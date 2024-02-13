import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import home_icon from "../../../public/assets/icons/home_icon.svg";
import courses_icon from "../../../public/assets/icons/courses_icon.svg";
import students_icon from "../../../public/assets/icons/students_icon.svg";
import wallet_icon from "../../../public/assets/icons/wallet_icon.svg";
import support_icon from "../../../public/assets/icons/support_icon.svg";
import settings_icon from "../../../public/assets/icons/settings_icon.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";
import logout_icon from "../../../public/assets/icons/logout_icon.svg";
import avatar from "../../../public/assets/images/avatar.png";
import { useDataStore } from "@/store/data-store";

export const navigations = [
  {
    icon: home_icon,
    iconActive: home_icon,
    pathname: "/",
    text: "Home",
  },
  {
    icon: courses_icon,
    iconActive: courses_icon,
    pathname: "/students",
    text: "Courses",
  },
  {
    icon: students_icon,
    iconActive: students_icon,
    pathname: "/students",
    text: "Students",
  },
  {
    icon: wallet_icon,
    iconActive: wallet_icon,
    pathname: "/students",
    text: "Wallet",
  },
];
export const otherNavigations = [
  {
    icon: support_icon,
    iconActive: support_icon,
    pathname: "/students",
    text: "Support",
  },
  {
    icon: settings_icon,
    iconActive: settings_icon,
    pathname: "/students",
    text: "Settings",
  },
];
const SideBar = () => {
  const router = useRouter();
  const { data } = useDataStore();

  const handleLogout = () => {
    localStorage.removeItem("techspertiseToken");
    router.push("/sign-in");
  };
  return (
    <aside className="bg-color5 w-[280px] flex flex-col min-h-full px-3 pt-10 pb-3">
      <section className="w-full bg-color6 flex items-center gap-2.5 rounded-lg max-w-[240px] mx-auto py-2.5 px-3.5">
        <Image src={search_icon} width={15} height={15} alt="search_icon" />
        <input
          className="placeholder:text-white font-normal text-base text-white bg-transparent focus:outline-none w-full"
          placeholder="Search"
        />
      </section>
      <ul className="flex flex-col justify-start gap-2 pt-6">
        {navigations.map((nav, index) => (
          <Fragment key={index}>
            <ListItem
              icon={nav.icon}
              iconActive={nav.iconActive}
              pathname={nav.pathname}
              text={nav.text}
            />
          </Fragment>
        ))}
      </ul>

      <section className="flex flex-1 flex-col justify-end gap-2">
        <ul className="flex flex-col gap-2">
          {otherNavigations.map((nav, index) => (
            <Fragment key={index}>
              <ListItem
                icon={nav.icon}
                iconActive={nav.iconActive}
                pathname={nav.pathname}
                text={nav.text}
              />
            </Fragment>
          ))}
        </ul>
        <div className="w-full border-t border-t-color6 h-0.5 mt-4 mb-3" />
        <section className="flex items-center justify-between text-white text-sm">
          <section className="flex gap-2.5">
            <Image src={avatar} height={40} width={40} alt="avatar" />
            <section className="flex flex-col">
              <p className=" font-bold"> {data.firstName} </p>
              <span className="font-normal"> {data.email} </span>
            </section>
          </section>
          <Image
            src={logout_icon}
            height={18}
            width={18}
            alt="logout_icon"
            className="cursor-pointer"
            onClick={handleLogout}
          />
        </section>
      </section>
    </aside>
  );
};

export const ListItem = ({
  icon,
  iconActive,
  pathname,
  text,
}: {
  icon: string;
  iconActive: string;
  pathname: string;
  text: string;
}) => {
  const currentRoute = usePathname();
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Link
      href={pathname}
      className={`flex justify-start items-center gap-3 rounded-md ${
        currentRoute === pathname
          ? "bg-color3 text-color8"
          : "text-color8 hover:bg-color3 hover:text-color8"
      } font-semibold text-base text-start p-3 w-full max-w-[240px] mx-auto`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={currentRoute === pathname ? iconActive : hover ? iconActive : icon}
        width={20}
        height={20}
        alt={text}
      />
      <li className="flex justify-start"> {text} </li>
    </Link>
  );
};

export default SideBar;
