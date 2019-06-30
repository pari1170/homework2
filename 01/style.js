var users = ['shahin', 'amir', 'hamed'];
var a = prompt("plz enter ur name");
console.log(a);
var put = document.getElementById("putName");
console.log(put);
for (var i in users) {
  //  (users[i] == a) ? put.innerHTML += 'wlc  ' + a : put.innerHTML += 'Oops Try again';
    if(users[i]==a)
    {
        put.innerHTML += 'wlc  ' + a;
        break;
    }
    else {
        put.innerHTML += 'try again';
    }

}