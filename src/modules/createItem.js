import { setDB, getDB } from "../controllers/dbController";

const createItem = (user = {}, isLocal = false) => {
  const itemContainer = document.createElement("li");
  itemContainer.setAttribute("class", "itemContainer");

  // console.log(user.header);
  if (user.hasOwnProperty("header")) {
    const header = document.createElement("h3");
    header.innerText = user.header;
    itemContainer.appendChild(header);
  }

  const itemContent = document.createElement("div");
  itemContent.setAttribute("class", "itemContent");
  itemContent.innerHTML = `
  <img
  src=${user.avatar_url}
  alt="profileImg"
  class="userProfileImg"
  />
  <span class="userName">${user.login}</span>`;

  const starBtn = document.createElement("button");
  starBtn.setAttribute("class", "starBtn");

  const starIcon = document.createElement("i");
  starIcon.setAttribute("class", "fa-solid fa-star");
  if (isLocal) starBtn.classList.add("active");

  starBtn.appendChild(starIcon);
  itemContent.appendChild(starBtn);

  starBtn.addEventListener("click", () => {
    starBtn.classList.toggle("active");
    let localUsers = getDB("starUsers") || [];

    if (starBtn.classList.contains("active")) {
      const userInfo = {
        avatar_url: user.avatar_url,
        login: user.login,
      };
      localUsers.push(userInfo);
      setDB("starUsers", localUsers);
    } else {
      setDB(
        "starUsers",
        localUsers.filter((localUser) => localUser.login !== user.login)
      );
    }
  });

  itemContainer.appendChild(itemContent);

  return itemContainer;
};

export default createItem;
