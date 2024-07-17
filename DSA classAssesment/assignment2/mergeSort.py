def merge(left_arr, right_arr, arr):
	left_arr_ptr = right_arr_ptr = arr_ptr = 0

	while (left_arr_ptr < len(left_arr)) and (right_arr_ptr < len(right_arr)):

		if left_arr[left_arr_ptr] > right_arr[right_arr_ptr]:
			arr[arr_ptr] = right_arr[right_arr_ptr]
			right_arr_ptr += 1

		else: 
			arr[arr_ptr] = left_arr[left_arr_ptr]
			left_arr_ptr += 1

		arr_ptr += 1

	while left_arr_ptr < len(left_arr):
		arr[arr_ptr] = left_arr[left_arr_ptr]
		left_arr_ptr += 1
		arr_ptr += 1

	while right_arr_ptr < len(right_arr):
		arr[arr_ptr] = right_arr[right_arr_ptr]
		right_arr_ptr += 1
		arr_ptr += 1

	return



def mergeSort(arr):
	size_arr = len(arr)
	if size_arr <= 1: return

	middle = size_arr // 2

	left_arr = arr[:middle]
	right_arr = arr[middle:]

	mergeSort(left_arr)
	mergeSort(right_arr)

	merge(left_arr, right_arr, arr)

	

lst = [4, 6, 2, 10, 9, 8, 1]

mergeSort(lst)
print(lst)
