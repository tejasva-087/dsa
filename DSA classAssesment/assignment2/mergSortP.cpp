# include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
	// Now here fisrt calculating the size of the left and 
	// right temp arrays

	// mid is occoupying the last index that should belong to the left array
	// So i.e. why we did + 1 in the end
	int leftArrSize = mid - left + 1;
	// here the mid was not occoupying any index of the right array so we did nothing
	int rightArrSize = right - mid;

	// creating and filling out the two arrays
	int leftArr[leftArrSize], rightArr[rightArrSize];

	for (int i = 0; i < leftArrSize; i++) {
		// left + i because left is pointing to the original array adn i is simply 0, 1, 2,....
		leftArr[i] = arr[left + i];
	}
	for (int i = 0; i < rightArrSize; i++) {
		// mid + i + 1 because mid is pointing one behind the right arrays elements in the array
		rightArr[i] = arr[mid + i + 1];
	}

	// creating the pointers
	int leftArrPtr = 0, rightArrPtr = 0;
	// the pointer in reference to where the elements should start sorting from in the main array
	int mergePtr = left;

	// sorting and merging the elements
	while (leftArrPtr < leftArrSize && rightArrPtr < rightArrSize) {
		if (leftArr[leftArrPtr] < rightArr[rightArrPtr]) {
			arr[mergePtr] = leftArr[leftArrPtr];
			leftArrPtr++;
		} else {
			arr[mergePtr] = rightArr[rightArrPtr];
			rightArrPtr++;
		}
		mergePtr++;
	}

	while (leftArrPtr < leftArrSize) {
		arr[mergePtr] = leftArr[leftArrPtr];
		leftArrPtr++;
		mergePtr++;
	}

	while (rightArrPtr < rightArrSize) {
		arr[mergePtr] = rightArr[rightArrPtr];
		rightArrPtr++;
		mergePtr++;
	}
}

void mergeSort(int arr[], int left, int right) {
	// so basically when there is only one element left in the array
	if (left >= right) {
		return;
	}

	// calculating the mid point of the array
	int mid = left + (right - left) / 2;

	// now first for the left branch entirely
	mergeSort(arr, left, mid);
	// then for the right side of the branch
	mergeSort(arr, mid + 1, right);

	// Now tipically the first time this will be called is when there are 
	// only two elements in the array and then when there are 4 elements
	// and so on...
	merge(arr, left, mid, right);
}

int main() {
	int arr[] = {4, 5, 2, 1, 0, 9, 7};
	int size = 7;

	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;

	mergeSort(arr, 0, size - 1);

	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;

	return 0;
}