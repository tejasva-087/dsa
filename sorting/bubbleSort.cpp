# include <iostream>
using namespace std;


void bubbleSort(int arr[], int size) {
  bool swapped = false;

  for (int i = size; i > 0; i--) {
    for (int j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
    swapped = false;
  }

}

int main() {
  int arr[] = {1, 12, 15, 6, 2238, 9, 110, 12, 135};
	int size = sizeof(arr) / sizeof(arr[0]);

  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }

  cout << endl;

  bubbleSort(arr, size);

  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  
  return 0;
}