function submitRating() {
    const name = document.getElementById("nameInput").value;
    let rating = document.getElementById("ratingInput").value;

    if (name.trim() === "") {
        alert("Please enter a name before submitting.");
        return;
    }

    rating = Number(rating);

    if (rating < 0 || rating > 5 || isNaN(rating)) {
        window.alert("Warning! Rating must be between 0 and 5. Setting to default 5");
        rating = 5;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    let stars = "";
    const filledStar = "&#x2605;";
    const unfilledStar = "&#x2606;";

    for (let i = 0; i < rating; i++) {
        stars += filledStar;
    }

    for (let i = 0; i < (5 - rating); i++) {
        stars += unfilledStar;
    }

    document.getElementById("last-updated-date").textContent = date;
    document.getElementById("last-updated-time").textContent = time;

    const ratingsList = document.getElementById("ratingsList");
    const newRatingItem = document.createElement("li");

    newRatingItem.innerHTML = `[${date} ${time}] <strong>${name}</strong> gave a rating of ${stars}`;
    ratingsList.appendChild(newRatingItem);

    document.getElementById("nameInput").value = "";
    document.getElementById("ratingInput").value = "";
}