
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', function () {
//     myButton.classList.add('clicked');
// });


function sortCatalog() {
    var catalog = document.getElementById("catalog");
    var products = catalog.children;
    var arr = Array.prototype.slice.call(products, 0);

    arr.sort(function (a, b) {
        var aPrice = parseFloat(a.dataset.price);
        var bPrice = parseFloat(b.dataset.price);
        return aPrice - bPrice;
    });
    if (catalog.getAttribute("data-sort") == "desc") {
        arr.reverse();
        catalog.setAttribute("data-sort", "asc");
    } else {
        catalog.setAttribute("data-sort", "desc");
    }
    for (var i = 0; i < arr.length; i++) {
        catalog.appendChild(arr[i]);
    }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

