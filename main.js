$(document).ready(function(){
    //pour afficher colliers mi-longs
    $("#categorie1").click(function(){
        $(".collierMiLong").toggle();
        $(".imageProduit").css("width","50px");
        $(".imageProduit").css("height","50px");
        $(".boutons").css("margin-top","15px");

        //$(".text").css("color","black");
        //$(".text").css("background","#EDF2FB");
    });
    $("#categorie2").click(function(){
        $(".dragon").toggle();
        $(".imageProduit").css("width","50px");
        $(".imageProduit").css("height","50px");
          $(".boutons").css("margin-top","15px");
    });
    $("#categorie3").click(function(){
        $(".tourDeCou").toggle();
        $(".imageProduit").css("width","50px");
        $(".imageProduit").css("height","50px");
          $(".boutons").css("margin-top","15px");
    });
    $("#categorie4").click(function(){
        $(".bouclesOreilles").toggle();
        $(".imageProduit").css("width","50px");
        $(".imageProduit").css("height","50px");
          $(".boutons").css("margin-top","15px");
    });

});
