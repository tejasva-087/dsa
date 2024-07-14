#include <iostream>
using namespace std;

int linearSearch(int numsArr[], int size, int val) {
  for (int i = 0; i < size; i++)  {
    if (numsArr[i] == val) {
      cout << "Value found at index: " << i << endl;
      return 1;
    }
  }
  cout << "Value not found in the array" << endl;
  return -1;
};

int main() {
  int size;
  cout << "Enter the size of the array: ";
  cin >> size;
  int arr[size];
  for (int i = 0; i < size; i++) {
    int num;
    cout << "Enter the number of the index: " << i + 1 << " ";
    cin >> num;
    arr[i] = num;
  }
  int value;
  cout << "Enter the value to be searched: ";
  cin >> value;
  linearSearch(arr, size, value);
  return 0;
}