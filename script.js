// ==============================
// Birthday Website
// ==============================

const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("audio");

const sections = [
    document.getElementById("letter"),
    document.getElementById("photo"),
    document.getElementById("music"),
    document.getElementById("end")
];

let musicPlaying = false;

// ==============================
// Open Letter
// ==============================

openBtn.addEventListener("click", () => {

    openBtn.disabled = true;
    openBtn.innerHTML = "Opening... 🤍";

    document.querySelector(".hero").style.transform = "scale(1.03)";

    openBtn.style.transform = "scale(0.95)";
    openBtn.style.opacity = "0.7";

    // ==========================
    // MUSIC FADE IN
    // ==========================

    audio.volume = 0;

    audio.play().catch(err => {
        console.log(err);
    });

    musicPlaying = true;

    if (musicBtn) {
        musicBtn.innerHTML = "⏸ Pause Music";
    }

    let volume = 0;

    const fadeMusic = setInterval(() => {

        volume += 0.05;

        audio.volume = Math.min(volume, 1);

        if (volume >= 1) {
            clearInterval(fadeMusic);
        }

    }, 120);

    // ==========================
    // CONFETTI
    // ==========================

    launchConfetti();

    // ==========================
    // SHOW SECTION
    // ==========================

    setTimeout(() => {

        sections.forEach((section, index) => {

            if (!section) return;

            setTimeout(() => {

                section.classList.remove("hidden");
                section.classList.add("show");

            }, index * 500);

        });

        const letter = document.getElementById("letter");

        if (letter) {
            letter.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 1000);

});

// ==============================
// Music
// ==============================

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        audio.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        musicPlaying = true;

    } else {

        audio.pause();

        musicBtn.innerHTML = "▶ Play Music";

        musicPlaying = false;

    }

});

// ==============================
// Music
// ==============================

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        audio.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        musicPlaying = true;

    } else {

        audio.pause();

        musicBtn.innerHTML = "▶ Play Music";

        musicPlaying = false;

    }

});

// ==============================
// Scroll Reveal
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

// ==============================
// Floating Hearts
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 12) + "px";
    heart.style.opacity = "0.9";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.bottom = "110vh";
        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 2500);

// ==============================
// Shooting Star
// ==============================

function shootingStar() {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "120px";
    star.style.height = "2px";

    star.style.background =
        "linear-gradient(to right, white, transparent)";

    star.style.top = Math.random() * 40 + "vh";
    star.style.left = "-150px";

    star.style.transform = "rotate(-25deg)";
    star.style.opacity = ".8";

    star.style.transition = "2s linear";

    star.style.zIndex = "5";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.left = "120vw";
        star.style.top = "70vh";

    }, 100);

    setTimeout(() => {

        star.remove();

    }, 2200);

}

setInterval(shootingStar, 6000);

// ==============================
// Confetti
// ==============================

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "🎊"][Math.floor(Math.random() * 3)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (12 + Math.random() * 18) + "px";

        confetti.style.transition = "4s linear";

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = "110vh";
            confetti.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 20);

        setTimeout(() => {

            confetti.remove();

        }, 4200);

    }

}

// ==============================
// Greeting
// ==============================

console.log("Happy Birthday 🤍");