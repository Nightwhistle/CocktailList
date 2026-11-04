import { party } from "./data/kokteli";
import { buildMenu } from "./lib/menu";
import BarList from "./components/BarList";
import CocktailCard from "./components/CocktailCard";

export default function App() {
  const menu = buildMenu();

  return (
    <div id="top">
      <div className="topbar">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              {party.marquee.map((item) => (
                <span key={item}>
                  {item} <b>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className="hero">
        <p className="hero-kicker">{party.kicker}</p>
        <h1 className="hero-title">
          {party.titleTop}
          <br />
          <span className="hl">{party.titleBottom}</span>
        </h1>
        <p className="hero-sub">{party.tagline}</p>
        <span className="sticker" aria-hidden="true">
          {menu.length} koktela
        </span>
      </header>

      <BarList />

      <main className="menu">
        <div className="menu-meta">
          <span>{menu.length} koktela</span>
          <span>Po globalnoj popularnosti</span>
        </div>

        {menu.map((cocktail, index) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} index={index} />
        ))}
      </main>

      <footer className="footer">
        <p className="footer-note">{party.footerNote}</p>
        <a className="back-top" href="#top">
          Na vrh ↑
        </a>
      </footer>
    </div>
  );
}
