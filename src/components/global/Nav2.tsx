export default function Nav2() {
  return (
    <header className="sticky top-0 z-10 hidden w-full items-center justify-between bg-white px-10 shadow-lg lg:flex">
      <a href="#">
        <img
          src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
          alt=""
        />
      </a>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Status
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a
        className="btn cornered-border m-3 px-8 py-4 text-white hover:bg-left"
        href="#"
      >
        Get Started
      </a>
    </header>
  );
}
