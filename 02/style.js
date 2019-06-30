
var hotel = {
    name: 'Darvishi',
    star: 5,
    city: 'Mashad',
    rooms: [
        { name: 'single', countOfAvail: 54 },
        { name: 'Twin', countOfAvail: 122 },
        { name: 'Double', countOfAvail: 452, facilities: ['Smoke Free'] }
    ],
    facilities: ['Near ShopCenter', 'Pool', 'Resturant', 'Coffeeshop']
};
var a = prompt("put a property that u want to know");
var c=document.getElementById("putName");
(a == "name") ? c.innerHTML = hotel['name'] : (prompt('do u want to change it?') == "yes") ? al : alert("exit");
var al = prompt('put a name');
c.innerHTML = al;