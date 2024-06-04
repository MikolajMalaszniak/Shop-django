
var updateBtn = document.getElementsByClassName('update-cart');

for (var i=0; i<updateBtn.length; i++) {
    
    updateBtn[i].addEventListener('click', function(){
    
    var productID = this.dataset.product
    var action = this.dataset.action
    console.log('productId:', productID, 'Action:', action);


    if(user === 'AnonymousUser'){
        console.log("Niezalogowany....");
    }else{
        updateUserOrder(productID, action);
    }

    })
}


function updateUserOrder(productID, action){
    var url = '/update_item/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productID': productID, 'action': action})
    })
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        location.reload();
    });
}

