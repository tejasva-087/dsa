# include <iostream>
using namespace std;

int binarySearch(int sortedArr[], int size, int value) {
  int start = 0, end = size - 1;
  // C++ DOES FLOOR DIVISION BY ITSELF FOR INTEGERS;
  while (start <= end) {
    int middle = (start + end) / 2;
    int middleValue = sortedArr[middle];
    if (middleValue == value) {
      cout << "Value found at index: " << middle << endl;
      return middle;
    } else if (middleValue > value) {  
      // Always remember we anr not in if block here here we need to check if middleValue is not greater then the given value
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  cout << "Value not found in the array" << endl;
  return -1;
}

int main() {
  int size;
  cout << "Enter the size of the array: ";
  cin >> size;
  int sortedArr[size];
  for (int i = 0; i < size; i++) {
    int num;
    cout << "Enter the number of the index: " << i + 1 << " ";
    cin >> num;
    sortedArr[i] = num;
  }
  int value;
  cout << "Enter the value to be searched: ";
  cin >> value;
  binarySearch(sortedArr, size, value);
  return 0;
}