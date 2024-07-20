# include <iostream>
using namespace std;

void quickSort(int arr[], int leftStart, int rightEnd) {
	if (leftStart >= rightEnd) {
		return;
	}

	int i = -1, pivot = rightEnd;

	for (int j = 0; j <= rightEnd; j++) {
		if (arr[j] <= arr[pivot]) {
			i++;
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	pivot = i;

	quickSort(arr, leftStart, pivot - 1);
	quickSort(arr, pivot + 1, rightEnd);
}

int main() {
	int arr[] = {4, 9, 6, 10, 0, 5, 3};
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