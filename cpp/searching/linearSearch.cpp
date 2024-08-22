# include <iostream>
using namespace std;

// BIG - O
// o(n)

int linearSearch(int arr[], int size ,int value) {
  for (int i = 0; i < size; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

int main() {
  int arr[]= {3, 5 ,22, 12, 43, 345, 65, 23};
  int size = sizeof(arr) / sizeof(arr[0]);

  cout << linearSearch(arr, size, 34) << endl;
  cout << linearSearch(arr, size, 345) << endl;
  return 0;
}