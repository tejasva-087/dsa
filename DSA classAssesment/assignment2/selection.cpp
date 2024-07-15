# include <iostream>
using namespace std;

void selectionSort(int arr[], int size) {
	int minVal;

	// Outer loop
	for (int i = 0; i < size; i++) {

		minVal = i;

		// innerloop
		for (int j = i + 1; j < size; j++) {
			if (arr[j] < arr[minVal]) {
				minVal = j;
			}
		}

		int temp = arr[i];
		arr[i] = arr[minVal];
		arr[minVal] = temp;
	}
}

int main() {

	int arr[] = {4, 2, 6, 0, 9, 7, 8};
	int size = sizeof(arr) / sizeof(arr[0]);

	selectionSort(arr, size);
	return 0;
}