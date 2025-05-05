
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sitemap from "@/components/Sitemap";
import ProjectOverview from "@/components/ProjectOverview";
import PriceComparison from "@/components/PriceComparison";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Progetto Restyling
                <span className="block text-solero">Solerò Sport Village</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Una presentazione interattiva del progetto di restyling del sito web di Solerò Sport Village,
                con una mappatura completa della struttura del sito, le modifiche proposte e le nuove funzionalità pianificate.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#sitemap" className="inline-flex items-center px-6 py-3 bg-solero text-white rounded-md hover:bg-solero-dark transition-colors">
                  Esplora la Mappa del Sito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#quotation" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Consulta il Preventivo
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-solero-light text-white mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analisi della Struttura</h3>
                  <p className="text-gray-600">
                    Visualizzazione interattiva della struttura attuale del sito con evidenziate
                    le aree di intervento e miglioramento.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-solero-light text-white mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Proposta di Restyling</h3>
                  <p className="text-gray-600">
                    Descrizione dettagliata delle modifiche proposte per ogni sezione del sito
                    e delle nuove funzionalità da implementare.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-solero-light text-white mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Opzioni e Preventivo</h3>
                  <p className="text-gray-600">
                    Confronto tra le diverse opzioni disponibili, con dettagli sui costi
                    e sui tempi di realizzazione del progetto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Sitemap />
        
        <ProjectOverview />
        
        <PriceComparison />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
