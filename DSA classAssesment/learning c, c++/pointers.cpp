# include <iostream>
using namespace std;

int main() {
  // pointers are variables that store the memory address of another variable.
  // reference points towards the memory address that another variable points to.
  int x = 10;
  int *y = &x; // the pointer stores the memory address of the original variable
  cout << x << endl;
  cout << y << endl;
  cout << &y << endl; // This is the box where the pointer's memory address is stored

  // A pointer can be null, it cam be declared.
  // We can change the pointer, but not reference
  // eg:
  int var1 = 10;
  int var2 = 23;
  int* ptr1 = &var1;
  ptr1 = &var2; // totally valid, but this is not valid for references

  // Using pointers with arrays
  // no since arrays itself are the memory address of the first element in them
  // so we dont use references with them
  // eg:
  int arr[] = {1, 4, 1, 12, 13};
  int* arrPtr = arr; // This do not give any error

  // looping using pointer
  // so pointer in array is simpply the memory address of the first location
  // now we know that the other elements are stored in subsiquent arrays 
  // so we can point through them by adding one to the pointer
  // eg:
  for (int i = 0; i < 5; i++)  {
    cout << *arrPtr << endl;
    arrPtr += 1;
  }
  
  return 0;
}