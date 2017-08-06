
$(document).ready(function () {

    var wonCounter = 0;
    var lostCounter = 0;
    runGame();


    function runGame() {

        var isPlaying = true;
        var yourScore = 0;
        var randomNumber = randomGoal();

        $("#random-number").html(randomNumber);
        $("#your-score").html(yourScore);


        //re-usable function - generates random number
        function randomGoal() {
            var temp = Math.ceil(Math.random() * 101) + 19;
            return temp;
        }

        function random() {
            var temp = Math.ceil(Math.random() * 11) + 1;
            return temp;
        }

        //gems function
        function clickGem(gemName) {
            yourScore = yourScore + gemName;
            $("#your-score").html(yourScore);
            checkScore(yourScore);
        }


        //Gems
        var blueGem = random();
        console.log(blueGem);

        $("#gem-blue").on("click", function () {
            clickGem(blueGem);
        });

        var greenGem = random();
        console.log(greenGem);

        $("#gem-green").on("click", function () {
            clickGem(greenGem);
        });

        var redGem = random();
        console.log(redGem);

        $("#gem-red").on("click", function () {
            clickGem(redGem);
        });

        var purpleGem = random();
        console.log(purpleGem);

        $("#gem-purple").on("click", function () {
            clickGem(purpleGem);
        });


        function checkScore(score) {
            if (!isPlaying) {
                return;
            }

            if (score === randomNumber) {
                wonCounter++;
                $("#message").html("You Won! New Game Started.");
                isPlaying = false;
                runGame();

            } else if (score > randomNumber) {
                lostCounter++;
                $("#message").html("You Lost! New Game Started.");
                isPlaying = false;
                runGame();
            } else {
                console.log("WAITING");
            }
            $("#points-won").html(wonCounter);
            $("#points-lost").html(lostCounter);
        }

    }
});