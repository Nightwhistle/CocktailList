import { stock } from "../data/sastojci";

/** Spaja recept sa katalogom sastojaka: naziv, boja i jačina. */
export function resolveIngredients(cocktail) {
  return cocktail.ingredients.map((item) => {
    const base = stock[item.ref];

    if (!base) {
      throw new Error(
        `Nepoznat sastojak u receptu "${cocktail.id}": ${item.ref}`,
      );
    }

    return { ...base, ...item, unit: item.unit ?? "ml" };
  });
}

/** Ukupna zapremina tečnosti (ml) i procenjena jačina koktela. */
export function getRecipeStats(ingredients) {
  const liquids = ingredients.filter(
    (ingredient) => ingredient.unit === "ml" && ingredient.amount > 0,
  );

  const total = liquids.reduce((sum, ingredient) => sum + ingredient.amount, 0);
  const alcohol = liquids.reduce(
    (sum, ingredient) => sum + (ingredient.amount * (ingredient.abv || 0)) / 100,
    0,
  );

  return {
    total,
    abv: total > 0 ? (alcohol / total) * 100 : 0,
  };
}
