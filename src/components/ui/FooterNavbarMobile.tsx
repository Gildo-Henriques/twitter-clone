import Home from "./logos/Home";
import Notification from "./logos/NotificationLogo";
import MensagensLogo from "./logos/MensagemLogo";
import ProfileLogo from "./logos/ProfileLogo";
import MoreLogo from "./logos/MoreLogo";
import Link from "next/link";
export default function FooterNavbarMobile() {
  return (
    <footer className="mx-auto flex-1 w-full bottom-0 fixed lg:hidden flex">
      <nav className="flex bg-black/50  backdrop-blur-md px-10 w-full justify-between items-center py-5 border-top">
        <Link
          href="/"
          className="flex text-white font-semibold items-center space-x-2"
        >
          <Home />
        </Link>

        <Link
          href="/"
          className="flex text-white font-semibold items-center space-x-2"
        >
          <Notification />
        </Link>
        <Link
          href="/"
          className="flex text-white font-semibold items-center space-x-2"
        >
          <MensagensLogo />
        </Link>

        <Link
          href="/profile"
          className="flex text-white font-semibold items-center space-x-2"
        >
          <ProfileLogo />
        </Link>
        <Link
          href="/"
          className="flex text-white font-semibold items-center space-x-2"
        >
          <MoreLogo />
        </Link>
      </nav>
    </footer>
  );
}
