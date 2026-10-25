import {
  CafeFiltre,
  CremeFouettee,
  Espresso,
  Lait,
  SiropErable,
} from "./boissons.js";

/**
 * Le client dépend uniquement du composant commun IBoisson.
 * @param {import("./boissons.js").IBoisson} boisson
 */
function afficher(boisson) {
  console.log(`${boisson.description()} : ${boisson.cout().toFixed(2)} $`);
}

// Boisson de base, sans décorateur.
afficher(new Espresso());

// Café filtre + lait + sirop d’érable.
afficher(new SiropErable(new Lait(new CafeFiltre())));

// Espresso + sirop d’érable + crème fouettée.
afficher(new CremeFouettee(new SiropErable(new Espresso())));

// Le même décorateur peut être appliqué plusieurs fois.
afficher(new SiropErable(new SiropErable(new Lait(new CafeFiltre()))));
