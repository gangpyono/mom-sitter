const tabView = () => {
  const tabsContainer = document.querySelector(".tabsContainer");

  tabsContainer.addEventListener("click", (e) => {
    const activeEl = document.querySelector(".tab.active");
    activeEl.classList.remove("active");
    e.target.classList.add("active");
  });
};

export default tabView;
