const fetchRated = async () => {
  const res = await fetch("./assets/rated.json");
  const data = await res.json();
  return data;
};
const fetchComment = async () => {
  const res = await fetch("./assets/comment.json");
  const data = await res.json();
  return data;
};

fetchRated()
  .then((data) => {
    console.log(data);
    data.forEach((e, i) => {
      const rated = document.createElement("div");
      rated.classList.add("contain__rated");
      rated.classList.add(`contain__rated-${i}`);
      const spanStars = document.createElement("span");
      spanStars.classList.add("contain__rated__stars");
      for (let i = 0; i < e.stars; i++) {
        const star = document.createElement("img");
        star.classList.add("contain__rated__star");
        star.setAttribute("src", "./assets/images/icon-star.svg");
        star.setAttribute("alt", "icon-star");
        spanStars.appendChild(star);
      }
      const textRated = document.createTextNode(` `);
      const spanName = document.createElement("span");
      spanName.classList.add("contain__rated__name");
      spanName.textContent = `Rated ${e.stars} Stars in ${e.name}`;
      rated.appendChild(spanStars);
      rated.appendChild(textRated);
      rated.appendChild(spanName);
      document.querySelector(".contain__rated-dynamic").appendChild(rated);
    });
  })
  .catch((error) => {
    console.error("Erro ao buscar os dados:", error);
  });
fetchComment().then((data) => {
  data.forEach((e, i) => {
    const cardComment = document.createElement("div");
    cardComment.classList.add(`contain__card`);
    cardComment.classList.add(`contain__card-${i}`);
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", e.profile_image);
    cardImage.setAttribute("alt", `image-${e.name}`);
    cardImage.classList.add("contain__comment__image");
    const cardName = document.createElement("h2");
    cardName.classList.add("contain__comment__name");
    cardName.textContent = e.name;
    const verifyComment = document.createElement("h3");
    verifyComment.classList.add("contain__comment__verify");
    verifyComment.textContent = e.verify
      ? "Verified Buyer"
      : "Not Verified Buyer";
    const commentText = document.createElement("p");
    commentText.classList.add("contain__comment__text");
    commentText.textContent = `" ${e.text} "`;
    const cardDescribeProfile = document.createElement("div");
    cardDescribeProfile.classList.add("contain__comment__describe");
    const cardDescribeText = document.createElement("div");
    cardDescribeText.classList.add("contain__comment__describe__text");
    cardDescribeText.appendChild(cardName);
    cardDescribeText.appendChild(verifyComment);
    cardDescribeProfile.appendChild(cardImage);
    cardDescribeProfile.appendChild(cardDescribeText);
    cardComment.appendChild(cardDescribeProfile);
    cardComment.appendChild(commentText);
    document.querySelector(".contain__bottom-dynamic").appendChild(cardComment);
  });
});
