# include <iostream>
using namespace std;

void quickSort(int arr[], int start, int end) {
  if (start >= end) {
    return;
  }

  int pivot = end;
  int index = start - 1;

  for (int i = start; i <= end; i++) {
    if (arr[i] <= arr[pivot]) {
      index++;
      int temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

int main() {
  int arr[] = {1, 12, 15, 6, 2238, 9, 110, 12, 135};
	int size = sizeof(arr) / sizeof(arr[0]);

	for (int i = 0; i < size; i++) {
    	cout << arr[i] << " ";
	}
  cout << endl;

  quickSort(arr, 0, size - 1);

  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
  return 0;
}
