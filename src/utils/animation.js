function starEffect() {
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const starCount = 10;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            blinkOpacity: Math.random(),
            blinkSpeed: Math.random() * 0.02 + 0.01,
        });
    }

    function updateStars() {
        stars.forEach((star) => {
            star.x += star.speedX;
            star.y += star.speedY;

            if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
            if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

            star.blinkOpacity += star.blinkSpeed;
            if (star.blinkOpacity >= 1 || star.blinkOpacity <= 0) {
                star.blinkSpeed *= -1;
            }
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.blinkOpacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "white";
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function animate() {
        updateStars();
        drawStars();
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animate();


}

export { starEffect }