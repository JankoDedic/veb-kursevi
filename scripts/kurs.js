$(function () {
  $("#accordion").accordion();

  const wishlistButton = document.getElementById("wishlist");
  const initialBackground = wishlistButton.style.backgroundColor;

  let addedToWishlist = false;

  $("#wishlist").click(function () {
    if (!addedToWishlist) {
      this.childNodes[0].nodeValue = "Ukloni iz liste želja";
      this.style.backgroundColor = "transparent";
      this.style.color = "white";
    } else {
      this.childNodes[0].nodeValue = "Dodaj u listu želja";
      this.style.backgroundColor = initialBackground;
      this.style.color = "black";
    }
    addedToWishlist = !addedToWishlist;
  });
});
