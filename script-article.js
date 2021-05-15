function article(nom, id, image, prix, categorie) {
  this.nom = nom;
  this.id = id;
  this.image = image;
  this.prix = prix;
  this.categorie = categorie;
}

listeArticle = [
  new article("Collier Adenora", "card1", "images/14.jpg", 20, "colliers")
];
