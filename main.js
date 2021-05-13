// script
$(document).ready(function(){
//pour afficher .collierMiLong
    $("#categorie1").click(function(){
        $(".bouclesOreilles, .tourDeCou, .dragon").toggle();
    });
//pour afficher .pendentif
    $("#categorie2").click(function(){
      $(".bouclesOreilles,.tourDeCou, .collierMiLong").toggle();
    });
//pour afficher .tourDeCou
    $("#categorie3").click(function(){
      $(".bouclesOreilles, .dragon, .collierMiLong").toggle();
    });
//pour afficher .bouclesOreilles
    $("#categorie4").click(function(){
      $(".tourDeCou, .dragon, .collierMiLong").toggle();
    });
});
