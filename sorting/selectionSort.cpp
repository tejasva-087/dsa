# include <iostream>
using namespace std;

void selectionSort(int arr[], int size) {
	for (int i = 0; i < size; i++) {
		for (int j = i + 1; j < size; j++) {
			if (arr[i] > arr[j + 1]) {
				int temp = arr[i];
				arr[i] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

int main() {
	int arr[] = {1, 12, 15, 6, 2238, 9, 110, 12, 135};
	int size = sizeof(arr) / sizeof(arr[0]);

	for (int i = 0; i < size; i++) {
    	cout << arr[i] << " ";
	}

  	cout << endl;

  	selectionSort(arr, size);

  	for (int i = 0; i < size; i++) {
    	cout << arr[i] << " ";
  	}

	return 0;
}