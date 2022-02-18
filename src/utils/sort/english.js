const englishSort = (a, b) => {
  //1. 영어 정렬(사전순)
  if (
    a.charCodeAt(0) >= 65 &&
    a.charCodeAt(0) <= 122 &&
    b.charCodeAt(0) >= 65 &&
    b.charCodeAt(0) <= 122
  ) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  }
  // 1.1 하나만 영어일경우 앞으로.
  if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 122) {
    return -1;
  }
  if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 122) {
    return 1;
  }

  return false;
};

export default englishSort;
