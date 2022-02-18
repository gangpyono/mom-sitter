import tabView from "../views/tabView.js";
import searchView from "../views/searchView.js";

const mainController = () => {
  tabView();
  searchView();
};

export default mainController;

// if (module.hot) {
//   // console.log("핫모듈 on");

//   module.hot.accept("../views/tabView.js", () => {
//     tabView();
//   });

//   module.hot.accept("../views/searchView.js", () => {
//     searchView();
//   });
// }
