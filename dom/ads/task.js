const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
  const cases = Array.from(rotator.querySelectorAll(".rotator__case"));
  let currentCaseIndex = 0;

  function switchCase() {
    cases[currentCaseIndex].classList.remove("rotator__case_active");

    currentCaseIndex = (currentCaseIndex + 1) % cases.length;

    cases[currentCaseIndex].classList.add("rotator__case_active");
  }

  setInterval(switchCase, 1000);
});