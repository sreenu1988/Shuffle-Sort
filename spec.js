//To test whether the cards are loaded.
const TotalNumberofCards = 9;
var cardsAfterShuffle;
function isMatching(x, y) {
   var matching = true;
   for (var i = 0; i < x.length; i++) {
      if (x[i].innerText !== y[i].innerText) {
         matching = false;
         break;
      }
   }
   return matching;
}
setTimeout(() => {
   console.log("1. Test Cards are loaded");
   var cards = document.getElementsByClassName("card-container")[0].getElementsByTagName("LI");
   var initialCards = [...cards];
   if (cards.length === TotalNumberofCards) {
      console.log("Passed, Cards are loaded.");
   } else {
      console.error("Failed, Cards are not loaded");
   }

   console.log("2. Test Shuffle function");
   var cardsBeforeShuffle = [...cards];
   document.getElementsByClassName("button-wrapper")[0].getElementsByTagName("BUTTON")[0].click();
   setTimeout(() => {
      var cardsAfterShuffle = document.getElementsByClassName("card-container")[0].getElementsByTagName("LI");
      if (!isMatching(cardsAfterShuffle, cardsBeforeShuffle)) {
         console.log("Passed, Cards are shuffled");
      }
      else {
         console.error("Failed, Cards are not properly shuffled");
      }

      console.log("3. Test Sort function");
      document.getElementsByClassName("button-wrapper")[0].getElementsByTagName("BUTTON")[1].click();
      setTimeout(() => {
         sortedCards = document.getElementsByClassName("card-container")[0].getElementsByTagName("LI");
         if (isMatching(sortedCards, initialCards)) {
            console.log("Passed, Cards are Sorted");
         }
         else {
            console.error("Failed, Cards are not sorted");
         }
      }, 1000);
   }, 1000);
}, 1000);
