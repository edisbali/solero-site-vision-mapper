
export type NodeStatus = 'existing' | 'new' | 'removing';

export interface SitemapNode {
  id: string;
  label: string;
  color?: string;
  status: NodeStatus;
  description?: string;
  x?: number;
  y?: number;
}

export interface SitemapEdge {
  source: string;
  target: string;
}

export interface SitemapData {
  nodes: SitemapNode[];
  edges: SitemapEdge[];
}

export const DEFAULT_NODE_COLORS = {
  existing: '#31708f',
  new: '#3c763d',
  removing: '#a94442'
};

export const getStatusColor = (status: NodeStatus, customColor?: string): string => {
  if (customColor) return customColor;
  return DEFAULT_NODE_COLORS[status];
};

// Initial sitemap data for Solerò Sport Village
export const initialSitemapData: SitemapData = {
  nodes: [
    { id: 'Home', label: 'Home', status: 'existing' },
    { id: 'Struttura', label: 'Struttura', status: 'existing' },
    { id: 'Servizi', label: 'Servizi', status: 'existing' },
    { id: 'Contatti', label: 'Contatti', status: 'existing' },
    { id: 'Palestra', label: 'Palestra', status: 'existing' },
    { id: 'Piscine', label: 'Piscine', status: 'existing' },
    { id: 'Fitness', label: 'Fitness', status: 'existing' },
    { id: 'News', label: 'News', status: 'existing' },
    { id: 'CorsiNuoto', label: 'Nuoto', status: 'existing' },
    { id: 'CorsiFitness', label: 'Fitness', status: 'existing' },
    { id: 'CorsiCrossfit', label: 'Crossfit', status: 'existing' },
    { id: 'CorsiPadel', label: 'Padel', status: 'existing' },
    { id: 'PersonalTraining', label: 'Personal Training', status: 'existing' },
    { id: 'Trattamenti', label: 'Trattamenti', status: 'existing' },
    { id: 'Mangio', label: 'Mangio', status: 'new' },
    { id: 'Koala', label: 'Koala', status: 'existing' },
    { id: 'Giardino', label: 'Giardino', status: 'existing' },
    { id: 'NoiClub', label: 'Noi Club', status: 'existing' }
  ],
  edges: [
    { source: 'Home', target: 'Struttura' },
    { source: 'Home', target: 'Servizi' },
    { source: 'Home', target: 'Contatti' },
    { source: 'Servizi', target: 'Palestra' },
    { source: 'Servizi', target: 'Piscine' },
    { source: 'Servizi', target: 'Fitness' },
    { source: 'Servizi', target: 'CorsiNuoto' },
    { source: 'Servizi', target: 'CorsiFitness' },
    { source: 'Servizi', target: 'CorsiCrossfit' },
    { source: 'Servizi', target: 'CorsiPadel' },
    { source: 'Servizi', target: 'PersonalTraining' },
    { source: 'Servizi', target: 'Trattamenti' },
    { source: 'Servizi', target: 'Mangio' },
    { source: 'Servizi', target: 'Koala' },
    { source: 'Servizi', target: 'Giardino' },
    { source: 'Servizi', target: 'NoiClub' },
    { source: 'Home', target: 'News' }
  ]
};

// Pricing data for the project
export interface PricingItem {
  title: string;
  description: string;
  price: string;
}

export interface PricingPlan {
  name: string;
  initialItems: PricingItem[];
  initialTotal: string;
  ongoingItems: PricingItem[];
  ongoingTotal: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "PIANO 360 CMS",
    initialItems: [
      {
        title: "1.1 Progettazione e pianificazione",
        description: "Definizione della struttura del sito (sitemap) con sezioni principali: Homepage, Struttura, Servizi, Palestra, Piscina, Fitness, Corsi, News, Contatti. Analisi delle esigenze del cliente e mappatura dei contenuti preesistenti con riorganizzazione logica e visiva.",
        price: "550 €"
      },
      {
        title: "1.2 Sviluppo tecnico",
        description: "Implementazione delle pagine principali con particolare attenzione alla chiarezza e usabilità: Realizzazione delle pagine principali tramite Webflow. Collegamento ai link esterni (es. PDF orari corsi). Ottimizzazione responsive per dispositivi mobili e compatibilità browser. Sviluppo ottimizzato tramite cms della sitemap",
        price: "750 €"
      },
      {
        title: "1.3 INSERIMENTO CONTENUTI",
        description: "Trasferimento delle informazioni presenti sul sito attuale: Inserimento testi, immagini e materiali forniti da Solerò, senza produzione o editing extra. Impaginazione allineata alla nuova struttura visiva.",
        price: "200 €"
      },
      {
        title: "1.4 SEO OPTIMIZATION",
        description: "Ottimizzazione SEO base per le pagine chiave: Creazione meta tag, URL semantici e descrizioni. Impostazioni minime per indicizzazione e visibilità.",
        price: "250 €"
      },
      {
        title: "1.5 CONFIGURAZIONE PRIVACY POLICY",
        description: "Adeguamento del modulo di contatto e del sito alle normative GDPR, con configurazione della privacy policy rispetto a quelle già esistenti.",
        price: "INCLUSO"
      }
    ],
    initialTotal: "1750€ + IVA (22%)",
    ongoingItems: [
      {
        title: "1.5 Gestione privacy policy | Costo Esterno",
        description: "Revisione periodica e aggiornamento della privacy policy e dei termini di utilizzo in conformità con le normative vigenti. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per mantenere aggiornate le privacy policy.",
        price: "10-20 € / mese"
      },
      {
        title: "1.6 Gestione contenuti e modifiche leggere",
        description: "Inserimento di nuovi contenuti (testi, immagini, aggiornamenti di tariffe o attività) con possibilità di effettuare fino a 2-3 aggiornamenti mensili in caso di sottoscrizione di un piano. Modifiche leggere alle sezioni esistenti per garantire un sito sempre aggiornato e in linea con le esigenze della scuola.",
        price: "Su richiesta"
      },
      {
        title: "1.7 Hosting | Costo Esterno",
        description: "Questa scelta rappresenta l'opzione migliore, poiché la piattaforma è riconosciuta come il leader del mercato, garantendo prestazioni affidabili, una solida infrastruttura, sicurezza e velocità per il sito. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per garantire le prestazioni ottimali del sito.",
        price: "27 € / mese"
      },
      {
        title: "1.8 Dominio | costo esterno",
        description: "IMPORTANTE: se già in possesso di un dominio non sarà necessario comprarne uno.",
        price: "0 € / mese"
      }
    ],
    ongoingTotal: "37-47 € / mese"
  },
  {
    name: "PIANO 360 NO CMS",
    initialItems: [
      {
        title: "1.1 Progettazione e pianificazione",
        description: "Definizione della struttura del sito (sitemap) con sezioni principali: Homepage, Struttura, Servizi, Palestra, Piscina, Fitness, Corsi, News, Contatti. Analisi delle esigenze del cliente e mappatura dei contenuti preesistenti con riorganizzazione logica e visiva.",
        price: "550 €"
      },
      {
        title: "1.2 Sviluppo tecnico",
        description: "Implementazione delle pagine principali con particolare attenzione alla chiarezza e usabilità: Realizzazione delle pagine principali tramite Webflow. Collegamento ai link esterni (es. PDF orari corsi). Ottimizzazione responsive per dispositivi mobili e compatibilità browser. Sviluppo singolarmente di tutte le pagine contenute nella sitemap",
        price: "1400 €"
      },
      {
        title: "1.3 INSERIMENTO CONTENUTI",
        description: "Trasferimento delle informazioni presenti sul sito attuale: Inserimento testi, immagini e materiali forniti da Solerò, senza produzione o editing extra. Impaginazione allineata alla nuova struttura visiva.",
        price: "250 €"
      },
      {
        title: "1.4 SEO OPTIMIZATION",
        description: "Ottimizzazione SEO base per le pagine chiave: Creazione meta tag, URL semantici e descrizioni. Impostazioni minime per indicizzazione e visibilità.",
        price: "250 €"
      },
      {
        title: "1.5 CONFIGURAZIONE PRIVACY POLICY",
        description: "Adeguamento del modulo di contatto e del sito alle normative GDPR, con configurazione della privacy policy rispetto a quelle già esistenti.",
        price: "INCLUSO"
      }
    ],
    initialTotal: "2450€ + IVA (22%)",
    ongoingItems: [
      {
        title: "1.5 Gestione privacy policy | Costo Esterno",
        description: "Revisione periodica e aggiornamento della privacy policy e dei termini di utilizzo in conformità con le normative vigenti. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per mantenere aggiornate le privacy policy.",
        price: "10-20 € / mese"
      },
      {
        title: "1.6 Gestione contenuti e modifiche leggere",
        description: "Inserimento di nuovi contenuti (testi, immagini, aggiornamenti di tariffe o attività) con possibilità di effettuare fino a 2-3 aggiornamenti mensili in caso di sottoscrizione di un piano. Modifiche leggere alle sezioni esistenti per garantire un sito sempre aggiornato e in linea con le esigenze della scuola.",
        price: "Su richiesta"
      },
      {
        title: "1.7 Hosting | Costo Esterno",
        description: "Questa scelta rappresenta l'opzione migliore, poiché la piattaforma è riconosciuta come il leader del mercato, garantendo prestazioni affidabili, una solida infrastruttura, sicurezza e velocità per il sito. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per garantire le prestazioni ottimali del sito.",
        price: "14 € / mese"
      },
      {
        title: "1.8 Dominio | costo esterno",
        description: "IMPORTANTE: se già in possesso di un dominio non sarà necessario comprarne uno.",
        price: "0 € / mese"
      }
    ],
    ongoingTotal: "24-34 € / mese"
  }
];
