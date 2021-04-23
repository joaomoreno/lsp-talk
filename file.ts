class BinarySearchExample {
  binarySearch(arr: number[], first: number, last: number, key: number) {
    let mid = (first + last) / 2;

    while (first <= last) {
      if (arr[mid] < key) {
        first = mid + 1;
      } else if (arr[mid] == key) {
        console.log("✔ Found: " + mid);
        break;
      } else {
        last = mid - 1;
      }

      mid = (first + last) / 2;
    }

    if (first > last) {
      console.log("✖ Not found!");
    }
  }
}