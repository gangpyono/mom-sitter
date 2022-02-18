const searchView = () => {
  const formContainer = document.createElement("form");
  formContainer.setAttribute("class", "formContainer");
  formContainer.innerHTML = `<input
        class="searchInput"
        type="text"
        placeholder="검색어를 입력하세요"
        />
        <button class="searchBtn">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>`;

  return formContainer;
};

export default searchView;
