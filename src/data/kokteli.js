/**
 * ============================================================
 *  KOKTELI — samo recepti, ništa više.
 *
 *  Ovaj fajl ne zna šta imamo. Koktel ulazi u meni samo ako svi
 *  njegovi `ref`-ovi postoje u `src/data/sastojci.js`.
 *  Ako nešto nemaš, samo obriši taj sastojak tamo — koktel se
 *  sam sklanja iz menija, ovde ništa ne mora da se menja.
 *
 *  REDOSLED = REDOSLED U MENIJU (globalna popularnost, prvi je
 *  najpopularniji; domaće kombinacije idu na dno).
 *
 *  Recept:
 *    ref    - ključ iz `sastojci.js`
 *    amount - količina
 *    unit   - "ml" ako se ne navede; npr. "listova"
 *
 *  Sastojci su poređani odozgo nadole, a dijagram ih slaže odozdo
 *  nagore: prvo žestina, pa liker, pa sokovi i mešeri.
 * ============================================================
 */

export const party = {
  kicker: "Otvoreni bar · dok ne ponestane leda",
  titleTop: "Koktel",
  titleBottom: "Meni",
  tagline: "Sve što imamo piše odmah ispod. Ti biraj, ja sipam.",
  marquee: [
    "Sipaj dok ne osetiš grižu savesti",
    "Daj mi nešto jače od moje želje za životom",
    "Jedan produženi viski, bez kafe",
    "Recept je predlog, ne ugovor",
    "Led nije ukras, led je sastojak",
    "Prvi za ukus, drugi za hrabrost, treći za sve ostalo",
    "Nema loših koktela, ima prekratkih noći",
    "Pij vodu, posle ćeš mi zahvaliti",
  ],
  footerNote: "Napravljeno za jednu žurku. Pij vodu. Stigni kući bezbedno.",
};

export const cocktails = [
  {
    id: "margarita",
    name: "Margarita",
    category: "Tekila",
    tagline: "Najpoznatiji tekila koktel na svetu. Kiselkast i direktan.",
    accent: "#FFD93D",
    methodLabel: "Recept",
    method:
      "Protresi tekila, triple sec, limetu i sirup sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "tekila", amount: 50 },
      { ref: "tripleSec", amount: 20 },
      { ref: "limeta", amount: 25 },
      { ref: "secer", amount: 10 },
    ],
  },
  {
    id: "mohito",
    name: "Mohito",
    category: "Rum",
    tagline: "Rum, nana i led. Letnji klasik koji se pije prebrzo.",
    accent: "#5FE07A",
    methodLabel: "Recept",
    method:
      "Izdrobi nanu sa sirupom, dodaj rum i limetu, napuni drobljenim ledom, dolij sodu i promešaj jednom.",
    ingredients: [
      { ref: "beliRum", amount: 50 },
      { ref: "limeta", amount: 25 },
      { ref: "secer", amount: 15 },
      { ref: "soda", amount: 60 },
      { ref: "nana", amount: 8, unit: "listova" },
    ],
  },
  {
    id: "cuba-libre",
    name: "Cuba Libre",
    category: "Rum",
    tagline: "Rum, kola i limeta. Tri sastojka, ceo letnji dan.",
    accent: "#FFB020",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj rum i limetu, dolij kolu i promešaj.",
    ingredients: [
      { ref: "beliRum", amount: 50 },
      { ref: "limeta", amount: 10 },
      { ref: "cola", amount: 120 },
    ],
  },
  {
    id: "dzin-tonik",
    name: "Džin tonik",
    category: "Džin",
    tagline: "Dva sastojka, led radi sav posao.",
    accent: "#5FC7FF",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom do vrha, sipaj džin, dolij tonik i promešaj jednom.",
    ingredients: [
      { ref: "dzin", amount: 50 },
      { ref: "tonik", amount: 120 },
    ],
  },
  {
    id: "daikiri",
    name: "Daiquiri",
    category: "Rum",
    tagline: "Rum, limeta i sirup. Ništa više ne treba.",
    accent: "#B4E33D",
    methodLabel: "Recept",
    method:
      "Protresi rum, limetu i sirup sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "beliRum", amount: 60 },
      { ref: "limeta", amount: 25 },
      { ref: "secer", amount: 15 },
    ],
  },
  {
    id: "espreso-martini",
    name: "Espreso martini",
    category: "Vodka",
    tagline: "Kafa koja budi i uspavljuje u isto vreme.",
    accent: "#D2A06A",
    methodLabel: "Recept",
    method:
      "Protresi votku, espreso i sirup žestoko sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "vodka", amount: 40 },
      { ref: "espreso", amount: 30 },
      { ref: "secer", amount: 15 },
    ],
  },
  {
    id: "long-island",
    name: "Long Island Iced Tea",
    category: "Koktel",
    tagline: "Sve žestine u jednoj čaši. Pij polako.",
    accent: "#D9A24E",
    methodLabel: "Recept",
    method:
      "Protresi sve osim kole sa ledom u šejkeru, procedi u čašu sa ledom, dolij kolu i promešaj.",
    ingredients: [
      { ref: "vodka", amount: 15 },
      { ref: "dzin", amount: 15 },
      { ref: "beliRum", amount: 15 },
      { ref: "tekila", amount: 15 },
      { ref: "tripleSec", amount: 15 },
      { ref: "limun", amount: 25 },
      { ref: "secer", amount: 10 },
      { ref: "cola", amount: 60 },
    ],
  },
  {
    id: "tom-collins",
    name: "Tom Collins",
    category: "Džin",
    tagline: "Džin, limun i mehurići. Lagan i opasno pitak.",
    accent: "#FFE03D",
    methodLabel: "Recept",
    method:
      "Protresi džin, limun i sirup sa ledom, procedi u čašu sa ledom i dolij sodu.",
    ingredients: [
      { ref: "dzin", amount: 50 },
      { ref: "limun", amount: 25 },
      { ref: "secer", amount: 15 },
      { ref: "soda", amount: 60 },
    ],
  },
  {
    id: "white-lady",
    name: "White Lady",
    category: "Džin",
    tagline: "Džin, triple sec i limun. Čist i precizan.",
    accent: "#FFE9A3",
    methodLabel: "Recept",
    method:
      "Protresi džin, triple sec i limun sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "dzin", amount: 40 },
      { ref: "tripleSec", amount: 20 },
      { ref: "limun", amount: 20 },
    ],
  },
  {
    id: "batanga",
    name: "Batanga",
    category: "Tekila",
    tagline: "Tekila, kola i limeta. Meksička klasika bez komplikacije.",
    accent: "#FF8A1A",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj tekila i limetu, dolij kolu i promešaj.",
    ingredients: [
      { ref: "tekila", amount: 50 },
      { ref: "limeta", amount: 15 },
      { ref: "cola", amount: 120 },
    ],
  },
  {
    id: "ranch-water",
    name: "Ranch Water",
    category: "Tekila",
    tagline: "Tekila, limeta i soda. Najlakši koktel na svetu.",
    accent: "#B8E86A",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj tekila i limetu, dolij sodu i promešaj.",
    ingredients: [
      { ref: "tekila", amount: 50 },
      { ref: "limeta", amount: 20 },
      { ref: "soda", amount: 120 },
    ],
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    category: "Vodka",
    tagline: "Plav kao bazen, pije se kao sok. Pazi se.",
    accent: "#29C2F5",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj votku, curaçao i limun, dolij sodu i promešaj.",
    ingredients: [
      { ref: "vodka", amount: 40 },
      { ref: "curacao", amount: 20 },
      { ref: "limun", amount: 20 },
      { ref: "soda", amount: 80 },
    ],
  },
  {
    id: "purple-rain",
    name: "Purple Rain",
    category: "Vodka",
    tagline: "Plavo i crveno se pomešaju u ljubičasto. Žurka u čaši.",
    accent: "#B07CF0",
    methodLabel: "Recept",
    method:
      "Protresi votku, curaçao, limun i grenadinu sa ledom, procedi u čašu sa ledom i dolij sodu.",
    ingredients: [
      { ref: "vodka", amount: 40 },
      { ref: "curacao", amount: 20 },
      { ref: "grenadina", amount: 10 },
      { ref: "limun", amount: 20 },
      { ref: "soda", amount: 60 },
    ],
  },
  {
    id: "blue-margarita",
    name: "Blue Margarita",
    category: "Tekila",
    tagline: "Margarita u plavom izdanju, sa curaçaom umesto triple sec-a.",
    accent: "#5BC8F5",
    methodLabel: "Recept",
    method:
      "Protresi tekila, curaçao, limetu i sirup sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "tekila", amount: 50 },
      { ref: "curacao", amount: 20 },
      { ref: "limeta", amount: 25 },
      { ref: "secer", amount: 10 },
    ],
  },
  {
    id: "zova-collins",
    name: "Zova Collins",
    category: "Džin",
    tagline: "Džin, zova i limun. Miris leta u čaši.",
    accent: "#E8DE6A",
    methodLabel: "Recept",
    method:
      "Protresi džin, sirup od zove i limun sa ledom, procedi u čašu sa ledom i dolij sodu.",
    ingredients: [
      { ref: "dzin", amount: 40 },
      { ref: "zova", amount: 20 },
      { ref: "limun", amount: 20 },
      { ref: "soda", amount: 80 },
    ],
  },
  {
    id: "vodka-collins",
    name: "Vodka Collins",
    category: "Vodka",
    tagline: "Vodka u laganom, citrusnom izdanju.",
    accent: "#D3E1F7",
    methodLabel: "Recept",
    method:
      "Protresi votku, limun i sirup sa ledom, procedi u čašu sa ledom i dolij sodu.",
    ingredients: [
      { ref: "vodka", amount: 50 },
      { ref: "limun", amount: 25 },
      { ref: "secer", amount: 15 },
      { ref: "soda", amount: 60 },
    ],
  },
  {
    id: "vodka-jabuka",
    name: "Vodka jabuka",
    category: "Vodka",
    tagline: "Gusti sok od jabuke i malo tonika. Sok za odrasle.",
    accent: "#F09400",
    methodLabel: "Recept",
    method:
      "Sipaj votku i gusti sok od jabuke, dolij tonik i promešaj.",
    ingredients: [
      { ref: "vodka", amount: 50 },
      { ref: "sokJabuka", amount: 100 },
      { ref: "tonik", amount: 50 },
    ],
  },
  {
    id: "rakija-sidecar",
    name: "Rakija Sidecar",
    category: "Rakija",
    tagline: "Domaća rakija u klasičnom francuskom kroju.",
    accent: "#EFB05A",
    methodLabel: "Recept",
    method:
      "Protresi rakiju, triple sec i limun sa ledom u šejkeru, pa procedi u čašu.",
    ingredients: [
      { ref: "rakija", amount: 50 },
      { ref: "tripleSec", amount: 20 },
      { ref: "limun", amount: 20 },
    ],
  },
  {
    id: "rakija-tonik",
    name: "Rakija tonik",
    category: "Rakija",
    tagline: "Domaća rakija u gorkom, laganom izdanju.",
    accent: "#FF8E7A",
    methodLabel: "Recept",
    method: "Napuni čašu ledom, sipaj rakiju, dolij tonik i promešaj.",
    ingredients: [
      { ref: "rakija", amount: 40 },
      { ref: "tonik", amount: 120 },
    ],
  },
  {
    id: "pelinkovac-tonik",
    name: "Pelinkovac tonik",
    category: "Pelinkovac",
    tagline: "Gorak, travnat i baš osvežavajuć. Pelinkovac u laganom izdanju.",
    accent: "#B79BF5",
    methodLabel: "Recept",
    method: "Napuni čašu ledom, sipaj pelinkovac, dolij tonik i promešaj.",
    ingredients: [
      { ref: "pelinkovac", amount: 50 },
      { ref: "tonik", amount: 120 },
    ],
  },
  {
    id: "pivo-jabuka",
    name: "Pivo i jabuka",
    category: "Pivo",
    tagline: "Radler, ali sa pravom jabukom. Nisko alkoholno, visoko pitko.",
    accent: "#FFC400",
    methodLabel: "Recept",
    method:
      "Ohladi oba sastojka, sipaj pivo pa jabuku i lagano promešaj da ne izađe pena.",
    ingredients: [
      { ref: "staropramen", amount: 200 },
      { ref: "sokJabuka", amount: 100 },
    ],
  },
  {
    id: "aperol-spric",
    name: "Spric (Prosecco)",
    category: "Vino",
    tagline: "Prosecco i mehurići, sve ostalo je opcione. Tamjanika špric radi isto.",
    accent: "#FF8A1A",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj proseko (ili vino), pa dolij gaziranu vodu i lagano promešaj.",
    ingredients: [
      { ref: "prosecco", amount: 90 },
      { ref: "soda", amount: 60 },
    ],
  },
  {
    id: "jeger-med",
    name: "Jeger med",
    category: "Jeger",
    tagline: "Jeger i medovača. Domaće uz Jeger.",
    accent: "#F0C369",
    methodLabel: "Recept",
    method:
      "Protresi Jeger i medovaču sa ledom u šejkeru, pa procedi u čašu sa ledom.",
    ingredients: [
      { ref: "jeger", amount: 40 },
      { ref: "medovaca", amount: 20 },
    ],
  },
  {
    id: "jager-bomba",
    name: "Jager bomba",
    category: "Jeger",
    tagline: "Jeger u najčistijem obliku. Sve ostalo je zaglavlje.",
    accent: "#8C5A18",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom do vrha, sipaj Jeger, dolij kolu i promešaj.",
    ingredients: [
      { ref: "jeger", amount: 40 },
      { ref: "cola", amount: 120 },
    ],
  },
  {
    id: "kaktus-collins",
    name: "Kaktus Collins",
    category: "Likeri",
    tagline: "Kaktus liker, limun i mehurići. Sitan i lucidan.",
    accent: "#F6C04A",
    methodLabel: "Recept",
    method:
      "Protresi kaktus liker i limun sa sirupom, procedi u čašu sa ledom i dolij gaziranu.",
    ingredients: [
      { ref: "kaktusLiker", amount: 40 },
      { ref: "limun", amount: 20 },
      { ref: "soda", amount: 90 },
    ],
  },
  {
    id: "kaktus-pivo",
    name: "Kaktus pivo",
    category: "Likeri",
    tagline: "Kaktus liker i pivo. Jaka kombinacija.",
    accent: "#F5C518",
    methodLabel: "Recept",
    method:
      "Ohladi oba sastojka, sipaj pivo pa kaktus liker i lagano promešaj.",
    ingredients: [
      { ref: "kaktusLiker", amount: 40 },
      { ref: "staropramen", amount: 200 },
    ],
  },
  {
    id: "tamjanika-tonik",
    name: "Tamjanika tonik",
    category: "Vino",
    tagline: "Belo vino i tonik. Gorko i mirisno.",
    accent: "#FFE9A3",
    methodLabel: "Recept",
    method:
      "Napuni čašu ledom, sipaj vino i limetu, dolij tonik i promešaj.",
    ingredients: [
      { ref: "tamjanika", amount: 100 },
      { ref: "limeta", amount: 10 },
      { ref: "tonik", amount: 100 },
    ],
  },
];
