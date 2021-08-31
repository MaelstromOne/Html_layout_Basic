const TABS_SELECTOR = '.how-working__step';
const CONTENT_SELECTOR = '.how-working__body';

const TABS_ACTIVE = "how-working__step_selected";
const CONTENT_ACTIVE = "how-working__body_active";

const tabs = document.querySelectorAll(TABS_SELECTOR);
const contents = document.querySelectorAll(CONTENT_SELECTOR);

tabs.forEach((el) => {
  el.addEventListener("click", function (event) {
    const target = event.currentTarget;
    const path = target.dataset.path;

    tabs.forEach((el) => {
      el.classList.remove(TABS_ACTIVE)
    })
    target.classList.add(TABS_ACTIVE);

    contents.forEach((el) => {
      el.classList.remove(CONTENT_ACTIVE)
    })
    document.querySelector(`[data-target=${path}]`).classList.add(CONTENT_ACTIVE)
  });
});
