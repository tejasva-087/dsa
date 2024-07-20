# include <iostream>
using namespace std;

void insertionSort(int arr[], int size) {
	for (int i = 1; i < size; i++) {

		int element = i;

		while (element >= 0) {

			if (arr[element] < arr[element - 1]) {

				int temp = arr[element];
				arr[element] = arr[element - 1];
				arr[element - 1] = temp;
			} else {
				break;
			}

			element--;
		}
	}
}

int main() {

	int arr[] = {12, 3, 5, 1, 9, 8};
	int size = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, size);

	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
	}
}
