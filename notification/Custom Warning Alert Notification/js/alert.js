"use strict";

const btnWarning = document.querySelector(".btn-warning");
const btnClose = document.querySelector(".alert-warning .alert__close-btn");
const alertWarning = document.querySelector(".alert-warning");
const alertProgressbar = document.querySelector(
  ".alert-warning .alert__progressbar"
);

const ALERT_TIMEOUT = 5000;
const ALERT_TIMEOUT_IN_SECONDS = ALERT_TIMEOUT / 1000 + "s";

let alertTimeout = null;

const alertClose = () => {
  alertWarning.classList.remove("alert_active");
  alertWarning.style.animationName = "show_slide";
  btnWarning.removeAttribute("disabled");
  init();
};

const init = () => {
  alertProgressbar.style.animationDuration = ALERT_TIMEOUT_IN_SECONDS;
};

btnWarning.addEventListener("click", () => {
  btnWarning.setAttribute("disabled", "");
  alertWarning.classList.add("alert_active");
  alertWarning.style.animationName = "show_slide";

  //if (!alertTimeout) {
  let alertTimeout = setTimeout(() => {
    //if (!alertTimeout) {
    alertWarning.style.animationName = "hide_slide";
    //setTimeout(alertClose, ALERT_TIMEOUT + 1000);
    //clearTimeout(alertTimeout);
    //alertTimeout = null;
    //}
  }, ALERT_TIMEOUT);
  setTimeout(alertClose, ALERT_TIMEOUT + 1000);
  //}
});
/*
btnClose.addEventListener("click", () => {
  if (alertTimeout) {
    clearTimeout(alertTimeout);
    alertTimeout = null;
  }

  alertWarning.classList.remove("alert_active");
  //alertWarning.style.animationName = "show_slide";
  alertWarning.style = "";
  btnWarning.removeAttribute("disabled");
});
*/
init();
