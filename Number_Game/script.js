 let randomNumber = parseInt(Math.random() * 100 + 1);

//  console.log(randomNumber);
 
      const submit = document.querySelector("#subt");
      const userInput = document.querySelector("#guessField");
      const guessSlot = document.querySelector(".guess");
      const remaining = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");
      const startOver = document.querySelector(".resultParas");

      let prevGuess = [];
      let numGuess = 1;
      let playGame = true;

      if (playGame) {
        submit.addEventListener("click", function (event) {
          event.preventDefault();
          const guess = parseInt(userInput.value);
          validateGuess(guess);
        });
      }

      function validateGuess(guess) {
        if (isNaN(guess)) {
          alert("Please enter a valid number...");
        } else if (guess < 1) {
          alert("Please enter a number greater than 1");
        } else if (guess > 100) {
          alert("Please enter a number less than 100");
        } else {
          prevGuess.push(guess);
          if (numGuess === 10) { 
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
          } else {
            displayGuess(guess);
            checkGuess(guess);
          }
        }
      }

      function checkGuess(guess) {
        if (guess === randomNumber) {
          displayMessage("Congratulations! You guessed the right number.");
          endGame();
        } else if (guess < randomNumber) {
          displayMessage("Your guess is too low.");
        } else if (guess > randomNumber) {
          displayMessage("Your guess is too high.");
        }
      }

      function displayGuess(guess) {
        userInput.value = "";
        guessSlot.innerHTML += `${guess} `;
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`;
      }

      function displayMessage(message) {
        lowOrHi.innerHTML = `<h2>${message}</h2>`;
      }

      function endGame() {
        userInput.setAttribute("disabled", "true");
        submit.setAttribute("disabled", "true");

        const resetButton = document.createElement("button");
        resetButton.textContent = "Start New Game";
        startOver.appendChild(resetButton);

        resetButton.addEventListener("click", function () {
          numGuess = 1;
          prevGuess = [];
          guessSlot.innerHTML = "";
          remaining.innerHTML = "10";
          lowOrHi.innerHTML = "";
          resetButton.parentNode.removeChild(resetButton);
          userInput.removeAttribute("disabled");
          submit.removeAttribute("disabled");
          playGame = true;
          randomNumber = parseInt(Math.random() * 100 + 1);
        });
      }