var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
document.onkeyup = function (event) {


    var userGuess = event.key;

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

     if (userGuess === 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z') {

        if (userGuess === computerGuess) {
            wins++
        } else if (userGuess !== computerGuess)
            losses++
          
     }
        var html =
            "<p>You Chose: " + userGuess + "</p>" +
            "<p>Computer Chose: " + computerGuess + "</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Loses: " + losses + "</p>";

        document.querySelector("#game").innerHTML = html;

};