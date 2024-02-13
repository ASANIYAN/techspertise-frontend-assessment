"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { CloseSquare, HambergerMenu } from "iconsax-react";

import avatar from "../../../public/assets/images/avatar.png";
import search_icon from "../../../public/assets/icons/search_icon.svg";
import logout_icon from "../../../public/assets/icons/logout_icon.svg";

import { ListItem, navigations, otherNavigations } from "../sidebar/sidebar";

const NavbarMobile = ({
  handleNavbarClosure,
}: {
  handleNavbarClosure: () => void;
}) => {
  return (
    <>
      <section
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20 transition-all duration-500
        }`}
      />
      <aside
        className={`bg-color5 absolute top-0 left-0 flex flex-col min-h-full px-3 pt-10 pb-3 transition-all duration-300 z-50 w-[280px] `}
      >
        <section className="flex justify-end">
          <CloseSquare size="32" color="#FFF" onClick={handleNavbarClosure} />
        </section>
        <section className="w-full bg-color6 flex items-center gap-2.5 rounded-lg mt-3 max-w-[240px] mx-auto py-2.5 px-3.5">
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
                <p className=" font-bold"> Ayele Tutor Center </p>
                <span className="font-normal"> ayele@tutor.com </span>
              </section>
            </section>
            <Image src={logout_icon} height={18} width={18} alt="logout_icon" />
          </section>
        </section>
      </aside>
    </>
  );
};

export default NavbarMobile;
