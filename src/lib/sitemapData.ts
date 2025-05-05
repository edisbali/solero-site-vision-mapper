
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
    { id: 'Home', label: 'Home', status: 'existing', x: 200, y: 100 },
    { id: 'Struttura', label: 'Struttura', status: 'existing', x: 100, y: 200 },
    { id: 'Servizi', label: 'Servizi', status: 'existing', x: 200, y: 200 },
    { id: 'Contatti', label: 'Contatti', status: 'existing', x: 300, y: 200 },
    { id: 'News', label: 'News', status: 'existing', x: 400, y: 200 },
    
    { id: 'Palestra', label: 'Palestra', status: 'existing', x: 100, y: 300 },
    { id: 'Piscine', label: 'Piscine', status: 'existing', x: 200, y: 300 },
    { id: 'Fitness', label: 'Fitness', status: 'existing', x: 300, y: 300 },
    
    { id: 'CorsiNuoto', label: 'Nuoto', status: 'existing', x: 100, y: 400 },
    { id: 'CorsiFitness', label: 'Fitness', status: 'existing', x: 200, y: 400 },
    { id: 'CorsiCrossfit', label: 'Crossfit', status: 'existing', x: 300, y: 400 },
    { id: 'CorsiPadel', label: 'Padel', status: 'existing', x: 400, y: 400 },
    { id: 'PersonalTraining', label: 'Personal Training', status: 'existing', x: 500, y: 400 },
    { id: 'Trattamenti', label: 'Trattamenti', status: 'existing', x: 600, y: 400 },
    { id: 'Mangio', label: 'Mangio', status: 'new', x: 100, y: 500 },
    { id: 'Koala', label: 'Koala', status: 'existing', x: 200, y: 500 },
    { id: 'Giardino', label: 'Giardino', status: 'existing', x: 300, y: 500 },
    { id: 'NoiClub', label: 'Noi Club', status: 'existing', x: 400, y: 500 },
    
    { id: 'Crossfit', label: 'Crossfit', status: 'existing', x: 100, y: 600 },
    { id: 'Padel', label: 'Padel', status: 'existing', x: 200, y: 600 },
    { id: 'CorsiCalisthenics', label: 'Calisthenics', status: 'existing', x: 300, y: 600 },
    { id: 'CorsiKombat', label: 'Kombat', status: 'existing', x: 400, y: 600 },
    { id: 'CorsiKids', label: 'Kids', status: 'existing', x: 500, y: 600 },
    
    { id: 'CorsiDanzaAerea', label: 'Danza Aerea', status: 'existing', x: 100, y: 700 },
    { id: 'CorsiFunzionale', label: 'Funzionale', status: 'existing', x: 200, y: 700 },
    { id: 'CorsiOlisticWorkout', label: 'Olistic Workout', status: 'existing', x: 300, y: 700 },
    { id: 'CorsiPilates', label: 'Pilates', status: 'existing', x: 400, y: 700 },
    
    { id: 'CorsiGinnasticaPosturale', label: 'Ginnastica Posturale', status: 'existing', x: 100, y: 800 },
    { id: 'CorsiTonificazione', label: 'Tonificazione', status: 'existing', x: 200, y: 800 },
    { id: 'CorsiWalking', label: 'Walking', status: 'existing', x: 300, y: 800 },
    { id: 'CorsiYoga', label: 'Yoga', status: 'existing', x: 400, y: 800 },
    
    { id: 'CorsiZumba', label: 'Zumba', status: 'existing', x: 100, y: 900 },
    { id: 'CorsiGinnasticaDolce', label: 'Ginnastica Dolce', status: 'existing', x: 200, y: 900 },
    { id: 'CorsiCheerFitness', label: 'Cheer Fitness', status: 'existing', x: 300, y: 900 },
    { id: 'CorsiPoleDance', label: 'Pole Dance', status: 'existing', x: 400, y: 900 },
    
    { id: 'CorsiBoxe', label: 'Boxe', status: 'existing', x: 100, y: 1000 },
    { id: 'CorsiMuayThai', label: 'Muay Thai', status: 'existing', x: 200, y: 1000 },
    { id: 'CorsiJudoKids', label: 'Judo Kids', status: 'existing', x: 300, y: 1000 },
  ],
  edges: [
    { source: 'Home', target: 'Struttura' },
    { source: 'Home', target: 'Servizi' },
    { source: 'Home', target: 'Contatti' },
    { source: 'Home', target: 'News' },
    
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
    
    { source: 'Fitness', target: 'Crossfit' },
    { source: 'Fitness', target: 'Padel' },
    
    { source: 'CorsiFitness', target: 'CorsiCalisthenics' },
    { source: 'CorsiFitness', target: 'CorsiKombat' },
    { source: 'CorsiFitness', target: 'CorsiKids' },
    { source: 'CorsiFitness', target: 'CorsiDanzaAerea' },
    { source: 'CorsiFitness', target: 'CorsiFunzionale' },
    { source: 'CorsiFitness', target: 'CorsiOlisticWorkout' },
    { source: 'CorsiFitness', target: 'CorsiPilates' },
    { source: 'CorsiFitness', target: 'CorsiGinnasticaPosturale' },
    { source: 'CorsiFitness', target: 'CorsiTonificazione' },
    { source: 'CorsiFitness', target: 'CorsiWalking' },
    { source: 'CorsiFitness', target: 'CorsiYoga' },
    { source: 'CorsiFitness', target: 'CorsiZumba' },
    { source: 'CorsiFitness', target: 'CorsiGinnasticaDolce' },
    { source: 'CorsiFitness', target: 'CorsiCheerFitness' },
    { source: 'CorsiFitness', target: 'CorsiPoleDance' },
    
    { source: 'CorsiKombat', target: 'CorsiBoxe' },
    { source: 'CorsiKombat', target: 'CorsiMuayThai' },
    { source: 'CorsiKombat', target: 'CorsiJudoKids' },
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
