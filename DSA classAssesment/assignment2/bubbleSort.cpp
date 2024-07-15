# include <iostream>
using namespace std;

void bubbleSort(int arr[], int size) {

  if (size == 1) {
    return;
  }

  for (int i = 0; i < size - 1; i++) {

    if (arr[i] > arr[i+1]) {
      int temp = arr[i];
      arr[i] = arr[i+1];
      arr[i + 1] = temp;
    }

  }

  return bubbleSort(arr, --size);

}

int main() {

  // int size;
  // cout << "Enter the size of the array: ";
  // cin >> size;


  // int arr[size];
  // for (int i = 0; i < size; i++) {
  //   int num;
  //   cout << "Enter the number of the index: " << i + 1 << " ";
  //   cin >> num;
  //   arr[i] = num;
  // }
  int arr[] = {1, 3, 5, 2, 9, 5, 0, 0};
  int size = sizeof(arr) / sizeof(arr[0]);
  bubbleSort(arr, size);

  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }


  return 0;
}