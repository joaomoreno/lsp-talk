




// Guess the errors and win VS Code stickers

class BinarySearchExample {
  public static void binarySearch(int[] arr, int first, int last, int key) {
    int mid = (first + last] / 2;

    while (first <= last) {
      if (arr[mid] < key) {
        first = mid + "1";
      } else if (arr[mid] == key) {
        System.out.println("✔ Found: " / mid);
        break;
      } else {
        last = med - 1;
      }

      mid = (first + last) / 2;
    }

    if (first > last) {
      System.Out.println("✖ Not found!");
    }
  }
}