let element  = document.getElementById("produits")

fetch("http://localhost:3000/api/cameras")

.then(function(reponse){
    if(reponse.ok){
        return reponse.json()
    }
})
.then(function(produits){
    console.log(produits)
    produits.forEach(produit=> {
        console.log(produit)
        let html_produit = '<a href="produit.html" class="articles">'
        html_produit+='<img src="'+produit.imageUrl+ '" alt="'+produit.name+'" title="'+produit.name+'">'
        html_produit += '<div><h3>'+produit.name+'</h3> <p class="prix">'+produit.price    +' euro</p> </div> </a>'
        element.innerHTML+=html_produit   
    });
})

