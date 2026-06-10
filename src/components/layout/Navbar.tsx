import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex container mx-auto justify-between">
      <div className="flex gap-5">
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="32"
            viewBox="0 0 78 32"
            fill="none"
            id="Logo"
          >
            <g id="logomark">
              <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#FF7A00"></path>
              <g id="monovar">
                <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736"></path>
              </g>
              <g id="monovar_2">
                <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="">
          <nav>
            <ul className="flex gap-5 py-3">
              <Link to={''}><li>Home</li></Link>
              <Link to={'/features'}><li>Features</li></Link>
              <Link to={'/pricing'}><li>Pricing</li></Link>
              <Link to={'/about'}><li>About</li></Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex gap-2 p-2">
        <button>Sign In</button>
        <button className="bg-black text-white px-2 py-1 rounded font-medium">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
