# include <iostream>
using namespace std;

// BIG - O
// o(n^2)

void insertionSort(int arr[], int size) {
  int temp;

  for (int i = 1; i < size; i++) {

    for (int j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }

  }
}


int main() {
  int arr[]= {3, 5 ,22, 12, 43, 345, 65, 23};
  int size = sizeof(arr) / sizeof(arr[0]);
   insertionSort(arr, size);
  for (int i = 0; i < size; i++) {
    cout << arr[i] << "|";
  }
  return 0;
}