# include <iostream>
using namespace std;

// BIG - O
// o(n)

// ITERATIVE
int binarySearchIterative(int arr[], int size, int value) {
  int start = 0;
  int end = size - 1;
  int middle;
  int midVal;

  while (start <= end) {
    middle = (start + end) / 2;
    midVal = arr[middle];

    if (midVal == value) {
      return middle;
    } else if (value > midVal) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

int binarySearchRecursive(int arr[], int start, int end, int value) {
  if (start > end) {
    return -1;
  }

  int middle = (start + end) / 2;

  if (arr[middle] == value) {
    return middle;
  } else if (value > arr[middle]) {
    return binarySearchRecursive(arr, middle + 1, end, value);
  } else {
    return binarySearchRecursive(arr, start, middle - 1, value);
  }
}
s

int main() {
  int arr[]= {3, 5 ,22, 122, 143, 345, 625, 2304};
  int size = sizeof(arr) / sizeof(arr[0]);

  cout << binarySearchRecursive(arr, 0, size - 1, 3) << endl;
  cout << binarySearchRecursive(arr, 0, size - 1, 345) << endl;
  return 0;
}