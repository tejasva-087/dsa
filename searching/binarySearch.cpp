# include <iostream>
using namespace std;

int binarySearchLoop(int arr[], int size, int val) {
	int leftPtr = 0;
	int rightPtr = size - 1;

	while (leftPtr <= rightPtr) {
		int midPtr = (rightPtr + leftPtr) / 2;
		int midVal = arr[midPtr];

		if (midVal == val) {
			return midPtr;
		} else if (val < midVal) {
			rightPtr = midPtr - 1;
		} else {
			leftPtr = midPtr + 1;
		}
	}
	return -1;
}

int binarySearch(int arr[], int val, int leftPtr, int rightPtr) {
	if (leftPtr > rightPtr) return -1;

	int midPtr = (leftPtr + rightPtr) / 2;
	int midVal = arr[midPtr];

	if (midVal == val) {
		return midPtr;
	} else if (val < midVal) {
		return binarySearch(arr, val, leftPtr, midPtr);
	} else {
		return binarySearch(arr, val, midPtr + 1, rightPtr + 1);
	}
}

int main() {
	int arr[] = {1, 2, 5, 6, 8, 9, 10, 12, 15};
	int size = sizeof(arr) / sizeof(arr[0]);
	cout << binarySearch(arr, 8, 0, size - 1) << endl;
	return 0;
}