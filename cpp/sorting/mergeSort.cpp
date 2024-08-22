# include <iostream>
using namespace std;

// big o
// O(n^2)

void merge(int arr[], int start, int middle, int end) {
	int leftArrSize = middle - start + 1;
	int rightArrSize = end - middle;

	int leftArr[leftArrSize];
	int rightArr[rightArrSize];

	int leftPtr = 0;
	int rightPtr = 0;
	int mergePtr = start;

	for (int i = start; i <= end; i++) {
		if (i <= middle) {
			leftArr[leftPtr] = arr[i];
			leftPtr++;
		} else {
			rightArr[rightPtr] = arr[i];
			rightPtr++;
		}
	}

	leftPtr = 0;
	rightPtr = 0;


	while (leftPtr < leftArrSize && rightPtr < rightArrSize) {
		if (leftArr[leftPtr] < rightArr[rightPtr]) {
			arr[mergePtr] = leftArr[leftPtr];
			leftPtr++;
		} else {
			arr[mergePtr] = rightArr[rightPtr];
			rightPtr++;
		}
		mergePtr++;
	}

	while (rightPtr < rightArrSize) {
		arr[mergePtr] = rightArr[rightPtr];
		rightPtr++;
		mergePtr++;
	}

	while (leftPtr < leftArrSize) {
		arr[mergePtr] = leftArr[leftPtr];
		leftPtr++;
		mergePtr++;
	}
}

void mergeSort(int arr[], int start, int end) {
	if (start >= end) {
		return;
	}

	int middle = start + (end - start) / 2;

	mergeSort(arr, start, middle);
	mergeSort(arr, middle + 1, end);

	merge(arr, start, middle, end);
}

int main() {
  int arr[]= {3, 5 ,22, 12, 4, 3, 65, 211111};
  int size = sizeof(arr) / sizeof(arr[0]);
  mergeSort(arr, 0, size - 1);
  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}