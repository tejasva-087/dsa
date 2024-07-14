# include <iostream>
using namespace std;

bool helperFunction(int arr[],int start, int end, int value) {
    if (start <= end) {
      int middle = start+end;
      int midValue = arr[middle];
      if ( midValue == value) {
        return true;
      } else if (value < arr[midValue] ) {
        return helperFunction(arr, start, middle - 1, value);
      } else {
        return helperFunction(arr, middle + 1, end, value);
      }
    } else {
      return false;
    }
}

bool binarySearch(int arr[], int size ,int value) {
  return helperFunction(arr, 0, size - 1, value);
}

int main() {
  int arr[] = {1, 2, 5, 7, 10};
  int value = 1;
  cout << binarySearch(arr, 5, value) << endl;
  return 0;
}
