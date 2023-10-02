import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className=" default-container px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Slide right>
              <h2 className="text-lg text-primary font-semibold">
                <span className="text-white">Fluency</span>Mastery
              </h2>
            </Slide>
            <p className="text-gray-400 mt-2">Learn languages with ease.</p>
            <p className="text-gray-400">1234 Main Street, City, Country</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <ul className="flex justify-center md:justify-start">
              <li className="mr-4">
                <Link className="text-gray-400 hover:text-white transition duration-300">
                  Terms and condition
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cookies policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-400">
              © 2023 FluencyMastery. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
