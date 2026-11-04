/**
 * ============================================================
 *  ŠTA IMAMO — jedini izvor istine o sastojcima.
 *
 *  Meni se gradi ISKLJUČIVO od ovog fajla: koktel ulazi u meni
 *  samo ako SVI njegovi sastojci postoje ovde (vidi `lib/menu.js`).
 *
 *  - Obriši sastojak  -> svi kokteli koji ga traže nestaju iz menija.
 *  - Dodaj sastojak   -> kokteli koji ga koriste se sami pojave.
 *
 *  Polja:
 *    name  - kako se piše na kartici i u spisku bara
 *    group - polica u spisku bara (redosled grupa je redosled ovde)
 *    abv   - % alkohola (0 za sokove i mešere)
 *    color - boja sloja u čaši
 * ============================================================
 */

export const stock = {
  // ----------------------------------------------------------
  //  PIVO
  // ----------------------------------------------------------
  jelen: { name: "Jelen", group: "Pivo", abv: 5, color: "#F5C518" },
  staropramen: {
    name: "Staropramen",
    group: "Pivo",
    abv: 5,
    color: "#EDAD00",
  },

  // ----------------------------------------------------------
  //  ŽESTINA
  // ----------------------------------------------------------
  vodka: { name: "Vodka", group: "Žestina", abv: 40, color: "#CBDCF5" },
  tekila: { name: "Tekila", group: "Žestina", abv: 40, color: "#E3EFAE" },
  dzin: { name: "Džin", group: "Žestina", abv: 44, color: "#3FD6BE" },
  beliRum: { name: "Beli rum", group: "Žestina", abv: 40, color: "#F2A93B" },
  jeger: { name: "Jeger", group: "Žestina", abv: 35, color: "#8C5A18" },
  pelinkovac: {
    name: "Pelinkovac",
    group: "Žestina",
    abv: 32,
    color: "#6B3F1D",
  },
  rakija: {
    name: "Domaća rakija",
    group: "Žestina",
    abv: 40,
    color: "#E9AE4A",
  },
  medovaca: {
    name: "Medovača",
    group: "Žestina",
    abv: 32,
    color: "#E5B86E",
  },

  // ----------------------------------------------------------
  //  LIKERI
  // ----------------------------------------------------------
  tripleSec: { name: "Triple sec", group: "Likeri", abv: 30, color: "#FF9E1B" },
  curacao: { name: "Blue Curaçao", group: "Likeri", abv: 20, color: "#0A93DB" },
  kaktusLiker: {
    name: "Kaktus liker",
    group: "Likeri",
    abv: 28,
    color: "#F1A93A",
  },

  // ----------------------------------------------------------
  //  MEŠERI
  // ----------------------------------------------------------
  cola: { name: "Coca-Cola", group: "Sokovi i voda", abv: 0, color: "#3A1B0C" },
  tonik: { name: "Tonik", group: "Sokovi i voda", abv: 0, color: "#9BD8F2" },
  soda: { name: "Gazirana voda", group: "Sokovi i voda", abv: 0, color: "#6EC6EA" },
  sokJabuka: {
    name: "Gusti sok od jabuke",
    group: "Sokovi i voda",
    abv: 0,
    color: "#D96A00",
  },

  // ----------------------------------------------------------
  //  VINO
  // ----------------------------------------------------------
  tamjanika: {
    name: "Belo vino (Tamjanika)",
    group: "Vino",
    abv: 12,
    color: "#F7DE8B",
  },
  prosecco: { name: "Prosecco", group: "Vino", abv: 11, color: "#F7E08B" },

  // ----------------------------------------------------------
  //  SIRUPI
  // ----------------------------------------------------------
  secer: { name: "Šećerni sirup", group: "Sirupi", abv: 0, color: "#F7CE1E" },
  grenadina: { name: "Grenadina", group: "Sirupi", abv: 0, color: "#D81B4A" },
  zova: { name: "Sirup od zove", group: "Sirupi", abv: 0, color: "#E6DC6E" },

  // ----------------------------------------------------------
  //  SVEŽE
  // ----------------------------------------------------------
  limeta: { name: "Sok od limete", group: "Sveže", abv: 0, color: "#9AD42A" },
  limun: { name: "Sok od limuna", group: "Sveže", abv: 0, color: "#F2D31B" },
  nana: { name: "Sveža nana", group: "Sveže", abv: 0, color: "#1FA85A" },

  // ----------------------------------------------------------
  //  KAFA
  // ----------------------------------------------------------
  espreso: { name: "Espreso", group: "Kafa", abv: 0, color: "#2B1408" },
  turskaKafa: {
    name: "Turska kafa",
    group: "Kafa",
    abv: 0,
    color: "#1C0F07",
  },
  caj: {
    name: "Čaj",
    group: "Kafa",
    abv: 0,
    color: "#D8A65C",
  },};
