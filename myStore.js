var searchBox = document.getElementById('search-item');
var storeItems = document.querySelectorAll('.store-item');

function search(e) {
    var searchFilter = e.target.value.toLowerCase().trim();

    storeItems.forEach(function(item) {
        if (item.textContent.includes(searchFilter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
};
