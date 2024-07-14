# include <iostream>
using namespace std;
void defaultValueFunction(int a, int b = 10, int c = 20) {
  cout << a << endl;
  cout << b << endl;
  cout << c << endl;
};

int main() {
  defaultValueFunction(1);
  return 0;
}