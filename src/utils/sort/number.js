const numberSort = (a, b) => {
  // 2. 숫자 정렬
  //2-1. 둘다 숫자일시 오름차순으로.
  if (
    a.charCodeAt(0) >= 48 &&
    a.charCodeAt(0) <= 57 &&
    b.charCodeAt(0) >= 48 &&
    b.charCodeAt(0) <= 57
  ) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  }

  //2-2. 하나만 숫자일경우 뒤로보내기.
  if (a.charCodeAt(0) >= 48 && a.charCodeAt(0) <= 57) {
    console.log(a, b);
    return 1;
  }
  if (b.charCodeAt(0) >= 48 && b.charCodeAt(0) <= 57) {
    console.log(a, b);
    return -1;
  }
  return false;
};

export default numberSort;
