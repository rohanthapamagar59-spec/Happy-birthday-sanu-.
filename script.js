const correctPin = "0516";

function checkPin() {
    const pin = document.getElementById("pin").value;

    if (pin === correctPin) {
        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";

        createHearts();

        // Music play (music.mp3 राखेपछि)
        // document.getElementById("bgMusic").play();
    } else {
        document.getElementById("error").innerHTML = "❌ Wrong PIN 😛";
    }
}

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";

        document.querySelector(".background-hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 150);
}

function openWish() {
    alert("💌 Happy Birthday My Sanu ❤️\n\nMay your smile always shine brighter than the stars. I Love You Forever 💗🥹");
}

function openLove() {
    window.location.href = "love.html";
}

function openCake() {
    window.location.href = "cake.html";
}
