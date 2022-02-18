import userApi from "../apis/users.js";

import { getDB } from "../controllers/dbController.js";

import { firstEnglishSort, firstKoreanSort } from "../modules/searchSort.js";
import createItem from "../modules/createItem.js";

import setHeader from "../utils/setHeader.js";

const searchView = () => {
  const listContainer = document.querySelector(".listContainer");
  const searchBtn = document.querySelector(".searchBtn");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let localUsers = getDB("starUsers") || [];
    const searchTarget = document.querySelector(".tab.active");
    const keyword = document.querySelector(".searchInput").value;

    if (searchTarget.innerText === "API") {
      listContainer.innerHTML = "";
      const res = await userApi.getUsers(keyword);

      const users = setHeader(res.items.sort(firstEnglishSort)); // 정렬,header 설정

      for (const user of users) {
        if (localUsers.some((localUser) => localUser.login === user.login)) {
          listContainer.appendChild(createItem(user, true));
        } else {
          listContainer.appendChild(createItem(user));
        }
      }
    }

    if (searchTarget.innerText === "로컬") {
      listContainer.innerHTML = "";

      let searchedLocalUsers = localUsers
        .filter((localUser) => localUser.login.includes(keyword))
        .sort(firstKoreanSort);

      if (searchedLocalUsers.length !== 0) {
        searchedLocalUsers = setHeader(searchedLocalUsers);
      }

      for (const user of searchedLocalUsers) {
        listContainer.appendChild(createItem(user, true));
      }
    }
  });
};

export default searchView;
