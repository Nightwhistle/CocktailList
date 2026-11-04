# Koktel meni · žurka

Jednostavna jednostranična aplikacija za mobilni, u neo-brutalističkom stilu.
Kartice su na početku sklopljene i odmah prikazuju sve bitno: kategoriju,
ukupnu zapreminu, jačinu, ime i sve sastojke sa količinama, svaki u svojoj boji.
Klik otvara dijagram čaše gde visina sloja odgovara stvarnom odnosu sastojaka —
odmah se vidi koliko ide koje žestine, a koliko sokova i mešera.

Nema backenda ni baze. Meni se pravi iz dva data fajla:

- `src/data/sastojci.js` — šta imamo: naziv, polica, jačina i boja sastojka
- `src/data/kokteli.js` — recepti; samo kažu koji sastojak i koliko

Na vrhu aplikacije je sklopiva lista **„Pićovnik“** — sve što imamo, po
policama. Ona se čita direktno iz `sastojci.js`, pa se nikad ne razilazi sa
menijem.

Meni se **generiše** iz ta dva fajla (`src/lib/menu.js`): koktel ulazi u meni
samo ako svi njegovi sastojci postoje u `sastojci.js`. Ako nešto nemaš, obriši
taj sastojak i svi kokteli koji ga traže nestaju sami — u `kokteli.js` ništa ne
mora da se menja.

Aplikacija je meni za goste: nigde se ne pominje šta treba kupiti ili imati.
Sve što gost vidi je naziv, sastojci sa količinama, odnos u čaši i recept.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

## Sastojci — `src/data/sastojci.js`

Jedan objekat `stock`, jedan unos po sastojku, sa tri polja:

```js
limeta: {
  name: "Sok od limete",   // kako se prikazuje na kartici i u spisku bara
  group: "Sveže",          // polica u spisku bara
  abv: 0,                  // % alkohola (0 za sokove i mešere)
  color: "#B8E04A",        // boja sloja u čaši
},
```

- Ovo je jedini spisak koji određuje meni. Nema `have` ni `buyNote` — ili je
  sastojak u fajlu (imamo ga) ili ga nema (kokteli koji ga traže ispadaju).
- `group` određuje police u sklopivom „Pićovniku“ na vrhu
  aplikacije. Redosled grupa je redosled prvog pojavljivanja u fajlu.
- Trenutno stanje: pivo (Jelen, Staropramen), vodka, tekila, džin, beli rum,
  pelinkovac, domaća rakija, triple sec, blue curaçao, kola, tonik, gazirana
  voda, gusti sok od jabuke, grenadina, sirup od zove, šećerni sirup, limeta,
  limun, sveža nana, espreso i turska kafa.
- `jelen` i `turskaKafa` su na spisku jer ih imaš, ali ih još nijedan recept
  ne koristi — spisak bara prikazuje sve, ne samo iskorišćeno.
- Ako je tvoj curaçao narandžast, promeni `name` i `color` na tom unosu —
  recepti ostaju isti, samo se promeni boja sloja u čaši.

## Kokteli — `src/data/kokteli.js`

```js
{
  id: "mohito",              // jedinstveni ključ
  name: "Mohito",
  category: "Rum",           // piše se u zaglavlju kartice
  tagline: "...",            // jedan red ispod imena
  accent: "#8FE388",         // boja zaglavlja kartice
  methodLabel: "Recept",     // mala žuta oznaka
  method: "...",             // kratko uputstvo
  ingredients: [
    { ref: "beliRum", amount: 50 },
    { ref: "limeta", amount: 25 },
    { ref: "nana", amount: 8, unit: "listova" },
  ],
}
```

- `ref` je ključ iz `sastojci.js`; odatle se vuku naziv, boja i jačina.
- `unit` je `"ml"` ako se ne navede. Samo `"ml"` ulazi u zapreminu, trake i
  jačinu; ostale jedinice (npr. `"listova"`) se samo prikazuju.
- Jačina koktela se računa iz recepta — bez leda i razblaženja.
- Sastojci su u receptu poređani odozgo nadole, a dijagram ih slaže odozdo
  nagore, pa prvo ide žestina, a na kraju mešeri i soda.

Kartice su na početku sklopljene. Klik (ili Enter) na karticu otvara čašu sa
odnosom sastojaka, punu listu sastojaka i recept; ponovni klik na bilo koji deo
otvorene kartice je sklapa.

Redosled koktela u nizu `cocktails` je redosled na meniju — poređani su po
globalnoj popularnosti, najpopularniji prvi (Margarita), a domaće kombinacije
su na dnu. Novi koktel se dodaje na mesto koje mu po popularnosti pripada.

U istom fajlu, u objektu `party`, menjaš natpis iznad naslova, naslov, podnaslov,
tekst pokretne trake i tekst u podnožju.

### Dodavanje koktela

1. Ako sastojak nije u `sastojci.js`, dodaj ga tamo (`name`, `abv`, `color`).
2. U `kokteli.js` dodaj recept na mesto po popularnosti.
3. Ako neki `ref` ne postoji, koktel se neće prikazati — neće pući aplikacija.

### Skrivanje koktela

Obriši sastojak iz `sastojci.js`. Svi kokteli koji ga traže automatski ispadaju
iz menija. Za razvoj postoji `buildSkipped()` u `src/lib/menu.js`, koji vraća
ispale koktele i tačno koji im sastojak fali.

## Objava na Cloudflare Pages

1. Otpremi projekat na GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Podešavanja builda:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node verzija: **22** (postoji `.nvmrc`)

Ili direktno iz terminala:

```bash
npm run build
npx wrangler pages deploy dist
```

Nema rutiranja na klijentu, pa `_redirects` pravilo nije potrebno.
