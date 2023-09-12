function HamburgerMenu(props: { onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
      viewBox="-3.5 -3 32 28"
      onClick={props.onClick}
      className="md:hidden"
    >
      <g fill="#fff" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );
}

export default HamburgerMenu;
