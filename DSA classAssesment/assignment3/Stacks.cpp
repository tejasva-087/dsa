# include <iostream>
using namespace std;

int top = -1;
int maxSize = 50;
int stack[50];

bool isEmpty() {
	return (top < 0);
}

bool isFull() {
	return (top > maxSize);
}

void push(int value) {
	if (isFull()) {
		cout << "stack overflow: stack is full" << endl;
		return;
	}
	stack[++top] = value;
}

int pop() {
	if (isEmpty()) {
		cout << "stack underflow: stack is empty" << endl;
		return -1;
	}
	return stack[top--];
}

int peek() {
	if (isEmpty()) {
		cout << "Stack is empty" << endl;
		return -1;
	}
	return stack[top];
}

void disply() {
	if (isEmpty()) {
		cout << "Stack is empty" << endl;
		return;
	}
	for (int i = 0; i <= top; i++) {
		cout << stack[i] << " ";
	}
	cout << endl;
}

int main() {
	// cout << top << endl;
	push(10);
	push(11);
	push(12);
	push(13);
	// cout << top << endl;

	// cout << isEmpty() << endl;
	// cout << isFull() <<endl;

	cout << pop() << endl;
	cout << peek() << endl;
	disply();

	return 0;
}