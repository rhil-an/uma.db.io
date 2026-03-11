//Profile.js serve 2 functions: make sure only 1 profile is open, fix animation bug (sometimes work, sometimes doesn't, also fix the no closing animation)

const detailsList = document.querySelectorAll("details");

detailsList.forEach(details => {
  const summary = details.querySelector("summary");
  const content = details.querySelector(".profile-content");

  summary.addEventListener("click", e => {
    e.preventDefault(); //ALWAYS stop default toggle (Instant Appear)

    //if already open, close with animation
    if (details.hasAttribute("open")) {

      content.style.animation = "shrink 0.4s ease forwards, fadeSlideOut 0.4s ease forwards";

      content.addEventListener("animationend", () => {
        details.removeAttribute("open");
        content.style.animation = "";
      }, { once: true });

    } 
    else {

      //close all others first
      detailsList.forEach(other => {
        if (other !== details && other.hasAttribute("open")) {
          other.removeAttribute("open");
        }
      });

      //open
      details.setAttribute("open", "");
      content.style.animation = "expand 0.4s ease forwards, fadeSlideIn 0.4s ease forwards";
    }

  });
});