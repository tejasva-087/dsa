# include <iostream>
using namespace std;

int linearSearch(int arr[], int size, int val) {
	for (int i = 0; i < size; i++) {
		if (arr[i] == val) {
			return i;
		}
	}

	return -1;
}

int linearSearch(int arr[], int ptr, int val) {
	if ()
}

int main() {
	int arr[] = {1, 3, 1, 5, 6, 12, 32, 24, 1};
	int size = sizeof(arr) / sizeof(arr[0]);
	cout << linearSearch(arr, size,12) << endl;
	return 0;
}