const tabView = () => {
  const tabsContainer = document.createElement("div");
  tabsContainer.setAttribute("class", "tabsContainer");
  tabsContainer.innerHTML = ` 
  <button class="tab active">API</button>
  <button class="tab ">로컬</button>`;

  return tabsContainer;
};

export default tabView;
