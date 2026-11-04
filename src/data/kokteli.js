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
    tagline: "Rođena je 1948. po jednoj Marjorie, so na ivici, limeta u čaši. Sestra je htela da je napravi pitku, ali se ispostavilo da je tekila sve. Posle druge se više ne sećaš ko je Marjorie.",
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
    tagline: "Hemingway ga je pio u Havani, a svaki gutljaj je imao ukus leta i rima. Nana se lomi, limeta se tuče, led sve hladi — ti samo misliš da je lagan.",
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
    tagline: "Rođen 1898. kad su američki mornari proslavili kraj španskog rata na Kubi, rum, kola i limeta za oslobođenje. Prošlo je više od jednog veka, a ukus je opet isti.",
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
    tagline: "Britanski vojnici su ga pili u Indiji da maskiraju gorki lek protiv malarije. Lekar je rekao bitno je da ga popiješ, a džin je dodao tonik da se lakše proguta.",
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
    tagline: "Inženjer Jennings Cox ga je izmislio 1896. na plaži Daiquiri kod Santjaga. Primeran, kiselkast i bez suviše priče — rum, limeta i sirup znaju gde im je mesto.",
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
    tagline: "Dik Bradsell ga je napravio 1983. u Londonu jer je gošća tražila nešto da je probudi i dotuče. U dve sekunde se smišljao muzika, bar i život.",
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
    tagline: "Ime laže kao primeran student. Izgleda kao čaj bez alkohola, a u njemu je pet žestina i kola da sakrije dokaze. Policija ga je prolazila, a glava klecala.",
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
    tagline: "Ime je šala iz 1800-ih — prijatelji jedni druge šalju u potragu za gospodinom Collinsom po Londonu. Koktel je opstao, gospodin nikad nije pronađen.",
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
    tagline: "Pariz 1919, Harry Bar i flaša likera za damu u belom. Providna, hladna i opasna, baš kao dame koje je inspirisala.",
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
    tagline: "Selo Batanga u Meksiku, koktel sa početka prošlog veka — tekila, kola i limeta, bez ikakve filozofije. Radi isto već sto godina, pa zašto da menja?",
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
    tagline: "Austin, Teksas, dobio ime po ranču gde ga piju radnici — voda sa ranca koja baš i nije voda. Tekila, limeta i soda, a ti se i dalje ponašaš kao na travi.",
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
    tagline: "Rođena u šezdesetim, plava kao bazen, pitka kao limunada. Moderna varijanta Margarite, samo u plavoj haljini — sve je igra boje, ništa drugo.",
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
    tagline: "Prince je 1984. pevao o ljubičastoj kiši koja prska zvukom. Koktel je sipao plavo i crveno, a boja je počela da živi sopstvenim životom.",
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
    tagline: "Ista porodica kao klasična, samo je curaçao obukao u plavu haljinu. Tekila, limeta i blue curaçao odlučili da i Meksiko ima svoju morsku varijantu.",
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
    tagline: "Džin, zova i limun — kao Tom Collins, ali na letnjem odmoru u cveću. Miris zove prevari veštinu, a sutra te vrati na početak.",
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
    tagline: "Kad džina nema, vodka uskače i tvrdi da je svejedno. Nije, ali proći će — limun i soda ionako nose većinu razgovora.",
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
    tagline: "Gusti sok od jabuke da svi misle da piješ sok. Svi misle pogrešno, a ti se samo pretvaraš da je to voće.",
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
    tagline: "U Parizu posle Prvog svetskog rata Sidecar se pio jer si pio da zaboraviš — rakija je preuzela francusku eleganciju i ostala domaća.",
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
    tagline: "Domaća rakija u toniku — kao džin tonik, samo komšija iz sela koji odbija da nosi kravatu. Gorko, lagano i iznenađujuće pristojno.",
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
    tagline: "Pelinkovac nije žednjak jer ga srce odlučuje — travnat i ozbiljan je po prirodi. Tonik ga sprečava da se preda i odbija, a jutro ga prati.",
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
    tagline: "Radler iz Nemačke: pivo plus limunada. Ovde jabuka preuzima, pivo se ne žali. Ostaje pitanje koliko flairi ima flaša i koliko imaš vremena.",
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
    tagline: "Venecija, letnji ritual oko pet popodne — Prosecco, soda i bar. Tamjanika špric radi istu misiju, sprečava dosadu i podiže puls.",
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
    tagline: "Jäger kaže da je tajni recept od 56 biljaka — medovača dodaje domaći potpis. Pije se hladan, razume se, a pamet čuva za posle.",
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
    tagline: "Nazvana bomba jer legne teško — nije eksplodirala u čaši, nego kasnije na podu. Jeger, kola i led, a svedoci ćute.",
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
    tagline: "Kaktus liker iz Meksika, limun i soda — slatko, ali sa bodljama. Sitno, lucidan i pomalo lukav, kao svaka loša odluka u leto.",
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
    tagline: "Pivo i kaktus liker zvuči kao izazov, a pije se kao ništa. Pivo je jestivo, kaktus drži karakter, a ti i dalje tvrdiš da je to eksperiment.",
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
    tagline: "Tamjanika miriše na muskat i ružu — tonik je pretvara u nešto ozbiljnije. Vino, limeta i gorkost u nešto što zoveš večera.",
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
