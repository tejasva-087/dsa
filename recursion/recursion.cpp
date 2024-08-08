# include <iostream>
using namespace std;

int factorial(int num) {
  if (num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}


int productOfArr(int arr[], int size , int ptr) {
  if (ptr == size - 1)  {
    return arr[size - 1];
  }
  return productOfArr(arr, size, ptr + 1) * arr[ptr];

}

int main() {
  int arr[] = {1, 2, 3, 4, 10, 5};
  cout << productOfArr(arr, 6, 0) << endl;
  return 0;
}