let questionIndex = 0;
const presentsImage = document.getElementById("presents");
const firstPresentButton = document.getElementById("present-1-button");
let introElement = document.getElementById("intro-video");
let linkElement = document.getElementById("present-link");
let winLinkElement = document.getElementById("win-link");
let winElement = document.getElementById("win-picture");

let videoPicture = "";
let presentButton = "";
let nextPresentButton = "";

// Go from welcome screen to game screen
function startGame() {
    // Hide the welcome screen
    document.getElementById("welcome-screen").classList.remove("active");
    document.getElementById("welcome-screen").style.display = "none";

    // Show the game screen
    document.getElementById("game-screen").classList.add("active");
    document.getElementById("game-screen").style.display = "block";
    
    const presentsImage = document.getElementById("presents");
    presentsImage.style.display = "none";

    firstPresentButton.style.display = "none";

    audio = new Audio("audio/backgroundmusic.MP3");
    audio.play();

    introElement.style.display = "block";
    introElement.href = "https://drive.google.com/file/d/1xmyUACIa52fFeZ59Gydpw1brJ9YCB6fJ/view?usp=sharing";
}

function finishIntro() {
    introElement.style.display = "none";
    presentsImage.style.display = "block";
    firstPresentButton.style.display = "block";
}

function presentVideo(videoNum) {
    audio = new Audio("audio/backgroundmusic.MP3");
    audio.play();

    linkElement.style.display = "block";
    const anchorElement = document.getElementById("present-anchor");

    if (videoNum === 1) {
        anchorElement.href = "https://drive.google.com/file/d/1QBFd2-VmGx7uWQy3x_jqv_N4Dj1bMssp/view?usp=sharing";
        presentButton = document.getElementById("present-1-button");
        nextPresentButton = document.getElementById("present-2-button");
    } else if (videoNum === 2) {
        anchorElement.href = "https://drive.google.com/file/d/13Zq1CIx3xeUO26EDYdAwbWwj-lup6Oih/view?usp=sharing";
        presentButton = document.getElementById("present-2-button");
        nextPresentButton = document.getElementById("present-3-button");
    } else if (videoNum === 3) {
        anchorElement.href = "https://drive.google.com/file/d/1Jwb23C2X9HCn1Ns5zq4x7W8MxhEhutvV/view?usp=sharing";
        presentButton = document.getElementById("present-3-button");
        nextPresentButton = document.getElementById("present-4-button");
    } else if (videoNum === 4) {
        anchorElement.href = "https://drive.google.com/file/d/1IA_IyzMQjc5TS4JaLp_RmYN0AzlX7Eca/view?usp=sharing";
        presentButton = document.getElementById("present-4-button");
        nextPresentButton = document.getElementById("present-5-button");
    } else if (videoNum === 5) {
        anchorElement.href = "https://drive.google.com/file/d/1DZFSTiLzpUQNabLUhAwAcPcT_kVZ9M4V/view?usp=sharing";
        presentButton = document.getElementById("present-5-button");
        nextPresentButton = document.getElementById("present-6-button");
    } else if (videoNum === 6) {
        anchorElement.href = "https://drive.google.com/file/d/1kzS-owlhCcyxdOpt2-kch6nIntEXXf-O/view?usp=sharing";
        presentButton = document.getElementById("present-6-button");
        nextPresentButton = document.getElementById("present-7-button");
    } else if (videoNum === 7) {
        anchorElement.href = "https://drive.google.com/file/d/1Pv6P3tZ3qtOByOe4mJj4Nxb_ahztwgkl/view?usp=sharing";
        presentButton = document.getElementById("present-7-button");
        nextPresentButton = document.getElementById("present-8-button");
    } else if (videoNum === 8) {
        anchorElement.href = "https://drive.google.com/file/d/1LbzihLmG77Mo3rR66p1fzBSEJioTxmS4/view?usp=sharing";
        presentButton = document.getElementById("present-8-button");
        nextPresentButton = document.getElementById("present-9-button");
    } else if (videoNum === 9) {
        anchorElement.href = "https://drive.google.com/file/d/1RtmXrnMd4vGVZxH9ugVAy-nk3mgQCwoT/view?usp=sharing";
        presentButton = document.getElementById("present-9-button");
        nextPresentButton = document.getElementById("present-10-button");
    } else if (videoNum === 10) {
        anchorElement.href = "https://drive.google.com/file/d/1wUrOC9UCU4KA5zSibyBFP_-1ChVdkw9K/view?usp=sharing";
        presentButton = document.getElementById("present-10-button");
        nextPresentButton = document.getElementById("present-11-button");
    } else if (videoNum === 11) {
        anchorElement.href = "https://drive.google.com/file/d/1rQL_Bs_RH3LNI75Uw-OYqVYrgINeeKU0/view?usp=sharing";
        presentButton = document.getElementById("present-11-button");
        nextPresentButton = document.getElementById("present-12-button");
    } else if (videoNum === 12) {
        anchorElement.href = "https://drive.google.com/file/d/1U7kbf5BTlEg_SXBes9up8T63qSsTCUa-/view?usp=sharing";
        presentButton = document.getElementById("present-12-button");
        nextPresentButton = document.getElementById("present-13-button");
    } else if (videoNum === 13) {
        presentsImage.style.display = "none";
        presentButton.style.display = "none";
        nextPresentButton.style.display = "none";

        goToCoalPresent();
        return;
    }

    presentsImage.style.display = "none";
    presentButton.style.display = "none";
}

function goToCoalPresent() {
    linkElement.style.display = "none";
    coalPicture = document.getElementById("coal-picture");
    coalPicture.style.display = "block";

    setTimeout(() => {
        coalPicture.style.display = "none";
        goToWinPage();
    }, 1500);
}

function goToWinPage() {
    winLinkElement.style.display = "block";
}

function showConfetti() {
    winLinkElement.style.display = "none";
    winElement.style.display = "block";
}

function showQuizPopup() {
    const question = questions[questionIndex];
    const questionTextElement = document.getElementById("question-text");
    const optionsForm = document.getElementById("options-form");

    questionTextElement.innerText = question.question;
    optionsForm.innerHTML = "";

    question.options.forEach((option, i) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = i;
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement("br"));
    });

    document.getElementById("quiz-popup").style.display = "flex";
}

function submitAnswer() {
    clearFeedback()
    const optionsForm = document.getElementById("options-form");
    const selectedOption = optionsForm.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);

        if (answerIndex === questions[questionIndex].answer) {
            showFeedback("images/correct.jpeg", "Correct!", true);
            setTimeout(() => {
                questionIndex += 1;
                closeQuizPopup();

                linkElement.style.display = "none";
                presentsImage.style.display = "block";
                nextPresentButton.style.display = "block";
                
                clearFeedback();
            }, 1500);
        } else {
            showFeedback("images/incorrect.jpeg", "Incorrect, please try again.", false);
        }
    } else {
        showFeedback("images/shrug.png", "Please select an answer.", false);
    }
}

// Function to display feedback image and message
function showFeedback(imageSrc, message, isCorrect) {
    const feedbackContainer = document.getElementById("feedback-container");
    feedbackContainer.innerHTML = `
        <img src="${imageSrc}" style="width: 300px; height: auto; display: block; margin: 0 auto; border-radius: 10px;">
        <p style="text-align: center; font-weight: bold; color: ${isCorrect ? 'green' : 'red'};">${message}</p>
    `;
    feedbackContainer.style.display = "block";
}

// Function to clear the feedback display
function clearFeedback() {
    const feedbackContainer = document.getElementById("feedback-container");
    feedbackContainer.style.display = "none";
    feedbackContainer.innerHTML = "";
}

function closeQuizPopup() {
    document.getElementById("quiz-popup").style.display = "none";
}

window.onload = function() {
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
}
