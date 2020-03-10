

document.getElementById("nameText").style.display = "none";

var badText = ['shit', 'dog'];

document.getElementById("sayButton").addEventListener("click", function () {
    sayHello();
});


function sayHello() {

    var firstName = document.getElementById('firstname').value;

    if (firstName.length > 0) {

        if (checkBadText(firstName)) {

            var xAddedval = '';

            for (var i = 0; i < firstName.length; i++) {
                xAddedval += "X";
            }
            document.getElementById("firstNameText").innerHTML = xAddval;

        } else {
            document.getElementById("firstNameText").innerHTML = firstName;
        }

        document.getElementById("nameText").style.display = "block";
        
    } else {
        document.getElementById("nameText").style.display = "none";
    }

}

function checkBadText(text) {   
    var wordFilter = badText.filter(e => e === text);
    var wordLength = wordFilter.length;
    var checkResponse = wordLength > 0 ? true : false;  
    return checkResponse;
}
