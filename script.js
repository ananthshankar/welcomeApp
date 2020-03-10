
document.getElementById("nameText").style.display = "none";

var badText = ['shit', 'dog'];

document.getElementById("sayButton").addEventListener("click", function () {
    sayHello();
});

function sayHello() {
    var firstName = document.getElementById('firstname').value;

    if (firstName.length > 0) {

        if (checkBadText(firstName) > 0) {
           
            var xAddvalue = '';
            for (var i = 0; i < firstName.length; i++) {
                xAddvalue += "X";
            }
            document.getElementById("firstNameText").innerHTML = xAddvalue;

        } else {
            document.getElementById("firstNameText").innerHTML = firstName;
        }

        document.getElementById("nameText").style.display = "block";
        
    } else {
        document.getElementById("nameText").style.display = "none";
    }

}

function checkBadText(text) {   
    var word = badText.filter(e => e === text);
    var textLength = word.length;
    return textLength;
}
