/* istanbul ignore file */
try {
    const { isEmpty, isValid } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
        console.log(gamerTagValue,"icic");
    });

    checkButton.addEventListener("click", () => {
        feedbackMessageText = isEmpty(gamerTagValue)
            ? "Gamer tag cannot be empty"
            : "Gamer tag is valid";

        if (isValid(gamerTagValue) === false) {
            feedbackMessageText = "Gamer tag must contains at least 8 caracters , 1 number and 1 special caracters";
        }
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
