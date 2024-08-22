# include <iostream>
using namespace std;

// big o
// O(n^2)

void quickSort(int arr[], int start, int end) {
	if (start >= end) {
		return;
	}

	int pivot = end;
	int index = start - 1;
	int temp;

	for (int i = start; i <= end; i++) {
		if (arr[i] <= arr[pivot]) {
			index++;
			temp = arr[index];
			arr[index] = arr[i];
			arr[i] = temp; 
		}
	}
	quickSort(arr, start, index - 1);
	quickSort(arr, index + 1, end);
}

int main() {
  int arr[]= {3, 5 ,22, 12, 4, 3, 65, 211111};
  int size = sizeof(arr) / sizeof(arr[0]);
  quickSort(arr, 0, size - 1);
  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}