import Home from "./logos/Home"
import ExplorerLogo from "./logos/ExplorerLogo"
import Notification from "./logos/NotificationLogo"
import MensagensLogo from "./logos/MensagemLogo"
import CommunitiesLogo from "./logos/CommunitiesLogo"
import ProfileLogo from "./logos/ProfileLogo"
import MoreLogo from "./logos/MoreLogo"
import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="space-y-8">
           <Link href="/" className="flex text-white font-semibold items-center space-x-2">
           <Home />
                <span className="text-lg">Home</span>
           </Link>
           <Link href="/" className="flex text-white font-semibold items-center space-x-2">
           <ExplorerLogo />
           <span className="text-lg">Explore</span>
           </Link>
           <Link href="/" className="flex text-white font-semibold items-center space-x-2">
           <Notification />
           <span className="text-lg">Notification</span>
          </Link>
          <Link href="/mensagem" className="flex text-white font-semibold items-center space-x-2">
          <MensagensLogo />
          <span className="text-lg">Mensagem</span>
          </Link>
          <Link href="/" className="flex text-white font-semibold items-center space-x-2">
          <CommunitiesLogo />
          <span className="text-lg">Communities</span>
          </Link>
          <Link href="/profile" className="flex text-white font-semibold items-center space-x-2">
          <ProfileLogo />
          <span className="text-lg">Profile</span>
          </Link>
          <Link href="/" className="flex text-white font-semibold items-center space-x-2">
          <MoreLogo />
          <span className="text-lg">More</span>
          </Link>

        </nav>
    )
}