import { cocktails } from "../data/kokteli";
import { stock } from "../data/sastojci";

/** Sastojci koje recept traži, a nema ih u `sastojci.js`. */
export function missingIngredients(cocktail) {
  return cocktail.ingredients
    .filter((ingredient) => !stock[ingredient.ref])
    .map((ingredient) => ingredient.ref);
}

/**
 * Meni se generiše iz stanja sastojaka: prolazi samo koktel kome
 * ništa ne fali. Redosled ostaje isti kao u `kokteli.js`.
 */
export function buildMenu(list = cocktails) {
  return list.filter((cocktail) => missingIngredients(cocktail).length === 0);
}

/** Kokteli koji su ispali iz menija i šta im fali (za razvoj, ne za UI). */
export function buildSkipped(list = cocktails) {
  return list
    .map((cocktail) => ({
      cocktail,
      missing: missingIngredients(cocktail),
    }))
    .filter((entry) => entry.missing.length > 0);
}
