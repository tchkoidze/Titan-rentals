import { Link } from "react-router-dom";
import Close from "../svg/Close";

function Menu(props: { setShowMenu: (bool: boolean) => void }) {
  return (
    <div className="bg-white absolute">
      <Close onClick={() => props.setShowMenu(false)} />
      <ul className=" flex flex-col gap-5 ">
        <li>
          <Link to={"/"} className="text-blue-950">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            Equipment
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            Service
          </Link>
        </li>
        <li>
          <Link to={"/"} className="text-blue-950">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
