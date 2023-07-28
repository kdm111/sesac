class Stack:
    def __init__(self):
        self.arr = []
    def push(self, x):
        self.arr.append(x)
    def pop(self):
        return self.arr.pop() if self.arr else -1
    def size(self):
        return len(self.arr)
    def empty(self):
        return 0 if self.arr else 1
    def top(self):
        return self.arr[-1] if self.arr else -1

stack = Stack()
for _ in range(int(input())):
    command = list(input().split(" "))
    if command[0] == "push":
        stack.push(int(command[1]))
    elif command[0] == "pop":
        print(stack.pop())
    elif command[0] == "size":
        print(stack.size())
    elif command[0] == "empty":
        print(stack.empty())
    else:
        print(stack.top())