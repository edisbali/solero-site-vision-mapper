
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const ProjectOverview = () => {
  const objectives = [
    "Modernizzazione dell'identità visiva del sito",
    "Miglioramento dell'usabilità su dispositivi mobili",
    "Semplificazione della navigazione e della struttura",
    "Ottimizzazione delle prestazioni e dei tempi di caricamento",
    "Maggiore visibilità per i servizi offerti",
    "Integrazione di funzionalità interattive per prenotazioni",
    "Aggiornamento del sistema di gestione dei contenuti"
  ];

  const phases = [
    {
      title: "Analisi",
      items: [
        "Studio dell'attuale sito web",
        "Identificazione di punti di forza e debolezza",
        "Analisi dei requisiti e delle esigenze"
      ]
    },
    {
      title: "Progettazione",
      items: [
        "Definizione della nuova struttura e sitemap",
        "Creazione di wireframe e mockup",
        "Design dell'interfaccia utente"
      ]
    },
    {
      title: "Sviluppo",
      items: [
        "Implementazione frontend con Webflow",
        "Ottimizzazione responsive",
        "Configurazione del CMS (opzionale)"
      ]
    },
    {
      title: "Lancio",
      items: [
        "Migrazione dei contenuti",
        "Test e controllo qualità",
        "Pubblicazione del nuovo sito"
      ]
    }
  ];

  return (
    <section id="overview" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">Panoramica del Progetto</h2>
      <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        Il restyling del sito di Solerò Sport Village mira a creare una presenza online moderna, 
        funzionale e coinvolgente che rispecchi l'eccellenza dei servizi offerti dalla struttura.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl text-solero">Obiettivi Principali</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-solero flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl text-solero">Vantaggi del Restyling</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <p>
              Il nuovo sito web offrirà un'esperienza utente significativamente migliorata, con 
              un design moderno e funzionalità avanzate che permetteranno di:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Aumentare la visibilità online della struttura</li>
              <li>Migliorare il tasso di conversione dei visitatori</li>
              <li>Facilitare la prenotazione di corsi e servizi</li>
              <li>Presentare in modo efficace tutte le attività disponibili</li>
              <li>Semplificare l'aggiornamento dei contenuti</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-center">Fasi del Progetto</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <Card key={index} className="border-t-4" style={{ borderTopColor: "#ff0092" }}>
            <CardHeader>
              <CardTitle className="text-lg">
                <span className="text-solero font-bold mr-2">{index + 1}.</span> 
                {phase.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-solero-light flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs text-white font-bold">{idx + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
