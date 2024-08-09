# include <iostream>
using namespace std;

int linearSearchForLoop(int arr[], int size, int val) {
	for (int i = 0; i < size; i++) {
		if (arr[i] == val) {
			return i;
		}
	}

	return -1;
}

int linearSearch(int arr[], int size, int val, int ptr = 0) {
	if (ptr == size - 1) {
    return -1;
  }
  if (arr[ptr] == val) {
    return ptr;
  }
  return linearSearch(arr, size, val, ++ptr);
}

int main() {
	int arr[] = {1, 3, 1, 5, 6, 12, 32, 24, 1};
	int size = sizeof(arr) / sizeof(arr[0]);
	cout << linearSearch(arr, size,122) << endl;
	return 0;
}