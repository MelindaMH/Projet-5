    let pagedesproduit = document.getElementById("page_produit")

    fetch("http://localhost:3000/api/cameras")

    .then(function(reponse){
        if(reponse.ok){
            return reponse.json()
        }
    })
    .then(function(produitpage) { 
        console.log(produitpage)
    let pagedesproduit_html = '<img   class="image" src="'+produitpage.imageUrl+' " alt="'+produitpage.name+'"> <h2 class="titre-produit">'+produitpage.name+'</h2>'
    pagedesproduit_html +=  '<a class="avis" href="#">15 Avis</a> <p class="bouton-stock">En stock</p> <h3 class="description">Description</h3>'
    pagedesproduit_html +=  '<p class="text-description">'+produitpage.description+'</p>'
    pagedesproduit_html +=  '<p class="prix">'+produitpage.price +'</p> <button class="bouton-panier">Ajouter au panier </button>'
    pagedesproduit_html +=  '<div class="quanti"> <label for="nbrcam">Quantité :</label> <input id="nbrcam" type="number" name="nbrcam" value="1" min="1"> </div>'
    element.innerHTML+=pagedesproduit_html
     } )