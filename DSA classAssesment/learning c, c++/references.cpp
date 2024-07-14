# include <iostream>
using namespace std;

int main() {
  // A reference is an alias for a variable. (like another name for a variable)
  int a = 10;
  int &ref = a;  // reference of a
  // Modyfying the reference or the original variable will modify the both the variables.
  // this is because the refrerence variable is not storing the copy of the variable
  // instead it is storing the memory address of that variable.
  // so here ref = a = 10;
  cout << a << endl;
  cout << ref << endl;

  // Getting the memory location of the variable
  int z = 12;
  cout << &z << endl;

  // A reference can not be null, it must be initialized when declared.
  // int &ref; // This will give an error
  // int &ref1 = 10; // This will also give an error
  int &ref1 = z; // This is correct
  return 0;
}