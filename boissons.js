
/** Composant concret : espresso de base. */
export class Espresso {
  description() { return "Espresso"; }
  cout() { return 2.50; }
}

/** Composant concret : café filtre de base. */
export class CafeFiltre {
  description() { return "Café filtre"; }
  cout() { return 2.00; }
}

/** Décorateur abstrait : enveloppe une boisson et délègue par défaut. */
export class DecorateurBoisson {
  /** @type {IBoisson} */
  boisson;

  /** @param {IBoisson} boisson */
  constructor(boisson) {
    // Équivalent de « abstract » : cette classe ne s’instancie pas directement.
    if (new.target === DecorateurBoisson) {
      throw new TypeError("DecorateurBoisson est abstraite et ne peut pas être instanciée.");
    }
    this.boisson = boisson;
  }

  description() { return this.boisson.description(); }
  cout() { return this.boisson.cout(); }
}

/** Décorateur concret : ajoute du lait. */
export class Lait extends DecorateurBoisson {
  description() { return `${this.boisson.description()}, lait`; }
  cout() { return this.boisson.cout() + 0.60; }
}

/** Décorateur concret : ajoute du sirop d’érable. */
export class SiropErable extends DecorateurBoisson {
  description() { return `${this.boisson.description()}, sirop d'érable`; }
  cout() { return this.boisson.cout() + 0.75; }
}

/** Décorateur concret : ajoute de la crème fouettée. */
export class CremeFouettee extends DecorateurBoisson {
  description() { return `${this.boisson.description()}, crème fouettée`; }
  cout() { return this.boisson.cout() + 0.90; }
}
