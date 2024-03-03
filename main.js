/*these code taken from anouthe source for animation */
const dynamicText = document.querySelector("h3 span");
const word = [
  "FullStack-mern-Developer",
  "Frontend Developer",
  "Web Developer",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentword = word[wordIndex];
  const currentchar = currentword.substring(0, charIndex);
  dynamicText.textContent = currentchar;

  if (!isDeleting && charIndex < currentword.length) {
    //if condition is true type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // if condition is true remove the previouse charecter
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();

/*these code taken from anouthe source for animation */

/*-----------------------------------------------------------------------*/

/* var typed= new typed(".text",{
    Strings:["FullStack Developer", "Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
 */
