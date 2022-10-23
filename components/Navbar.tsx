import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(router.route.split("/")[2]);
    console.log(route);
  }, [router.route]);

  const checkIfActive = (item: string): string => {
    return item === route ? " active-nav-link" : "";
  };
  return (
    <nav className="theme-bg-accent w-1/5 min-h-screen">
      <div className="flex flex-row mt-20 justify-center items-center">
        <Image width="45%" height="45%" src={logo} />
        <p className="ml-3 theme-text font-medium text-2xl">OpenNova</p>
      </div>
      <ul className="mt-48 flex flex-col items-start pl-8 theme-text font-medium text-xl">
        <li
          className={
            "mb-2 w-full py-3 pl-5 rounded-l-full" + checkIfActive("dashboard")
          }
        >
          <Link href="/app/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li
          className={
            "mb-2 w-full py-3 pl-5 rounded-l-full" +
            checkIfActive("scheduled-tweets")
          }
        >
          <Link href="/app/scheduled-tweets">
            <a>Scheduled Tweets</a>
          </Link>
        </li>
        <li
          className={
            "mb-7 w-full py-2 pl-5 rounded-l-2xl" + checkIfActive("new-tweet")
          }
        >
          <Link href="/app/new-tweet">
            <a>New Tweet</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
