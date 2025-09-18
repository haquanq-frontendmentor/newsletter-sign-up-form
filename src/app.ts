const subscriptionForm = document.querySelector(".subscription__form") as HTMLFormElement;

const emailInput = document.querySelector("#email-input") as HTMLInputElement;
const emailInputHint = document.querySelector("#email-input-hint") as HTMLInputElement;
const subscriptionCard = document.querySelector(".subscription") as HTMLElement;

const successCard = document.querySelector(".success") as HTMLElement;
const successDismissButton = document.querySelector(".success__dismiss-btn") as HTMLButtonElement;

subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value === "" || emailInput.validity.typeMismatch) {
        emailInputHint.textContent = "Please provide valid email";
        emailInput.setAttribute("aria-invalid", "true");
        emailInput.focus();
    } else {
        emailInput.value = "";
        emailInput.setAttribute("aria-invalid", "false");
        emailInputHint.textContent = "";

        subscriptionCard.setAttribute("hidden", "");
        successCard.removeAttribute("hidden");
    }
});

emailInput.addEventListener("input", () => {
    emailInputHint.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
});

successDismissButton.addEventListener("click", () => {
    successCard.setAttribute("hidden", "");
    subscriptionCard.removeAttribute("hidden");
});
