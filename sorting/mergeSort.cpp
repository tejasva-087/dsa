# include <iostream>
using namespace std;

void merge(int arr[], int start, int mid, int end) {
  int leftArrSize = mid - start + 1;
  int rightArrSize = end - mid;

  int leftArr[leftArrSize];
  int rightArr[rightArrSize];

  for (int i = 0; i < leftArrSize; i++) {
    leftArr[i] = arr[i + start];
  }

  for (int i = 0; i < rightArrSize; i++) {
    rightArr[i] = arr[i + mid + 1];
  }

  int leftPtr = 0;
  int rightPtr = 0;
  int mergePtr = start;

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

  while (leftPtr < leftArrSize) {
    arr[mergePtr] = leftArr[leftPtr];
    leftPtr++;
    mergePtr++;
  }

  while (rightPtr < rightArrSize) {
    arr[mergePtr] = rightArr[rightPtr];
    rightPtr++;
    mergePtr++;
  }
}


void mergeSort(int arr[], int start, int end) {
  if (start >= end) {
    return;
  }

  int mid = start + (end - start) / 2;

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

int main() {
  int arr[] = {5, 3, 1, 0, 8, 6, 12, 23, 0, 9};
  int size = sizeof(arr) / sizeof(arr[0]);
for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }

  cout << endl;

  mergeSort(arr, 0, size - 1);
   for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}