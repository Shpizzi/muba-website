export type Page = { label: string; to: string }
export type Section = Page & { children: Page[] }

// Struttura dal menu di Figma. Aggiungi pagine qui: route, menu e placeholder si aggiornano da soli.
export const menu: Section[] = [
  { label: 'Il MUBA', to: '/il-muba', children: [
    { label: 'Storia', to: '/il-muba/storia' },
    { label: 'Memoria', to: '/il-muba/memoria' },
    { label: 'Archivio e ricerca', to: '/il-muba/archivio-e-ricerca' },
  ] },
  { label: 'La visita', to: '/la-visita', children: [
    { label: 'Biglietti', to: '/la-visita/biglietti' },
    { label: 'Museo digitale', to: '/la-visita/museo-digitale' },
    { label: 'Da dove iniziare', to: '/la-visita/da-dove-iniziare' },
  ] },
  { label: 'Il programma', to: '/il-programma', children: [
    { label: 'Mostra permanente', to: '/il-programma/mostra-permanente' },
    { label: 'Mostre temporanee', to: '/il-programma/mostre-temporanee' },
    { label: 'Attività', to: '/il-programma/attivita' },
  ] },
  { label: 'Gli eventi', to: '/gli-eventi', children: [
    { label: 'Eventi in corso', to: '/gli-eventi/in-corso' },
  ] },
  { label: 'I custodi', to: '/i-custodi', children: [
    { label: 'Partner', to: '/i-custodi/partner' },
    { label: 'Membership', to: '/i-custodi/membership' },
    { label: 'Staff', to: '/i-custodi/staff' },
  ] },
]

// Link secondari nel menu (riga in basso a destra)
export const secondari: Page[] = [
  { label: 'Contatti', to: '/contatti' },
  { label: 'Policies', to: '/policies' },
  { label: 'Supporto', to: '/supporto' },
  { label: 'Newsletter', to: '/newsletter' },
]

// Pagine che esistono nel design ma non sono nel menu
export const altre: Page[] = [
  { label: 'Come arrivare', to: '/la-visita/come-arrivare' },
  { label: 'Accessibilità', to: '/la-visita/accessibilita' },
  { label: 'Prenota i biglietti', to: '/la-visita/biglietti/prenota' },
  { label: 'Quiz', to: '/quiz' },
]

export const tutte: Page[] = [...menu.flatMap(s => [s, ...s.children]), ...secondari, ...altre]
