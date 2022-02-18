const koreanSort = (a, b) => {
  // 1. 한글 정렬
  // 44032 : "가",
  // 55203 : "힣",
  if (
    a.charCodeAt(0) >= 44032 &&
    a.charCodeAt(0) <= 55203 &&
    b.charCodeAt(0) >= 44032 &&
    b.charCodeAt(0) <= 55203
  ) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  }
  //1.1 하나만 한글일경우 앞으로 보내기.
  if (a.charCodeAt(0) >= 44032 && a.charCodeAt(0) <= 55203) {
    return -1;
  }

  if (b.charCodeAt(0) >= 44032 && b.charCodeAt(0) <= 55203) {
    return 1;
  }
  return false;
};

export default koreanSort;
