import { Fragment, useState } from "react";
import GlassDiagram from "./GlassDiagram";
import { getRecipeStats, resolveIngredients } from "../lib/recipe";

export default function CocktailCard({ cocktail, index }) {
  const [open, setOpen] = useState(false);

  const ingredients = resolveIngredients(cocktail);
  const { total, abv } = getRecipeStats(ingredients);
  const detailId = `koktel-${cocktail.id}`;

  const toggle = () => setOpen((value) => !value);

  return (
    <article
      className={`card${open ? " card--open" : ""}`}
      style={{ "--accent": cocktail.accent, "--i": index }}
    >
      <div
        className="card-head"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={detailId}
        aria-label={open ? `Zatvori ${cocktail.name}` : `Otvori ${cocktail.name}`}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <div className="card-strip">
          <span className="card-cat">{cocktail.category}</span>
          <span className="card-abv">
            {total} ml · {Math.round(abv)}% alk.
          </span>
        </div>

        <div className="card-summary">
          <div className="card-title-row">
            <h2 className="card-name">{cocktail.name}</h2>
            <span className="card-toggle" aria-hidden="true">
              {open ? "−" : "+"}
            </span>
          </div>

          <p className="card-tagline">{cocktail.tagline}</p>

          {!open && (
            <p className="card-preview">
              <b>Sastav:</b>
              {ingredients.map((ingredient, ingredientIndex) => (
                <Fragment key={`${ingredient.name}-${ingredientIndex}`}>
                  {ingredientIndex > 0 ? " · " : " "}
                  <span
                    className="preview-item"
                    style={{
                      color: `color-mix(in srgb, ${ingredient.color} 65%, #111111)`,
                    }}
                  >
                    {ingredient.name}{" "}
                    <span className="preview-amount">
                      {ingredient.amount}
                      {ingredient.unit === "ml" ? " ml" : ` ${ingredient.unit}`}
                    </span>
                  </span>
                </Fragment>
              ))}
            </p>
          )}
        </div>
      </div>

      {open ? (
        <div className="card-detail" id={detailId} onClick={toggle}>
          <div className="diagram">
            <div className="diagram-stat">
              <span className="stat-label">Ukupno</span>
              <span className="stat-value">
                {total}
                <small>ml</small>
              </span>
            </div>

            <div className="glass-wrap">
              <GlassDiagram
                ingredients={ingredients}
                label={`${cocktail.name} — čaša sa odnosom svih sastojaka`}
              />
            </div>

            <div className="diagram-stat diagram-stat--end">
              <span className="stat-label">Jačina</span>
              <span className="stat-value">
                {Math.round(abv)}
                <small>%</small>
              </span>
            </div>
          </div>

          <h3 className="section-label">
            Sastojci
            <span className="section-note">ml · udeo u čaši</span>
          </h3>

          <ul className="ing-list">
            {ingredients.map((ingredient, ingredientIndex) => {
              const isLiquid = ingredient.unit === "ml";
              const share = isLiquid
                ? Math.round((ingredient.amount / total) * 100)
                : null;

              return (
                <li
                  className="ing"
                  key={`${ingredient.name}-${ingredientIndex}`}
                >
                  <span className="ing-line">
                    <span
                      className="swatch"
                      style={{ background: ingredient.color }}
                    />
                    <span className="ing-name">{ingredient.name}</span>
                    <span className="ing-amount">
                      {ingredient.amount}
                      {isLiquid ? " ml" : ` ${ingredient.unit}`}
                    </span>
                  </span>

                  {isLiquid ? (
                    <span className="ing-track">
                      <span
                        className="ing-fill"
                        style={{
                          width: `${Math.max(share, 3)}%`,
                          background: ingredient.color,
                        }}
                      />
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <p className="method">
            <strong>{cocktail.methodLabel}</strong>
            {cocktail.method}
          </p>

          <p className="card-close" aria-hidden="true">
            Zatvori −
          </p>
        </div>
      ) : null}
    </article>
  );
}
