import headerView from "../views/headerView.js";
import tabView from "../views/tabView.js";
import searchView from "../views/searchView.js";
import listView from "../views/listView.js";

import userApi from "../apis/users.js";

import { getDB } from "../controllers/dbController.js";

import { firstEnglishSort, firstKoreanSort } from "../modules/searchSort.js";
import createItem from "../modules/createItem.js";

import setHeader from "../utils/setHeader.js";

const mainController = () => {
  const App = document.querySelector("#app");

  const headerEl = headerView();
  const tabsEl = tabView();
  const searchEl = searchView();
  const listEl = listView();

  App.appendChild(headerEl);
  App.appendChild(tabsEl);
  App.appendChild(searchEl);
  App.appendChild(listEl);

  //검색
  const searchBtn = document.querySelector(".searchBtn");
  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let localUsers = getDB("starUsers") || [];
    const searchTarget = document.querySelector(".tab.active");
    const keyword = document.querySelector(".searchInput").value;

    if (searchTarget.innerText === "API") {
      listEl.innerHTML = "";
      const res = await userApi.getUsers(keyword);

      const users = setHeader(res.items.sort(firstEnglishSort)); // 정렬,header 설정

      for (const user of users) {
        if (localUsers.some((localUser) => localUser.login === user.login)) {
          listEl.appendChild(createItem(user, true));
        } else {
          listEl.appendChild(createItem(user));
        }
      }
    }

    if (searchTarget.innerText === "로컬") {
      listEl.innerHTML = "";

      let searchedLocalUsers = localUsers
        .filter((localUser) => localUser.login.includes(keyword))
        .sort(firstKoreanSort);

      if (searchedLocalUsers.length !== 0) {
        searchedLocalUsers = setHeader(searchedLocalUsers);
      }

      for (const user of searchedLocalUsers) {
        listEl.appendChild(createItem(user, true));
      }
    }
  });

  // 탭 클릭시
  tabsEl.addEventListener("click", (e) => {
    const activeEl = document.querySelector(".tab.active");
    activeEl.classList.remove("active");
    e.target.classList.add("active");
  });
};

export default mainController;

// 핫모듈 설정 (구현 x)
if (module.hot) {
  console.log("핫모듈 on"); // 구현 x

  module.hot.accept("../views/headerView.js", () => {
    console.log("headerView 모듈 변경됨 controllor");
    App.appendChild(headerView());
  });

  module.hot.accept("../views/tabView.js", () => {
    console.log("tabView 모듈 변경됨");
  });

  module.hot.accept("../views/searchView.js", () => {
    console.log("tabView 모듈 변경됨");
  });

  module.hot.accept("../views/listView.js", () => {
    console.log("tabView 모듈 변경됨");
  });
}
