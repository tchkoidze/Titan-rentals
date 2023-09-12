import { Link } from "react-router-dom";
import Logo from "../components/logo";
import HamburgerMenu from "../svg/HamburgerMenu";

function Header(props: {
  setShowMenu: (bool: boolean) => void;
  showMenu: boolean;
}) {
  return (
    <div className="flex justify-between bg-[#242c3f] px-8">
      <Logo></Logo>
      <div className="hidden md:flex">
        <ul className=" flex gap-5 ">
          <li>
            <Link to={"/"} className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} className="text-white">
              Equipment
            </Link>
          </li>
          <li>
            <Link to={"/"} className="text-white">
              Service
            </Link>
          </li>
          <li>
            <Link to={"/"} className="text-white">
              Contact
            </Link>
          </li>
        </ul>
        <button className="text-white px-5 py-1 rounded-[28px] bg-yellow-600  ">
          sign up
        </button>
      </div>
      <HamburgerMenu onClick={() => props.setShowMenu(true)} />
    </div>
  );
}

export default Header;
