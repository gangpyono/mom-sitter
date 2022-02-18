import englishSort from "../utils/sort/english.js";
import koreanSort from "../utils/sort/korean.js";
import numberSort from "../utils/sort/number.js";

export const firstEnglishSort = (a, b) => {
  const user1 = a.login;
  const user2 = b.login;

  return (
    // 영어,숫자,유니코드 순
    englishSort(user1, user2) ||
    numberSort(user1, user2) ||
    user1.charCodeAt(0) - user2.charCodeAt(0)
  );
};

export const firstKoreanSort = (a, b) => {
  const user1 = a.login;
  const user2 = b.login;

  return (
    // 한글,영어,숫자,유니코드 순
    koreanSort(user1, user2) ||
    englishSort(user1, user2) ||
    numberSort(user1, user2) ||
    user1.charCodeAt(0) - user2.charCodeAt(0)
  );
};
