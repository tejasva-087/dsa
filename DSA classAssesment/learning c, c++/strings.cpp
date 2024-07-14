# include <iostream>
using namespace std;

int main() {
  string str = "This is a string";
  str[2] = 'R';
  cout << str << endl;
  // We can use .length() or .size() to get the size of the string
  cout << str.size() << endl;
  cout << str.length() << endl;
  return 0;
}