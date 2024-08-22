# include <iostream>
using namespace std;

// BIG - O
// o(n^2)

void selectionSort(int arr[], int size) {
  int minValIndex;
  int temp;

  for (int i = 0; i < size; i++) {
    minValIndex = i;

    for (int j = i + 1; j < size; j++) {
      if (arr[j] < arr[minValIndex]) {
        minValIndex = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[minValIndex];
    arr[minValIndex] = temp;
  }
}


int main() {
  int arr[]= {3, 5 ,22, 12, 43, 345, 65, 23};
  int size = sizeof(arr) / sizeof(arr[0]);
   selectionSort(arr, size);
  for (int i = 0; i < size; i++) {
    cout << arr[i] << "|";
  }
  return 0;
}