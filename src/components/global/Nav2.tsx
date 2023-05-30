export default function Nav2() {
    return (
      <header className="hidden lg:flex w-full justify-between items-center px-10 sticky top-0 bg-white shadow-lg">
        <a href="#">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
            alt=""
          />
        </a>
        <nav>
          <ul className="flex justify-center items-center gap-4">
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
          className="btn cornered-border px-8 py-4 m-3 hover:bg-left text-white"
          href="#"
        >
          Get Started
        </a>
      </header>
    );
  }