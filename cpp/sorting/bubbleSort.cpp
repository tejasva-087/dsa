# include <iostream>
using namespace std;

// big o
// O(n^2)

void bubbleSort(int arr[], int size) {
  int temp;
  bool ifSwapped = false;

  for (int i = size - 1; i > 0; i--) {
    for (int j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        ifSwapped = true;
      }
    }
    if (!ifSwapped) {
      return;
    }
    ifSwapped = false;
  }
}

int main() {
  int arr[]= {3, 5 ,22, 12, 4, 3, 65, 211111};
  int size = sizeof(arr) / sizeof(arr[0]);
  bubbleSort(arr, size);
  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}