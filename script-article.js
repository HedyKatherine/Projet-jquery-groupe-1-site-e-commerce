function article(nom, id, image, prix, categorie) {
  this.nom = nom;
  this.id = id;
  this.image = image;
  this.prix = prix;
  this.categorie = categorie;
}

listeArticle = [
  new article("Collier Adenora", "card1", "images/14.jpg", 20, "colliers"),
  new article("Boucles d'oreilles Dragon rouge", "card2", "images/34.jpg", 8.5, "bouclesOreilles"),
  new article("Boucles d'oreilles chat", "card3", "images/14.jpg", 20, "colliers"),
  new article("Collier Automne", "card4", "images/17.jpg", 27, "colliers"),
  new article("Collier steampunk", "card5", "images/1.jpg", 15, "tourDeCou"),
  new article("Collier Alvanna bronze", "card6", "images/c.jpg", 30, "sautoir"),
  new article("Collier Alvanna argent", "card7", "images/g.jpg", 30, "sautoir"),
  new article("Ras du cou Anaïk", "card8", "images/8.jpg", 10, "tourDeCou"),
  new article("Ras du cou Serdaigle", "card9", "images/51.jpg", 20, "tourDeCou"),
  new article("Boucles d'oreilles Serdaigle", "card10", "images/46.jpg", 5.50, "bouclesOreilles"),
  new article("Boucles d'oreilles Serpentard", "card11", "images/48.jpg", 5.50, "bouclesOreilles"),
  new article("Ras du cou Serpentard", "card12", "images/54.jpg", 9, "tourDeCou"),
  new article("Ras du cou Poussoufle", "card13", "images/62.jpg", 9, "tourDeCou"),
  new article("Boucles d'oreilles Poussoufle", "card14", "images/44.jpg", 5.50, "bouclesOreilles"),
  new article("Boucles d'oreilles Griffondor", "card15", "images/63.jpg", 5.50, "bouclesOreilles"),
  new article("Ras du cou Griffondor", "card16", "images/57.jpg", 9, "tourDeCou"),
  new article("Boucles d'oreilles Bahiga", "card17", "images/30.jpg", 8, "bouclesOreilles"),
  new article("Boucles d'oreilles Aggrabah", "card18", "images/26.jpg", 8.50, "bouclesOreilles"),
  new article("Boucles d'oreilles Louise", "card19", "images/32.jpg", 7.50, "bouclesOreilles"),
  new article("Boucles d'oreilles Bailee", "card20", "images/38.jpg", 7, "bouclesOreilles"),
  new article("Boucles d'oreilles Baibre", "card21", "images/40.jpg", 8, "bouclesOreilles"),
  new article("Collier Octopus", "card22", "images/28.jpg", 15, "collierMiLong")
];
/*
// due to a duplicate of product <div class="card col-12 col-md-6 col-lg-3 bouclesOreilles" id="card17">
// was no longer necessary
// new article("Collier Adenora", "card23", "images/4.jpg", 20, "colliers")

*/
