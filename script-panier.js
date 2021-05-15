var panier = localStorage.getItem("panier");

function ajouterWidgetPanier(numeroArticle) {

  var articleCourant = listeArticle[numeroArticle];

  /*if(nomArticleCourant === articleCourant)
  {*/

  if ($(".contentPanier." + articleCourant.id + "")) {
    $(".contentPanier." + articleCourant.id + "").remove();
  }
  if ($(".contentPanier")) {
    $(".contentWidget .totalPanier").remove();
  }

  var quantiteArticle = $("input[type=number]").val();
  var prixArticle = articleCourant.prix * quantiteArticle;
  quantiteArticle = parseInt(quantiteArticle);


  $(".widgetPanier .contentWidget").append("<div id='" + articleCourant.id + "' class='contentPanier " + articleCourant.id + "'></div>");
  $(".contentWidget .contentPanier." + articleCourant.id + "").append("<div class='btSupprimer'><a href='#'></a></div>");
  $(".contentWidget .contentPanier." + articleCourant.id + "").append("<img src='images/articles/" + articleCourant.image + "-mini.jpg' alt='" + articleCourant.nom + "' />");
  $(".contentWidget .contentPanier." + articleCourant.id + "").append("<p class='nomArticleWidget'>" + articleCourant.nom + "</p>");
  $(".contentWidget .contentPanier." + articleCourant.id + "").append("<p class='prixArticleWidget'>EUR <span class='prixUnitaireWidget'>" + articleCourant.prix + "</span> x <span class='quantiteArticleWidget'>" + quantiteArticle + "</span></p>");
  $(".contentWidget .contentPanier." + articleCourant.id + "").append("<p class='prixArticleTotalWidget'>Total article EUR <span>" + prixArticle + "</span></p>");

  totalPanier();
  enregistrerPanier();

};

function totalPanier() {
  var nombrePrixTotal = $(".prixArticleTotalWidget span");

  if ($(".widgetPanier .contentWidget .totalPanier")) {
    $(".widgetPanier .contentWidget .totalPanier").remove();
  }

  for (var i = 0; i < nombrePrixTotal.length; i++) {
    var prixTotalUnArticle = nombrePrixTotal.eq(i).text();
    prixTotalUnArticle = parseInt(prixTotalUnArticle);
    var prixTotalToutArticles;

    if (i === 0) {
      prixTotalToutArticles = prixTotalUnArticle;
    } else {
      prixTotalToutArticles = prixTotalUnArticle + prixTotalToutArticles;

    }

  }

  if (nombrePrixTotal.length === 0) {
    return;
  } else {
    $(".widgetPanier .contentWidget").append("<div class='totalPanier'></div>");
    $(".contentWidget .totalPanier").append("<p>Total panier EUR <span>" + prixTotalToutArticles + "</span></p>");
  }

};

function enregistrerPanier() {
  var contenuPanier = $(".widgetPanier .contentWidget").html();

  localStorage.setItem("panier", contenuPanier);
};


function ajouterPagePanier() {
  var articleDifferent = $(".widgetPanier .contentWidget .contentPanier");
  var imageArticle = $(".widgetPanier .contentWidget .contentPanier img");
  var nomArticle = $(".widgetPanier .contentWidget .contentPanier .nomArticleWidget");
  var prixArticle = $(".widgetPanier .contentWidget .contentPanier .prixArticleWidget .prixUnitaireWidget");
  var quantiteArticle = $(".widgetPanier .contentWidget .contentPanier .prixArticleWidget .quantiteArticleWidget");
  var prixTotalArticle = $(".widgetPanier .contentWidget .contentPanier .prixArticleTotalWidget span");
  var prixTotal = $(".widgetPanier .totalPanier p span");

  if ($(".colPrinc .articlePanier")) {
    $(".colPrinc .articlePanier").remove();
    $(".colPrinc .prixTotalPanier").remove();
  };

  for (var i = 0; i < articleDifferent.length; i++) {
    var idArticle = articleDifferent.eq(i).attr("id");
    var imageCourante = imageArticle.eq(i);
    var nomCourant = nomArticle.eq(i);
    var prixCourant = prixArticle.eq(i);
    var quantiteCourante = quantiteArticle.eq(i);
    var prixTotalArticleCourant = prixTotalArticle.eq(i);

    $(".labelPanier.row").after("<div class='articlePanier row " + idArticle + "'></div>");
    $(".articlePanier." + idArticle + "").append("<div class='col-xs-3'><img src='" + imageCourante.attr('src') + "'</div>");
    $(".articlePanier." + idArticle + "").append("<div class='col-xs-3'><p>" + nomCourant.text() + "</p><input class='btSupprimer' type='button' value='Supprimer' /></div>");
    $(".articlePanier." + idArticle + "").append("<div class='col-xs-2'><p>EUR " + prixCourant.text() + "</p></div>");
    $(".articlePanier." + idArticle + "").append("<div class='col-xs-2'><input type='number' min='1' max='500' value='" + quantiteCourante.text() + "' /></div>");
    $(".articlePanier." + idArticle + "").append("<div class='col-xs-2'><p>EUR " + prixTotalArticleCourant.text() + "</p></div>");

  };

  if (articleDifferent.length === 0) {
    return;
  } else {
    $(".optionPanier").before("<div class='col-xs-12 prixTotalPanier'>Prix total panier</div>");
    $(".optionPanier").before("<div class='col-xs-12 prixTotalPanier'>EUR " + prixTotal.text() + "</div>");
  };

};

function MettreAJourPanier() {

  var nombreArticle = $(".articlePanier").length;

  for (var i = 0; i < nombreArticle; i++) {
    var articleCourant = $(".articlePanier").eq(i);
    var caractereTot = articleCourant.attr("class").length;
    caractereTot = caractereTot - 6;
    var idArticlePanier = articleCourant.attr("class").substring(caractereTot);
    var quantiteArticlePagePanier = $(".articlePanier input[type=number]").eq(i).val();
    quantiteArticlePagePanier = parseInt(quantiteArticlePagePanier);
    var prixArticle = $("#" + idArticlePanier + " .prixUnitaireWidget").text();
    prixArticle = parseInt(prixArticle);
    prixArticle = prixArticle * quantiteArticlePagePanier;


    $("#" + idArticlePanier + " .quantiteArticleWidget").text(quantiteArticlePagePanier);
    $("#" + idArticlePanier + " .prixArticleTotalWidget span").text(prixArticle);

  };

  localStorage.removeItem("panier");
  totalPanier();
  enregistrerPanier();
  ajouterPagePanier();

}

function SupprimerPanier() {
  localStorage.removeItem("panier");
  $(".colPrinc .articlePanier").remove();
  $(".colPrinc .prixTotalPanier").remove();
  $(".widgetPanier .contentPanier").remove();
  $(".widgetPanier .totalPanier").remove();
}



$("#SupprimerPanier").click(function () {
  SupprimerPanier();
});

$("body").on("click", ".btSupprimer", function () {

  if ($(this).parent().parent().hasClass("articlePanier")) {

    var parentPrincipal = $(this).parent().parent();
    var caractereTot = parentPrincipal.attr("class").length;
    caractereTot = caractereTot - 6;
    var idArticlePanier = parentPrincipal.attr("class").substring(caractereTot);

    $("#" + idArticlePanier + "").remove();
    $(parentPrincipal).remove();
    localStorage.removeItem("panier");
    totalPanier();
    enregistrerPanier();
    ajouterPagePanier();
  } else if ($(this).parent().hasClass("contentPanier")) {
    $(this).parent().remove();
    localStorage.removeItem("panier");
    totalPanier();
    enregistrerPanier();
    ajouterPagePanier();

  }

  return false;
});
