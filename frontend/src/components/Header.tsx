import React from "react";


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full  text-white ">
       <div className="container  items-center p-4 text-xl ">
        <nav className="flex gap-4 ">
          <a href="/" className="hover:underline ">
            Login
          </a>
         
          <a href="/Contatos" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;