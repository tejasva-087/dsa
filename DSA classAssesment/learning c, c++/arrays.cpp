# include <iostream>
# include <array>

using namespace std;

int main() {
  // Here in the below code the size is automatically calculated
  int nums1[] = {1123712191, 2, 3, 4, 5};
  cout << nums1 << endl; // the array itself is a memory address of the first element in it.
  cout << nums1[2] << endl;

  // Here in the below code the size is explicitly mentioned
  int size = 5;
  int nums2[size];  // now here we can not assign the array values like above
  // We have to assign the values one by one lets do it using a for loop
  // for (int i = 0; i < size; i++)  {
  //   cout << "Enter the value for index " << i + 1 << ": ";
  //   cin >> nums2[i];
  // }

  // for (int i = 0; i < size; i++) {
  //   cout << nums2[i] << endl;
  // }

  // GETTING THE SIZE OF ARRAY using sizeof() method
  // This method returns the amount of bytes the memory is using to store a perticular value
  cout << sizeof(nums1) << endl;  // 20 (4 bytes for each integer)

  // FOR c styled
  cout << sizeof(nums1) / sizeof(nums1[0]) << endl;  // 5 (20 / 4)


  return 0;
}