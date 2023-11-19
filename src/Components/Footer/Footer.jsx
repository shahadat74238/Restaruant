import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-green-700 grid grid-cols-2 text-neutral-content">
        <div className="bg-[#1F2937] p-10 flex justify-end text-center">
          <div>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
        </div>
        <div className="bg-[#111827] flex justify-start p-10 text-center">
          <div>
            <header className="footer-title">Social</header>
            <div className="flex  gap-4">
              <Link>Icone</Link>
              <Link>Icone</Link>
              <Link>Icone</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center text-white p-4 bg-[#151515] ">
        <aside>
          <p>
            Copyright © {currentYear} - All right reserved by Bistro Boos Fruit!
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
