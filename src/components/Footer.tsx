
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handlePreviewClick = () => {
    window.open("https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf", "_blank");
  };

  return (
    <footer className="bg-gray-100 w-full py-12 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <Button 
            onClick={handlePreviewClick} 
            size="lg" 
            className="bg-solero hover:bg-solero-dark text-white mb-6"
          >
            Visualizza Preventivo
          </Button>
          
          <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-center text-solero">Avvia il progetto</h3>
            <p className="text-center mb-6 text-gray-600">
              Pronto a trasformare il sito web di Solerò Sport Village? Contattaci per iniziare il processo di restyling.
            </p>
            <a 
              href="https://www.wearerighello.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white"
              >
                Contatta Righello
              </Button>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t pt-8">
          <div className="col-span-1">
            <a 
              href="https://www.wearerighello.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/65869171f416b931298e21e6_Logo_righello_white.svg" 
                alt="Righello Logo" 
                className="h-10 mb-4 invert" 
              />
            </a>
            <p className="text-gray-600 text-sm">
              Agenzia specializzata nella creazione di progetti digitali unici e coinvolgenti.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-solero">Contatti</h4>
            <p className="text-sm text-gray-600">
              Via Santa Croce, 17<br />
              22100, Como, Italia<br />
              <a href="mailto:info@righello.it" className="text-solero">info@righello.it</a><br />
              <a href="tel:+390312095626" className="text-solero">+39 031 209 56 26</a>
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-solero">Social</h4>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/wearerighello/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-solero">
                Instagram
              </a>
              <a href="https://www.facebook.com/wearerighello" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-solero">
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/wearerighello/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-solero">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-solero">Policy</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-solero">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-solero">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-solero">Termini e Condizioni</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Righello. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
