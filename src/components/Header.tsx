
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handlePreviewClick = () => {
    window.open("https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf", "_blank");
  };

  return (
    <header className="bg-black text-white w-full py-4 px-6 shadow-md z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a 
            href="https://www.wearerighello.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img 
              src="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/65869171f416b931298e21e6_Logo_righello_white.svg" 
              alt="Righello Logo" 
              className="h-10"
            />
          </a>
          <div className="ml-4 border-l border-gray-500 pl-4">
            <h1 className="text-lg md:text-xl font-semibold text-solero">Progetto Restyling</h1>
            <p className="text-xs md:text-sm opacity-80">Solerò Sport Village</p>
          </div>
        </div>
        
        <nav className="flex items-center space-x-4 text-sm">
          <a href="#sitemap" className="hover:text-solero transition-colors">Sitemap</a>
          <a href="#overview" className="hover:text-solero transition-colors">Panoramica</a>
          <a href="#quotation" className="hover:text-solero transition-colors">Preventivo</a>
          <a 
            href="https://www.wearerighello.com/contact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-solero transition-colors"
          >
            Contatta Righello
          </a>
          <Button 
            variant="outline"
            className={`border-solero ${isHovered ? 'text-solero-text bg-solero' : 'text-black bg-white'} transition-all`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePreviewClick}
          >
            Visualizza Preventivo
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
