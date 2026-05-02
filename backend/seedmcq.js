// seed.js
const mongoose = require('mongoose');
const Mcq = require('./models/mcq'); 

const mcqs = [
  // ============ DSA ============
  // ============ INTRO TO DS (10) ============
{ question: 'What is a Data Structure?', options: ['A way to store and organize data', 'A type of computer network', 'A programming language', 'An algorithm for sorting'], correctAnswer: 'A way to store and organize data', category: 'DSA' },

{ question: 'Which of the following is a primitive data type?', options: ['Array', 'Linked List', 'int', 'Stack'], correctAnswer: 'int', category: 'DSA' },

{ question: 'Non-primitive data structures are mainly classified into:', options: ['Static and Dynamic', 'Linear and Non-linear', 'Simple and Complex', 'Sequential and Random'], correctAnswer: 'Linear and Non-linear', category: 'DSA' },

{ question: 'An Abstract Data Type (ADT) is:', options: ['Implementation of a data structure in C', 'A mathematical model with defined operations', 'A physical data storage method', 'A machine learning algorithm'], correctAnswer: 'A mathematical model with defined operations', category: 'DSA' },

{ question: 'Which of the following is NOT a primitive type in most programming languages?', options: ['float', 'boolean', 'array', 'char'], correctAnswer: 'array', category: 'DSA' },

{ question: 'Time complexity of an algorithm measures:', options: ['Total memory used by the program', 'Amount of CPU time with input size growth', 'Quality of code', 'Number of programmers required'], correctAnswer: 'Amount of CPU time with input size growth', category: 'DSA' },

{ question: 'Space complexity refers to:', options: ['Time taken to execute a program', 'Extra memory required by an algorithm apart from input data', 'Speed of accessing memory', 'Only the size of variables'], correctAnswer: 'Extra memory required by an algorithm apart from input data', category: 'DSA' },

{ question: 'Which asymptotic notation describes the worst-case growth rate?', options: ['Big-O', 'Big-Theta', 'Big-Omega', 'Little-o'], correctAnswer: 'Big-O', category: 'DSA' },

{ question: 'Big-Theta (Θ) notation represents:', options: ['Upper bound only', 'Lower bound only', 'Both upper and lower bound (tight bound)', 'Constant time only'], correctAnswer: 'Both upper and lower bound (tight bound)', category: 'DSA' },

{ question: 'Big-Omega (Ω) notation gives:', options: ['Worst-case complexity', 'Best-case complexity', 'Average-case complexity', 'Amortized complexity'], correctAnswer: 'Best-case complexity', category: 'DSA' },

 // ============ ARRAYS (Advanced - 10) ============
{ question: 'If an array starts at memory address 2000 with each integer taking 4 bytes, what is the address of A[5]?', options: ['2020', '2024', '2016', '2004'], correctAnswer: '2020', category: 'DSA' },

{ question: 'In row-major order storage of a 2D array A[m][n], the element A[i][j] is stored at address:', options: ['Base + (i × n + j) × size', 'Base + (j × m + i) × size', 'Base + (i + j) × size', 'Base + (i × j) × size'], correctAnswer: 'Base + (i × n + j) × size', category: 'DSA' },

{ question: 'In column-major order storage of a 2D array A[m][n], the element A[i][j] is stored at address:', options: ['Base + (i × n + j) × size', 'Base + (j × m + i) × size', 'Base + (i + j) × size', 'Base + (i × j) × size'], correctAnswer: 'Base + (j × m + i) × size', category: 'DSA' },

{ question: 'The worst-case time complexity to insert an element into a sorted array of size n is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Which algorithm uses arrays heavily to store subproblem results?', options: ['Greedy algorithms', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'], correctAnswer: 'Dynamic Programming', category: 'DSA' },

{ question: 'Given a matrix of size n * n stored in an array, the time complexity to compute its transpose in place is:', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'], correctAnswer: 'O(n^2)', category: 'DSA' },

{ question: 'Sparse matrices are stored efficiently using:', options: ['Simple 2D arrays', 'Hashing only', 'Compressed representations (like CSR/COO)', 'Dynamic arrays'], correctAnswer: 'Compressed representations (like CSR/COO)', category: 'DSA' },

{ question: 'If you double the size of a dynamic array each time it overflows, the amortized complexity of insertion is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: "Which array operation forms the basis of Kadane's Algorithm for maximum subarray sum?", options: ['Traversal with cumulative updates', 'Binary search on prefix sums', 'Matrix multiplication', 'Divide and Conquer merging'], correctAnswer: 'Traversal with cumulative updates', category: 'DSA' },

{ question: 'To rotate an array of size n by k steps in O(n) time and O(1) extra space, which technique is commonly used?', options: ['Extra temporary array', 'Three reversals method', 'Divide and Conquer', 'Dynamic programming'], correctAnswer: 'Three reversals method', category: 'DSA' },
// ============ STRINGS (Advanced - 15) ============
{ question: 'In C, a string is typically represented as:', options: ['A sequence of integers', 'A null-terminated array of characters', 'A dynamic linked list', 'An object with methods'], correctAnswer: 'A null-terminated array of characters', category: 'DSA' },

{ question: 'Which of the following string operations usually has O(n) time complexity?', options: ['Character access by index', 'Concatenation', 'Length calculation (if not stored)', 'Both Concatenation and Length calculation'], correctAnswer: 'Both Concatenation and Length calculation', category: 'DSA' },

{ question: 'If two strings of length m and n are concatenated, the time complexity is:', options: ['O(1)', 'O(min(m, n))', 'O(m + n)', 'O(mn)'], correctAnswer: 'O(m + n)', category: 'DSA' },

{ question: 'Which string matching algorithm uses hashing to speed up substring search?', options: ['Naïve', 'KMP', 'Rabin-Karp', 'Z-Algorithm'], correctAnswer: 'Rabin-Karp', category: 'DSA' },

{ question: 'The worst-case time complexity of the Naïve pattern matching algorithm is:', options: ['O(n)', 'O(m + n)', 'O(mn)', 'O(log n)'], correctAnswer: 'O(mn)', category: 'DSA' },

{ question: 'KMP (Knuth-Morris-Pratt) algorithm improves pattern matching using:', options: ['Hashing', 'Finite automata', 'Prefix function / LPS array', 'Suffix trees'], correctAnswer: 'Prefix function / LPS array', category: 'DSA' },

{ question: 'Time complexity of KMP string matching algorithm is:', options: ['O(n)', 'O(m + n)', 'O(mn)', 'O(log n)'], correctAnswer: 'O(m + n)', category: 'DSA' },

{ question: 'Which algorithm precomputes a Z-array to find pattern matches efficiently?', options: ['Naïve', 'KMP', 'Rabin-Karp', 'Z-Algorithm'], correctAnswer: 'Z-Algorithm', category: 'DSA' },

{ question: 'The expected time complexity of Rabin-Karp string matching is:', options: ['O(n)', 'O(m + n)', 'O(mn)', 'O(n + m) with good hash'], correctAnswer: 'O(n + m) with good hash', category: 'DSA' },

{ question: 'A Trie (prefix tree) is most suitable for:', options: ['Sorting numbers', 'Storing and searching a dynamic set of strings', 'Hashing integers', 'Matrix operations'], correctAnswer: 'Storing and searching a dynamic set of strings', category: 'DSA' },

{ question: 'If all characters are lowercase English letters, each Trie node has at most:', options: ['16 children', '26 children', '128 children', '256 children'], correctAnswer: '26 children', category: 'DSA' },

{ question: 'The space complexity of a Trie storing n words of average length m is:', options: ['O(n)', 'O(m)', 'O(n × m)', 'O(n + m)'], correctAnswer: 'O(n × m)', category: 'DSA' },

{ question: 'Which operation is faster in Trie compared to a HashMap for strings?', options: ['Substring search', 'Prefix search (autocomplete)', 'Exact match only', 'Reversals'], correctAnswer: 'Prefix search (autocomplete)', category: 'DSA' },

{ question: 'Suffix trees or suffix arrays are advanced structures built for:', options: ['String sorting only', 'Efficient pattern matching and substring queries', 'Trie optimization', 'Graph traversal'], correctAnswer: 'Efficient pattern matching and substring queries', category: 'DSA' },

{ question: 'Which pattern matching algorithm achieves linear time regardless of alphabet size?', options: ['Naïve', 'KMP', 'Rabin-Karp', 'Finite Automata based algorithm'], correctAnswer: 'Finite Automata based algorithm', category: 'DSA' },

// ============ LINKED LISTS (Advanced - 15) ============
{ question: 'Which of the following is TRUE about a singly linked list compared to an array?', options: ['Faster random access', 'Dynamic size with efficient insertions/deletions', 'Less memory per node', 'Cache-friendly sequential traversal'], correctAnswer: 'Dynamic size with efficient insertions/deletions', category: 'DSA' },

{ question: 'In a singly linked list of n nodes, time complexity to access the k-th element is:', options: ['O(1)', 'O(log n)', 'O(k)', 'O(n log n)'], correctAnswer: 'O(k)', category: 'DSA' },

{ question: 'Which linked list allows traversal in both forward and backward directions?', options: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Skip List'], correctAnswer: 'Doubly Linked List', category: 'DSA' },

{ question: 'In a circular linked list with n nodes, how many next pointer traversals are required to return to the starting node?', options: ['n − 1', 'n', 'n + 1', 'Depends on implementation'], correctAnswer: 'n', category: 'DSA' },

{ question: 'Time complexity of inserting a node at the head of a singly linked list is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'To delete a node from a singly linked list when only pointer to that node is given (not head), we:', options: ['Free the node directly', 'Copy data from next node and delete the next node', 'Traverse from head to locate previous node', 'Cannot delete without head pointer'], correctAnswer: 'Copy data from next node and delete the next node', category: 'DSA' },

{ question: 'Reversing a singly linked list iteratively has time complexity:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Which data structure is typically used to represent polynomials efficiently?', options: ['Array only', 'HashMap', 'Linked List', 'Stack'], correctAnswer: 'Linked List', category: 'DSA' },

{ question: 'In a doubly linked list, deleting a node when a pointer to that node is given takes:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Which linked list is most suitable for implementing a queue with O(1) enqueue and dequeue?', options: ['Singly Linked List with head and tail pointers', 'Doubly Linked List only', 'Circular Linked List only', 'Any linked list'], correctAnswer: 'Singly Linked List with head and tail pointers', category: 'DSA' },

{ question: 'Which type of linked list is most efficient for implementing memory management (free lists)?', options: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Skip List'], correctAnswer: 'Circular Linked List', category: 'DSA' },

{ question: 'In a circular singly linked list, inserting at the end requires updating:', options: ['Head pointer only', 'Tail pointer only', 'Both tail and head connections', 'No pointers'], correctAnswer: 'Both tail and head connections', category: 'DSA' },

{ question: 'Skip lists are an advanced variation of linked lists that support:', options: ['Constant time access always', 'Probabilistic O(log n) search', 'Matrix operations', 'Dynamic hashing'], correctAnswer: 'Probabilistic O(log n) search', category: 'DSA' },

{ question: 'Which linked list variant is best suited for browser forward/backward navigation?', options: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Static Array'], correctAnswer: 'Doubly Linked List', category: 'DSA' },

{ question: 'The main disadvantage of linked lists over arrays is:', options: ['Dynamic memory allocation', 'Efficient insertions', 'Pointer overhead and poor cache locality', 'Traversal flexibility'], correctAnswer: 'Pointer overhead and poor cache locality', category: 'DSA' },

// ============ STACKS (Advanced - 15) ============
{ question: 'Which of the following operations is not a fundamental stack operation?', options: ['Push', 'Pop', 'Peek', 'Sort'], correctAnswer: 'Sort', category: 'DSA' },

{ question: 'Time complexity of push and pop operations in a stack implemented using an array is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Which data structure is used in recursive function calls?', options: ['Queue', 'Stack', 'Linked List', 'Heap'], correctAnswer: 'Stack', category: 'DSA' },

{ question: 'In a stack, if you try to pop from an empty stack, it is called:', options: ['Overflow', 'Underflow', 'Segmentation Fault', 'Deadlock'], correctAnswer: 'Underflow', category: 'DSA' },

{ question: 'Which implementation of stack allows dynamic memory allocation without resizing?', options: ['Array-based', 'Linked List-based', 'Circular Array-based', 'Both Array and Linked List'], correctAnswer: 'Linked List-based', category: 'DSA' },

{ question: 'Which of the following expressions converts infix (A + B) * C into postfix?', options: ['A B + C *', 'A + B * C', 'C * A + B', 'A * (B + C)'], correctAnswer: 'A B + C *', category: 'DSA' },

{ question: 'Which algorithm uses stack to evaluate expressions efficiently?', options: ['Greedy Algorithm', 'Shunting Yard Algorithm', 'Dijkstra’s Algorithm', 'Bellman-Ford Algorithm'], correctAnswer: 'Shunting Yard Algorithm', category: 'DSA' },

{ question: 'In backtracking algorithms like N-Queens, which data structure is primarily used to store partial solutions?', options: ['Queue', 'Priority Queue', 'Stack', 'Graph'], correctAnswer: 'Stack', category: 'DSA' },

{ question: 'Time complexity of checking if a stack is empty is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Which of the following applications does NOT use a stack?', options: ['Undo operation in editors', 'Function call management', 'Level-order traversal in trees', 'Expression evaluation'], correctAnswer: 'Level-order traversal in trees', category: 'DSA' },

{ question: 'The stack grows towards which direction in most system memory implementations?', options: ['Higher memory addresses', 'Lower memory addresses', 'Randomly allocated', 'Depends on compiler only'], correctAnswer: 'Lower memory addresses', category: 'DSA' },

{ question: 'Infix: (A - B) / (C + D * E). Postfix form is:', options: ['A B - C D E * + /', 'A B C - D E * + /', 'A B - C + D E * /', 'A B C D - + E * /'], correctAnswer: 'A B - C D E * + /', category: 'DSA' },

{ question: 'Which of the following is an advantage of stack-based expression evaluation?', options: ['Supports lazy evaluation', 'Eliminates ambiguity in operator precedence', 'Requires less memory than arrays', 'Provides faster random access'], correctAnswer: 'Eliminates ambiguity in operator precedence', category: 'DSA' },

{ question: 'In function recursion, when the base case is not met, the stack may result in:', options: ['Stack Underflow', 'Stack Overflow', 'Deadlock', 'Segmentation fault only'], correctAnswer: 'Stack Overflow', category: 'DSA' },

{ question: 'Which of the following problems can be solved using stacks?', options: ['Checking balanced parentheses', 'Finding shortest path in a graph', 'Sorting with merge sort', 'Level-order traversal'], correctAnswer: 'Checking balanced parentheses', category: 'DSA' },

// ============ QUEUES (Advanced - 15) ============
{ question: 'Which of the following best describes a basic queue?', options: ['LIFO structure', 'FIFO structure', 'Priority-based structure', 'Recursive structure'], correctAnswer: 'FIFO structure', category: 'DSA' },

{ question: 'In a queue implemented using an array of size n, when front = rear = -1, it means:', options: ['Queue is full', 'Queue is empty', 'Queue is half-full', 'Queue is circular'], correctAnswer: 'Queue is empty', category: 'DSA' },

{ question: 'Which queue type efficiently utilizes memory by connecting the end of the array back to the front?', options: ['Simple Queue', 'Circular Queue', 'Deque', 'Priority Queue'], correctAnswer: 'Circular Queue', category: 'DSA' },

{ question: 'In a circular queue of size n, the condition for queue full is:', options: ['front == rear', '(rear + 1) % n == front', 'front == -1', 'rear == -1'], correctAnswer: '(rear + 1) % n == front', category: 'DSA' },

{ question: 'Which queue allows insertion and deletion at both ends?', options: ['Simple Queue', 'Circular Queue', 'Deque', 'Priority Queue'], correctAnswer: 'Deque', category: 'DSA' },

{ question: 'Which of the following is TRUE about priority queues?', options: ['Elements are dequeued in FIFO order', 'Elements are dequeued based on priority', 'Elements are dequeued randomly', 'Elements cannot be updated'], correctAnswer: 'Elements are dequeued based on priority', category: 'DSA' },

{ question: 'Priority queues are most efficiently implemented using:', options: ['Array', 'Linked List', 'Heap', 'Stack'], correctAnswer: 'Heap', category: 'DSA' },

{ question: 'Time complexity of inserting an element into a max-heap priority queue is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'Which data structure is commonly used for CPU scheduling in operating systems?', options: ['Stack', 'Queue', 'Heap', 'Graph'], correctAnswer: 'Queue', category: 'DSA' },

{ question: 'Breadth First Search (BFS) in a graph uses which data structure?', options: ['Stack', 'Queue', 'Deque', 'Priority Queue'], correctAnswer: 'Queue', category: 'DSA' },

{ question: 'In an array-based queue implementation, enqueue at the rear requires:', options: ['Shifting all elements', 'Incrementing rear pointer', 'Decrementing rear pointer', 'Swapping front and rear'], correctAnswer: 'Incrementing rear pointer', category: 'DSA' },

{ question: 'Which of the following applications is best suited for a circular queue?', options: ['Undo operations in text editors', 'Job scheduling in operating systems', 'Depth-first search in graphs', 'Balanced parentheses checking'], correctAnswer: 'Job scheduling in operating systems', category: 'DSA' },

{ question: 'Time complexity of dequeuing an element from a linked list-based queue is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Which variant of queue allows insertion at rear but deletion from both front and rear?', options: ['Circular Queue', 'Deque (input-restricted)', 'Deque (output-restricted)', 'Priority Queue'], correctAnswer: 'Deque (output-restricted)', category: 'DSA' },

{ question: 'In operating systems, Round Robin CPU scheduling is implemented using:', options: ['Stack', 'Circular Queue', 'Deque', 'Heap'], correctAnswer: 'Circular Queue', category: 'DSA' },

// ============ HASHING (Advanced - 15) ============
{ question: 'Which of the following best describes hashing?', options: ['Mapping data to memory sequentially', 'Mapping keys to fixed-size addresses using a function', 'Sorting data into buckets', 'Encrypting data for security'], correctAnswer: 'Mapping keys to fixed-size addresses using a function', category: 'DSA' },

{ question: 'A good hash function should ideally:', options: ['Map all keys to the same index', 'Minimize collisions', 'Be slow to compute', 'Depend on linked lists'], correctAnswer: 'Minimize collisions', category: 'DSA' },

{ question: 'Which of the following is NOT a collision resolution technique?', options: ['Chaining', 'Open Addressing', 'Rehashing', 'Merge Sort'], correctAnswer: 'Merge Sort', category: 'DSA' },

{ question: 'In chaining, the worst-case time complexity of search in a hash table is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'In open addressing, if all table slots are occupied, the condition is called:', options: ['Collision', 'Overflow', 'Clustering', 'Table Full'], correctAnswer: 'Table Full', category: 'DSA' },

{ question: 'Which of the following best reduces primary clustering?', options: ['Linear Probing', 'Quadratic Probing', 'Separate Chaining', 'Both Quadratic Probing and Double Hashing'], correctAnswer: 'Both Quadratic Probing and Double Hashing', category: 'DSA' },

{ question: 'Which probing technique uses a second hash function to resolve collisions?', options: ['Linear Probing', 'Quadratic Probing', 'Double Hashing', 'Chaining'], correctAnswer: 'Double Hashing', category: 'DSA' },

{ question: 'The load factor (α) of a hash table is defined as:', options: ['Number of collisions / Table size', 'Keys stored / Table size', 'Table size / Keys stored', 'Average search time'], correctAnswer: 'Keys stored / Table size', category: 'DSA' },

{ question: 'Rehashing is performed when:', options: ['Load factor exceeds a threshold', 'Too many collisions occur', 'Table is nearly full', 'All of the above'], correctAnswer: 'All of the above', category: 'DSA' },

{ question: 'Which of the following is a disadvantage of open addressing compared to chaining?', options: ['Requires more memory per key', 'Performance degrades as load factor increases', 'Pointer overhead is higher', 'Cannot handle clustering'], correctAnswer: 'Performance degrades as load factor increases', category: 'DSA' },

{ question: 'In linear probing, the primary cause of clustering is:', options: ['Multiple hash functions', 'Sequential search for next slot', 'Pointer overhead', 'Table resizing'], correctAnswer: 'Sequential search for next slot', category: 'DSA' },

{ question: 'Which of the following applications commonly use hash tables?', options: ['Dictionaries', 'Symbol Tables in compilers', 'Caching (e.g., LRU cache)', 'All of the above'], correctAnswer: 'All of the above', category: 'DSA' },

{ question: 'If a hash table has size m and n keys are inserted, expected search time is:', options: ['O(1 + n/m)', 'O(log n)', 'O(n)', 'O(m log n)'], correctAnswer: 'O(1 + n/m)', category: 'DSA' },

{ question: 'Which collision handling technique may lead to secondary clustering?', options: ['Chaining', 'Linear Probing', 'Quadratic Probing', 'Double Hashing'], correctAnswer: 'Quadratic Probing', category: 'DSA' },

{ question: 'In caching applications, hashing helps by:', options: ['Encrypting frequently used data', 'Reducing access time using key-based lookup', 'Sorting data in memory', 'Compressing large data'], correctAnswer: 'Reducing access time using key-based lookup', category: 'DSA' },

// ============ TREES (Advanced - 20) ============
{ question: 'In a binary tree, the maximum number of nodes at level “l” is:', options: ['2^l', 'l^2', '2^(l-1)', '2l'], correctAnswer: '2^l', category: 'DSA' },

{ question: 'The height of a tree is defined as:', options: ['Number of nodes in the tree', 'Number of edges on the longest path from root to leaf', 'Maximum degree of any node', 'Number of leaf nodes'], correctAnswer: 'Number of edges on the longest path from root to leaf', category: 'DSA' },

{ question: 'Which traversal visits the left subtree, then root, then right subtree?', options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'], correctAnswer: 'Inorder', category: 'DSA' },

{ question: 'Which traversal of a Binary Search Tree (BST) results in a sorted sequence?', options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'], correctAnswer: 'Inorder', category: 'DSA' },

{ question: 'The time complexity of searching in a balanced BST (like AVL) is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'In an AVL tree, the balance factor of any node is defined as:', options: ['Height(left subtree) – Height(right subtree)', 'Number of children – 1', 'Depth – Height', 'Height of left subtree only'], correctAnswer: 'Height(left subtree) – Height(right subtree)', category: 'DSA' },

{ question: 'What rotations are required when inserting into an AVL tree causes a Left-Right imbalance?', options: ['Single Left Rotation', 'Single Right Rotation', 'Right Rotation followed by Left Rotation', 'Left Rotation followed by Right Rotation'], correctAnswer: 'Right Rotation followed by Left Rotation', category: 'DSA' },

{ question: 'Which of the following is FALSE about Red-Black Trees?', options: ['Every path from root to leaf has the same number of black nodes', 'Root is always black', 'No two red nodes can be adjacent', 'Height is always log(n) exactly'], correctAnswer: 'Height is always log(n) exactly', category: 'DSA' },

{ question: 'B-Trees are preferred in databases because:', options: ['They minimize disk I/O by having high fan-out', 'They are always binary', 'They store only integers', 'They use hashing for keys'], correctAnswer: 'They minimize disk I/O by having high fan-out', category: 'DSA' },

{ question: 'Difference between B-Tree and B+ Tree is:', options: ['B-Tree stores keys only in leaves, B+ Tree stores in all nodes', 'B+ Tree stores keys in leaves and internal nodes, B-Tree stores only in leaves', 'B+ Tree has linked leaves for range queries, B-Tree does not', 'They are identical'], correctAnswer: 'B+ Tree has linked leaves for range queries, B-Tree does not', category: 'DSA' },

{ question: 'Segment Trees are primarily used for:', options: ['Sorting arrays', 'Efficient range queries and updates', 'Binary search operations', 'Tree traversal'], correctAnswer: 'Efficient range queries and updates', category: 'DSA' },

{ question: 'Time complexity of building a Segment Tree is:', options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n^2)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Fenwick Tree (Binary Indexed Tree) is mainly used for:', options: ['Dynamic programming', 'Efficient prefix sum queries and updates', 'Shortest path queries', 'Pattern matching'], correctAnswer: 'Efficient prefix sum queries and updates', category: 'DSA' },

{ question: 'Space complexity of a Fenwick Tree for an array of size n is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Trie (Prefix Tree) is most useful for:', options: ['Storing integers efficiently', 'Searching and storing strings/prefixes efficiently', 'Sorting arrays', 'Balancing binary trees'], correctAnswer: 'Searching and storing strings/prefixes efficiently', category: 'DSA' },

{ question: 'Which of the following is an application of Expression Trees?', options: ['Evaluating arithmetic expressions', 'String concatenation', 'Graph traversal', 'Sorting numbers'], correctAnswer: 'Evaluating arithmetic expressions', category: 'DSA' },

{ question: 'Huffman coding trees are used for:', options: ['Data encryption', 'Data compression', 'Searching strings', 'Dynamic memory allocation'], correctAnswer: 'Data compression', category: 'DSA' },

{ question: 'The time complexity of searching in a Trie with word length m is:', options: ['O(1)', 'O(m)', 'O(log m)', 'O(n)'], correctAnswer: 'O(m)', category: 'DSA' },

{ question: 'Which traversal method uses a queue internally?', options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'], correctAnswer: 'Level-order', category: 'DSA' },

{ question: 'If a binary tree has n nodes, the maximum possible height is:', options: ['log₂(n)', 'n – 1', 'n/2', '√n'], correctAnswer: 'n – 1', category: 'DSA' },

// ============ HEAPS (Advanced - 15) ============
{ question: 'Which property must a max-heap satisfy?', options: ['Parent node is smaller than children', 'Parent node is larger than children', 'All leaves are at the same depth', 'Tree must be a BST'], correctAnswer: 'Parent node is larger than children', category: 'DSA' },

{ question: 'Which of the following is TRUE about min-heaps?', options: ['Root contains the maximum element', 'Parent node is smaller than its children', 'All internal nodes have two children', 'Heap elements must be sorted'], correctAnswer: 'Parent node is smaller than its children', category: 'DSA' },

{ question: 'Time complexity of inserting an element into a heap of size n is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'Deleting the root element from a heap of size n requires:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'Heapify operation is used to:', options: ['Sort arrays', 'Maintain heap property after insertion/deletion', 'Search elements in heap', 'Build a linked list'], correctAnswer: 'Maintain heap property after insertion/deletion', category: 'DSA' },

{ question: 'Time complexity of building a heap from n elements using bottom-up heapify is:', options: ['O(n log n)', 'O(n)', 'O(log n)', 'O(n^2)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Heap sort is an in-place sorting algorithm with time complexity:', options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Which of the following applications uses heaps efficiently?', options: ['Priority Queues', 'Dijkstra’s shortest path', 'Median maintenance', 'All of the above'], correctAnswer: 'All of the above', category: 'DSA' },

{ question: 'In a heap implemented as an array, the parent of node at index i is located at:', options: ['i/2', '(i-1)/2', '(i+1)/2', '2i'], correctAnswer: '(i-1)/2', category: 'DSA' },

{ question: 'Left and right children of node at index i in array-based heap are at:', options: ['2i and 2i+1', 'i-1 and i+1', '2i+1 and 2i+2', 'i/2 and i/2+1'], correctAnswer: '2i+1 and 2i+2', category: 'DSA' },

{ question: 'Which of the following statements about heaps is FALSE?', options: ['Heap is a complete binary tree', 'Heap is always a BST', 'Heap supports efficient extract-max/min', 'Heap is used in priority queues'], correctAnswer: 'Heap is always a BST', category: 'DSA' },

{ question: 'Extracting the minimum element from a min-heap requires:', options: ['Swapping root with last element and heapifying down', 'Swapping root with last element and heapifying up', 'Deleting last element directly', 'Traversing the heap linearly'], correctAnswer: 'Swapping root with last element and heapifying down', category: 'DSA' },

{ question: 'Time complexity of finding the maximum element in a min-heap is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Heaps are most suitable for:', options: ['Random access operations', 'Range queries', 'Efficient priority-based operations', 'DFS traversal'], correctAnswer: 'Efficient priority-based operations', category: 'DSA' },

{ question: 'Dijkstra’s algorithm uses which type of heap for optimal performance?', options: ['Min-Heap', 'Max-Heap', 'Binary Search Tree', 'Stack'], correctAnswer: 'Min-Heap', category: 'DSA' },

// ============ GRAPHS (Advanced - 20) ============
{ question: 'Which of the following is NOT a valid graph representation?', options: ['Adjacency Matrix', 'Adjacency List', 'Edge List', 'Hash Table Tree'], correctAnswer: 'Hash Table Tree', category: 'DSA' },

{ question: 'Time complexity of checking if an edge exists between two nodes in an adjacency matrix of size V is:', options: ['O(1)', 'O(V)', 'O(E)', 'O(log V)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Time complexity of checking if an edge exists between two nodes in an adjacency list is:', options: ['O(1)', 'O(V)', 'O(E)', 'O(log V)'], correctAnswer: 'O(V) in worst case', category: 'DSA' },

{ question: 'BFS (Breadth-First Search) uses which data structure internally?', options: ['Stack', 'Queue', 'Priority Queue', 'Heap'], correctAnswer: 'Queue', category: 'DSA' },

{ question: 'DFS (Depth-First Search) uses which data structure internally?', options: ['Queue', 'Stack/Recursion', 'Heap', 'Priority Queue'], correctAnswer: 'Stack/Recursion', category: 'DSA' },

{ question: 'Which algorithm finds Minimum Spanning Tree (MST) using a greedy approach by adding edges of least weight?', options: ['Prim’s Algorithm', 'Kruskal’s Algorithm', 'Dijkstra’s Algorithm', 'Bellman-Ford Algorithm'], correctAnswer: 'Kruskal’s Algorithm', category: 'DSA' },

{ question: 'Prim’s Algorithm for MST starts from:', options: ['Any arbitrary vertex', 'Minimum weighted edge', 'Source vertex 0 only', 'Leaf node'], correctAnswer: 'Any arbitrary vertex', category: 'DSA' },

{ question: 'Time complexity of Kruskal’s Algorithm using a disjoint-set for a graph with E edges and V vertices is:', options: ['O(E log V)', 'O(E + V)', 'O(V^2)', 'O(E^2)'], correctAnswer: 'O(E log V)', category: 'DSA' },

{ question: 'Dijkstra’s Algorithm cannot handle:', options: ['Positive weighted edges', 'Negative weighted edges', 'Unweighted graphs', 'Graphs with cycles'], correctAnswer: 'Negative weighted edges', category: 'DSA' },

{ question: 'Bellman-Ford Algorithm can handle:', options: ['Only positive weights', 'Negative weights and detects negative cycles', 'Unweighted graphs only', 'Only DAGs'], correctAnswer: 'Negative weights and detects negative cycles', category: 'DSA' },

{ question: 'Time complexity of Floyd-Warshall Algorithm for shortest paths in a graph with V vertices is:', options: ['O(V^2)', 'O(V^3)', 'O(E log V)', 'O(V+E)'], correctAnswer: 'O(V^3)', category: 'DSA' },

{ question: 'Topological Sorting is applicable only to:', options: ['Undirected graphs', 'Directed graphs with cycles', 'Directed Acyclic Graphs (DAGs)', 'Weighted graphs'], correctAnswer: 'Directed Acyclic Graphs (DAGs)', category: 'DSA' },

{ question: 'Kosaraju and Tarjan algorithms are used to find:', options: ['Minimum Spanning Tree', 'Strongly Connected Components', 'Shortest Paths', 'Bipartite Graphs'], correctAnswer: 'Strongly Connected Components', category: 'DSA' },

{ question: 'A bipartite graph can be checked using which traversal?', options: ['DFS/BFS with coloring', 'Heap traversal', 'Topological sort', 'MST algorithm'], correctAnswer: 'DFS/BFS with coloring', category: 'DSA' },

{ question: 'Which graph application uses BFS for finding the shortest path in unweighted graphs?', options: ['Social networks (degrees of separation)', 'Huffman coding', 'Heap operations', 'Expression evaluation'], correctAnswer: 'Social networks (degrees of separation)', category: 'DSA' },

{ question: 'Which of the following is true about adjacency list representation?', options: ['Uses O(V^2) memory', 'Efficient for sparse graphs', 'Cannot store weighted edges', 'Faster for edge existence queries than matrix'], correctAnswer: 'Efficient for sparse graphs', category: 'DSA' },

{ question: 'Time complexity of BFS/DFS in a graph with V vertices and E edges is:', options: ['O(V^2)', 'O(E log V)', 'O(V + E)', 'O(E^2)'], correctAnswer: 'O(V + E)', category: 'DSA' },

{ question: 'Which algorithm finds shortest paths from a single source in weighted graphs efficiently without negative weights?', options: ['Bellman-Ford', 'Dijkstra', 'Floyd-Warshall', 'Prim'], correctAnswer: 'Dijkstra', category: 'DSA' },

{ question: 'Prim’s MST algorithm is similar to Dijkstra’s in which way?', options: ['Both use priority queue for next node selection', 'Both require negative weights', 'Both are DFS-based', 'Both produce shortest path tree'], correctAnswer: 'Both use priority queue for next node selection', category: 'DSA' },

{ question: 'In Kruskal’s Algorithm, which data structure is used to detect cycles efficiently?', options: ['Stack', 'Queue', 'Disjoint Set (Union-Find)', 'Heap'], correctAnswer: 'Disjoint Set (Union-Find)', category: 'DSA' },

// ============ ADVANCED DATA STRUCTURES (Advanced - 20) ============
{ question: 'Disjoint Set (Union-Find) is mainly used for:', options: ['Sorting arrays', 'Detecting cycles in a graph', 'Searching strings', 'Heap operations'], correctAnswer: 'Detecting cycles in a graph', category: 'DSA' },

{ question: 'Path compression in Union-Find improves:', options: ['Time complexity of union operations', 'Time complexity of find operations', 'Memory usage', 'Sorting efficiency'], correctAnswer: 'Time complexity of find operations', category: 'DSA' },

{ question: 'Union by rank helps in:', options: ['Balancing the tree height in Union-Find', 'Faster BFS traversal', 'Efficient heap insertions', 'Prefix sum queries'], correctAnswer: 'Balancing the tree height in Union-Find', category: 'DSA' },

{ question: 'Time complexity of Union-Find with path compression and union by rank is nearly:', options: ['O(log n)', 'O(1)', 'O(α(n)) (inverse Ackermann function)', 'O(n)'], correctAnswer: 'O(α(n)) (inverse Ackermann function)', category: 'DSA' },

{ question: 'Sparse Table is primarily used for:', options: ['Dynamic Range Minimum/Maximum Queries', 'Dynamic arrays', 'Heap operations', 'DFS traversal'], correctAnswer: 'Dynamic Range Minimum/Maximum Queries', category: 'DSA' },

{ question: 'Sparse Table query time for immutable arrays is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(1)', category: 'DSA' },

{ question: 'Suffix Array is used for:', options: ['Efficient substring search', 'Sorting numbers', 'Heap operations', 'Graph traversal'], correctAnswer: 'Efficient substring search', category: 'DSA' },

{ question: 'Suffix Tree can be built from a string in:', options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'LRU Cache is typically implemented using:', options: ['Stack only', 'Queue only', 'HashMap + Doubly Linked List', 'Heap'], correctAnswer: 'HashMap + Doubly Linked List', category: 'DSA' },

{ question: 'In an LRU cache, when the cache is full and a new element is accessed, which element is removed?', options: ['Most recently used', 'Least recently used', 'Random element', 'Largest element'], correctAnswer: 'Least recently used', category: 'DSA' },

{ question: 'Skip Lists provide:', options: ['O(n) search', 'O(log n) average search and insertion', 'O(1) search', 'O(n^2) insertion'], correctAnswer: 'O(log n) average search and insertion', category: 'DSA' },

{ question: 'Treaps combine which two data structures?', options: ['Binary Search Tree + Heap', 'Heap + Stack', 'Graph + Heap', 'Trie + Linked List'], correctAnswer: 'Binary Search Tree + Heap', category: 'DSA' },

{ question: 'K-D Trees are mainly used for:', options: ['1-dimensional search', 'Multidimensional search', 'Graph traversal', 'Sorting arrays'], correctAnswer: 'Multidimensional search', category: 'DSA' },

{ question: 'Time complexity of range search in a balanced K-D Tree with n points is:', options: ['O(n)', 'O(log n)', 'O(n^(1-1/k) + m)', 'O(n log n)'], correctAnswer: 'O(n^(1-1/k) + m)', category: 'DSA' },

{ question: 'Bloom Filters are used for:', options: ['Exact set membership queries', 'Approximate set membership queries', 'Heap operations', 'Graph traversal'], correctAnswer: 'Approximate set membership queries', category: 'DSA' },

{ question: 'Bloom Filter can produce:', options: ['False positives only', 'False negatives only', 'Both false positives and false negatives', 'No errors'], correctAnswer: 'False positives only', category: 'DSA' },

{ question: 'Adding an element in a Bloom Filter requires:', options: ['Updating multiple hash functions', 'Traversing a tree', 'Sorting an array', 'Heapifying'], correctAnswer: 'Updating multiple hash functions', category: 'DSA' },

{ question: 'Deletion in a standard Bloom Filter is:', options: ['O(1)', 'Not directly possible', 'O(log n)', 'O(n)'], correctAnswer: 'Not directly possible', category: 'DSA' },

{ question: 'Treap maintains heap property based on:', options: ['Key value', 'Random priority', 'Height', 'Degree'], correctAnswer: 'Random priority', category: 'DSA' },

{ question: 'Skip List node levels are determined by:', options: ['Random coin flips', 'Fixed depth', 'Array size', 'Heap value'], correctAnswer: 'Random coin flips', category: 'DSA' },

// ============ ALGORITHMS & ANALYSIS (Advanced - 15) ============
{ question: 'Which of the following is NOT a characteristic of a good algorithm?', options: ['Correctness', 'Finiteness', 'Predictable Output', 'Infinite Loops'], correctAnswer: 'Infinite Loops', category: 'DSA' },

{ question: 'Which design paradigm divides a problem into smaller subproblems, solves them recursively, and combines results?', options: ['Greedy', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'], correctAnswer: 'Divide and Conquer', category: 'DSA' },

{ question: 'Dynamic Programming differs from Divide and Conquer because:', options: ['It solves subproblems recursively without overlapping', 'It stores and reuses solutions to overlapping subproblems', 'It always uses greedy choices', 'It never uses recursion'], correctAnswer: 'It stores and reuses solutions to overlapping subproblems', category: 'DSA' },

{ question: 'The Big-O notation describes:', options: ['Exact running time', 'Upper bound of growth rate', 'Lower bound of growth rate', 'Average running time only'], correctAnswer: 'Upper bound of growth rate', category: 'DSA' },

{ question: 'Big-Ω notation represents:', options: ['Worst-case upper bound', 'Best-case lower bound', 'Average case', 'Memory usage'], correctAnswer: 'Best-case lower bound', category: 'DSA' },

{ question: 'Big-Θ notation describes:', options: ['Tight bound, both upper and lower', 'Only upper bound', 'Only lower bound', 'Asymptotic space complexity'], correctAnswer: 'Tight bound, both upper and lower', category: 'DSA' },

{ question: 'Time complexity measures:', options: ['Memory usage', 'Number of operations as function of input size', 'Number of files used', 'Execution path length only'], correctAnswer: 'Number of operations as function of input size', category: 'DSA' },

{ question: 'Space complexity measures:', options: ['Memory usage', 'CPU cycles', 'Number of threads', 'Disk storage only'], correctAnswer: 'Memory usage', category: 'DSA' },

{ question: 'Which method solves recurrence relations by guessing and proving by induction?', options: ['Substitution Method', 'Recursion Tree Method', 'Master Theorem', 'Greedy Method'], correctAnswer: 'Substitution Method', category: 'DSA' },

{ question: 'Recursion Tree Method is useful for:', options: ['Visualizing recursive calls and summing costs', 'Sorting arrays', 'Graph traversal', 'Finding MST'], correctAnswer: 'Visualizing recursive calls and summing costs', category: 'DSA' },

{ question: 'Master Theorem provides a solution for recurrences of the form:', options: ['T(n) = aT(n/b) + f(n)', 'T(n) = T(n-1) + n', 'T(n) = n^2 + log n', 'T(n) = n!'], correctAnswer: 'T(n) = aT(n/b) + f(n)', category: 'DSA' },

{ question: 'Which of the following is a divide and conquer algorithm?', options: ['Merge Sort', 'Dijkstra’s Algorithm', 'Kruskal’s Algorithm', 'Greedy Coin Change'], correctAnswer: 'Merge Sort', category: 'DSA' },

{ question: 'Solving recurrence T(n) = 2T(n/2) + n results in time complexity:', options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n^2)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Which algorithm design paradigm chooses the locally optimal solution at each step?', options: ['Greedy', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'], correctAnswer: 'Greedy', category: 'DSA' },

{ question: 'Algorithm analysis helps in:', options: ['Estimating performance', 'Comparing algorithms', 'Predicting scalability', 'All of the above'], correctAnswer: 'All of the above', category: 'DSA' },

// ============ BASIC ALGORITHMS (Advanced - 20) ============
{ question: 'Time complexity of linear search in the worst case is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Binary search requires the input array to be:', options: ['Sorted', 'Unsorted', 'Linked List', 'Heap'], correctAnswer: 'Sorted', category: 'DSA' },

{ question: 'Worst-case time complexity of binary search is:', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'Bubble Sort repeatedly compares and swaps adjacent elements. Its worst-case complexity is:', options: ['O(n)', 'O(n^2)', 'O(n log n)', 'O(log n)'], correctAnswer: 'O(n^2)', category: 'DSA' },

{ question: 'Selection Sort repeatedly selects the:', options: ['Minimum element', 'Maximum element', 'Median element', 'Random element'], correctAnswer: 'Minimum element', category: 'DSA' },

{ question: 'Time complexity of Insertion Sort in the best case is:', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(n log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Merge Sort uses which algorithm design paradigm?', options: ['Greedy', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'], correctAnswer: 'Divide and Conquer', category: 'DSA' },

{ question: 'Time complexity of Merge Sort in worst, average, and best case is:', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Quick Sort worst-case time complexity occurs when:', options: ['Pivot divides array evenly', 'Pivot is always smallest/largest element', 'Pivot is median', 'Array is empty'], correctAnswer: 'Pivot is always smallest/largest element', category: 'DSA' },

{ question: 'Heap Sort builds a heap and repeatedly extracts the root. Its time complexity is:', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Counting Sort is efficient for:', options: ['Small range of integers', 'Large unsorted strings', 'Graphs', 'Heap operations'], correctAnswer: 'Small range of integers', category: 'DSA' },

{ question: 'Time complexity of Counting Sort is:', options: ['O(n + k)', 'O(n log n)', 'O(n^2)', 'O(k log n)'], correctAnswer: 'O(n + k)', category: 'DSA' },

{ question: 'Radix Sort works efficiently on:', options: ['Integers with fixed number of digits', 'Linked lists', 'Floating point numbers only', 'Graphs'], correctAnswer: 'Integers with fixed number of digits', category: 'DSA' },

{ question: 'Bucket Sort is most effective when:', options: ['Input is uniformly distributed', 'Array is sorted', 'All elements are identical', 'Array is linked'], correctAnswer: 'Input is uniformly distributed', category: 'DSA' },

{ question: 'Divide and Conquer approach involves:', options: ['Dividing problem into subproblems, solving them recursively, and combining results', 'Greedy choice at each step', 'Iterative computation only', 'Dynamic Programming'], correctAnswer: 'Dividing problem into subproblems, solving them recursively, and combining results', category: 'DSA' },

{ question: 'Binary search tree search operation has average time complexity:', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], correctAnswer: 'O(log n)', category: 'DSA' },

{ question: 'Merge Sort is stable, which means:', options: ['Relative order of equal elements is preserved', 'Elements are always in ascending order', 'Array is rearranged randomly', 'Algorithm uses extra memory'], correctAnswer: 'Relative order of equal elements is preserved', category: 'DSA' },

{ question: 'Quick Sort is not stable because:', options: ['Pivot swapping may change relative order of equal elements', 'It uses recursion', 'It uses divide and conquer', 'It is in-place'], correctAnswer: 'Pivot swapping may change relative order of equal elements', category: 'DSA' },

{ question: 'Which sorting algorithm is best for nearly sorted arrays?', options: ['Insertion Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort'], correctAnswer: 'Insertion Sort', category: 'DSA' },

{ question: 'Time complexity of binary search using recursion is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(log n)', category: 'DSA' },
 
// ============ GREEDY ALGORITHMS (Advanced - 20) ============
{ question: 'A greedy algorithm is applicable only if:', options: ['Problem has optimal substructure and greedy choice property', 'All inputs are sorted', 'Problem has no recursion', 'Time complexity is O(n^2)'], correctAnswer: 'Problem has optimal substructure and greedy choice property', category: 'DSA' },

{ question: 'Greedy choice property means:', options: ['A globally optimal solution can be arrived by choosing locally optimal solutions', 'Algorithm always uses recursion', 'All inputs must be sorted', 'It always uses dynamic programming'], correctAnswer: 'A globally optimal solution can be arrived by choosing locally optimal solutions', category: 'DSA' },

{ question: 'Optimal substructure means:', options: ['Optimal solution of problem can be constructed from optimal solutions of subproblems', 'Only base cases matter', 'Sorting is required', 'All solutions are same'], correctAnswer: 'Optimal solution of problem can be constructed from optimal solutions of subproblems', category: 'DSA' },

{ question: 'Activity Selection Problem aims to:', options: ['Select maximum number of non-overlapping activities', 'Minimize number of activities', 'Sort activities by duration', 'Find all possible schedules'], correctAnswer: 'Select maximum number of non-overlapping activities', category: 'DSA' },

{ question: 'Activity Selection Problem can be solved efficiently by:', options: ['Greedy algorithm sorting by finish time', 'Dynamic programming only', 'Brute force only', 'Heap Sort'], correctAnswer: 'Greedy algorithm sorting by finish time', category: 'DSA' },

{ question: 'Fractional Knapsack allows:', options: ['Splitting items into fractions to maximize value', 'Taking only whole items', 'Greedy by weight only', 'Sorting items by index'], correctAnswer: 'Splitting items into fractions to maximize value', category: 'DSA' },

{ question: 'Time complexity of Fractional Knapsack using greedy approach is:', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Prim’s algorithm finds:', options: ['Minimum Spanning Tree starting from a single vertex', 'Maximum path', 'Shortest path from source', 'Topological order'], correctAnswer: 'Minimum Spanning Tree starting from a single vertex', category: 'DSA' },

{ question: 'Kruskal’s algorithm finds MST by:', options: ['Adding edges in increasing order of weight without forming cycles', 'Adding maximum weight edges first', 'DFS traversal', 'Heap operations'], correctAnswer: 'Adding edges in increasing order of weight without forming cycles', category: 'DSA' },

{ question: 'Time complexity of Kruskal’s algorithm using Disjoint Set is:', options: ['O(E log V)', 'O(V^2)', 'O(E^2)', 'O(V + E)'], correctAnswer: 'O(E log V)', category: 'DSA' },

{ question: 'Huffman coding is used for:', options: ['Data compression using variable-length prefix codes', 'Sorting arrays', 'Graph traversal', 'MST computation'], correctAnswer: 'Data compression using variable-length prefix codes', category: 'DSA' },

{ question: 'Huffman coding produces prefix codes, which means:', options: ['No code is prefix of another', 'All codes are same length', 'All codes are numeric only', 'All codes start with 0'], correctAnswer: 'No code is prefix of another', category: 'DSA' },

{ question: 'Time complexity of building Huffman Tree for n symbols is:', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Job Sequencing with Deadlines aims to:', options: ['Maximize total profit by scheduling jobs before deadlines', 'Minimize number of jobs', 'Sort jobs by deadline only', 'DFS traversal of jobs'], correctAnswer: 'Maximize total profit by scheduling jobs before deadlines', category: 'DSA' },

{ question: 'Greedy approach works for Job Sequencing Problem by:', options: ['Sorting jobs by decreasing profit and assigning slots', 'Sorting by duration only', 'Using dynamic programming', 'Heapifying jobs'], correctAnswer: 'Sorting jobs by decreasing profit and assigning slots', category: 'DSA' },

{ question: 'Prim’s and Kruskal’s algorithms are examples of:', options: ['Greedy algorithms', 'Divide and Conquer', 'Dynamic Programming', 'Backtracking'], correctAnswer: 'Greedy algorithms', category: 'DSA' },

{ question: 'Which property allows Fractional Knapsack to be solved greedily?', options: ['Greedy choice property', 'Optimal substructure only', 'DFS', 'Recursion only'], correctAnswer: 'Greedy choice property', category: 'DSA' },

{ question: 'Huffman coding tree is constructed by repeatedly:', options: ['Merging two minimum frequency nodes', 'Adding maximum frequency nodes', 'DFS traversal', 'Greedy by index'], correctAnswer: 'Merging two minimum frequency nodes', category: 'DSA' },

{ question: 'In Activity Selection Problem, if activities are sorted by finish time, greedy selection chooses:', options: ['Next activity that starts after last selected finishes', 'Activity with earliest start time', 'Random activity', 'Longest activity'], correctAnswer: 'Next activity that starts after last selected finishes', category: 'DSA' },

{ question: 'Kruskal’s algorithm requires sorting edges by:', options: ['Weight in increasing order', 'Vertex degree', 'Alphabetical order', 'Finish time'], correctAnswer: 'Weight in increasing order', category: 'DSA' },

// ============ DIVIDE AND CONQUER (Advanced - 20) ============
{ question: 'Divide and Conquer strategy primarily involves:', options: ['Dividing the problem into smaller subproblems, solving them recursively, and combining results', 'Greedy choice at each step', 'Dynamic programming', 'Backtracking'], correctAnswer: 'Dividing the problem into smaller subproblems, solving them recursively, and combining results', category: 'DSA' },

{ question: 'Binary search is an example of Divide and Conquer because:', options: ['It divides the search space into two halves at each step', 'It uses recursion for all operations', 'It sorts the array', 'It is a greedy algorithm'], correctAnswer: 'It divides the search space into two halves at each step', category: 'DSA' },

{ question: 'Worst-case time complexity of Merge Sort is:', options: ['O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Quick Sort worst-case occurs when pivot divides array:', options: ['Very unevenly (all elements on one side)', 'Equally', 'Randomly', 'Not at all'], correctAnswer: 'Very unevenly (all elements on one side)', category: 'DSA' },

{ question: 'Time complexity of Quick Sort average case is:', options: ['O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Maximum and minimum of an array can be found using Divide and Conquer in how many comparisons?', options: ['Approximately 3n/2 - 2', '2n', 'n log n', 'n^2'], correctAnswer: 'Approximately 3n/2 - 2', category: 'DSA' },

{ question: 'Strassen’s matrix multiplication algorithm improves the complexity to:', options: ['O(n^2.81)', 'O(n^3)', 'O(n log n)', 'O(n^2)'], correctAnswer: 'O(n^2.81)', category: 'DSA' },

{ question: 'Strassen’s algorithm reduces multiplication by:', options: ['Using fewer recursive multiplications', 'Using dynamic programming', 'Greedy selection', 'Divide by addition only'], correctAnswer: 'Using fewer recursive multiplications', category: 'DSA' },

{ question: 'Convex hull problem can be solved using Divide and Conquer by:', options: ['Dividing points into subsets, finding hulls, and merging', 'Sorting points by x-coordinate only', 'DFS traversal', 'Using stack only'], correctAnswer: 'Dividing points into subsets, finding hulls, and merging', category: 'DSA' },

{ question: 'Closest pair of points problem in 2D can be solved in:', options: ['O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Merge step in Merge Sort combines two sorted arrays in:', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Time complexity of Divide and Conquer matrix multiplication using Strassen’s method is:', options: ['O(n^2.81)', 'O(n^3)', 'O(n log n)', 'O(n^2)'], correctAnswer: 'O(n^2.81)', category: 'DSA' },

{ question: 'Divide and Conquer approach generally uses which type of recursion?', options: ['Tail recursion', 'Head recursion', 'Multiple recursive calls', 'No recursion'], correctAnswer: 'Multiple recursive calls', category: 'DSA' },

{ question: 'Closest pair of points algorithm uses:', options: ['Divide points by x-coordinate, recursive distance check, and merge step', 'Linear search of all pairs', 'Greedy selection', 'DFS traversal'], correctAnswer: 'Divide points by x-coordinate, recursive distance check, and merge step', category: 'DSA' },

{ question: 'Binary search recurrence relation is:', options: ['T(n) = T(n/2) + O(1)', 'T(n) = 2T(n/2) + O(n)', 'T(n) = T(n-1) + O(1)', 'T(n) = n^2'], correctAnswer: 'T(n) = T(n/2) + O(1)', category: 'DSA' },

{ question: 'Merge Sort recurrence relation is:', options: ['T(n) = 2T(n/2) + O(n)', 'T(n) = T(n-1) + O(1)', 'T(n) = n^2', 'T(n) = T(n/2) + O(1)'], correctAnswer: 'T(n) = 2T(n/2) + O(n)', category: 'DSA' },

{ question: 'Quick Sort recurrence in average case is:', options: ['T(n) = T(k) + T(n-k-1) + O(n)', 'T(n) = 2T(n/2) + O(n)', 'T(n) = T(n-1) + O(1)', 'T(n) = n^2'], correctAnswer: 'T(n) = T(k) + T(n-k-1) + O(n)', category: 'DSA' },

{ question: 'Convex hull divide and conquer merge step uses:', options: ['Upper and lower tangents', 'DFS', 'Heap', 'Backtracking'], correctAnswer: 'Upper and lower tangents', category: 'DSA' },

{ question: 'Divide and Conquer approach improves performance by:', options: ['Reducing problem size recursively', 'Using greedy choices', 'Only sorting', 'Linear traversal'], correctAnswer: 'Reducing problem size recursively', category: 'DSA' },

{ question: 'Closest pair of points problem’s merge step checks points in how many neighboring strips?', options: ['At most 6 points per strip', 'All points', '2 points only', 'n points per strip'], correctAnswer: 'At most 6 points per strip', category: 'DSA' },

// ============ DYNAMIC PROGRAMMING (Advanced - 20) ============
{ question: 'Dynamic Programming is applicable when a problem has:', options: ['Overlapping subproblems and optimal substructure', 'Only greedy choice property', 'No recursion', 'All inputs sorted'], correctAnswer: 'Overlapping subproblems and optimal substructure', category: 'DSA' },

{ question: 'Fibonacci sequence can be computed efficiently using DP because:', options: ['Subproblems repeat and can be memoized', 'It uses greedy choices', 'It uses DFS only', 'It is always sorted'], correctAnswer: 'Subproblems repeat and can be memoized', category: 'DSA' },

{ question: 'Time complexity of DP Fibonacci (memoization) is:', options: ['O(n)', 'O(2^n)', 'O(log n)', 'O(n^2)'], correctAnswer: 'O(n)', category: 'DSA' },

{ question: 'Longest Common Subsequence (LCS) problem uses:', options: ['2D DP table', 'Greedy', 'Heap', 'Divide and Conquer only'], correctAnswer: '2D DP table', category: 'DSA' },

{ question: 'Time complexity of LCS with DP is:', options: ['O(m*n)', 'O(n log n)', 'O(n^2 log n)', 'O(n!)'], correctAnswer: 'O(m*n)', category: 'DSA' },

{ question: 'Longest Increasing Subsequence (LIS) using DP has time complexity:', options: ['O(n^2)', 'O(n log n)', 'O(n!)', 'O(log n)'], correctAnswer: 'O(n^2)', category: 'DSA' },

{ question: 'Matrix Chain Multiplication problem is solved by DP because:', options: ['Optimal parenthesization can be built from subproblems', 'It uses greedy choice property', 'It sorts matrices', 'It uses BFS'], correctAnswer: 'Optimal parenthesization can be built from subproblems', category: 'DSA' },

{ question: 'Time complexity of 0/1 Knapsack using DP is:', options: ['O(n*W)', 'O(n log W)', 'O(n^2)', 'O(W^2)'], correctAnswer: 'O(n*W)', category: 'DSA' },

{ question: 'DP solution for Coin Change to find minimum coins uses:', options: ['Bottom-up table filling', 'Greedy choice', 'DFS only', 'Heap'], correctAnswer: 'Bottom-up table filling', category: 'DSA' },

{ question: 'Floyd-Warshall algorithm finds shortest paths for:', options: ['All pairs of vertices', 'Single source only', 'Negative cycles only', 'Greedy paths only'], correctAnswer: 'All pairs of vertices', category: 'DSA' },

{ question: 'Time complexity of Floyd-Warshall algorithm is:', options: ['O(V^3)', 'O(V*E)', 'O(E log V)', 'O(V^2)'], correctAnswer: 'O(V^3)', category: 'DSA' },

{ question: 'Bellman-Ford algorithm can handle graphs with:', options: ['Negative weight edges', 'Only positive weights', 'No edges', 'Greedy edges'], correctAnswer: 'Negative weight edges', category: 'DSA' },

{ question: 'Time complexity of Bellman-Ford algorithm is:', options: ['O(V*E)', 'O(V^2)', 'O(V^3)', 'O(E log V)'], correctAnswer: 'O(V*E)', category: 'DSA' },

{ question: 'Edit Distance problem finds:', options: ['Minimum operations to convert one string to another', 'Maximum substring match', 'Sorting string', 'DFS traversal of string'], correctAnswer: 'Minimum operations to convert one string to another', category: 'DSA' },

{ question: 'Optimal Binary Search Tree problem uses DP to minimize:', options: ['Expected search cost', 'Maximum depth', 'Number of leaves', 'Heap size'], correctAnswer: 'Expected search cost', category: 'DSA' },

{ question: 'LIS can be optimized to O(n log n) using:', options: ['Binary search in DP', 'Greedy only', 'DFS traversal', 'Heap'], correctAnswer: 'Binary search in DP', category: 'DSA' },

{ question: 'In 0/1 Knapsack DP table, rows represent:', options: ['Items considered', 'Weights', 'Profits', 'Time steps'], correctAnswer: 'Items considered', category: 'DSA' },

{ question: 'In Coin Change DP, table entry dp[i] represents:', options: ['Minimum coins needed to make amount i', 'Maximum coins', 'Number of ways only', 'Sorted coins'], correctAnswer: 'Minimum coins needed to make amount i', category: 'DSA' },

{ question: 'Floyd-Warshall algorithm uses which DP principle?', options: ['Optimal substructure', 'Greedy choice', 'Divide and Conquer', 'Backtracking'], correctAnswer: 'Optimal substructure', category: 'DSA' },

{ question: 'Bellman-Ford detects negative weight cycles by:', options: ['Relaxing all edges V-1 times and checking for further relaxation', 'DFS traversal', 'Heapify', 'Sorting edges'], correctAnswer: 'Relaxing all edges V-1 times and checking for further relaxation', category: 'DSA' },

// ============ BACKTRACKING (Advanced - 20) ============
{ question: 'Backtracking is primarily used for:', options: ['Finding all or some solutions by exploring all possibilities and abandoning invalid paths', 'Sorting arrays', 'Greedy optimization', 'Dynamic programming'], correctAnswer: 'Finding all or some solutions by exploring all possibilities and abandoning invalid paths', category: 'DSA' },

{ question: 'N-Queens problem requires placing N queens on an NxN chessboard such that:', options: ['No two queens attack each other', 'Queens are on the same row', 'Queens are on diagonals only', 'Queens attack all cells'], correctAnswer: 'No two queens attack each other', category: 'DSA' },

{ question: 'Backtracking solution for N-Queens explores:', options: ['All possible placements row by row', 'Only first row', 'Only diagonals', 'Only columns'], correctAnswer: 'All possible placements row by row', category: 'DSA' },

{ question: 'Hamiltonian cycle problem aims to find:', options: ['A cycle visiting every vertex exactly once', 'Shortest path between two vertices', 'Maximum spanning tree', 'All Euler paths'], correctAnswer: 'A cycle visiting every vertex exactly once', category: 'DSA' },

{ question: 'Graph coloring problem tries to assign colors such that:', options: ['No two adjacent vertices have the same color', 'All vertices have same color', 'Vertices form a path', 'Graph is bipartite'], correctAnswer: 'No two adjacent vertices have the same color', category: 'DSA' },

{ question: 'Sudoku solver using backtracking fills empty cells by:', options: ['Trying all valid numbers recursively and backtracking when invalid', 'Sorting rows', 'Greedy selection', 'DFS traversal only'], correctAnswer: 'Trying all valid numbers recursively and backtracking when invalid', category: 'DSA' },

{ question: 'Time complexity of N-Queens backtracking solution is approximately:', options: ['O(N!)', 'O(N^2)', 'O(2^N)', 'O(N^3)'], correctAnswer: 'O(N!)', category: 'DSA' },

{ question: 'Rat in a maze problem finds paths from start to end by:', options: ['Moving recursively in all directions and backtracking on dead ends', 'DFS only', 'Greedy movement', 'Dynamic programming'], correctAnswer: 'Moving recursively in all directions and backtracking on dead ends', category: 'DSA' },

{ question: 'Word search problem backtracking explores:', options: ['All possible sequences of letters along allowed directions', 'Only horizontal rows', 'Only vertical columns', 'DFS for nodes'], correctAnswer: 'All possible sequences of letters along allowed directions', category: 'DSA' },

{ question: 'Backtracking can be seen as:', options: ['DFS with constraints', 'Greedy algorithm', 'BFS traversal', 'Dynamic programming'], correctAnswer: 'DFS with constraints', category: 'DSA' },

{ question: 'In N-Queens, when a placement leads to conflict:', options: ['Backtrack to previous row', 'Stop the algorithm', 'Place anyway', 'Restart board'], correctAnswer: 'Backtrack to previous row', category: 'DSA' },

{ question: 'Hamiltonian cycle problem is:', options: ['NP-complete', 'P-time solvable', 'Always solvable in trees', 'Always solvable in DAGs'], correctAnswer: 'NP-complete', category: 'DSA' },

{ question: 'Graph coloring backtracking explores:', options: ['All color assignments recursively', 'Single color assignment', 'Edges only', 'Vertices in BFS order'], correctAnswer: 'All color assignments recursively', category: 'DSA' },

{ question: 'Sudoku solver ensures valid placement by checking:', options: ['Row, column, and 3x3 grid constraints', 'Rows only', 'Columns only', 'Diagonals only'], correctAnswer: 'Row, column, and 3x3 grid constraints', category: 'DSA' },

{ question: 'Rat in a maze problem can be represented as:', options: ['2D grid of 0s and 1s where 1 is blocked', 'Graph adjacency list', 'Array of numbers', 'Stack of moves'], correctAnswer: '2D grid of 0s and 1s where 1 is blocked', category: 'DSA' },

{ question: 'Word search backtracking stops recursion when:', options: ['Current path is invalid', 'All words are found', 'First letter fails', 'DFS ends'], correctAnswer: 'Current path is invalid', category: 'DSA' },

{ question: 'N-Queens can also be solved using:', options: ['Bitmasking for optimization', 'Greedy algorithm', 'Heap', 'Dynamic programming'], correctAnswer: 'Bitmasking for optimization', category: 'DSA' },

{ question: 'In backtracking, pruning invalid paths helps to:', options: ['Reduce search space and time complexity', 'Increase recursion depth', 'Sort input', 'Apply DP'], correctAnswer: 'Reduce search space and time complexity', category: 'DSA' },

{ question: 'Hamiltonian cycle can be checked using backtracking by:', options: ['Recursively building paths and abandoning invalid ones', 'Greedy shortest edge selection', 'DFS without constraints', 'BFS only'], correctAnswer: 'Recursively building paths and abandoning invalid ones', category: 'DSA' },

{ question: 'Backtracking is not suitable when:', options: ['Problem size is very large and exponential time is prohibitive', 'Problem has constraints', 'DFS is needed', 'Finding all solutions'], correctAnswer: 'Problem size is very large and exponential time is prohibitive', category: 'DSA' },

// ============ GRAPH ALGORITHMS (Advanced - 20) ============
{ question: 'In graph representation, an adjacency list is more space-efficient for:', options: ['Sparse graphs', 'Complete graphs', 'Weighted graphs only', 'Directed graphs only'], correctAnswer: 'Sparse graphs', category: 'DSA' },

{ question: 'Breadth-First Search (BFS) uses which data structure?', options: ['Queue', 'Stack', 'Heap', 'Recursion'], correctAnswer: 'Queue', category: 'DSA' },

{ question: 'Depth-First Search (DFS) uses which data structure implicitly?', options: ['Call stack', 'Queue', 'Heap', 'Priority queue'], correctAnswer: 'Call stack', category: 'DSA' },

{ question: 'Connected components in an undirected graph can be found using:', options: ['DFS or BFS', 'Dijkstra', 'Kruskal', 'Floyd-Warshall'], correctAnswer: 'DFS or BFS', category: 'DSA' },

{ question: 'Topological sorting is applicable to:', options: ['Directed Acyclic Graphs (DAGs) only', 'Undirected graphs', 'Graphs with cycles', 'Weighted graphs only'], correctAnswer: 'Directed Acyclic Graphs (DAGs) only', category: 'DSA' },

{ question: 'Dijkstra’s algorithm finds shortest paths from a source vertex when:', options: ['All edge weights are non-negative', 'Negative weights exist', 'Graph is unweighted', 'Graph has cycles only'], correctAnswer: 'All edge weights are non-negative', category: 'DSA' },

{ question: 'Time complexity of Dijkstra’s algorithm using a min-heap is:', options: ['O((V + E) log V)', 'O(V^2)', 'O(E^2)', 'O(V*E)'], correctAnswer: 'O((V + E) log V)', category: 'DSA' },

{ question: 'Bellman-Ford algorithm can detect:', options: ['Negative weight cycles', 'All shortest paths only', 'MST', 'Connected components'], correctAnswer: 'Negative weight cycles', category: 'DSA' },

{ question: 'Time complexity of Bellman-Ford algorithm is:', options: ['O(V*E)', 'O(V^2)', 'O(E log V)', 'O(V+E)'], correctAnswer: 'O(V*E)', category: 'DSA' },

{ question: 'Floyd-Warshall algorithm solves:', options: ['All-pairs shortest paths', 'Single-source shortest paths', 'MST', 'Maximum flow'], correctAnswer: 'All-pairs shortest paths', category: 'DSA' },

{ question: 'Time complexity of Floyd-Warshall algorithm is:', options: ['O(V^3)', 'O(V*E)', 'O(E log V)', 'O(V^2)'], correctAnswer: 'O(V^3)', category: 'DSA' },

{ question: 'Prim’s algorithm grows the MST by:', options: ['Adding the minimum weight edge connecting MST to a new vertex', 'Choosing any edge', 'Adding edges in BFS order', 'Adding maximum weight edge'], correctAnswer: 'Adding the minimum weight edge connecting MST to a new vertex', category: 'DSA' },

{ question: 'Kruskal’s algorithm sorts edges by weight and:', options: ['Adds edges if they don’t form a cycle', 'Adds edges if they form a cycle', 'Removes edges randomly', 'Uses DFS'], correctAnswer: 'Adds edges if they don’t form a cycle', category: 'DSA' },

{ question: 'Kosaraju’s algorithm finds:', options: ['Strongly connected components', 'Minimum spanning tree', 'Topological order', 'Shortest path'], correctAnswer: 'Strongly connected components', category: 'DSA' },

{ question: 'Tarjan’s algorithm also finds strongly connected components using:', options: ['DFS and low-link values', 'BFS only', 'Heap', 'Greedy selection'], correctAnswer: 'DFS and low-link values', category: 'DSA' },

{ question: 'Ford-Fulkerson algorithm finds:', options: ['Maximum flow in a flow network', 'MST', 'Shortest path', 'Bipartite matching'], correctAnswer: 'Maximum flow in a flow network', category: 'DSA' },

{ question: 'Edmonds-Karp algorithm is an implementation of Ford-Fulkerson using:', options: ['BFS for finding augmenting paths', 'DFS only', 'Heap', 'Greedy selection'], correctAnswer: 'BFS for finding augmenting paths', category: 'DSA' },

{ question: 'Bipartite graph matching can be solved using:', options: ['Maximum flow reduction', 'DFS only', 'Floyd-Warshall', 'Prim’s algorithm'], correctAnswer: 'Maximum flow reduction', category: 'DSA' },

{ question: 'DFS finishing times in Kosaraju’s algorithm are used to:', options: ['Process vertices in reverse order for second DFS', 'Sort edges', 'Find shortest paths', 'Find MST'], correctAnswer: 'Process vertices in reverse order for second DFS', category: 'DSA' },

{ question: 'Adjacency matrix representation has space complexity of:', options: ['O(V^2)', 'O(V + E)', 'O(E)', 'O(V log V)'], correctAnswer: 'O(V^2)', category: 'DSA' },
 
// ============ STRING, NUMBER-THEORETIC & COMPUTATIONAL GEOMETRY ALGORITHMS (20) ============
{ question: 'Naïve pattern matching algorithm has time complexity of:', options: ['O(m*n)', 'O(n log n)', 'O(m+n)', 'O(n^2 log n)'], correctAnswer: 'O(m*n)', category: 'DSA' },

{ question: 'KMP algorithm improves pattern matching by using:', options: ['Longest Prefix Suffix (LPS) array', 'Hashing only', 'Sorting pattern', 'Brute force'], correctAnswer: 'Longest Prefix Suffix (LPS) array', category: 'DSA' },

{ question: 'Time complexity of KMP algorithm is:', options: ['O(n + m)', 'O(n*m)', 'O(n^2)', 'O(m log n)'], correctAnswer: 'O(n + m)', category: 'DSA' },

{ question: 'Rabin-Karp algorithm uses:', options: ['Rolling hash for pattern matching', 'DFS traversal', 'Greedy selection', 'Binary search'], correctAnswer: 'Rolling hash for pattern matching', category: 'DSA' },

{ question: 'Z-algorithm computes:', options: ['Z-array to find pattern occurrences efficiently', 'Prefix sum only', 'Suffix tree traversal', 'Heap structure'], correctAnswer: 'Z-array to find pattern occurrences efficiently', category: 'DSA' },

{ question: 'Suffix array stores:', options: ['Sorted order of all suffixes of a string', 'All substrings', 'Pattern matches', 'Prefixes only'], correctAnswer: 'Sorted order of all suffixes of a string', category: 'DSA' },

{ question: 'Suffix tree allows substring search in:', options: ['O(m) time', 'O(n) time', 'O(n*m) time', 'O(log n) time'], correctAnswer: 'O(m) time', category: 'DSA' },

{ question: 'Euclidean algorithm computes:', options: ['GCD of two numbers', 'LCM', 'Prime factorization', 'Modular inverse'], correctAnswer: 'GCD of two numbers', category: 'DSA' },

{ question: 'Time complexity of Euclidean GCD algorithm is:', options: ['O(log(min(a,b)))', 'O(a+b)', 'O(a*b)', 'O(1)'], correctAnswer: 'O(log(min(a,b)))', category: 'DSA' },

{ question: 'Modular exponentiation is used to compute:', options: ['(a^b) % m efficiently', 'GCD only', 'Factorials', 'All primes'], correctAnswer: '(a^b) % m efficiently', category: 'DSA' },

{ question: 'Sieve of Eratosthenes is used for:', options: ['Finding all primes ≤ n', 'GCD computation', 'Modular inverse', 'Sorting arrays'], correctAnswer: 'Finding all primes ≤ n', category: 'DSA' },

{ question: 'Time complexity of Sieve of Eratosthenes is:', options: ['O(n log log n)', 'O(n^2)', 'O(n log n)', 'O(n)'], correctAnswer: 'O(n log log n)', category: 'DSA' },

{ question: 'RSA algorithm is based on:', options: ['Difficulty of factoring large numbers', 'Sorting numbers', 'Graph traversal', 'Matrix multiplication'], correctAnswer: 'Difficulty of factoring large numbers', category: 'DSA' },

{ question: 'Convex hull problem finds:', options: ['Smallest convex polygon containing all points', 'Furthest point', 'Shortest path', 'Maximum area rectangle'], correctAnswer: 'Smallest convex polygon containing all points', category: 'DSA' },

{ question: 'Graham’s scan algorithm for convex hull has time complexity:', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'], correctAnswer: 'O(n log n)', category: 'DSA' },

{ question: 'Jarvis’s march (gift wrapping) convex hull algorithm is efficient for:', options: ['Small number of hull points', 'Large dense points', 'Graphs only', 'DP arrays'], correctAnswer: 'Small number of hull points', category: 'DSA' },

{ question: 'Line segment intersection algorithms are used in:', options: ['Detecting intersections in computational geometry', 'GCD computation', 'Modular exponentiation', 'Pattern matching'], correctAnswer: 'Detecting intersections in computational geometry', category: 'DSA' },

{ question: 'Sweep line algorithms are commonly used for:', options: ['Event-based processing of geometric objects', 'DFS traversal', 'Topological sorting', 'Heap operations'], correctAnswer: 'Event-based processing of geometric objects', category: 'DSA' },

{ question: 'Time complexity of checking all pairwise line intersections naively is:', options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(n^3)'], correctAnswer: 'O(n^2)', category: 'DSA' },

{ question: 'Suffix array combined with LCP array can be used for:', options: ['Finding longest repeated substring efficiently', 'Sorting integers', 'Greedy selection', 'Heap operations'], correctAnswer: 'Finding longest repeated substring efficiently', category: 'DSA' },


  // ============ DBMS (10) ============

  // ============ INTRODUCTION TO DBMS (20) ============
{ question: 'A database is primarily defined as:', options: ['A structured collection of data', 'A collection of files in a folder', 'Only temporary storage', 'A type of programming language'], correctAnswer: 'A structured collection of data', category: 'DBMS' },

{ question: 'One key advantage of a DBMS over a file system is:', options: ['Data consistency and integrity', 'Faster CPU execution', 'Simpler programming', 'Less memory usage'], correctAnswer: 'Data consistency and integrity', category: 'DBMS' },

{ question: 'The main purpose of a DBMS is to:', options: ['Store, retrieve, and manage data efficiently', 'Compile programs', 'Handle graphics', 'Manage network traffic'], correctAnswer: 'Store, retrieve, and manage data efficiently', category: 'DBMS' },

{ question: 'Database administrators (DBAs) are responsible for:', options: ['Maintaining database security, performance, and integrity', 'Writing only application code', 'Managing operating system processes', 'Designing UI interfaces'], correctAnswer: 'Maintaining database security, performance, and integrity', category: 'DBMS' },

{ question: 'End users of a database include:', options: ['Casual users, naive users, sophisticated users', 'Only system programmers', 'Only DBAs', 'Only network admins'], correctAnswer: 'Casual users, naive users, sophisticated users', category: 'DBMS' },

{ question: 'Characteristics of a DBMS include:', options: ['Data independence, minimal redundancy, data security, concurrency control', 'Single-user access only', 'No data security', 'Random file storage'], correctAnswer: 'Data independence, minimal redundancy, data security, concurrency control', category: 'DBMS' },

{ question: 'The 3-level architecture of a DBMS consists of:', options: ['Internal, Conceptual, External', 'Primary, Secondary, Tertiary', 'Physical, Logical, Network', 'File, Table, Record'], correctAnswer: 'Internal, Conceptual, External', category: 'DBMS' },

{ question: 'The internal level in DBMS architecture represents:', options: ['How data is physically stored', 'User views of data', 'Conceptual schema', 'Network protocols'], correctAnswer: 'How data is physically stored', category: 'DBMS' },

{ question: 'The conceptual level in DBMS architecture represents:', options: ['Logical structure of the entire database', 'User interface', 'Physical memory allocation', 'Data compression'], correctAnswer: 'Logical structure of the entire database', category: 'DBMS' },

{ question: 'The external level in DBMS architecture represents:', options: ['Individual user views of the data', 'Disk storage layout', 'Query optimization', 'Index structures'], correctAnswer: 'Individual user views of the data', category: 'DBMS' },

{ question: 'Hierarchical data model organizes data in:', options: ['A tree-like structure with parent-child relationships', 'A network of nodes with multiple links', 'Tables with rows and columns', 'Objects and methods'], correctAnswer: 'A tree-like structure with parent-child relationships', category: 'DBMS' },

{ question: 'Network data model organizes data as:', options: ['Records connected via sets or pointers allowing many-to-many relationships', 'Strict hierarchy', 'Only relational tables', 'Entity classes only'], correctAnswer: 'Records connected via sets or pointers allowing many-to-many relationships', category: 'DBMS' },

{ question: 'Relational data model stores data in:', options: ['Tables (relations) with rows and columns', 'Hierarchical tree structures', 'Linked lists', 'Network graphs'], correctAnswer: 'Tables (relations) with rows and columns', category: 'DBMS' },

{ question: 'In ER model, entities are:', options: ['Objects or things in the real world with distinct existence', 'Only tables in a database', 'Only attributes', 'Only keys'], correctAnswer: 'Objects or things in the real world with distinct existence', category: 'DBMS' },

{ question: 'In ER model, relationships represent:', options: ['Associations between entities', 'Memory allocation', 'Query optimization', 'Physical storage'], correctAnswer: 'Associations between entities', category: 'DBMS' },

{ question: 'Object-oriented data model combines:', options: ['Database capabilities with object-oriented programming concepts', 'Only tables and columns', 'Network pointers only', 'Hierarchical files only'], correctAnswer: 'Database capabilities with object-oriented programming concepts', category: 'DBMS' },

{ question: 'Key difference between file system and DBMS is:', options: ['DBMS provides data independence and minimizes redundancy', 'File system provides transactions', 'DBMS cannot support multiple users', 'File system ensures ACID properties'], correctAnswer: 'DBMS provides data independence and minimizes redundancy', category: 'DBMS' },

{ question: 'Which data model allows many-to-many relationships natively?', options: ['Network model', 'Hierarchical model', 'Relational model', 'Object-oriented model'], correctAnswer: 'Network model', category: 'DBMS' },

{ question: 'Which DBMS level hides physical storage details from users?', options: ['Conceptual level', 'Internal level', 'External level', 'File level'], correctAnswer: 'Conceptual level', category: 'DBMS' },

{ question: 'An advantage of using relational model over hierarchical model is:', options: ['Easier querying using SQL and flexible relationships', 'Faster tree traversal', 'Less memory usage always', 'No need for normalization'], correctAnswer: 'Easier querying using SQL and flexible relationships', category: 'DBMS' },

// ============ DATABASE ARCHITECTURE & DBMS LANGUAGES (20) ============

{ question: '1-tier DBMS architecture is also called:', options: ['Single-tier or file server architecture', 'Client-server architecture', 'Three-tier architecture', 'Cloud-based architecture'], correctAnswer: 'Single-tier or file server architecture', category: 'DBMS' },

{ question: '2-tier DBMS architecture typically involves:', options: ['Client directly communicates with database server', 'Only one user can access', 'All processing is done on client', 'All processing is done on DB server'], correctAnswer: 'Client directly communicates with database server', category: 'DBMS' },

{ question: '3-tier DBMS architecture includes:', options: ['Presentation layer, Application layer, Database layer', 'Only client and server', 'Only database server', 'Cloud and local client'], correctAnswer: 'Presentation layer, Application layer, Database layer', category: 'DBMS' },

{ question: 'Advantage of 3-tier architecture over 2-tier is:', options: ['Better scalability and separation of concerns', 'Faster disk access', 'No network needed', 'Simpler SQL'], correctAnswer: 'Better scalability and separation of concerns', category: 'DBMS' },

{ question: 'Logical data independence refers to:', options: ['Ability to change conceptual schema without affecting external schemas', 'Ability to change physical storage without affecting conceptual schema', 'Changing queries dynamically', 'Changing programming language'], correctAnswer: 'Ability to change conceptual schema without affecting external schemas', category: 'DBMS' },

{ question: 'Physical data independence refers to:', options: ['Ability to change physical storage without affecting conceptual schema', 'Ability to change queries', 'Changing external views', 'Changing table names only'], correctAnswer: 'Ability to change physical storage without affecting conceptual schema', category: 'DBMS' },

{ question: 'Data Definition Language (DDL) is used to:', options: ['Define and modify database schema', 'Insert and update data', 'Control user privileges', 'Commit or rollback transactions'], correctAnswer: 'Define and modify database schema', category: 'DBMS' },

{ question: 'Common DDL commands include:', options: ['CREATE, ALTER, DROP', 'SELECT, INSERT, UPDATE', 'GRANT, REVOKE', 'COMMIT, ROLLBACK'], correctAnswer: 'CREATE, ALTER, DROP', category: 'DBMS' },

{ question: 'Data Manipulation Language (DML) is used to:', options: ['Manipulate data stored in the database', 'Define database schema', 'Control transactions', 'Manage privileges'], correctAnswer: 'Manipulate data stored in the database', category: 'DBMS' },

{ question: 'Common DML commands include:', options: ['SELECT, INSERT, UPDATE, DELETE', 'CREATE, ALTER, DROP', 'GRANT, REVOKE', 'COMMIT, ROLLBACK'], correctAnswer: 'SELECT, INSERT, UPDATE, DELETE', category: 'DBMS' },

{ question: 'Data Control Language (DCL) is used for:', options: ['Controlling access and permissions for users', 'Modifying table data', 'Defining database schema', 'Transaction management'], correctAnswer: 'Controlling access and permissions for users', category: 'DBMS' },

{ question: 'Common DCL commands include:', options: ['GRANT, REVOKE', 'SELECT, INSERT', 'CREATE, DROP', 'COMMIT, ROLLBACK'], correctAnswer: 'GRANT, REVOKE', category: 'DBMS' },

{ question: 'Transaction Control Language (TCL) is used to:', options: ['Manage transactions ensuring ACID properties', 'Modify table schema', 'Control user access', 'Perform joins'], correctAnswer: 'Manage transactions ensuring ACID properties', category: 'DBMS' },

{ question: 'Common TCL commands include:', options: ['COMMIT, ROLLBACK, SAVEPOINT', 'CREATE, DROP', 'SELECT, INSERT', 'GRANT, REVOKE'], correctAnswer: 'COMMIT, ROLLBACK, SAVEPOINT', category: 'DBMS' },

{ question: 'Which DBMS architecture is suitable for web-based applications?', options: ['3-tier architecture', '1-tier architecture', 'Single-user architecture', 'Mainframe architecture'], correctAnswer: '3-tier architecture', category: 'DBMS' },

{ question: 'Changing the storage format of a table without affecting application programs demonstrates:', options: ['Physical data independence', 'Logical data independence', 'TCL usage', 'DCL usage'], correctAnswer: 'Physical data independence', category: 'DBMS' },

{ question: 'Changing a table structure by adding a new column without affecting user queries demonstrates:', options: ['Logical data independence', 'Physical data independence', 'DCL usage', 'TCL usage'], correctAnswer: 'Logical data independence', category: 'DBMS' },

{ question: 'Which DBMS language is required to define triggers?', options: ['DDL', 'DML', 'DCL', 'TCL'], correctAnswer: 'DDL', category: 'DBMS' },

{ question: 'ROLLBACK command in TCL is used to:', options: ['Undo changes made in the current transaction', 'Insert new data', 'Drop a table', 'Grant privileges'], correctAnswer: 'Undo changes made in the current transaction', category: 'DBMS' },

{ question: 'SAVEPOINT command in TCL is used to:', options: ['Set a point within a transaction to roll back to', 'Create a new table', 'Update data', 'Delete users'], correctAnswer: 'Set a point within a transaction to roll back to', category: 'DBMS' },

 // ============ ER MODEL (20) ============

{ question: 'An entity in ER model represents:', options: ['A real-world object with distinct existence', 'Only a database table', 'An attribute of a table', 'A query'], correctAnswer: 'A real-world object with distinct existence', category: 'DBMS' },

{ question: 'An attribute in ER model represents:', options: ['A property or characteristic of an entity', 'A relationship', 'A table name', 'A user'], correctAnswer: 'A property or characteristic of an entity', category: 'DBMS' },

{ question: 'Primary key attributes are used to:', options: ['Uniquely identify each entity instance', 'Represent relationships', 'Label weak entities', 'Describe aggregation'], correctAnswer: 'Uniquely identify each entity instance', category: 'DBMS' },

{ question: 'Composite attributes are:', options: ['Attributes that can be divided into subparts', 'Attributes with single value', 'Keys only', 'Derived attributes'], correctAnswer: 'Attributes that can be divided into subparts', category: 'DBMS' },

{ question: 'Derived attributes are:', options: ['Attributes whose value can be computed from other attributes', 'Primary keys', 'Foreign keys', 'Weak entity identifiers'], correctAnswer: 'Attributes whose value can be computed from other attributes', category: 'DBMS' },

{ question: 'A relationship in ER model represents:', options: ['An association among two or more entities', 'A table schema', 'A query execution plan', 'A primary key'], correctAnswer: 'An association among two or more entities', category: 'DBMS' },

{ question: 'Cardinality in ER diagrams indicates:', options: ['Number of entity instances participating in a relationship', 'Length of a string attribute', 'Size of a table', 'Number of tables in a database'], correctAnswer: 'Number of entity instances participating in a relationship', category: 'DBMS' },

{ question: 'Weak entities differ from strong entities because:', options: ['They do not have a primary key of their own and rely on a strong entity', 'They have multiple primary keys', 'They are temporary', 'They cannot participate in relationships'], correctAnswer: 'They do not have a primary key of their own and rely on a strong entity', category: 'DBMS' },

{ question: 'In ER diagrams, double rectangles represent:', options: ['Weak entities', 'Strong entities', 'Relationships', 'Attributes'], correctAnswer: 'Weak entities', category: 'DBMS' },

{ question: 'Single rectangle in ER diagram represents:', options: ['Strong entity', 'Weak entity', 'Relationship', 'Attribute'], correctAnswer: 'Strong entity', category: 'DBMS' },

{ question: 'ER diagrams use diamonds to represent:', options: ['Relationships', 'Attributes', 'Entities', 'Keys'], correctAnswer: 'Relationships', category: 'DBMS' },

{ question: 'Participation constraints specify:', options: ['Whether all or some entity instances participate in a relationship', 'Length of attributes', 'Database size', 'Foreign key constraints'], correctAnswer: 'Whether all or some entity instances participate in a relationship', category: 'DBMS' },

{ question: 'Generalization in ER modeling is:', options: ['Abstracting common attributes of multiple entities into a higher-level entity', 'Breaking one entity into multiple tables', 'Converting weak entities into strong', 'Mapping relationships to tables'], correctAnswer: 'Abstracting common attributes of multiple entities into a higher-level entity', category: 'DBMS' },

{ question: 'Specialization in ER modeling is:', options: ['Defining lower-level entities from a higher-level entity', 'Merging entities', 'Creating relationships', 'Defining attributes only'], correctAnswer: 'Defining lower-level entities from a higher-level entity', category: 'DBMS' },

{ question: 'Aggregation in ER model is used to:', options: ['Model a relationship as a higher-level entity', 'Combine attributes', 'Divide entities', 'Define primary keys'], correctAnswer: 'Model a relationship as a higher-level entity', category: 'DBMS' },

{ question: 'A one-to-many (1:N) relationship means:', options: ['One entity instance is related to multiple instances of another entity', 'Each entity has exactly one counterpart', 'Many-to-many relationship', 'Weak entity participation'], correctAnswer: 'One entity instance is related to multiple instances of another entity', category: 'DBMS' },

{ question: 'A many-to-many (M:N) relationship requires:', options: ['An associative entity or junction table in relational mapping', 'No foreign key', 'Only primary key', 'No mapping needed'], correctAnswer: 'An associative entity or junction table in relational mapping', category: 'DBMS' },

{ question: 'ER diagram notation for multi-valued attribute is:', options: ['Double oval', 'Single oval', 'Diamond', 'Rectangle'], correctAnswer: 'Double oval', category: 'DBMS' },

{ question: 'Identifying relationship connects:', options: ['Weak entity to strong entity for primary key inheritance', 'Two strong entities', 'Attributes only', 'Tables only'], correctAnswer: 'Weak entity to strong entity for primary key inheritance', category: 'DBMS' },

{ question: 'Which of the following is true about generalization and specialization?', options: ['They are opposite processes; generalization abstracts, specialization refines', 'They are the same', 'They apply only to weak entities', 'They are only physical storage concepts'], correctAnswer: 'They are opposite processes; generalization abstracts, specialization refines', category: 'DBMS' },

// ============ SQL BASICS & ADVANCED CONCEPTS (40) ============

// ===== DDL Commands =====
{ question: 'Which SQL command is used to create a new table?', options: ['CREATE', 'ALTER', 'DROP', 'INSERT'], correctAnswer: 'CREATE', category: 'SQL' },
{ question: 'Which SQL command is used to modify an existing table structure?', options: ['ALTER', 'CREATE', 'DROP', 'UPDATE'], correctAnswer: 'ALTER', category: 'SQL' },
{ question: 'Which SQL command permanently deletes a table and its data?', options: ['DROP', 'DELETE', 'TRUNCATE', 'REMOVE'], correctAnswer: 'DROP', category: 'SQL' },

// ===== DML Commands =====
{ question: 'Which SQL command is used to insert new records into a table?', options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'], correctAnswer: 'INSERT', category: 'SQL' },
{ question: 'Which SQL command updates existing data in a table?', options: ['UPDATE', 'INSERT', 'DELETE', 'MODIFY'], correctAnswer: 'UPDATE', category: 'SQL' },
{ question: 'Which SQL command deletes data from a table but keeps the table structure?', options: ['DELETE', 'DROP', 'TRUNCATE', 'ALTER'], correctAnswer: 'DELETE', category: 'SQL' },

// ===== SELECT Queries =====
{ question: 'Which clause filters records in a SELECT query?', options: ['WHERE', 'GROUP BY', 'ORDER BY', 'HAVING'], correctAnswer: 'WHERE', category: 'SQL' },
{ question: 'Which clause is used to sort the result set?', options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'], correctAnswer: 'ORDER BY', category: 'SQL' },
{ question: 'Which clause groups rows sharing a property?', options: ['GROUP BY', 'ORDER BY', 'WHERE', 'HAVING'], correctAnswer: 'GROUP BY', category: 'SQL' },
{ question: 'Which clause filters groups after aggregation?', options: ['HAVING', 'WHERE', 'GROUP BY', 'ORDER BY'], correctAnswer: 'HAVING', category: 'SQL' },

// ===== Joins =====
{ question: 'Inner Join returns:', options: ['Only matching rows from both tables', 'All rows from left table', 'All rows from right table', 'All rows from both tables'], correctAnswer: 'Only matching rows from both tables', category: 'SQL' },
{ question: 'Left Outer Join returns:', options: ['All rows from left table and matched rows from right', 'Only matching rows', 'All rows from right table', 'All rows from both tables'], correctAnswer: 'All rows from left table and matched rows from right', category: 'SQL' },
{ question: 'Right Outer Join returns:', options: ['All rows from right table and matched rows from left', 'Only matching rows', 'All rows from left table', 'All rows from both tables'], correctAnswer: 'All rows from right table and matched rows from left', category: 'SQL' },
{ question: 'Full Outer Join returns:', options: ['All rows from both tables with NULLs for unmatched', 'Only matching rows', 'All rows from left table', 'All rows from right table'], correctAnswer: 'All rows from both tables with NULLs for unmatched', category: 'SQL' },
{ question: 'A Self Join is:', options: ['Joining a table to itself', 'Joining two different tables', 'Joining three tables', 'A type of Outer Join'], correctAnswer: 'Joining a table to itself', category: 'SQL' },

// ===== Subqueries & Nested Queries =====
{ question: 'A subquery is:', options: ['A query within another query', 'A type of join', 'An index', 'A stored procedure'], correctAnswer: 'A query within another query', category: 'SQL' },
{ question: 'Correlated subquery:', options: ['Depends on outer query for each row', 'Independent query', 'Same as Inner Join', 'A type of trigger'], correctAnswer: 'Depends on outer query for each row', category: 'SQL' },

// ===== Views =====
{ question: 'A SQL View is:', options: ['A virtual table based on a query', 'A physical table', 'A stored procedure', 'An index'], correctAnswer: 'A virtual table based on a query', category: 'SQL' },
{ question: 'Views help in:', options: ['Simplifying queries and providing security', 'Faster joins', 'Storing data permanently', 'Managing indexes'], correctAnswer: 'Simplifying queries and providing security', category: 'SQL' },

// ===== Indexes =====
{ question: 'An index in SQL is used to:', options: ['Speed up query performance', 'Store data permanently', 'Control user access', 'Define triggers'], correctAnswer: 'Speed up query performance', category: 'SQL' },
{ question: 'Unique index ensures:', options: ['No duplicate values in indexed column(s)', 'Faster joins', 'Transaction management', 'Nested query optimization'], correctAnswer: 'No duplicate values in indexed column(s)', category: 'SQL' },

// ===== Sequences =====
{ question: 'A sequence in SQL is used to:', options: ['Generate numeric values automatically', 'Insert data manually', 'Define table schema', 'Create triggers'], correctAnswer: 'Generate numeric values automatically', category: 'SQL' },
{ question: 'Sequences are commonly used for:', options: ['Primary key generation', 'Joining tables', 'View creation', 'Nested queries'], correctAnswer: 'Primary key generation', category: 'SQL' },

// ===== Stored Procedures & Functions =====
{ question: 'A stored procedure is:', options: ['A precompiled SQL code block that can be executed repeatedly', 'An index', 'A view', 'A table'], correctAnswer: 'A precompiled SQL code block that can be executed repeatedly', category: 'SQL' },
{ question: 'A function differs from a stored procedure because:', options: ['It must return a value', 'It cannot use SQL', 'It executes only once', 'It creates tables automatically'], correctAnswer: 'It must return a value', category: 'SQL' },

// ===== Triggers =====
{ question: 'A trigger in SQL is:', options: ['A procedure that automatically executes in response to certain events', 'A view', 'A sequence', 'A DCL command'], correctAnswer: 'A procedure that automatically executes in response to certain events', category: 'SQL' },
{ question: 'Triggers are commonly used for:', options: ['Enforcing business rules and auditing changes', 'Query optimization', 'Indexing', 'Stored procedures'], correctAnswer: 'Enforcing business rules and auditing changes', category: 'SQL' },

// ===== Cursors =====
{ question: 'A cursor in SQL is:', options: ['A pointer to retrieve rows one at a time from a result set', 'A stored procedure', 'An index', 'A table alias'], correctAnswer: 'A pointer to retrieve rows one at a time from a result set', category: 'SQL' },
{ question: 'Cursors are useful when:', options: ['Row-by-row processing is required', 'Bulk insert is needed', 'Creating indexes', 'Defining views'], correctAnswer: 'Row-by-row processing is required', category: 'SQL' },

// ===== Advanced SQL Concepts =====
{ question: 'Which join can be used to find unmatched rows in one table?', options: ['Left or Right Outer Join with NULL filter', 'Inner Join', 'Full Join only', 'Self Join'], correctAnswer: 'Left or Right Outer Join with NULL filter', category: 'SQL' },
{ question: 'Nested subqueries can be used in:', options: ['SELECT, WHERE, FROM clauses', 'Only SELECT clause', 'Only WHERE clause', 'Only FROM clause'], correctAnswer: 'SELECT, WHERE, FROM clauses', category: 'SQL' },
{ question: 'Indexes may slow down which operation?', options: ['INSERT, UPDATE, DELETE', 'SELECT', 'Views', 'Sequences'], correctAnswer: 'INSERT, UPDATE, DELETE', category: 'SQL' },
{ question: 'Which SQL object encapsulates multiple SQL statements for reuse?', options: ['Stored procedure', 'Index', 'Trigger', 'Sequence'], correctAnswer: 'Stored procedure', category: 'SQL' },
{ question: 'Trigger event types include:', options: ['BEFORE, AFTER INSERT/UPDATE/DELETE', 'CREATE, DROP, ALTER', 'SELECT, INSERT, UPDATE', 'COMMIT, ROLLBACK'], correctAnswer: 'BEFORE, AFTER INSERT/UPDATE/DELETE', category: 'SQL' },
{ question: 'Cursor types include:', options: ['Implicit and explicit', 'Strong and weak', 'Temporary and permanent', 'Virtual and physical'], correctAnswer: 'Implicit and explicit', category: 'SQL' },
{ question: 'Views cannot:', options: ['Store data physically', 'Be queried like tables', 'Join multiple tables', 'Include aggregate functions'], correctAnswer: 'Store data physically', category: 'SQL' },
{ question: 'Which sequence option ensures no gaps in numbering?', options: ['CACHE 1', 'NOCACHE', 'CYCLE', 'NOORDER'], correctAnswer: 'NOCACHE', category: 'SQL' },
{ question: 'A trigger can reference:', options: ['Inserted and deleted pseudo-tables', 'Only primary keys', 'Indexes', 'Sequences'], correctAnswer: 'Inserted and deleted pseudo-tables', category: 'SQL' },
{ question: 'Stored function can be called in:', options: ['SELECT statements', 'DML statements only', 'DDL statements only', 'Trigger definition only'], correctAnswer: 'SELECT statements', category: 'SQL' },

// ============ DATABASE DESIGN, NORMALIZATION & TRANSACTIONS (20) ============

// ===== Functional Dependencies =====
{ question: 'A functional dependency X → Y means:', options: ['Value of X uniquely determines Y', 'Value of Y uniquely determines X', 'X and Y are unrelated', 'X is a primary key'], correctAnswer: 'Value of X uniquely determines Y', category: 'DBMS' },

{ question: 'Trivial functional dependency occurs when:', options: ['Y is a subset of X', 'X is a primary key', 'Y is unrelated to X', 'X and Y are composite keys'], correctAnswer: 'Y is a subset of X', category: 'DBMS' },

// ===== Anomalies =====
{ question: 'Insertion anomaly occurs when:', options: ['Cannot insert data due to missing related data', 'Data is duplicated', 'Query runs slowly', 'Table has no primary key'], correctAnswer: 'Cannot insert data due to missing related data', category: 'DBMS' },

{ question: 'Update anomaly occurs when:', options: ['Need to update multiple rows for consistency', 'Data is deleted unintentionally', 'Cannot insert new row', 'Index is missing'], correctAnswer: 'Need to update multiple rows for consistency', category: 'DBMS' },

{ question: 'Deletion anomaly occurs when:', options: ['Deleting a row removes unintended data', 'Cannot delete row', 'Query fails', 'Foreign key is invalid'], correctAnswer: 'Deleting a row removes unintended data', category: 'DBMS' },

// ===== Normalization =====
{ question: '1NF requires:', options: ['Atomic attributes (no repeating groups)', 'No partial dependency', 'No transitive dependency', 'Every determinant is a candidate key'], correctAnswer: 'Atomic attributes (no repeating groups)', category: 'DBMS' },

{ question: '2NF requires:', options: ['1NF and no partial dependency', '1NF only', '3NF only', 'BCNF'], correctAnswer: '1NF and no partial dependency', category: 'DBMS' },

{ question: '3NF requires:', options: ['2NF and no transitive dependency', '2NF only', '1NF only', 'BCNF'], correctAnswer: '2NF and no transitive dependency', category: 'DBMS' },

{ question: 'BCNF requires:', options: ['Every determinant is a candidate key', 'No repeating groups', 'No partial dependency', 'No transitive dependency'], correctAnswer: 'Every determinant is a candidate key', category: 'DBMS' },

{ question: '4NF deals with:', options: ['Multi-valued dependencies', 'Partial dependencies', 'Transitive dependencies', 'Join dependencies'], correctAnswer: 'Multi-valued dependencies', category: 'DBMS' },

{ question: '5NF (Projection-Join Normal Form) resolves:', options: ['Join dependencies', 'Transitive dependencies', 'Partial dependencies', 'Multi-valued dependencies'], correctAnswer: 'Join dependencies', category: 'DBMS' },

{ question: 'Denormalization is used to:', options: ['Improve query performance by adding redundancy', 'Eliminate anomalies', 'Normalize tables fully', 'Create indexes'], correctAnswer: 'Improve query performance by adding redundancy', category: 'DBMS' },

// ===== Transactions & ACID =====
{ question: 'Which property of ACID ensures all operations succeed or none?', options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'], correctAnswer: 'Atomicity', category: 'DBMS' },

{ question: 'Which ACID property ensures the database remains valid?', options: ['Consistency', 'Atomicity', 'Isolation', 'Durability'], correctAnswer: 'Consistency', category: 'DBMS' },

{ question: 'Which ACID property ensures concurrent transactions do not interfere?', options: ['Isolation', 'Consistency', 'Atomicity', 'Durability'], correctAnswer: 'Isolation', category: 'DBMS' },

{ question: 'Which ACID property ensures changes are permanent after commit?', options: ['Durability', 'Isolation', 'Consistency', 'Atomicity'], correctAnswer: 'Durability', category: 'DBMS' },

// ===== Concurrency Problems =====
{ question: 'Lost update occurs when:', options: ['Two transactions overwrite each other’s updates', 'Transaction reads uncommitted data', 'Transaction reads same data twice', 'Phantom row appears'], correctAnswer: 'Two transactions overwrite each other’s updates', category: 'DBMS' },

{ question: 'Dirty read occurs when:', options: ['Transaction reads uncommitted changes of another transaction', 'Two transactions overwrite updates', 'Transaction reads same row twice', 'Phantom row appears'], correctAnswer: 'Transaction reads uncommitted changes of another transaction', category: 'DBMS' },

{ question: 'Non-repeatable read occurs when:', options: ['Same query returns different results due to another committed transaction', 'Two transactions overwrite updates', 'Dirty data is read', 'New rows appear unexpectedly'], correctAnswer: 'Same query returns different results due to another committed transaction', category: 'DBMS' },

{ question: 'Phantom read occurs when:', options: ['New rows are inserted by another transaction and appear in repeated query', 'Transaction fails', 'Data is lost', 'Partial rollback occurs'], correctAnswer: 'New rows are inserted by another transaction and appear in repeated query', category: 'DBMS' },

// ===== Concurrency Control Techniques =====
{ question: 'Two-Phase Locking (2PL) protocol ensures:', options: ['Conflict serializability', 'View serializability', 'Deadlock prevention only', 'Snapshot isolation'], correctAnswer: 'Conflict serializability', category: 'DBMS' },

{ question: 'Timestamp ordering protocol is used to:', options: ['Serialize transactions based on timestamps', 'Avoid using locks', 'Prevent phantom reads only', 'Handle only reads'], correctAnswer: 'Serialize transactions based on timestamps', category: 'DBMS' },

{ question: 'Multiversion Concurrency Control (MVCC) helps to:', options: ['Allow readers and writers without blocking', 'Enforce two-phase locking', 'Prevent dirty writes only', 'Enable triggers'], correctAnswer: 'Allow readers and writers without blocking', category: 'DBMS' },

// ============ RECOVERY MANAGEMENT, INDEXING & HASHING (20) ============

// ===== Recovery Management: Failures =====
{ question: 'A transaction failure occurs due to:', options: ['Logical errors or constraint violations', 'Hardware crash', 'Disk failure', 'Power outage'], correctAnswer: 'Logical errors or constraint violations', category: 'DBMS' },
{ question: 'System crash is caused by:', options: ['Operating system or DBMS failure', 'User input error', 'Query syntax error', 'Index corruption'], correctAnswer: 'Operating system or DBMS failure', category: 'DBMS' },
{ question: 'Disk failure typically affects:', options: ['Permanent data storage', 'Memory only', 'CPU cache', 'Temporary logs'], correctAnswer: 'Permanent data storage', category: 'DBMS' },

// ===== Recovery Techniques =====
{ question: 'Immediate update technique writes changes:', options: ['To the database before commit', 'Only after commit', 'To logs only', 'To shadow pages only'], correctAnswer: 'To the database before commit', category: 'DBMS' },
{ question: 'Deferred update technique writes changes:', options: ['Only after commit', 'Before commit', 'To logs only', 'Randomly'], correctAnswer: 'Only after commit', category: 'DBMS' },
{ question: 'Shadow paging avoids the need for:', options: ['Undo logging', 'Redo logging', 'Checkpoints', 'B+ Trees'], correctAnswer: 'Undo logging', category: 'DBMS' },
{ question: 'ARIES recovery algorithm is based on:', options: ['Write-ahead logging with redo and undo', 'Deferred update only', 'Immediate update only', 'Shadow paging only'], correctAnswer: 'Write-ahead logging with redo and undo', category: 'DBMS' },
{ question: 'Checkpoints in recovery are used to:', options: ['Reduce recovery time after a crash', 'Store temporary queries', 'Optimize indexes', 'Manage transactions only'], correctAnswer: 'Reduce recovery time after a crash', category: 'DBMS' },

// ===== Indexing: Basics =====
{ question: 'Primary index is created on:', options: ['Primary key', 'Any column', 'Foreign key', 'Unique constraint only'], correctAnswer: 'Primary key', category: 'DBMS' },
{ question: 'Secondary index is created on:', options: ['Non-primary key attributes', 'Primary key only', 'Foreign key only', 'Index table only'], correctAnswer: 'Non-primary key attributes', category: 'DBMS' },
{ question: 'Clustered index stores:', options: ['Table data in the order of the index key', 'Index separately from data', 'Logs only', 'Hash values only'], correctAnswer: 'Table data in the order of the index key', category: 'DBMS' },
{ question: 'Dense index has an entry for:', options: ['Every search key value', 'Some search key values only', 'Only primary keys', 'Only foreign keys'], correctAnswer: 'Every search key value', category: 'DBMS' },
{ question: 'Sparse index has an entry for:', options: ['Some search key values', 'Every search key value', 'Only primary keys', 'Only foreign keys'], correctAnswer: 'Some search key values', category: 'DBMS' },

// ===== Multilevel & B+ Tree Indexing =====
{ question: 'Multilevel index is used to:', options: ['Reduce the number of disk accesses', 'Avoid primary keys', 'Perform hashing', 'Store temporary logs'], correctAnswer: 'Reduce the number of disk accesses', category: 'DBMS' },
{ question: 'B+ Tree differs from B-Tree because:', options: ['All values are stored at leaf nodes only', 'It allows only one key per node', 'It does not support range queries', 'It cannot be balanced'], correctAnswer: 'All values are stored at leaf nodes only', category: 'DBMS' },
{ question: 'B+ Tree leaf nodes are typically linked to:', options: ['Allow efficient range queries', 'Store root only', 'Store metadata only', 'Support hashing only'], correctAnswer: 'Allow efficient range queries', category: 'DBMS' },

// ===== Hashing =====
{ question: 'Static hashing uses:', options: ['Fixed number of buckets', 'Dynamic number of buckets', 'B+ Trees', 'Linked lists only'], correctAnswer: 'Fixed number of buckets', category: 'DBMS' },
{ question: 'Dynamic hashing adjusts:', options: ['Number of buckets based on data', 'Index levels', 'Transaction logs', 'Views'], correctAnswer: 'Number of buckets based on data', category: 'DBMS' },
{ question: 'Extendible hashing uses:', options: ['Directory to map hash values to buckets', 'Fixed bucket size only', 'Sparse indexes', 'B+ Tree nodes'], correctAnswer: 'Directory to map hash values to buckets', category: 'DBMS' },
{ question: 'Linear hashing gradually:', options: ['Expands the number of buckets to avoid overflow', 'Uses fixed hash function only', 'Creates dense indexes', 'Performs deferred updates'], correctAnswer: 'Expands the number of buckets to avoid overflow', category: 'DBMS' },
{ question: 'Hashing is commonly used for:', options: ['Fast equality search', 'Sorting', 'Range queries', 'Join operations only'], correctAnswer: 'Fast equality search', category: 'DBMS' },

// ============ FILE ORGANIZATION, QUERY PROCESSING, SECURITY, DISTRIBUTED DB, ADVANCED TOPICS (40) ============

// ===== File Organization =====
{ question: 'Heap files store records:', options: ['In arbitrary order', 'Sorted by key', 'Hashed by key', 'In tree structure'], correctAnswer: 'In arbitrary order', category: 'DBMS' },
{ question: 'Sequential files are organized:', options: ['Sorted by a key field', 'In arbitrary order', 'Using hashing', 'In B+ tree only'], correctAnswer: 'Sorted by a key field', category: 'DBMS' },
{ question: 'Hash-based file organization helps in:', options: ['Fast equality searches', 'Range queries', 'Sorting only', 'Full table scan'], correctAnswer: 'Fast equality searches', category: 'DBMS' },
{ question: 'Indexed files contain:', options: ['An index for quick access to records', 'Only primary keys', 'Data in heap format', 'Hashed pointers only'], correctAnswer: 'An index for quick access to records', category: 'DBMS' },
{ question: 'Primary index is suitable for:', options: ['Sequential access', 'Random inserts only', 'Range queries only', 'Hash joins only'], correctAnswer: 'Sequential access', category: 'DBMS' },

// ===== Query Processing & Optimization =====
{ question: 'The first step in query processing is:', options: ['Parsing and translation', 'Cost estimation', 'Execution', 'Optimization'], correctAnswer: 'Parsing and translation', category: 'DBMS' },
{ question: 'Query tree represents:', options: ['Operations of a query in a tree form', 'Physical storage of data', 'User privileges', 'Indexes'], correctAnswer: 'Operations of a query in a tree form', category: 'DBMS' },
{ question: 'Query graph is used to represent:', options: ['Relations and join conditions', 'Indexes only', 'Transactions', 'File blocks'], correctAnswer: 'Relations and join conditions', category: 'DBMS' },
{ question: 'Cost-based optimization selects query plan based on:', options: ['Estimated resource cost', 'Alphabetical order', 'Random choice', 'User hints only'], correctAnswer: 'Estimated resource cost', category: 'DBMS' },
{ question: 'Heuristic optimization uses:', options: ['Rules of thumb', 'Exact cost formulas', 'ARIES logging', 'Distributed transactions'], correctAnswer: 'Rules of thumb', category: 'DBMS' },

// ===== Security in DBMS =====
{ question: 'Authentication ensures:', options: ['Identity verification of users', 'Data encryption', 'Transaction rollback', 'Index creation'], correctAnswer: 'Identity verification of users', category: 'DBMS' },
{ question: 'Authorization ensures:', options: ['Access rights for users', 'Memory allocation', 'Query optimization', 'File organization'], correctAnswer: 'Access rights for users', category: 'DBMS' },
{ question: 'Discretionary access control (DAC) is based on:', options: ['Owner-defined permissions', 'System-defined rules only', 'Time-based rules', 'Indexes'], correctAnswer: 'Owner-defined permissions', category: 'DBMS' },
{ question: 'Mandatory access control (MAC) is:', options: ['System-enforced access based on labels', 'Owner-defined permissions', 'Random access', 'Index-based'], correctAnswer: 'System-enforced access based on labels', category: 'DBMS' },
{ question: 'Role-Based Access Control (RBAC) assigns permissions based on:', options: ['User roles', 'File sizes', 'Transaction cost', 'Index structure'], correctAnswer: 'User roles', category: 'DBMS' },
{ question: 'Encryption in databases protects:', options: ['Data confidentiality', 'Transaction logs only', 'Indexes only', 'Query plans'], correctAnswer: 'Data confidentiality', category: 'DBMS' },
{ question: 'SQL injection can be prevented by:', options: ['Using prepared statements', 'Manual string concatenation', 'No indexing', 'Deferred update'], correctAnswer: 'Using prepared statements', category: 'DBMS' },

// ===== Distributed Databases =====
{ question: 'A distributed database stores data:', options: ['Across multiple sites', 'In a single central location', 'In memory only', 'In temporary files only'], correctAnswer: 'Across multiple sites', category: 'DBMS' },
{ question: 'Homogeneous distributed databases:', options: ['Use same DBMS software at all sites', 'Use different DBMS at each site', 'Do not support replication', 'Are read-only'], correctAnswer: 'Use same DBMS software at all sites', category: 'DBMS' },
{ question: 'Heterogeneous distributed databases:', options: ['Use different DBMS software at sites', 'Use same DBMS only', 'Cannot support fragmentation', 'Do not allow queries'], correctAnswer: 'Use different DBMS software at sites', category: 'DBMS' },
{ question: 'Fragmentation in distributed DB allows:', options: ['Splitting a table into smaller pieces', 'Creating indexes', 'Encryption only', 'Temporary storage'], correctAnswer: 'Splitting a table into smaller pieces', category: 'DBMS' },
{ question: 'Replication in distributed DBMS:', options: ['Stores copies of data at multiple sites', 'Deletes duplicates', 'Indexes only primary keys', 'Logs transactions only'], correctAnswer: 'Stores copies of data at multiple sites', category: 'DBMS' },
{ question: 'CAP theorem states that a distributed system can provide only two of the three:', options: ['Consistency, Availability, Partition tolerance', 'Cost, Accuracy, Performance', 'Concurrency, Access, Persistence', 'Cache, Access, Protocol'], correctAnswer: 'Consistency, Availability, Partition tolerance', category: 'DBMS' },
{ question: 'Distributed query processing aims to:', options: ['Execute queries efficiently across sites', 'Encrypt all data', 'Perform only local joins', 'Avoid transactions'], correctAnswer: 'Execute queries efficiently across sites', category: 'DBMS' },

// ===== Advanced Topics =====
{ question: 'NoSQL databases are optimized for:', options: ['High scalability and flexible schema', 'Strict ACID compliance only', 'Primary key indexing only', 'Sequential files'], correctAnswer: 'High scalability and flexible schema', category: 'DBMS' },
{ question: 'MongoDB is an example of:', options: ['Document-oriented NoSQL database', 'Relational DBMS', 'Key-value only', 'Columnar OLAP'], correctAnswer: 'Document-oriented NoSQL database', category: 'DBMS' },
{ question: 'Cassandra is optimized for:', options: ['High write throughput and distributed architecture', 'In-memory storage only', 'Single-node ACID', 'Static indexing'], correctAnswer: 'High write throughput and distributed architecture', category: 'DBMS' },
{ question: 'NewSQL databases provide:', options: ['Relational model with scalability like NoSQL', 'Only key-value storage', 'MapReduce only', 'No ACID support'], correctAnswer: 'Relational model with scalability like NoSQL', category: 'DBMS' },
{ question: 'Data warehousing is mainly used for:', options: ['OLAP and analytical queries', 'Transactional processing only', 'Indexing', 'NoSQL storage'], correctAnswer: 'OLAP and analytical queries', category: 'DBMS' },
{ question: 'ETL in data warehousing stands for:', options: ['Extract, Transform, Load', 'Encrypt, Transfer, Log', 'Evaluate, Test, Learn', 'Execute, Trace, Load'], correctAnswer: 'Extract, Transform, Load', category: 'DBMS' },
{ question: 'Data mining is primarily used for:', options: ['Discovering patterns and knowledge from data', 'Indexing only', 'ACID compliance', 'Query optimization'], correctAnswer: 'Discovering patterns and knowledge from data', category: 'DBMS' },
{ question: 'Hadoop ecosystem mainly provides:', options: ['Distributed storage and processing for Big Data', 'Single-node database only', 'Transactional DBMS', 'Indexing algorithms only'], correctAnswer: 'Distributed storage and processing for Big Data', category: 'DBMS' },
{ question: 'Cloud databases allow:', options: ['Database services hosted on cloud infrastructure', 'Only local disk storage', 'No replication', 'No concurrency'], correctAnswer: 'Database services hosted on cloud infrastructure', category: 'DBMS' },
{ question: 'OLAP operations include:', options: ['Roll-up, Drill-down, Slice, Dice', 'Insert, Update, Delete', 'Linear search', 'Hash join'], correctAnswer: 'Roll-up, Drill-down, Slice, Dice', category: 'DBMS' },


  // ============ OS (10) ============
  // ============ INTRODUCTION TO OPERATING SYSTEMS (20) ============

// ===== OS Basics =====
{ question: 'An Operating System primarily acts as:', options: ['Interface between user and hardware', 'Application software', 'Database management system', 'Programming language'], correctAnswer: 'Interface between user and hardware', category: 'OS' },
{ question: 'Which is NOT a function of an OS?', options: ['Memory management', 'Process scheduling', 'Compiling source code', 'File system management'], correctAnswer: 'Compiling source code', category: 'OS' },
{ question: 'Operating System provides:', options: ['Resource management and user interface', 'Only hardware drivers', 'Only programming APIs', 'Only security modules'], correctAnswer: 'Resource management and user interface', category: 'OS' },

// ===== Types of OS =====
{ question: 'Batch OS is characterized by:', options: ['Execution of jobs in batches without user interaction', 'Real-time response', 'Time-sharing between users', 'Multitasking'], correctAnswer: 'Execution of jobs in batches without user interaction', category: 'OS' },
{ question: 'Multiprogramming OS improves:', options: ['CPU utilization by running multiple programs simultaneously', 'Network throughput only', 'File access speed', 'Memory protection only'], correctAnswer: 'CPU utilization by running multiple programs simultaneously', category: 'OS' },
{ question: 'Multitasking OS allows:', options: ['Multiple processes to share CPU concurrently', 'Single task execution only', 'Batch processing only', 'Kernel-level threads only'], correctAnswer: 'Multiple processes to share CPU concurrently', category: 'OS' },
{ question: 'Time-sharing OS provides:', options: ['CPU time slices to multiple users', 'Sequential job execution', 'Only real-time guarantees', 'Static memory allocation'], correctAnswer: 'CPU time slices to multiple users', category: 'OS' },
{ question: 'Real-time OS is designed for:', options: ['Predictable and timely task execution', 'High disk throughput', 'Database queries', 'Multilevel indexing'], correctAnswer: 'Predictable and timely task execution', category: 'OS' },
{ question: 'Distributed OS manages:', options: ['Multiple interconnected computers as a single system', 'Single CPU only', 'Only batch jobs', 'Only network protocols'], correctAnswer: 'Multiple interconnected computers as a single system', category: 'OS' },
{ question: 'Network OS primarily provides:', options: ['File and resource sharing over a network', 'Memory management', 'CPU scheduling', 'Device drivers'], correctAnswer: 'File and resource sharing over a network', category: 'OS' },
{ question: 'Mobile OS is optimized for:', options: ['Battery efficiency and touch interfaces', 'High-performance servers', 'Real-time industrial systems', 'Clustered computing'], correctAnswer: 'Battery efficiency and touch interfaces', category: 'OS' },

// ===== OS Architecture =====
{ question: 'Monolithic OS architecture:', options: ['Includes all services in a single large kernel', 'Separates services into user-level servers', 'Has layered modules only', 'Supports distributed nodes'], correctAnswer: 'Includes all services in a single large kernel', category: 'OS' },
{ question: 'Microkernel architecture:', options: ['Minimizes kernel size and moves services to user space', 'Bundles all services in kernel', 'Does not support device drivers', 'Supports batch jobs only'], correctAnswer: 'Minimizes kernel size and moves services to user space', category: 'OS' },
{ question: 'Layered OS architecture:', options: ['Organizes OS into layers with each layer using lower layers', 'Uses monolithic kernel', 'Supports only real-time tasks', 'Supports distributed nodes only'], correctAnswer: 'Organizes OS into layers with each layer using lower layers', category: 'OS' },
{ question: 'Modular OS architecture:', options: ['Divides kernel into independent modules dynamically loaded', 'Single large kernel', 'Uses only batch jobs', 'Static memory allocation only'], correctAnswer: 'Divides kernel into independent modules dynamically loaded', category: 'OS' },
{ question: 'Hybrid OS architecture:', options: ['Combines monolithic and microkernel features', 'Supports only batch OS', 'Has layers only', 'Used in mobile devices only'], correctAnswer: 'Combines monolithic and microkernel features', category: 'OS' },
{ question: 'Which OS type is suitable for industrial robots?', options: ['Real-time OS', 'Batch OS', 'Time-sharing OS', 'Network OS'], correctAnswer: 'Real-time OS', category: 'OS' },
{ question: 'Which OS architecture simplifies debugging and maintenance?', options: ['Layered architecture', 'Monolithic architecture', 'Hybrid architecture', 'Distributed OS'], correctAnswer: 'Layered architecture', category: 'OS' },
{ question: 'Which OS type maximizes CPU utilization?', options: ['Multiprogramming OS', 'Batch OS', 'Real-time OS', 'Mobile OS'], correctAnswer: 'Multiprogramming OS', category: 'OS' },
{ question: 'Which OS type is commonly used in cloud servers?', options: ['Distributed OS', 'Batch OS', 'Mobile OS', 'Real-time OS'], correctAnswer: 'Distributed OS', category: 'OS' },
{ question: 'Which OS type shares resources efficiently among multiple users?', options: ['Time-sharing OS', 'Single-tasking OS', 'Batch OS', 'Network OS'], correctAnswer: 'Time-sharing OS', category: 'OS' },

// ============ PROCESSES AND THREADS (15) ============

// ===== Process Concept =====
{ question: 'A process is defined as:', options: ['A program in execution', 'A program on disk', 'A thread only', 'Memory block only'], correctAnswer: 'A program in execution', category: 'OS' },
{ question: 'Process state diagram includes states:', options: ['New, Ready, Running, Waiting, Terminated', 'Start, Stop, Pause', 'Idle, Busy', 'Allocated, Deallocated'], correctAnswer: 'New, Ready, Running, Waiting, Terminated', category: 'OS' },
{ question: 'Which component contains all information about a process?', options: ['Process Control Block (PCB)', 'Stack only', 'Heap only', 'Registers only'], correctAnswer: 'Process Control Block (PCB)', category: 'OS' },
{ question: 'Context switching occurs when:', options: ['CPU switches from one process to another', 'A process is created', 'Memory is allocated', 'I/O completes'], correctAnswer: 'CPU switches from one process to another', category: 'OS' },
{ question: 'Which is NOT part of PCB?', options: ['Process ID, Program counter, CPU registers, Memory limits', 'I/O status, Accounting info', 'User-level function definitions', 'Process state'], correctAnswer: 'User-level function definitions', category: 'OS' },

// ===== Operations on Processes =====
{ question: 'Process creation is usually done by:', options: ['fork() system call', 'malloc()', 'open()', 'exec() only'], correctAnswer: 'fork() system call', category: 'OS' },
{ question: 'Process termination can be caused by:', options: ['Normal exit, Error exit, Kill by another process', 'Only I/O completion', 'Only time-out', 'Stack overflow only'], correctAnswer: 'Normal exit, Error exit, Kill by another process', category: 'OS' },
{ question: 'A running process moves to waiting state when:', options: ['It requests I/O operation', 'It completes execution', 'Scheduler selects it', 'Memory allocation fails'], correctAnswer: 'It requests I/O operation', category: 'OS' },

// ===== Threads =====
{ question: 'User-level threads are managed by:', options: ['Thread library in user space', 'Kernel', 'OS scheduler directly', 'CPU only'], correctAnswer: 'Thread library in user space', category: 'OS' },
{ question: 'Kernel-level threads are managed by:', options: ['OS kernel', 'User program', 'Thread library only', 'Hardware directly'], correctAnswer: 'OS kernel', category: 'OS' },
{ question: '1:1 multithreading model maps:', options: ['One user thread to one kernel thread', 'Multiple user threads to one kernel thread', 'Multiple kernel threads to one user thread', 'One process to multiple CPUs only'], correctAnswer: 'One user thread to one kernel thread', category: 'OS' },
{ question: 'M:1 multithreading model maps:', options: ['Multiple user threads to single kernel thread', 'One user thread to one kernel thread', 'Multiple kernel threads to multiple CPUs', 'Single process to multiple threads only'], correctAnswer: 'Multiple user threads to single kernel thread', category: 'OS' },
{ question: 'M:N multithreading model maps:', options: ['Multiple user threads to multiple kernel threads', 'Single user thread to kernel thread', 'Only kernel threads to CPUs', 'User threads to memory blocks only'], correctAnswer: 'Multiple user threads to multiple kernel threads', category: 'OS' },
{ question: 'Advantage of multithreading includes:', options: ['Better CPU utilization and responsiveness', 'Higher disk usage', 'Only memory protection', 'Slower execution always'], correctAnswer: 'Better CPU utilization and responsiveness', category: 'OS' },

// ============ CPU SCHEDULING & PROCESS SYNCHRONIZATION (35) ============

// ===== Scheduling Criteria =====
{ question: 'Which of the following is NOT a scheduling criterion?', options: ['CPU utilization', 'Throughput', 'Page replacement', 'Waiting time'], correctAnswer: 'Page replacement', category: 'OS' },
{ question: 'Throughput in CPU scheduling refers to:', options: ['Number of processes completed per unit time', 'CPU idle time', 'Average waiting time', 'Response time'], correctAnswer: 'Number of processes completed per unit time', category: 'OS' },
{ question: 'Turnaround time is calculated as:', options: ['Completion time - Arrival time', 'Waiting time + CPU burst', 'Response time only', 'Arrival time - Completion time'], correctAnswer: 'Completion time - Arrival time', category: 'OS' },
{ question: 'CPU utilization measures:', options: ['Percentage of time CPU is busy', 'Number of processes in queue', 'Memory usage', 'I/O device usage'], correctAnswer: 'Percentage of time CPU is busy', category: 'OS' },
{ question: 'Average waiting time is important because:', options: ['It affects process responsiveness', 'It increases CPU speed', 'It reduces memory usage', 'It prevents deadlocks'], correctAnswer: 'It affects process responsiveness', category: 'OS' },

// ===== Scheduling Algorithms =====
{ question: 'FCFS scheduling is:', options: ['Non-preemptive', 'Preemptive', 'Depends on CPU', 'Round-robin'], correctAnswer: 'Non-preemptive', category: 'OS' },
{ question: 'SJF scheduling selects:', options: ['Process with shortest burst time', 'Process with longest burst time', 'First process in queue', 'Random process'], correctAnswer: 'Process with shortest burst time', category: 'OS' },
{ question: 'SRTF scheduling is:', options: ['Preemptive version of SJF', 'Non-preemptive', 'Round-robin', 'Priority scheduling'], correctAnswer: 'Preemptive version of SJF', category: 'OS' },
{ question: 'Round Robin scheduling uses:', options: ['Time quantum', 'Shortest job first', 'Priority only', 'Random selection'], correctAnswer: 'Time quantum', category: 'OS' },
{ question: 'Preemptive priority scheduling:', options: ['May interrupt a running process if a higher priority process arrives', 'Never interrupts', 'Only schedules I/O', 'Only schedules batch jobs'], correctAnswer: 'May interrupt a running process if a higher priority process arrives', category: 'OS' },
{ question: 'Non-preemptive priority scheduling:', options: ['Allows running process to complete even if higher priority process arrives', 'Interrupts immediately', 'Only for real-time OS', 'Same as FCFS'], correctAnswer: 'Allows running process to complete even if higher priority process arrives', category: 'OS' },
{ question: 'Multilevel queue scheduling:', options: ['Divides processes into separate queues based on priority or type', 'Runs all processes in one queue', 'Same as FCFS', 'Randomly selects queue'], correctAnswer: 'Divides processes into separate queues based on priority or type', category: 'OS' },
{ question: 'Multilevel feedback queue scheduling differs by:', options: ['Allowing processes to move between queues based on behavior', 'Static priority assignment', 'Shortest job selection only', 'Round-robin within one queue only'], correctAnswer: 'Allowing processes to move between queues based on behavior', category: 'OS' },

// ===== Process Synchronization Basics =====
{ question: 'Critical section problem arises when:', options: ['Multiple processes access shared resources concurrently', 'CPU is idle', 'I/O device fails', 'Memory allocation fails'], correctAnswer: 'Multiple processes access shared resources concurrently', category: 'OS' },
{ question: 'Race condition occurs when:', options: ['Outcome depends on the order of execution of processes', 'CPU utilization is low', 'I/O device fails', 'Memory leaks occur'], correctAnswer: 'Outcome depends on the order of execution of processes', category: 'OS' },
{ question: 'Test-and-Set instruction is used for:', options: ['Hardware solution for mutual exclusion', 'CPU scheduling', 'Paging', 'File access'], correctAnswer: 'Hardware solution for mutual exclusion', category: 'OS' },
{ question: 'Compare-and-Swap instruction is used to:', options: ['Achieve atomic update of a variable', 'Measure throughput', 'Schedule CPU', 'Prevent paging'], correctAnswer: 'Achieve atomic update of a variable', category: 'OS' },
{ question: 'Peterson’s algorithm solves:', options: ['Critical section problem for two processes', 'Memory management', 'CPU scheduling', 'Deadlock avoidance'], correctAnswer: 'Critical section problem for two processes', category: 'OS' },
{ question: 'Bakery algorithm solves:', options: ['Critical section problem for n processes', 'Memory allocation', 'Disk scheduling', 'Thread creation'], correctAnswer: 'Critical section problem for n processes', category: 'OS' },

// ===== Synchronization Primitives =====
{ question: 'Binary semaphore can have values:', options: ['0 or 1', 'Any integer', '1 to 10 only', 'Negative values only'], correctAnswer: '0 or 1', category: 'OS' },
{ question: 'Counting semaphore can have values:', options: ['0,1,2,...', 'Only 0 or 1', 'Only negative', 'Only positive integers less than 10'], correctAnswer: '0,1,2,...', category: 'OS' },
{ question: 'Mutex lock is used for:', options: ['Mutual exclusion to a shared resource', 'Scheduling only', 'Paging only', 'Memory allocation'], correctAnswer: 'Mutual exclusion to a shared resource', category: 'OS' },
{ question: 'Monitor provides:', options: ['High-level synchronization with condition variables', 'Low-level hardware access', 'CPU scheduling', 'Memory management'], correctAnswer: 'High-level synchronization with condition variables', category: 'OS' },

// ===== Classic Synchronization Problems =====
{ question: 'Producer-consumer problem ensures:', options: ['Buffer is accessed in mutual exclusion', 'CPU is idle', 'Disk scheduling', 'Memory allocation'], correctAnswer: 'Buffer is accessed in mutual exclusion', category: 'OS' },
{ question: 'Readers-writers problem addresses:', options: ['Multiple readers and exclusive writers access to shared data', 'Memory fragmentation', 'Thread creation', 'CPU scheduling'], correctAnswer: 'Multiple readers and exclusive writers access to shared data', category: 'OS' },
{ question: 'Dining philosophers problem models:', options: ['Deadlock and resource sharing among multiple processes', 'Memory leaks', 'Thread scheduling', 'CPU utilization'], correctAnswer: 'Deadlock and resource sharing among multiple processes', category: 'OS' },
{ question: 'Sleeping barber problem demonstrates:', options: ['Synchronization and waiting of processes', 'CPU scheduling only', 'Memory allocation', 'Deadlock detection only'], correctAnswer: 'Synchronization and waiting of processes', category: 'OS' },
{ question: 'Which synchronization problem can result in starvation?', options: ['Readers-writers problem (writers-starvation)', 'Producer-consumer problem always', 'FCFS scheduling', 'Heap management'], correctAnswer: 'Readers-writers problem (writers-starvation)', category: 'OS' },
{ question: 'Semaphores prevent race conditions by:', options: ['Allowing atomic operations for shared resources', 'Increasing CPU speed', 'Memory allocation', 'File management'], correctAnswer: 'Allowing atomic operations for shared resources', category: 'OS' },
{ question: 'Which algorithm ensures mutual exclusion without hardware support?', options: ['Peterson’s algorithm', 'FCFS scheduling', 'Round Robin', 'SJF scheduling'], correctAnswer: 'Peterson’s algorithm', category: 'OS' },
{ question: 'Priority inversion can be handled using:', options: ['Priority inheritance protocol', 'Round Robin', 'FCFS', 'Shortest Job First'], correctAnswer: 'Priority inheritance protocol', category: 'OS' },
{ question: 'Semaphore “wait” (P) operation does:', options: ['Decrements the semaphore and may block the process', 'Increments semaphore', 'Schedules CPU', 'Allocates memory'], correctAnswer: 'Decrements the semaphore and may block the process', category: 'OS' },
{ question: 'Semaphore “signal” (V) operation does:', options: ['Increments the semaphore and may unblock waiting process', 'Decrements semaphore', 'Terminates process', 'Schedules CPU'], correctAnswer: 'Increments the semaphore and may unblock waiting process', category: 'OS' },

// ============ DEADLOCKS & MEMORY MANAGEMENT (20) ============

// ===== Deadlocks =====
{ question: 'Which of the following is NOT a necessary condition for deadlock?', options: ['Mutual exclusion', 'Hold and wait', 'Preemptive scheduling', 'Circular wait'], correctAnswer: 'Preemptive scheduling', category: 'OS' },
{ question: 'Hold and wait condition means:', options: ['A process holds at least one resource and waits for others', 'Processes release resources immediately', 'CPU preemption occurs', 'Circular dependency exists'], correctAnswer: 'A process holds at least one resource and waits for others', category: 'OS' },
{ question: 'No preemption condition implies:', options: ['Resources cannot be forcibly taken from a process', 'Processes always release resources', 'CPU scheduling is preemptive', 'Memory is contiguous'], correctAnswer: 'Resources cannot be forcibly taken from a process', category: 'OS' },
{ question: 'Circular wait condition means:', options: ['A closed chain of processes exists where each process holds a resource needed by the next', 'Processes wait for I/O', 'CPU is idle', 'Memory is fragmented'], correctAnswer: 'A closed chain of processes exists where each process holds a resource needed by the next', category: 'OS' },
{ question: 'Resource Allocation Graph (RAG) is used to:', options: ['Detect deadlocks', 'Schedule CPU', 'Allocate memory', 'Measure throughput'], correctAnswer: 'Detect deadlocks', category: 'OS' },
{ question: 'Banker’s algorithm is used for:', options: ['Deadlock avoidance', 'Deadlock detection only', 'Memory paging', 'CPU scheduling'], correctAnswer: 'Deadlock avoidance', category: 'OS' },
{ question: 'Deadlock prevention strategy involves:', options: ['Breaking one of the necessary conditions', 'Detecting deadlock after it occurs', 'Recovering after deadlock', 'Paging memory'], correctAnswer: 'Breaking one of the necessary conditions', category: 'OS' },
{ question: 'Deadlock detection can be done using:', options: ['Resource Allocation Graph with cycles', 'FIFO scheduling', 'Round Robin', 'LRU page replacement'], correctAnswer: 'Resource Allocation Graph with cycles', category: 'OS' },
{ question: 'Deadlock recovery can involve:', options: ['Process termination or resource preemption', 'Increasing memory', 'CPU scheduling', 'Page replacement'], correctAnswer: 'Process termination or resource preemption', category: 'OS' },

// ===== Memory Management =====
{ question: 'Internal fragmentation occurs when:', options: ['Allocated memory block is larger than requested', 'Memory blocks are scattered', 'CPU is idle', 'Disk scheduling fails'], correctAnswer: 'Allocated memory block is larger than requested', category: 'OS' },
{ question: 'External fragmentation occurs when:', options: ['Free memory is divided into small blocks not usable for a process', 'Memory block is larger than needed', 'CPU preempts process', 'Page table is full'], correctAnswer: 'Free memory is divided into small blocks not usable for a process', category: 'OS' },
{ question: 'Paging divides memory into:', options: ['Fixed-size pages', 'Variable-size segments', 'Heap only', 'Stack only'], correctAnswer: 'Fixed-size pages', category: 'OS' },
{ question: 'Segmentation divides memory based on:', options: ['Logical units like code, data, stack', 'Fixed-size pages', 'CPU registers', 'I/O devices'], correctAnswer: 'Logical units like code, data, stack', category: 'OS' },
{ question: 'Virtual memory allows:', options: ['Processes to execute with logical address space larger than physical memory', 'Memory access only within RAM', 'Disk-only access', 'No paging'], correctAnswer: 'Processes to execute with logical address space larger than physical memory', category: 'OS' },
{ question: 'Page fault occurs when:', options: ['Requested page is not in main memory', 'CPU is idle', 'Disk fails', 'Process terminates'], correctAnswer: 'Requested page is not in main memory', category: 'OS' },
{ question: 'FIFO page replacement replaces:', options: ['The oldest page in memory', 'The least recently used page', 'Optimal future page', 'Most frequently used page'], correctAnswer: 'The oldest page in memory', category: 'OS' },
{ question: 'Optimal page replacement replaces:', options: ['The page that will not be used for the longest time in future', 'Oldest page', 'Least frequently used', 'Random page'], correctAnswer: 'The page that will not be used for the longest time in future', category: 'OS' },
{ question: 'LRU (Least Recently Used) page replacement replaces:', options: ['The page that has not been used for the longest time', 'The oldest page', 'Optimal page', 'Random page'], correctAnswer: 'The page that has not been used for the longest time', category: 'OS' },
{ question: 'Clock page replacement algorithm is a:', options: ['Approximation of LRU', 'Exact optimal', 'FIFO variant', 'Random replacement'], correctAnswer: 'Approximation of LRU', category: 'OS' },
{ question: 'Thrashing occurs when:', options: ['Excessive paging leads to low CPU utilization', 'Memory is full', 'CPU scheduling is preemptive', 'I/O device fails'], correctAnswer: 'Excessive paging leads to low CPU utilization', category: 'OS' },
{ question: 'Working set model is used to:', options: ['Reduce thrashing by keeping active pages in memory', 'Schedule CPU', 'Allocate registers', 'Manage disk'], correctAnswer: 'Reduce thrashing by keeping active pages in memory', category: 'OS' },

// ============ FILE SYSTEMS, I/O, STORAGE, SECURITY (30) ============

// ===== File Systems: Concepts & Access Methods =====
{ question: 'Which of the following is NOT a file attribute?', options: ['Name', 'Type', 'Size', 'CPU utilization'], correctAnswer: 'CPU utilization', category: 'OS' },
{ question: 'Sequential file access means:', options: ['Read/write records in order from beginning to end', 'Access records randomly', 'Direct disk block access', 'Memory-mapped access only'], correctAnswer: 'Read/write records in order from beginning to end', category: 'OS' },
{ question: 'Direct (random) file access allows:', options: ['Access any record directly given its address', 'Read sequentially only', 'Access through index table only', 'Use only in-memory files'], correctAnswer: 'Access any record directly given its address', category: 'OS' },
{ question: 'Indexed file access uses:', options: ['Index table mapping keys to file locations', 'Sequential scanning only', 'Contiguous allocation only', 'Linked allocation only'], correctAnswer: 'Index table mapping keys to file locations', category: 'OS' },
{ question: 'Tree-structured directory allows:', options: ['Hierarchical organization of files', 'Single-level access only', 'No subdirectories', 'Random directory creation'], correctAnswer: 'Hierarchical organization of files', category: 'OS' },
{ question: 'Contiguous file allocation is:', options: ['Allocating consecutive blocks on disk', 'Allocating blocks randomly', 'Using linked list for blocks', 'Indexed only'], correctAnswer: 'Allocating consecutive blocks on disk', category: 'OS' },
{ question: 'Linked allocation of files:', options: ['Stores blocks as linked list of disk blocks', 'Allocates consecutive blocks', 'Uses index table', 'Uses hashing'], correctAnswer: 'Stores blocks as linked list of disk blocks', category: 'OS' },
{ question: 'Indexed allocation uses:', options: ['A separate index block containing pointers to file blocks', 'Contiguous blocks', 'Linked list', 'Direct memory mapping'], correctAnswer: 'A separate index block containing pointers to file blocks', category: 'OS' },
{ question: 'Free space management using bit vector:', options: ['Uses a bitmap to track free and allocated blocks', 'Uses linked list only', 'Uses hashing', 'Requires contiguous allocation only'], correctAnswer: 'Uses a bitmap to track free and allocated blocks', category: 'OS' },
{ question: 'Journaling file systems are used to:', options: ['Prevent file system corruption after crashes', 'Speed up memory access', 'Schedule CPU', 'Manage cache'], correctAnswer: 'Prevent file system corruption after crashes', category: 'OS' },

// ===== I/O Systems: Hardware & Techniques =====
{ question: 'Programmed I/O requires:', options: ['CPU to poll device until operation completes', 'DMA controller', 'Interrupts only', 'Disk scheduling'], correctAnswer: 'CPU to poll device until operation completes', category: 'OS' },
{ question: 'Interrupt-driven I/O differs from programmed I/O by:', options: ['Device interrupts CPU when ready', 'CPU polls continuously', 'Direct memory access', 'File allocation'], correctAnswer: 'Device interrupts CPU when ready', category: 'OS' },
{ question: 'DMA (Direct Memory Access) allows:', options: ['Data transfer between memory and device without CPU intervention', 'CPU manages every byte transfer', 'Memory is static', 'Sequential access only'], correctAnswer: 'Data transfer between memory and device without CPU intervention', category: 'OS' },
{ question: 'FCFS disk scheduling chooses:', options: ['Request in order of arrival', 'Shortest seek first', 'SCAN', 'C-LOOK'], correctAnswer: 'Request in order of arrival', category: 'OS' },
{ question: 'SSTF (Shortest Seek Time First) minimizes:', options: ['Disk seek time', 'CPU idle time', 'Memory fragmentation', 'Cache hits'], correctAnswer: 'Disk seek time', category: 'OS' },
{ question: 'SCAN disk scheduling is also called:', options: ['Elevator algorithm', 'FIFO', 'SSTF', 'Random access'], correctAnswer: 'Elevator algorithm', category: 'OS' },
{ question: 'C-SCAN scheduling differs from SCAN by:', options: ['Jumping back to start without servicing requests on return', 'Same as SCAN', 'Random selection', 'Round-robin memory'], correctAnswer: 'Jumping back to start without servicing requests on return', category: 'OS' },
{ question: 'Buffering in I/O is used to:', options: ['Store data temporarily between I/O device and process', 'Schedule CPU only', 'Manage memory pages', 'Encrypt files'], correctAnswer: 'Store data temporarily between I/O device and process', category: 'OS' },
{ question: 'Spooling is:', options: ['Storing data in intermediate storage for sequential access by device', 'Direct memory access', 'Page replacement', 'CPU scheduling'], correctAnswer: 'Storing data in intermediate storage for sequential access by device', category: 'OS' },

// ===== Storage Management & RAID =====
{ question: 'RAID 0 provides:', options: ['Striping without redundancy', 'Mirroring', 'Parity', 'Triple mirroring'], correctAnswer: 'Striping without redundancy', category: 'OS' },
{ question: 'RAID 1 provides:', options: ['Mirroring for fault tolerance', 'Striping only', 'Parity only', 'Distributed hash'], correctAnswer: 'Mirroring for fault tolerance', category: 'OS' },
{ question: 'RAID 5 provides:', options: ['Striping with distributed parity', 'Mirroring only', 'Striping without redundancy', 'Single disk'], correctAnswer: 'Striping with distributed parity', category: 'OS' },
{ question: 'RAID 6 provides:', options: ['Striping with double distributed parity', 'Mirroring only', 'Single parity', 'No redundancy'], correctAnswer: 'Striping with double distributed parity', category: 'OS' },
{ question: 'RAID 10 combines:', options: ['Mirroring and striping', 'Parity only', 'Single disk striping', 'Hashing'], correctAnswer: 'Mirroring and striping', category: 'OS' },

// ===== Security & Protection =====
{ question: 'Access control lists (ACLs) are used to:', options: ['Specify permissions for each user on a resource', 'Encrypt all files', 'Schedule CPU', 'Memory allocation'], correctAnswer: 'Specify permissions for each user on a resource', category: 'OS' },
{ question: 'Authentication methods include:', options: ['Passwords, biometrics, tokens', 'Paging, segmentation, LRU', 'FCFS scheduling', 'Buffering'], correctAnswer: 'Passwords, biometrics, tokens', category: 'OS' },
{ question: 'Protection rings in OS are used to:', options: ['Provide privilege levels for executing code', 'Store files', 'Manage I/O buffers', 'Schedule CPU'], correctAnswer: 'Provide privilege levels for executing code', category: 'OS' },
{ question: 'Which malware modifies itself to avoid detection?', options: ['Virus', 'Worm', 'Trojan', 'Polymorphic virus'], correctAnswer: 'Polymorphic virus', category: 'OS' },
{ question: 'Encryption in OS is primarily used for:', options: ['Data confidentiality and integrity', 'CPU scheduling', 'Disk formatting', 'Memory allocation'], correctAnswer: 'Data confidentiality and integrity', category: 'OS' },
{ question: 'Intrusion detection systems (IDS) monitor for:', options: ['Unauthorized or suspicious activity', 'CPU usage', 'Memory fragmentation', 'Disk allocation'], correctAnswer: 'Unauthorized or suspicious activity', category: 'OS' },

// ============ DISTRIBUTED SYSTEMS & ADVANCED OS (20) ============

// ===== Distributed Systems: Concepts & Transparency =====
{ question: 'A distributed operating system is characterized by:', options: ['Multiple computers working together as a single system', 'Single computer only', 'Standalone applications', 'No networking'], correctAnswer: 'Multiple computers working together as a single system', category: 'OS' },
{ question: 'Access transparency in distributed systems means:', options: ['Users can access resources without knowing if they are local or remote', 'Users must know resource location', 'Resources are always local', 'Only read access is allowed'], correctAnswer: 'Users can access resources without knowing if they are local or remote', category: 'OS' },
{ question: 'Location transparency means:', options: ['Users do not need to know the physical location of resources', 'Users know exact server location', 'Resources cannot be moved', 'Access is sequential only'], correctAnswer: 'Users do not need to know the physical location of resources', category: 'OS' },
{ question: 'Replication transparency ensures:', options: ['Users see a single copy of a replicated resource', 'Multiple copies are visible', 'No replication allowed', 'Resources are read-only'], correctAnswer: 'Users see a single copy of a replicated resource', category: 'OS' },
{ question: 'Concurrency transparency allows:', options: ['Multiple processes to access shared resources without conflicts', 'Only one process at a time', 'Deadlocks always occur', 'No locking mechanisms'], correctAnswer: 'Multiple processes to access shared resources without conflicts', category: 'OS' },
{ question: 'Fault tolerance transparency ensures:', options: ['System continues operation even if some nodes fail', 'System crashes on single failure', 'Replication is not allowed', 'Only sequential access'], correctAnswer: 'System continues operation even if some nodes fail', category: 'OS' },

// ===== Distributed File Systems & Coordination =====
{ question: 'Distributed File System (DFS) allows:', options: ['Access to files across multiple nodes as if local', 'Only local file access', 'Direct disk manipulation', 'Sequential CPU scheduling'], correctAnswer: 'Access to files across multiple nodes as if local', category: 'OS' },
{ question: 'Lamport timestamps are used for:', options: ['Ordering events in distributed systems', 'CPU scheduling', 'Memory allocation', 'Disk access'], correctAnswer: 'Ordering events in distributed systems', category: 'OS' },
{ question: 'Vector clocks improve on Lamport timestamps by:', options: ['Capturing causality between events', 'Only counting events', 'Scheduling CPU', 'Encrypting messages'], correctAnswer: 'Capturing causality between events', category: 'OS' },
{ question: 'Consensus protocols like Paxos and Raft are used to:', options: ['Ensure agreement among distributed nodes', 'Memory allocation', 'Disk scheduling', 'Sequential CPU scheduling'], correctAnswer: 'Ensure agreement among distributed nodes', category: 'OS' },

// ===== Advanced OS Topics =====
{ question: 'Real-time operating systems (RTOS) are characterized by:', options: ['Guaranteed response time for critical tasks', 'High CPU idle time', 'No process scheduling', 'Virtual memory only'], correctAnswer: 'Guaranteed response time for critical tasks', category: 'OS' },
{ question: 'Hard real-time systems require:', options: ['Strict deadlines must never be missed', 'Deadlines can be missed occasionally', 'No deadlines', 'Only soft deadlines'], correctAnswer: 'Strict deadlines must never be missed', category: 'OS' },
{ question: 'Multiprocessor OS manages:', options: ['Multiple CPUs sharing memory and I/O', 'Single CPU only', 'No concurrency', 'Sequential processing only'], correctAnswer: 'Multiple CPUs sharing memory and I/O', category: 'OS' },
{ question: 'Multicore OS differs from multiprocessor OS by:', options: ['Multiple cores on a single CPU chip', 'Multiple separate CPUs', 'Single-core sequential execution', 'No parallelism'], correctAnswer: 'Multiple cores on a single CPU chip', category: 'OS' },
{ question: 'Virtualization allows:', options: ['Running multiple OS instances on the same physical hardware', 'Only one OS per machine', 'Sequential CPU execution', 'Memory mapping only'], correctAnswer: 'Running multiple OS instances on the same physical hardware', category: 'OS' },
{ question: 'Hypervisors are used to:', options: ['Manage virtual machines', 'Allocate RAM only', 'Perform CPU scheduling', 'File management'], correctAnswer: 'Manage virtual machines', category: 'OS' },
{ question: 'Cloud operating systems provide:', options: ['Resource management and scalability for distributed cloud infrastructure', 'Only local resource access', 'Sequential execution', 'No virtualization'], correctAnswer: 'Resource management and scalability for distributed cloud infrastructure', category: 'OS' },
{ question: 'Mobile OS like Android or iOS are designed for:', options: ['Resource-constrained devices with touch interfaces', 'High-performance servers only', 'Desktop PCs only', 'No networking'], correctAnswer: 'Resource-constrained devices with touch interfaces', category: 'OS' },
{ question: 'Containers (e.g., Docker) differ from VMs because:', options: ['They share host OS kernel and isolate applications', 'They require separate OS per container', 'They cannot run on Linux', 'No process isolation'], correctAnswer: 'They share host OS kernel and isolate applications', category: 'OS' },
{ question: 'Kubernetes is primarily used for:', options: ['Orchestrating and managing containers', 'File management', 'CPU scheduling only', 'Memory allocation'], correctAnswer: 'Orchestrating and managing containers', category: 'OS' },

  

  // ============ NETWORKING (10) ============

  // ============ NETWORKING: Introduction & Network Models (30) ============

// ===== Introduction to Networking =====
{ question: 'A computer network is defined as:', options: ['Two or more computers connected to share resources', 'Single standalone computer', 'A software program only', 'A web application'], correctAnswer: 'Two or more computers connected to share resources', category: 'NETWORKING' },
{ question: 'LAN stands for:', options: ['Local Area Network', 'Large Area Network', 'Limited Access Network', 'Logical Area Network'], correctAnswer: 'Local Area Network', category: 'NETWORKING' },
{ question: 'MAN stands for:', options: ['Metropolitan Area Network', 'Multiple Access Network', 'Medium Area Network', 'Mobile Access Network'], correctAnswer: 'Metropolitan Area Network', category: 'NETWORKING' },
{ question: 'WAN is used to connect:', options: ['Networks across large geographical areas', 'Single office only', 'Only mobile devices', 'Local servers only'], correctAnswer: 'Networks across large geographical areas', category: 'NETWORKING' },
{ question: 'PAN stands for:', options: ['Personal Area Network', 'Public Access Network', 'Primary Area Network', 'Private Automated Network'], correctAnswer: 'Personal Area Network', category: 'NETWORKING' },
{ question: 'CAN refers to:', options: ['Campus Area Network', 'Computer Access Network', 'Centralized Area Network', 'Cloud Area Network'], correctAnswer: 'Campus Area Network', category: 'NETWORKING' },
{ question: 'WLAN is:', options: ['Wireless Local Area Network', 'Wide LAN', 'Wireless Access Node', 'WAN-LAN hybrid'], correctAnswer: 'Wireless Local Area Network', category: 'NETWORKING' },
{ question: 'Bus topology has:', options: ['Single backbone cable connecting all nodes', 'Ring with token passing', 'Star with central hub', 'Mesh with redundant links'], correctAnswer: 'Single backbone cable connecting all nodes', category: 'NETWORKING' },
{ question: 'Star topology uses:', options: ['Central hub or switch to connect all nodes', 'Direct node-to-node links', 'Ring for token passing', 'Mesh with redundant connections'], correctAnswer: 'Central hub or switch to connect all nodes', category: 'NETWORKING' },
{ question: 'Ring topology connects nodes:', options: ['In a closed loop', 'Via central switch', 'Randomly', 'In a star pattern'], correctAnswer: 'In a closed loop', category: 'NETWORKING' },
{ question: 'Mesh topology is characterized by:', options: ['Multiple redundant paths between nodes', 'Single backbone cable', 'Star hub connection', 'Ring token passing'], correctAnswer: 'Multiple redundant paths between nodes', category: 'NETWORKING' },
{ question: 'Hybrid topology combines:', options: ['Two or more topologies', 'Only bus and star', 'LAN and WAN', 'Ring and mesh only'], correctAnswer: 'Two or more topologies', category: 'NETWORKING' },
{ question: 'A hub operates at which OSI layer?', options: ['Physical layer', 'Data Link layer', 'Network layer', 'Transport layer'], correctAnswer: 'Physical layer', category: 'NETWORKING' },
{ question: 'A switch primarily works at:', options: ['Data Link layer', 'Physical layer', 'Transport layer', 'Application layer'], correctAnswer: 'Data Link layer', category: 'NETWORKING' },
{ question: 'Router operates at which layer?', options: ['Network layer', 'Data Link layer', 'Physical layer', 'Session layer'], correctAnswer: 'Network layer', category: 'NETWORKING' },
{ question: 'Bridge functions at:', options: ['Data Link layer', 'Physical layer', 'Network layer', 'Presentation layer'], correctAnswer: 'Data Link layer', category: 'NETWORKING' },
{ question: 'Gateway is used for:', options: ['Connecting different network architectures or protocols', 'Repeating signals', 'Local switching only', 'Direct memory access'], correctAnswer: 'Connecting different network architectures or protocols', category: 'NETWORKING' },
{ question: 'Modem is used to:', options: ['Modulate and demodulate analog/digital signals', 'Switch packets', 'Route traffic', 'Filter IP addresses'], correctAnswer: 'Modulate and demodulate analog/digital signals', category: 'NETWORKING' },
{ question: 'Repeater is used to:', options: ['Amplify or regenerate signals over long distances', 'Route packets', 'Switch frames', 'Control traffic'], correctAnswer: 'Amplify or regenerate signals over long distances', category: 'NETWORKING' },
{ question: 'Circuit switching:', options: ['Establishes a dedicated path for the duration of the communication', 'Sends data in packets', 'Only works for LANs', 'Does not reserve resources'], correctAnswer: 'Establishes a dedicated path for the duration of the communication', category: 'NETWORKING' },
{ question: 'Packet switching differs from circuit switching because:', options: ['Data is sent in small packets that may take different routes', 'It reserves a dedicated path', 'Only analog signals are used', 'It is slower always'], correctAnswer: 'Data is sent in small packets that may take different routes', category: 'NETWORKING' },

// ===== Network Models =====
{ question: 'OSI model has how many layers?', options: ['7', '4', '5', '6'], correctAnswer: '7', category: 'NETWORKING' },
{ question: 'TCP/IP model has how many layers?', options: ['4', '5', '7', '6'], correctAnswer: '4', category: 'NETWORKING' },
{ question: 'Which OSI layer is responsible for end-to-end delivery?', options: ['Transport layer', 'Network layer', 'Data Link layer', 'Physical layer'], correctAnswer: 'Transport layer', category: 'NETWORKING' },
{ question: 'Application layer in OSI model handles:', options: ['Network services to applications', 'Routing packets', 'Physical signaling', 'Frame sequencing'], correctAnswer: 'Network services to applications', category: 'NETWORKING' },
{ question: 'TCP/IP model does not explicitly include:', options: ['Presentation and Session layers', 'Network layer', 'Transport layer', 'Application layer'], correctAnswer: 'Presentation and Session layers', category: 'NETWORKING' },
{ question: 'Comparison of OSI vs TCP/IP shows that:', options: ['TCP/IP combines OSI layers and is simpler', 'OSI has fewer layers', 'TCP/IP has 7 layers', 'OSI is faster'], correctAnswer: 'TCP/IP combines OSI layers and is simpler', category: 'NETWORKING' },
{ question: 'Physical layer in OSI handles:', options: ['Transmission of raw bits over medium', 'Error checking', 'End-to-end delivery', 'Session management'], correctAnswer: 'Transmission of raw bits over medium', category: 'NETWORKING' },
{ question: 'Network layer in OSI is responsible for:', options: ['Routing and logical addressing', 'Physical connections', 'Error correction', 'Session synchronization'], correctAnswer: 'Routing and logical addressing', category: 'NETWORKING' },
{ question: 'Data Link layer provides:', options: ['Framing, error detection, and MAC addressing', 'End-to-end delivery', 'Application services', 'Packet routing'], correctAnswer: 'Framing, error detection, and MAC addressing', category: 'NETWORKING' },
{ question: 'Transport layer ensures:', options: ['Reliable data transfer between hosts', 'Physical transmission', 'Routing only', 'Data encryption'], correctAnswer: 'Reliable data transfer between hosts', category: 'NETWORKING' },
{ question: 'Session layer manages:', options: ['Establishment, maintenance, and termination of sessions', 'Routing', 'Error detection', 'Physical signaling'], correctAnswer: 'Establishment, maintenance, and termination of sessions', category: 'NETWORKING' },
{ question: 'Presentation layer is responsible for:', options: ['Data translation, encryption, and compression', 'Routing', 'MAC addressing', 'Session termination'], correctAnswer: 'Data translation, encryption, and compression', category: 'NETWORKING' },
{ question: 'OSI layer order from bottom to top is:', options: ['Physical, Data Link, Network, Transport, Session, Presentation, Application', 'Application, Transport, Network, Data Link, Physical, Session, Presentation', 'Transport, Network, Data Link, Physical, Session, Presentation, Application', 'Physical, Network, Data Link, Transport, Application, Presentation, Session'], correctAnswer: 'Physical, Data Link, Network, Transport, Session, Presentation, Application', category: 'NETWORKING' },

// ============ NETWORKING: Physical Layer (15) ============

{ question: 'Analog signals are characterized by:', options: ['Continuous variation in amplitude or frequency', 'Discrete 0s and 1s', 'Only digital transmission', 'Fixed amplitude only'], correctAnswer: 'Continuous variation in amplitude or frequency', category: 'NETWORKING' },
{ question: 'Digital signals differ from analog signals in that they:', options: ['Have discrete levels', 'Are continuous', 'Cannot be transmitted over wires', 'Do not suffer from noise'], correctAnswer: 'Have discrete levels', category: 'NETWORKING' },
{ question: 'Attenuation in transmission refers to:', options: ['Loss of signal strength over distance', 'Change in signal shape', 'Noise interference', 'Signal reflection'], correctAnswer: 'Loss of signal strength over distance', category: 'NETWORKING' },
{ question: 'Distortion in a communication channel is caused by:', options: ['Signal shape changing during transmission', 'Signal loss only', 'Noise absence', 'Multiplexing'], correctAnswer: 'Signal shape changing during transmission', category: 'NETWORKING' },
{ question: 'Noise in data transmission can be described as:', options: ['Unwanted external signals interfering with the original signal', 'Signal attenuation', 'Multiplexed signal', 'Circuit switching'], correctAnswer: 'Unwanted external signals interfering with the original signal', category: 'NETWORKING' },
{ question: 'Twisted pair cables are mainly used for:', options: ['LAN connections and telephone lines', 'Satellite communication', 'Fiber optic high-speed backbone', 'Microwave transmission'], correctAnswer: 'LAN connections and telephone lines', category: 'NETWORKING' },
{ question: 'Coaxial cables are preferred over twisted pair because:', options: ['Higher bandwidth and better shielding from interference', 'Lower cost', 'They are wireless', 'They amplify signals'], correctAnswer: 'Higher bandwidth and better shielding from interference', category: 'NETWORKING' },
{ question: 'Optical fiber transmits data using:', options: ['Light pulses', 'Electrical voltage', 'Radio waves', 'Sound waves'], correctAnswer: 'Light pulses', category: 'NETWORKING' },
{ question: 'Radio waves are an example of which type of transmission media?', options: ['Unguided', 'Guided', 'Twisted pair', 'Coaxial'], correctAnswer: 'Unguided', category: 'NETWORKING' },
{ question: 'FDM (Frequency Division Multiplexing) works by:', options: ['Dividing the channel into multiple frequency bands for simultaneous signals', 'Time-sharing signals', 'Using light wavelength', 'Encrypting signals'], correctAnswer: 'Dividing the channel into multiple frequency bands for simultaneous signals', category: 'NETWORKING' },
{ question: 'TDM (Time Division Multiplexing) allows multiple signals to share a channel by:', options: ['Assigning each signal a fixed time slot', 'Dividing the channel into frequencies', 'Using different light colors', 'Switching packets'], correctAnswer: 'Assigning each signal a fixed time slot', category: 'NETWORKING' },
{ question: 'WDM (Wavelength Division Multiplexing) is commonly used in:', options: ['Optical fiber communication', 'Twisted pair', 'Coaxial cables', 'Radio transmission'], correctAnswer: 'Optical fiber communication', category: 'NETWORKING' },
{ question: 'Circuit switching is suitable for:', options: ['Voice calls with continuous connection', 'Bursty data transfer', 'Packetized internet traffic', 'Email transmission'], correctAnswer: 'Voice calls with continuous connection', category: 'NETWORKING' },
{ question: 'Packet switching works by:', options: ['Dividing data into packets that are routed independently', 'Establishing a dedicated path', 'Using only analog signals', 'Multiplexing signals in frequency'], correctAnswer: 'Dividing data into packets that are routed independently', category: 'NETWORKING' },
{ question: 'Message switching differs from packet switching in that:', options: ['Entire message is sent to the next node before forwarding', 'It uses circuits', 'It is only for real-time voice', 'It cannot store data'], correctAnswer: 'Entire message is sent to the next node before forwarding', category: 'NETWORKING' },

// ============ NETWORKING: Data Link Layer & Network Layer (30) ============

// Data Link Layer
{ question: 'Primary function of the Data Link Layer is to:', options: ['Provide reliable link-level communication', 'Route packets between networks', 'Provide end-to-end encryption', 'Translate domain names'], correctAnswer: 'Provide reliable link-level communication', category: 'NETWORKING' },
{ question: 'Framing is required in Data Link Layer to:', options: ['Identify start and end of a frame', 'Detect network congestion', 'Translate IP to MAC', 'Implement routing protocols'], correctAnswer: 'Identify start and end of a frame', category: 'NETWORKING' },
{ question: 'Parity bit is used for:', options: ['Simple error detection', 'Flow control', 'Routing', 'Encryption'], correctAnswer: 'Simple error detection', category: 'NETWORKING' },
{ question: 'Checksum detects errors by:', options: ['Adding up data bits and sending result', 'Using MAC addresses', 'Routing packets', 'Modulating signals'], correctAnswer: 'Adding up data bits and sending result', category: 'NETWORKING' },
{ question: 'CRC (Cyclic Redundancy Check) is preferred over parity because:', options: ['It can detect burst errors', 'It is faster', 'It eliminates collisions', 'It performs routing'], correctAnswer: 'It can detect burst errors', category: 'NETWORKING' },
{ question: 'Hamming code allows:', options: ['Error detection and single-bit error correction', 'Flow control', 'MAC address assignment', 'Routing table updates'], correctAnswer: 'Error detection and single-bit error correction', category: 'NETWORKING' },
{ question: 'Stop-and-Wait protocol works by:', options: ['Sending one frame and waiting for ACK', 'Sending all frames at once', 'Using token ring', 'Using CSMA/CD'], correctAnswer: 'Sending one frame and waiting for ACK', category: 'NETWORKING' },
{ question: 'Sliding Window protocol improves efficiency by:', options: ['Allowing multiple frames to be in transit without waiting for ACK', 'Using a token for access', 'Encrypting frames', 'Performing routing'], correctAnswer: 'Allowing multiple frames to be in transit without waiting for ACK', category: 'NETWORKING' },
{ question: 'In Sliding Window Go-Back-N protocol, on detecting error:', options: ['All subsequent frames are retransmitted', 'Only erroneous frame is retransmitted', 'No frame is retransmitted', 'Frames are discarded permanently'], correctAnswer: 'All subsequent frames are retransmitted', category: 'NETWORKING' },
{ question: 'Selective Repeat protocol differs from Go-Back-N because:', options: ['Only erroneous frames are retransmitted', 'All frames are retransmitted', 'It does not use ACKs', 'It works only for wireless networks'], correctAnswer: 'Only erroneous frames are retransmitted', category: 'NETWORKING' },
{ question: 'ALOHA protocol is a:', options: ['Random access MAC protocol', 'Deterministic MAC protocol', 'Routing protocol', 'Error control protocol'], correctAnswer: 'Random access MAC protocol', category: 'NETWORKING' },
{ question: 'Slotted ALOHA improves efficiency by:', options: ['Dividing time into discrete slots', 'Using CSMA', 'Using Ethernet only', 'Eliminating collisions completely'], correctAnswer: 'Dividing time into discrete slots', category: 'NETWORKING' },
{ question: 'CSMA/CD is primarily used in:', options: ['Ethernet LAN', 'Wi-Fi', 'Token ring', 'PPP'], correctAnswer: 'Ethernet LAN', category: 'NETWORKING' },
{ question: 'CSMA/CA is used in:', options: ['Wireless networks', 'Wired Ethernet', 'Token ring', 'PPP'], correctAnswer: 'Wireless networks', category: 'NETWORKING' },
{ question: 'PPP protocol provides:', options: ['Point-to-point communication with framing and error detection', 'Broadcast LAN', 'Routing between networks', 'IP address assignment'], correctAnswer: 'Point-to-point communication with framing and error detection', category: 'NETWORKING' },

// Network Layer
{ question: 'IPv4 address Class A range is:', options: ['0.0.0.0 to 127.255.255.255', '128.0.0.0 to 191.255.255.255', '192.0.0.0 to 223.255.255.255', '224.0.0.0 to 239.255.255.255'], correctAnswer: '0.0.0.0 to 127.255.255.255', category: 'NETWORKING' },
{ question: 'CIDR allows:', options: ['Flexible allocation of IP addresses', 'Only classful addressing', 'MAC address assignment', 'Routing without IP'], correctAnswer: 'Flexible allocation of IP addresses', category: 'NETWORKING' },
{ question: 'Subnet mask 255.255.255.0 corresponds to which prefix length?', options: ['/24', '/16', '/8', '/32'], correctAnswer: '/24', category: 'NETWORKING' },
{ question: 'RIP routing protocol is based on:', options: ['Distance vector', 'Link state', 'Hierarchical', 'Flooding'], correctAnswer: 'Distance vector', category: 'NETWORKING' },
{ question: 'OSPF routing protocol uses:', options: ['Link state algorithm', 'Distance vector', 'Random walk', 'Flooding only'], correctAnswer: 'Link state algorithm', category: 'NETWORKING' },
{ question: 'BGP protocol is primarily used for:', options: ['Inter-domain routing on the Internet', 'LAN routing', 'Wireless MAC control', 'Error detection'], correctAnswer: 'Inter-domain routing on the Internet', category: 'NETWORKING' },
{ question: 'ARP protocol is used for:', options: ['Mapping IP address to MAC address', 'Mapping MAC to IP', 'Mapping ports', 'Encrypting IP packets'], correctAnswer: 'Mapping IP address to MAC address', category: 'NETWORKING' },
{ question: 'RARP protocol is used for:', options: ['Mapping MAC address to IP address', 'IP to MAC mapping', 'Routing updates', 'Packet encryption'], correctAnswer: 'Mapping MAC address to IP address', category: 'NETWORKING' },
{ question: 'NAT is used for:', options: ['Translating private IP addresses to public IP addresses', 'Detecting collisions', 'Assigning MAC addresses', 'Routing only'], correctAnswer: 'Translating private IP addresses to public IP addresses', category: 'NETWORKING' },
{ question: 'IPv6 addresses are:', options: ['128-bit', '32-bit', '64-bit', '48-bit'], correctAnswer: '128-bit', category: 'NETWORKING' },
{ question: 'Subnetting helps in:', options: ['Efficient IP address utilization', 'Increasing MAC addresses', 'Error detection', 'Media access control'], correctAnswer: 'Efficient IP address utilization', category: 'NETWORKING' },
{ question: 'Hierarchical routing improves:', options: ['Scalability in large networks', 'Error correction', 'Frame synchronization', 'Signal modulation'], correctAnswer: 'Scalability in large networks', category: 'NETWORKING' },
{ question: 'ICMP protocol is used for:', options: ['Network diagnostics and error reporting', 'Routing packets', 'Assigning IP addresses', 'MAC control'], correctAnswer: 'Network diagnostics and error reporting', category: 'NETWORKING' },
{ question: 'Link state routing protocols require each router to:', options: ['Maintain complete network topology', 'Only know neighbors', 'Flood only ARP requests', 'Store MAC addresses'], correctAnswer: 'Maintain complete network topology', category: 'NETWORKING' },
{ question: 'Distance vector routing can suffer from:', options: ['Count-to-infinity problem', 'MAC collisions', 'Frame loss', 'Signal distortion'], correctAnswer: 'Count-to-infinity problem', category: 'NETWORKING' },

// ============ NETWORKING: Transport Layer & Application Layer (30) ============

// Transport Layer
{ question: 'Primary function of the Transport Layer is to:', options: ['Provide end-to-end communication between processes', 'Provide physical addressing', 'Manage routing tables', 'Detect collisions'], correctAnswer: 'Provide end-to-end communication between processes', category: 'NETWORKING' },
{ question: 'TCP provides:', options: ['Reliable, connection-oriented service', 'Connectionless, unreliable service', 'Only multicast service', 'Only encryption'], correctAnswer: 'Reliable, connection-oriented service', category: 'NETWORKING' },
{ question: 'UDP provides:', options: ['Connectionless, best-effort service', 'Reliable connection-oriented service', 'Flow control', 'Congestion avoidance'], correctAnswer: 'Connectionless, best-effort service', category: 'NETWORKING' },
{ question: 'Three-way handshake in TCP involves:', options: ['SYN, SYN-ACK, ACK', 'SYN, ACK, FIN', 'FIN, ACK, RST', 'SYN, FIN, SYN-ACK'], correctAnswer: 'SYN, SYN-ACK, ACK', category: 'NETWORKING' },
{ question: 'TCP sliding window is used for:', options: ['Flow control', 'Error detection', 'Routing', 'MAC addressing'], correctAnswer: 'Flow control', category: 'NETWORKING' },
{ question: 'TCP congestion control uses which mechanisms?', options: ['Slow start, AIMD, Fast retransmit/recovery', 'Parity, Checksum, CRC', 'Token bucket, Leaky bucket', 'None'], correctAnswer: 'Slow start, AIMD, Fast retransmit/recovery', category: 'NETWORKING' },
{ question: 'UDP does not provide:', options: ['Sequencing', 'Checksum', 'Port addressing', 'Multiplexing'], correctAnswer: 'Sequencing', category: 'NETWORKING' },
{ question: 'SCTP (Stream Control Transmission Protocol) provides:', options: ['Multi-streaming and multi-homing support', 'Single stream only', 'Connectionless service', 'Physical addressing'], correctAnswer: 'Multi-streaming and multi-homing support', category: 'NETWORKING' },
{ question: 'TCP ensures reliable delivery by using:', options: ['Acknowledgments and retransmissions', 'Broadcasting', 'Token passing', 'Encryption'], correctAnswer: 'Acknowledgments and retransmissions', category: 'NETWORKING' },
{ question: 'UDP is suitable for applications requiring:', options: ['Low latency and minimal overhead', 'Guaranteed delivery', 'Congestion control', 'Flow control'], correctAnswer: 'Low latency and minimal overhead', category: 'NETWORKING' },

// Application Layer
{ question: 'DNS primarily maps:', options: ['Domain names to IP addresses', 'IP addresses to MAC', 'MAC to ports', 'Email addresses to servers'], correctAnswer: 'Domain names to IP addresses', category: 'NETWORKING' },
{ question: 'DHCP is used for:', options: ['Dynamic IP address allocation', 'Routing updates', 'MAC address assignment', 'DNS resolution'], correctAnswer: 'Dynamic IP address allocation', category: 'NETWORKING' },
{ question: 'FTP uses which port numbers?', options: ['21 for control, 20 for data', '80 for control, 21 for data', '23 only', '69 only'], correctAnswer: '21 for control, 20 for data', category: 'NETWORKING' },
{ question: 'TFTP differs from FTP because it:', options: ['Is connectionless and uses UDP', 'Uses TCP for reliability', 'Supports authentication', 'Encrypts data'], correctAnswer: 'Is connectionless and uses UDP', category: 'NETWORKING' },
{ question: 'HTTP is a:', options: ['Stateless, text-based protocol', 'Connection-oriented, stateful protocol', 'Low-level transport protocol', 'MAC layer protocol'], correctAnswer: 'Stateless, text-based protocol', category: 'NETWORKING' },
{ question: 'HTTPS adds security using:', options: ['TLS/SSL', 'UDP', 'ARP', 'SMTP'], correctAnswer: 'TLS/SSL', category: 'NETWORKING' },
{ question: 'SMTP protocol is used for:', options: ['Sending email', 'Receiving email only', 'File transfer', 'DNS resolution'], correctAnswer: 'Sending email', category: 'NETWORKING' },
{ question: 'POP3 protocol:', options: ['Downloads emails from server to client', 'Sends emails from client', 'Manages IP addresses', 'Performs routing'], correctAnswer: 'Downloads emails from server to client', category: 'NETWORKING' },
{ question: 'IMAP allows:', options: ['Server-side email management and multiple device access', 'Only downloading emails', 'Only sending emails', 'DNS resolution'], correctAnswer: 'Server-side email management and multiple device access', category: 'NETWORKING' },
{ question: 'SNMP is primarily used for:', options: ['Network management and monitoring', 'File transfer', 'Email delivery', 'IP address allocation'], correctAnswer: 'Network management and monitoring', category: 'NETWORKING' },
{ question: 'Telnet provides:', options: ['Remote command-line access', 'File transfer', 'Email sending', 'DNS mapping'], correctAnswer: 'Remote command-line access', category: 'NETWORKING' },
{ question: 'SSH differs from Telnet because it:', options: ['Provides encrypted remote access', 'Uses UDP', 'Requires no authentication', 'Is stateless'], correctAnswer: 'Provides encrypted remote access', category: 'NETWORKING' },
{ question: 'NFS allows:', options: ['Remote file system access over a network', 'Dynamic IP allocation', 'Email sending', 'Routing updates'], correctAnswer: 'Remote file system access over a network', category: 'NETWORKING' },
{ question: 'Port number used by HTTP is:', options: ['80', '443', '21', '25'], correctAnswer: '80', category: 'NETWORKING' },
{ question: 'Port number used by HTTPS is:', options: ['443', '80', '21', '22'], correctAnswer: '443', category: 'NETWORKING' },
{ question: 'DNS primarily uses which protocol?', options: ['UDP', 'TCP only', 'ICMP', 'ARP'], correctAnswer: 'UDP', category: 'NETWORKING' },
{ question: 'Reliable data transfer for HTTP/HTTPS is ensured by:', options: ['TCP', 'UDP', 'IP', 'ICMP'], correctAnswer: 'TCP', category: 'NETWORKING' },
{ question: 'DHCP lease time defines:', options: ['Duration for which an IP is allocated', 'Time to transmit packets', 'Time for routing convergence', 'TTL in DNS'], correctAnswer: 'Duration for which an IP is allocated', category: 'NETWORKING' },
{ question: 'TFTP commonly uses which port?', options: ['69', '21', '23', '25'], correctAnswer: '69', category: 'NETWORKING' },
{ question: 'SNMP uses which ports by default?', options: ['161 for agent, 162 for manager traps', '80 for agent, 443 for manager', '21 and 20', '22 and 23'], correctAnswer: '161 for agent, 162 for manager traps', category: 'NETWORKING' },
{ question: 'SCTP is sometimes used in applications like:', options: ['Telecommunication signaling', 'Email transfer', 'Web browsing', 'DNS'], correctAnswer: 'Telecommunication signaling', category: 'NETWORKING' },
{ question: 'SMTP typically uses which port?', options: ['25', '110', '143', '80'], correctAnswer: '25', category: 'NETWORKING' },
{ question: 'IMAP typically uses which port?', options: ['143', '110', '25', '21'], correctAnswer: '143', category: 'NETWORKING' },
{ question: 'POP3 typically uses which port?', options: ['110', '143', '25', '21'], correctAnswer: '110', category: 'NETWORKING' },
{ question: 'HTTP/2 improves performance over HTTP/1.1 by:', options: ['Multiplexing streams over a single TCP connection', 'Using UDP', 'Changing DNS protocol', 'Eliminating TLS'], correctAnswer: 'Multiplexing streams over a single TCP connection', category: 'NETWORKING' },
{ question: 'Fast retransmit in TCP occurs when:', options: ['Three duplicate ACKs are received', 'Timeout occurs', 'UDP packet loss happens', 'ICMP error is received'], correctAnswer: 'Three duplicate ACKs are received', category: 'NETWORKING' },

// ============ NETWORKING: Security, Wireless & Advanced Topics (40) ============

// Network Security
{ question: 'CIA triad in network security stands for:', options: ['Confidentiality, Integrity, Availability', 'Control, Integrity, Authentication', 'Confidentiality, Identification, Access', 'Consistency, Integrity, Authentication'], correctAnswer: 'Confidentiality, Integrity, Availability', category: 'NETWORKING' },
{ question: 'Symmetric cryptography uses:', options: ['Same key for encryption and decryption', 'Different keys for encryption and decryption', 'Public key only', 'Hash functions only'], correctAnswer: 'Same key for encryption and decryption', category: 'NETWORKING' },
{ question: 'Asymmetric cryptography uses:', options: ['Different keys for encryption and decryption', 'Same key for encryption and decryption', 'Hash functions only', 'Stream ciphers only'], correctAnswer: 'Different keys for encryption and decryption', category: 'NETWORKING' },
{ question: 'Digital signatures provide:', options: ['Authentication and integrity', 'Confidentiality only', 'Availability only', 'Physical security'], correctAnswer: 'Authentication and integrity', category: 'NETWORKING' },
{ question: 'PKI stands for:', options: ['Public Key Infrastructure', 'Private Key Identification', 'Protected Key Integrity', 'Protocol Key Implementation'], correctAnswer: 'Public Key Infrastructure', category: 'NETWORKING' },
{ question: 'Firewall primarily provides:', options: ['Access control and packet filtering', 'Data encryption', 'DNS resolution', 'Routing updates'], correctAnswer: 'Access control and packet filtering', category: 'NETWORKING' },
{ question: 'IDS stands for:', options: ['Intrusion Detection System', 'Internet Data Service', 'Internal Device Security', 'Integrated DNS Server'], correctAnswer: 'Intrusion Detection System', category: 'NETWORKING' },
{ question: 'SSL/TLS provides:', options: ['Encrypted communication over the internet', 'MAC layer addressing', 'Routing', 'IP addressing'], correctAnswer: 'Encrypted communication over the internet', category: 'NETWORKING' },
{ question: 'IPsec is used for:', options: ['Securing IP packets', 'File transfer', 'Email delivery', 'DNS resolution'], correctAnswer: 'Securing IP packets', category: 'NETWORKING' },
{ question: 'VPN provides:', options: ['Secure remote access over public networks', 'Routing only', 'DHCP service', 'Email services'], correctAnswer: 'Secure remote access over public networks', category: 'NETWORKING' },
{ question: 'DoS attack aims to:', options: ['Make a service unavailable', 'Steal passwords', 'Modify DNS records', 'Encrypt data'], correctAnswer: 'Make a service unavailable', category: 'NETWORKING' },
{ question: 'DDoS differs from DoS because:', options: ['Multiple sources attack simultaneously', 'Uses a single attacker', 'Does not affect availability', 'Only targets email servers'], correctAnswer: 'Multiple sources attack simultaneously', category: 'NETWORKING' },
{ question: 'Man-in-the-Middle attack intercepts:', options: ['Communication between two parties', 'Database queries', 'Filesystem operations', 'DNS caching'], correctAnswer: 'Communication between two parties', category: 'NETWORKING' },
{ question: 'ARP spoofing is used to:', options: ['Map IP to attacker MAC', 'Encrypt packets', 'Send emails', 'Bypass firewalls'], correctAnswer: 'Map IP to attacker MAC', category: 'NETWORKING' },
{ question: 'DNS poisoning modifies:', options: ['DNS cache to redirect traffic', 'MAC addresses', 'Email headers', 'Firewall rules'], correctAnswer: 'DNS cache to redirect traffic', category: 'NETWORKING' },
{ question: 'Packet sniffing captures:', options: ['Network packets for analysis', 'Disk data', 'Process memory', 'MAC addresses only'], correctAnswer: 'Network packets for analysis', category: 'NETWORKING' },

// Wireless & Mobile Networking
{ question: '2G cellular networks primarily provide:', options: ['Voice communication and limited data', 'High-speed internet', 'IoT connectivity', 'Fiber-optic connections'], correctAnswer: 'Voice communication and limited data', category: 'NETWORKING' },
{ question: '3G networks introduce:', options: ['Higher data rates and mobile internet', 'Only voice service', 'Analog signals', 'Ethernet LAN'], correctAnswer: 'Higher data rates and mobile internet', category: 'NETWORKING' },
{ question: '4G networks provide:', options: ['High-speed mobile broadband', 'Only SMS services', 'Wired connectivity', 'Packet filtering'], correctAnswer: 'High-speed mobile broadband', category: 'NETWORKING' },
{ question: '5G networks enable:', options: ['Ultra-low latency and massive IoT', 'Dial-up connections', 'Ethernet LANs', 'IPsec VPN'], correctAnswer: 'Ultra-low latency and massive IoT', category: 'NETWORKING' },
{ question: 'Wi-Fi is defined by IEEE standard:', options: ['802.11', '802.3', '802.15', '802.16'], correctAnswer: '802.11', category: 'NETWORKING' },
{ question: 'Bluetooth standard is:', options: ['IEEE 802.15', 'IEEE 802.11', 'IEEE 802.3', 'IEEE 802.16'], correctAnswer: 'IEEE 802.15', category: 'NETWORKING' },
{ question: 'Mobile IP allows:', options: ['Seamless mobility across networks', 'Only email delivery', 'Static IP addressing', 'Ethernet routing'], correctAnswer: 'Seamless mobility across networks', category: 'NETWORKING' },
{ question: 'MANET stands for:', options: ['Mobile Ad hoc Network', 'Managed Access Network', 'Multiple Autonomous Nodes', 'Mobile Authentication Network'], correctAnswer: 'Mobile Ad hoc Network', category: 'NETWORKING' },
{ question: 'IoT networks primarily connect:', options: ['Sensors and devices', 'PCs only', 'Routers only', 'Firewalls only'], correctAnswer: 'Sensors and devices', category: 'NETWORKING' },

// Advanced Networking Topics
{ question: 'QoS ensures:', options: ['Guaranteed performance metrics like bandwidth, latency', 'MAC addressing', 'DNS resolution', 'Port forwarding'], correctAnswer: 'Guaranteed performance metrics like bandwidth, latency', category: 'NETWORKING' },
{ question: 'MPLS is used for:', options: ['Label-based forwarding to improve routing efficiency', 'Email delivery', 'File transfer', 'VPN only'], correctAnswer: 'Label-based forwarding to improve routing efficiency', category: 'NETWORKING' },
{ question: 'SDN separates:', options: ['Control plane from data plane', 'MAC from IP', 'Encryption from decryption', 'Transport from application'], correctAnswer: 'Control plane from data plane', category: 'NETWORKING' },
{ question: 'NFV focuses on:', options: ['Virtualizing network functions on standard hardware', 'Packet switching', 'IP addressing', 'Firewall rules'], correctAnswer: 'Virtualizing network functions on standard hardware', category: 'NETWORKING' },
{ question: 'Cloud networking enables:', options: ['Flexible, scalable network resources in cloud', 'Only email services', 'Static LANs', 'VPN tunneling only'], correctAnswer: 'Flexible, scalable network resources in cloud', category: 'NETWORKING' },
{ question: 'Leaf-Spine topology is used in:', options: ['Data center networks', 'WANs only', 'PANs', 'Bluetooth networks'], correctAnswer: 'Data center networks', category: 'NETWORKING' },
{ question: 'GRE and VXLAN are used for:', options: ['Tunneling and overlay networks', 'Wireless access', 'Email protocols', 'DNS forwarding'], correctAnswer: 'Tunneling and overlay networks', category: 'NETWORKING' },
{ question: 'P2P networks rely on:', options: ['Decentralized resource sharing', 'Centralized servers', 'Only wireless links', 'VPN tunnels'], correctAnswer: 'Decentralized resource sharing', category: 'NETWORKING' },
{ question: 'CDNs primarily improve:', options: ['Content delivery speed and availability', 'Routing convergence', 'Firewall security', 'IPsec encryption'], correctAnswer: 'Content delivery speed and availability', category: 'NETWORKING' },
{ question: 'Firewalls can be implemented as:', options: ['Packet filtering, stateful, proxy', 'Only MAC filters', 'DNS resolvers', 'VPN tunnels'], correctAnswer: 'Packet filtering, stateful, proxy', category: 'NETWORKING' },
{ question: 'TLS ensures:', options: ['Encryption, integrity, authentication', 'Routing optimization', 'MAC address learning', 'ARP resolution'], correctAnswer: 'Encryption, integrity, authentication', category: 'NETWORKING' },
{ question: 'ARP spoofing primarily targets:', options: ['LAN communication', 'WAN routing', 'HTTP traffic only', 'DNS servers only'], correctAnswer: 'LAN communication', category: 'NETWORKING' },
{ question: 'DDoS attacks are mitigated by:', options: ['Rate limiting, firewalls, IDS/IPS', 'DHCP only', 'VPN', 'MAC filtering'], correctAnswer: 'Rate limiting, firewalls, IDS/IPS', category: 'NETWORKING' },
{ question: 'Man-in-the-middle attacks can be prevented using:', options: ['TLS/SSL encryption', 'UDP only', 'MAC filtering', 'ARP spoofing'], correctAnswer: 'TLS/SSL encryption', category: 'NETWORKING' },
{ question: 'DHCP snooping is used to:', options: ['Prevent rogue DHCP servers in LAN', 'Encrypt email', 'Provide QoS', 'Implement MPLS'], correctAnswer: 'Prevent rogue DHCP servers in LAN', category: 'NETWORKING' },
{ question: 'Wi-Fi 6 (802.11ax) improves:', options: ['Efficiency, capacity, and latency', 'Only coverage', 'Only security', 'Only MAC filtering'], correctAnswer: 'Efficiency, capacity, and latency', category: 'NETWORKING' },
{ question: 'SDN controller is responsible for:', options: ['Network-wide control and policy enforcement', 'Data packet forwarding only', 'Email delivery', 'DNS resolution'], correctAnswer: 'Network-wide control and policy enforcement', category: 'NETWORKING' },
{ question: 'Overlay networks can be used for:', options: ['VPNs, CDNs, P2P', 'Only Ethernet LANs', 'Only Wi-Fi', 'Only routing tables'], correctAnswer: 'VPNs, CDNs, P2P', category: 'NETWORKING' },
{ question: 'Blockchain-based networking can provide:', options: ['Decentralized trust and integrity', 'MAC learning', 'ARP resolution', 'IP addressing'], correctAnswer: 'Decentralized trust and integrity', category: 'NETWORKING' },



  
  // ============ OOP  ============
// ============ BASIC OOP CONCEPTS (20) ============
{ question: 'In OOP, a class is:', options: ['A blueprint for creating objects', 'An object itself', 'A function only', 'A variable'], correctAnswer: 'A blueprint for creating objects', category: 'OOP' },

{ question: 'An object in OOP is:', options: ['An instance of a class', 'A class definition', 'A method only', 'A variable'], correctAnswer: 'An instance of a class', category: 'OOP' },

{ question: 'Which of the following is NOT true about attributes in a class?', options: ['They represent data or state of an object', 'They can be private or public', 'They define behavior of an object', 'They can have default values'], correctAnswer: 'They define behavior of an object', category: 'OOP' },

{ question: 'Methods in a class are used to:', options: ['Define behavior of objects', 'Store data only', 'Create classes', 'Allocate memory'], correctAnswer: 'Define behavior of objects', category: 'OOP' },

{ question: 'Constructor in OOP is used to:', options: ['Initialize object attributes at creation', 'Destroy an object', 'Call another method externally', 'Sort class members'], correctAnswer: 'Initialize object attributes at creation', category: 'OOP' },

{ question: 'Destructor in OOP is used to:', options: ['Clean up resources before object is destroyed', 'Create a new object', 'Initialize class attributes', 'Perform arithmetic'], correctAnswer: 'Clean up resources before object is destroyed', category: 'OOP' },

{ question: 'The “this” pointer (or “self” in Python) refers to:', options: ['The current object instance', 'The class itself', 'Global variables', 'Static methods'], correctAnswer: 'The current object instance', category: 'OOP' },

{ question: 'Which of the following correctly creates an object in C++?', options: ['MyClass obj;', 'MyClass();', 'obj = MyClass;', 'new MyClass();'], correctAnswer: 'MyClass obj;', category: 'OOP' },

{ question: 'In Python, an object is created by calling:', options: ['ClassName()', 'new ClassName', 'create ClassName', 'ClassName{}'], correctAnswer: 'ClassName()', category: 'OOP' },

{ question: 'A constructor can be overloaded in languages like C++ to:', options: ['Provide multiple ways to initialize objects', 'Call destructors', 'Prevent object creation', 'Sort attributes'], correctAnswer: 'Provide multiple ways to initialize objects', category: 'OOP' },

{ question: 'Which of these is NOT a property of a constructor?', options: ['It has the same name as the class', 'It has no return type', 'It can be called explicitly', 'It returns a value'], correctAnswer: 'It returns a value', category: 'OOP' },

{ question: 'In OOP, private attributes are accessed within the class using:', options: ['this pointer / self', 'Global variable', 'Static function', 'Friend class only'], correctAnswer: 'this pointer / self', category: 'OOP' },

{ question: 'Static members of a class belong to:', options: ['The class itself, not individual objects', 'Each object separately', 'The constructor only', 'Destructor only'], correctAnswer: 'The class itself, not individual objects', category: 'OOP' },

{ question: 'Default constructor is:', options: ['Constructor with no parameters', 'Constructor with parameters', 'Destructor', 'Static method'], correctAnswer: 'Constructor with no parameters', category: 'OOP' },

{ question: 'Parameterized constructor allows:', options: ['Initializing objects with specific values', 'Deleting objects', 'Overloading methods only', 'Static initialization'], correctAnswer: 'Initializing objects with specific values', category: 'OOP' },

{ question: 'Copy constructor in C++ is used to:', options: ['Initialize a new object as a copy of an existing object', 'Destroy an object', 'Call static methods', 'Allocate heap memory'], correctAnswer: 'Initialize a new object as a copy of an existing object', category: 'OOP' },

{ question: 'Destructors are called automatically when:', options: ['Object goes out of scope or is deleted', 'Class is declared', 'Constructor is called', 'Static method executes'], correctAnswer: 'Object goes out of scope or is deleted', category: 'OOP' },

{ question: 'Creating multiple objects from a class demonstrates which OOP concept?', options: ['Instantiation', 'Inheritance', 'Polymorphism', 'Encapsulation'], correctAnswer: 'Instantiation', category: 'OOP' },

{ question: 'Which of the following is true about “this” pointer in C++?', options: ['Cannot be assigned to another pointer', 'Points to global variables', 'Used to call static methods only', 'Is NULL by default'], correctAnswer: 'Cannot be assigned to another pointer', category: 'OOP' },

// ============ ENCAPSULATION & ABSTRACTION IN C++ (30) ============
{ question: 'Encapsulation in C++ refers to:', options: ['Binding data and methods together and controlling access', 'Using only global variables', 'Inheritance only', 'Overloading functions'], correctAnswer: 'Binding data and methods together and controlling access', category: 'OOP' },

{ question: 'Which of the following is NOT an access modifier in C++?', options: ['public', 'private', 'protected', 'internal'], correctAnswer: 'internal', category: 'OOP' },

{ question: 'Private members of a class can be accessed directly by:', options: ['Only member functions of the same class', 'Any function', 'Derived classes only', 'Global functions always'], correctAnswer: 'Only member functions of the same class', category: 'OOP' },

{ question: 'Protected members can be accessed by:', options: ['The class itself and derived classes', 'Any function', 'Global scope', 'Main only'], correctAnswer: 'The class itself and derived classes', category: 'OOP' },

{ question: 'Public members of a class are accessible by:', options: ['Any function or object', 'Only member functions', 'Derived classes only', 'Constructors only'], correctAnswer: 'Any function or object', category: 'OOP' },

{ question: 'Getters and setters are used for:', options: ['Accessing and modifying private attributes safely', 'Overloading operators', 'Calling constructors', 'Defining virtual functions'], correctAnswer: 'Accessing and modifying private attributes safely', category: 'OOP' },

{ question: 'Data hiding in C++ is achieved using:', options: ['private access modifier', 'public access modifier', 'Protected access only', 'Static keyword only'], correctAnswer: 'private access modifier', category: 'OOP' },

{ question: 'Which statement about abstraction is true?', options: ['Abstraction hides implementation details and exposes only functionality', 'Abstraction shows all internal code', 'Abstraction is only for variables', 'Abstraction is achieved with loops'], correctAnswer: 'Abstraction hides implementation details and exposes only functionality', category: 'OOP' },

{ question: 'Abstract classes in C++:', options: ['Contain at least one pure virtual function', 'Can be instantiated directly', 'Cannot have any functions', 'Are always static'], correctAnswer: 'Contain at least one pure virtual function', category: 'OOP' },

{ question: 'A pure virtual function is declared using:', options: ['virtual void func() = 0;', 'void func() {};', 'static void func();', 'inline void func()'], correctAnswer: 'virtual void func() = 0;', category: 'OOP' },

{ question: 'Can abstract classes have normal member functions?', options: ['Yes, they can have normal and pure virtual functions', 'No, only pure virtual functions', 'No, only attributes', 'Yes, but static only'], correctAnswer: 'Yes, they can have normal and pure virtual functions', category: 'OOP' },

{ question: 'Interfaces in C++ are typically implemented using:', options: ['Classes with only pure virtual functions', 'Structs only', 'Normal classes with constructors', 'Global functions'], correctAnswer: 'Classes with only pure virtual functions', category: 'OOP' },

{ question: 'Which of the following can be instantiated?', options: ['Concrete classes only', 'Abstract classes only', 'Interface classes only', 'Pure virtual functions'], correctAnswer: 'Concrete classes only', category: 'OOP' },

{ question: 'Can a derived class override a pure virtual function?', options: ['Yes, it must override to become concrete', 'No, it cannot', 'Yes, but only static functions', 'Only in abstract class'], correctAnswer: 'Yes, it must override to become concrete', category: 'OOP' },

{ question: 'Accessing private members of another object of the same class is:', options: ['Allowed inside class methods', 'Never allowed', 'Allowed in derived classes', 'Allowed only with friend keyword'], correctAnswer: 'Allowed inside class methods', category: 'OOP' },

{ question: 'Friend functions can access:', options: ['Private and protected members of the class', 'Only public members', 'Static members only', 'Nothing'], correctAnswer: 'Private and protected members of the class', category: 'OOP' },

{ question: 'Friend classes can access:', options: ['All private and protected members of another class', 'Only public members', 'Static members only', 'Nothing'], correctAnswer: 'All private and protected members of another class', category: 'OOP' },

{ question: 'Which of the following is true about setters?', options: ['They can validate values before setting attributes', 'They always return void', 'They are only used in abstract classes', 'They must be virtual'], correctAnswer: 'They can validate values before setting attributes', category: 'OOP' },

{ question: 'Which of the following is true about getters?', options: ['They provide read-only access to private attributes', 'They modify attributes', 'They can only be static', 'They are only for abstract classes'], correctAnswer: 'They provide read-only access to private attributes', category: 'OOP' },

{ question: 'Can an abstract class have a constructor in C++?', options: ['Yes, constructors can be called by derived classes', 'No, abstract classes cannot have constructors', 'Only if it has no virtual functions', 'Only if it has no attributes'], correctAnswer: 'Yes, constructors can be called by derived classes', category: 'OOP' },

{ question: 'If a class has a pure virtual function, the class:', options: ['Cannot be instantiated directly', 'Can be instantiated directly', 'Becomes static', 'Must be final'], correctAnswer: 'Cannot be instantiated directly', category: 'OOP' },

{ question: 'Which access modifier provides maximum encapsulation?', options: ['private', 'public', 'protected', 'friend'], correctAnswer: 'private', category: 'OOP' },

{ question: 'A class implementing an interface must:', options: ['Define all pure virtual functions', 'Inherit constructors', 'Use private members only', 'Avoid virtual functions'], correctAnswer: 'Define all pure virtual functions', category: 'OOP' },

{ question: 'Abstract classes can have:', options: ['Attributes, constructors, destructors, normal and pure virtual methods', 'Only pure virtual methods', 'Only static members', 'Nothing'], correctAnswer: 'Attributes, constructors, destructors, normal and pure virtual methods', category: 'OOP' },

{ question: 'A class can have multiple pure virtual functions:', options: ['Yes, it can', 'No, only one', 'No, must be concrete', 'Only static functions'], correctAnswer: 'Yes, it can', category: 'OOP' },

{ question: 'Derived class must override a pure virtual function to:', options: ['Become a concrete class', 'Call base constructor', 'Access private members', 'Instantiate friend functions'], correctAnswer: 'Become a concrete class', category: 'OOP' },

{ question: 'Using private attributes with getters/setters ensures:', options: ['Controlled access and validation of data', 'Faster execution', 'Static linking', 'Automatic inheritance'], correctAnswer: 'Controlled access and validation of data', category: 'OOP' },

{ question: 'Which is true about virtual functions and abstraction?', options: ['Pure virtual functions achieve abstraction by enforcing override in derived classes', 'Virtual functions are only for static members', 'Virtual functions cannot be overridden', 'Abstraction does not use virtual functions'], correctAnswer: 'Pure virtual functions achieve abstraction by enforcing override in derived classes', category: 'OOP' },

{ question: 'Can an abstract class contain private pure virtual functions?', options: ['Yes, but they must be overridden in derived classes', 'No, must be public', 'No, must be protected', 'Yes, and can remain unimplemented'], correctAnswer: 'Yes, but they must be overridden in derived classes', category: 'OOP' },

// ============ INHERITANCE IN C++ (30) ============
{ question: 'Single inheritance in C++ means:', options: ['A derived class inherits from only one base class', 'A class inherits from multiple classes', 'Multiple classes inherit from a single class', 'A class cannot inherit'], correctAnswer: 'A derived class inherits from only one base class', category: 'OOP' },

{ question: 'Multiple inheritance occurs when:', options: ['A derived class inherits from more than one base class', 'A class inherits only one base', 'A class is abstract', 'A class contains only virtual functions'], correctAnswer: 'A derived class inherits from more than one base class', category: 'OOP' },

{ question: 'Multilevel inheritance refers to:', options: ['A chain of inheritance where class C inherits from B which inherits from A', 'One class inheriting from multiple classes', 'All classes inheriting from a single class', 'A class without inheritance'], correctAnswer: 'A chain of inheritance where class C inherits from B which inherits from A', category: 'OOP' },

{ question: 'Hierarchical inheritance occurs when:', options: ['Multiple derived classes inherit from a single base class', 'A class inherits from multiple base classes', 'A single derived class inherits from another derived class', 'No class inherits from any class'], correctAnswer: 'Multiple derived classes inherit from a single base class', category: 'OOP' },

{ question: 'Hybrid inheritance is:', options: ['A combination of two or more types of inheritance', 'Single inheritance only', 'Multiple inheritance only', 'Multilevel inheritance only'], correctAnswer: 'A combination of two or more types of inheritance', category: 'OOP' },

{ question: 'Function overriding allows:', options: ['A derived class to provide its own implementation of a base class method', 'Accessing private members directly', 'Calling constructors automatically', 'Defining static members only'], correctAnswer: 'A derived class to provide its own implementation of a base class method', category: 'OOP' },

{ question: 'Which keyword is used in C++ to call a base class constructor?', options: ['Base class name in initializer list', 'super', 'this', 'virtual'], correctAnswer: 'Base class name in initializer list', category: 'OOP' },

{ question: 'In C++, the super keyword equivalent is:', options: ['Base class name', 'this', 'virtual', 'friend'], correctAnswer: 'Base class name', category: 'OOP' },

{ question: 'Accessing a private member of a base class in a derived class is:', options: ['Not allowed directly, use protected or public getters/setters', 'Allowed directly', 'Only allowed with static keyword', 'Automatically inherited'], correctAnswer: 'Not allowed directly, use protected or public getters/setters', category: 'OOP' },

{ question: 'Protected members in a base class are accessible:', options: ['Directly by derived classes', 'By any object', 'Only by friend functions', 'Never accessible'], correctAnswer: 'Directly by derived classes', category: 'OOP' },

{ question: 'Private members in the base class are inherited as:', options: ['Not accessible directly by derived classes', 'Always public', 'Always protected', 'Deleted'], correctAnswer: 'Not accessible directly by derived classes', category: 'OOP' },

{ question: 'If a base class function is declared virtual, overriding in derived class allows:', options: ['Runtime polymorphism', 'Compile-time polymorphism', 'Access to private members', 'Static linking'], correctAnswer: 'Runtime polymorphism', category: 'OOP' },

{ question: 'Which type of inheritance can lead to the diamond problem?', options: ['Multiple inheritance', 'Single inheritance', 'Multilevel inheritance', 'Hierarchical inheritance'], correctAnswer: 'Multiple inheritance', category: 'OOP' },

{ question: 'Virtual inheritance in C++ is used to:', options: ['Solve the diamond problem', 'Prevent overriding', 'Hide base class members', 'Implement static polymorphism'], correctAnswer: 'Solve the diamond problem', category: 'OOP' },

{ question: 'Derived class can access which base class members directly?', options: ['Public and protected', 'Private only', 'Public only', 'All members including private'], correctAnswer: 'Public and protected', category: 'OOP' },

{ question: 'Which of the following statements is true about function overriding?', options: ['Signature in derived class must match base class', 'Derived class can change return type arbitrarily', 'Derived class cannot override', 'Only static functions can be overridden'], correctAnswer: 'Signature in derived class must match base class', category: 'OOP' },

{ question: 'Overridden base class function can be accessed in derived class using:', options: ['Base::functionName()', 'this->functionName()', 'super->functionName()', 'virtual function'], correctAnswer: 'Base::functionName()', category: 'OOP' },

{ question: 'If a derived class does not override a virtual base function, calling it on a derived object:', options: ['Executes base class version', 'Generates compile-time error', 'Executes derived destructor', 'Does nothing'], correctAnswer: 'Executes base class version', category: 'OOP' },

{ question: 'Which type of inheritance is best for implementing a tree hierarchy?', options: ['Hierarchical inheritance', 'Single inheritance', 'Multiple inheritance', 'Hybrid inheritance'], correctAnswer: 'Hierarchical inheritance', category: 'OOP' },

{ question: 'Constructor of base class in multilevel inheritance is called:', options: ['Before derived class constructor', 'After derived class constructor', 'Simultaneously', 'Never'], correctAnswer: 'Before derived class constructor', category: 'OOP' },

{ question: 'Destructor of base class in multilevel inheritance is called:', options: ['After derived class destructor', 'Before derived class destructor', 'Simultaneously', 'Never'], correctAnswer: 'After derived class destructor', category: 'OOP' },

{ question: 'Private inheritance means:', options: ['All public and protected members become private in derived class', 'Members remain public', 'Members become protected', 'Only virtual functions inherited'], correctAnswer: 'All public and protected members become private in derived class', category: 'OOP' },

{ question: 'Protected inheritance means:', options: ['All public and protected members become protected in derived class', 'Members remain public', 'Members become private', 'Only friend functions can access'], correctAnswer: 'All public and protected members become protected in derived class', category: 'OOP' },

{ question: 'Public inheritance means:', options: ['Public members remain public, protected remain protected', 'All members become private', 'All members become protected', 'Only constructors inherited'], correctAnswer: 'Public members remain public, protected remain protected', category: 'OOP' },

{ question: 'Which inheritance type allows reusing implementation but hides base class interface?', options: ['Private inheritance', 'Public inheritance', 'Protected inheritance', 'Multiple inheritance'], correctAnswer: 'Private inheritance', category: 'OOP' },

{ question: 'Derived class constructor can call a specific base class constructor using:', options: ['Initializer list', 'Virtual keyword', 'Friend function', 'Destructor'], correctAnswer: 'Initializer list', category: 'OOP' },

{ question: 'Which keyword ensures base class function is overridden correctly in derived class?', options: ['override', 'virtual', 'final', 'static'], correctAnswer: 'override', category: 'OOP' },

{ question: 'Base class function can be made non-overridable in derived class using:', options: ['final', 'virtual', 'override', 'static'], correctAnswer: 'final', category: 'OOP' },

{ question: 'Which of the following statements is true for hybrid inheritance?', options: ['It combines multiple types of inheritance', 'It only uses multilevel inheritance', 'It only uses single inheritance', 'It does not use polymorphism'], correctAnswer: 'It combines multiple types of inheritance', category: 'OOP' },

// ============ POLYMORPHISM IN C++ (15) ============
{ question: 'Polymorphism in C++ allows:', options: ['Objects to take multiple forms', 'Only function overloading', 'Only class templates', 'Static variables only'], correctAnswer: 'Objects to take multiple forms', category: 'OOP' },

{ question: 'Compile-time polymorphism is achieved using:', options: ['Function overloading and operator overloading', 'Virtual functions only', 'Inheritance only', 'Abstract classes only'], correctAnswer: 'Function overloading and operator overloading', category: 'OOP' },

{ question: 'Runtime polymorphism in C++ is achieved using:', options: ['Virtual functions', 'Function overloading', 'Templates', 'Friend functions'], correctAnswer: 'Virtual functions', category: 'OOP' },

{ question: 'Function overloading means:', options: ['Same function name with different parameter lists', 'Different function names', 'Same function name and same parameters', 'Overriding virtual functions'], correctAnswer: 'Same function name with different parameter lists', category: 'OOP' },

{ question: 'Operator overloading allows:', options: ['Defining custom behavior for operators on objects', 'Changing built-in operators globally', 'Accessing private members directly', 'Preventing inheritance'], correctAnswer: 'Defining custom behavior for operators on objects', category: 'OOP' },

{ question: 'Which of the following is true about virtual functions?', options: ['They enable runtime polymorphism', 'They are static by default', 'Cannot be overridden', 'Executed at compile-time'], correctAnswer: 'They enable runtime polymorphism', category: 'OOP' },

{ question: 'Dynamic dispatch means:', options: ['The method called is determined at runtime based on object type', 'The method is selected at compile time', 'The constructor is dynamically allocated', 'Static members are dispatched'], correctAnswer: 'The method called is determined at runtime based on object type', category: 'OOP' },

{ question: 'A derived class can override a base class virtual function by:', options: ['Providing a function with the same signature', 'Changing the return type arbitrarily', 'Overloading instead of overriding', 'Making it private'], correctAnswer: 'Providing a function with the same signature', category: 'OOP' },

{ question: 'Which keyword in C++ ensures correct overriding of a virtual function?', options: ['override', 'virtual', 'final', 'static'], correctAnswer: 'override', category: 'OOP' },

{ question: 'Pure virtual functions are used for:', options: ['Creating abstract base classes', 'Compile-time polymorphism', 'Static method calls', 'Operator overloading only'], correctAnswer: 'Creating abstract base classes', category: 'OOP' },

{ question: 'In C++, which is true about calling a virtual function through a base class pointer?', options: ['The derived class version is called if overridden', 'Base class version is always called', 'Compile-time error occurs', 'The function cannot be called'], correctAnswer: 'The derived class version is called if overridden', category: 'OOP' },

{ question: 'Which of the following is NOT compile-time polymorphism?', options: ['Virtual function overriding', 'Function overloading', 'Operator overloading', 'Template functions'], correctAnswer: 'Virtual function overriding', category: 'OOP' },

{ question: 'If a base class pointer points to a derived class object, calling a non-virtual function:', options: ['Calls base class function', 'Calls derived class function', 'Calls destructor', 'Generates runtime error'], correctAnswer: 'Calls base class function', category: 'OOP' },

{ question: 'Overloaded functions must differ in:', options: ['Number or type of parameters', 'Return type only', 'Access modifier', 'Virtual keyword'], correctAnswer: 'Number or type of parameters', category: 'OOP' },

{ question: 'Which of the following is an example of runtime polymorphism in C++?', options: ['Calling a derived class method through a base class pointer with a virtual function', 'Function overloading', 'Operator overloading', 'Templates'], correctAnswer: 'Calling a derived class method through a base class pointer with a virtual function', category: 'OOP' },

// ============ ADVANCED OOP CONCEPTS IN C++ (30) ============
{ question: 'Static members of a class:', options: ['Are shared by all objects of the class', 'Are unique for each object', 'Cannot be functions', 'Cannot be accessed outside the class'], correctAnswer: 'Are shared by all objects of the class', category: 'OOP' },

{ question: 'Static methods in C++:', options: ['Cannot access non-static members directly', 'Can access all members', 'Are automatically virtual', 'Are always private'], correctAnswer: 'Cannot access non-static members directly', category: 'OOP' },

{ question: 'A final class in C++ (using C++11 feature) is:', options: ['Cannot be inherited', 'Cannot have constructors', 'Cannot have destructors', 'Cannot have static members'], correctAnswer: 'Cannot be inherited', category: 'OOP' },

{ question: 'A final method in C++:', options: ['Cannot be overridden by derived classes', 'Cannot be called', 'Is static by default', 'Must be private'], correctAnswer: 'Cannot be overridden by derived classes', category: 'OOP' },

{ question: 'Friend functions in C++:', options: ['Can access private and protected members of a class', 'Cannot access private members', 'Are always members of the class', 'Are virtual by default'], correctAnswer: 'Can access private and protected members of a class', category: 'OOP' },

{ question: 'Friend classes in C++:', options: ['Have access to private and protected members of another class', 'Cannot access private members', 'Can be instantiated only once', 'Are abstract'], correctAnswer: 'Have access to private and protected members of another class', category: 'OOP' },

{ question: 'Nested classes in C++:', options: ['Can be declared inside another class', 'Cannot have methods', 'Cannot be private', 'Cannot have constructors'], correctAnswer: 'Can be declared inside another class', category: 'OOP' },

{ question: 'Inner classes in C++ can:', options: ['Access private members of the enclosing class if declared friend', 'Always inherit the outer class members', 'Cannot have constructors', 'Cannot have attributes'], correctAnswer: 'Access private members of the enclosing class if declared friend', category: 'OOP' },

{ question: 'Anonymous classes in C++ are:', options: ['Used for one-time objects without a name', 'Only allowed in templates', 'Cannot have methods', 'Are always abstract'], correctAnswer: 'Used for one-time objects without a name', category: 'OOP' },

{ question: 'Method overloading in C++ means:', options: ['Same method name, different parameter list', 'Changing return type only', 'Overriding base method', 'Hiding static members'], correctAnswer: 'Same method name, different parameter list', category: 'OOP' },

{ question: 'Method overriding in C++ means:', options: ['Derived class provides specific implementation of a base class virtual method', 'Changing return type only', 'Defining static methods', 'Creating friend methods'], correctAnswer: 'Derived class provides specific implementation of a base class virtual method', category: 'OOP' },

{ question: 'Method hiding occurs when:', options: ['Derived class defines a static function with the same name as a base class function', 'Overloading functions', 'Overriding virtual functions', 'Creating private constructors'], correctAnswer: 'Derived class defines a static function with the same name as a base class function', category: 'OOP' },

{ question: 'Object slicing in C++ occurs when:', options: ['A derived class object is assigned to a base class object, losing derived parts', 'A base class object is assigned to a derived class object', 'Copying static members', 'Using friend functions'], correctAnswer: 'A derived class object is assigned to a base class object, losing derived parts', category: 'OOP' },

{ question: 'Virtual destructors are used to:', options: ['Ensure derived class destructors are called when deleting via base class pointer', 'Prevent overriding', 'Make object static', 'Hide base class destructor'], correctAnswer: 'Ensure derived class destructors are called when deleting via base class pointer', category: 'OOP' },

{ question: 'Deleting a base class pointer without a virtual destructor may cause:', options: ['Undefined behavior / memory leaks', 'Nothing wrong', 'Compile-time error', 'Static linking failure'], correctAnswer: 'Undefined behavior / memory leaks', category: 'OOP' },

{ question: 'Static members are stored in:', options: ['Data segment, not per object', 'Heap memory', 'Stack memory', 'Register'], correctAnswer: 'Data segment, not per object', category: 'OOP' },

{ question: 'Can friend functions be inherited?', options: ['No, they are not members', 'Yes, always', 'Yes, only static friends', 'Yes, only virtual friends'], correctAnswer: 'No, they are not members', category: 'OOP' },

{ question: 'Can a nested class be declared static?', options: ['Yes, in C++11 and later', 'No, never', 'Yes, but only in templates', 'Yes, but only private'], correctAnswer: 'Yes, in C++11 and later', category: 'OOP' },

{ question: 'Overloaded operators in C++ are an example of:', options: ['Compile-time polymorphism', 'Runtime polymorphism', 'Dynamic dispatch', 'Friend functions only'], correctAnswer: 'Compile-time polymorphism', category: 'OOP' },

{ question: 'If a derived class hides a base class static method, calling it via base pointer:', options: ['Calls base class method', 'Calls derived method', 'Causes runtime error', 'Causes compile error'], correctAnswer: 'Calls base class method', category: 'OOP' },

{ question: 'Virtual destructors are required in base class if:', options: ['Polymorphic deletion through base pointer is expected', 'No derived class exists', 'Only static members exist', 'Friend classes are used'], correctAnswer: 'Polymorphic deletion through base pointer is expected', category: 'OOP' },

{ question: 'Static member functions cannot:', options: ['Access non-static data members directly', 'Be called via class name', 'Be declared public', 'Be declared private'], correctAnswer: 'Access non-static data members directly', category: 'OOP' },

{ question: 'Final keyword applied to class prevents:', options: ['Further inheritance', 'Member function overloading', 'Member function overriding', 'Static function creation'], correctAnswer: 'Further inheritance', category: 'OOP' },

{ question: 'Final keyword applied to a method prevents:', options: ['Overriding in derived class', 'Overloading in same class', 'Static declaration', 'Virtual call'], correctAnswer: 'Overriding in derived class', category: 'OOP' },

{ question: 'Object slicing can be avoided by:', options: ['Using pointers or references to base class', 'Declaring base class static', 'Using friend functions', 'Deleting base pointer'], correctAnswer: 'Using pointers or references to base class', category: 'OOP' },

{ question: 'Hiding vs Overriding difference:', options: ['Hiding occurs for non-virtual functions, Overriding occurs for virtual functions', 'Hiding occurs for virtual functions only', 'Overriding hides static methods', 'Hiding always uses templates'], correctAnswer: 'Hiding occurs for non-virtual functions, Overriding occurs for virtual functions', category: 'OOP' },

{ question: 'Static members can be accessed by:', options: ['Class name or object', 'Only object', 'Only pointer', 'Only reference'], correctAnswer: 'Class name or object', category: 'OOP' },

{ question: 'Anonymous classes are mostly used for:', options: ['One-time objects or local scopes', 'Abstract classes only', 'Friend functions only', 'Virtual inheritance only'], correctAnswer: 'One-time objects or local scopes', category: 'OOP' },

{ question: 'Virtual destructors are required when:', options: ['Deleting derived objects through base class pointers', 'No inheritance exists', 'Only static objects are used', 'Friend functions exist'], correctAnswer: 'Deleting derived objects through base class pointers', category: 'OOP' },

// ============ OBJECT RELATIONSHIPS IN C++ (15) ============
{ question: 'Association in OOP means:', options: ['A relationship where objects know about each other', 'Objects are tightly coupled', 'Objects cannot communicate', 'Base class pointer points to derived object'], correctAnswer: 'A relationship where objects know about each other', category: 'OOP' },

{ question: 'Aggregation is best described as:', options: ['A “Has-A” relationship with independent lifetimes', 'A “Has-A” relationship with dependent lifetimes', 'Inheritance relationship', 'Static members relationship'], correctAnswer: 'A “Has-A” relationship with independent lifetimes', category: 'OOP' },

{ question: 'Composition is:', options: ['A strong “Has-A” relationship where contained objects cannot exist independently', 'A weak association', 'Polymorphic relationship', 'Virtual inheritance'], correctAnswer: 'A strong “Has-A” relationship where contained objects cannot exist independently', category: 'OOP' },

{ question: 'Dependency (Uses relationship) occurs when:', options: ['A class uses another class as a parameter, local variable, or temporary object', 'A class inherits from another class', 'Objects are composed', 'Objects are aggregated'], correctAnswer: 'A class uses another class as a parameter, local variable, or temporary object', category: 'OOP' },

{ question: 'Generalization in OOP refers to:', options: ['Extracting common features into a base class', 'Aggregating objects', 'Creating temporary objects', 'Deleting derived objects through base pointer'], correctAnswer: 'Extracting common features into a base class', category: 'OOP' },

{ question: 'Specialization in OOP means:', options: ['Creating a subclass with more specific features', 'Making objects static', 'Deleting base objects', 'Hiding base functions'], correctAnswer: 'Creating a subclass with more specific features', category: 'OOP' },

{ question: 'Which relationship represents weak ownership?', options: ['Aggregation', 'Composition', 'Dependency', 'Inheritance'], correctAnswer: 'Aggregation', category: 'OOP' },

{ question: 'Which relationship represents strong ownership?', options: ['Composition', 'Aggregation', 'Association', 'Dependency'], correctAnswer: 'Composition', category: 'OOP' },

{ question: 'Association can be:', options: ['One-to-one, one-to-many, many-to-many', 'Always one-to-one', 'Always one-to-many', 'Only many-to-many'], correctAnswer: 'One-to-one, one-to-many, many-to-many', category: 'OOP' },

{ question: 'In composition, if the container object is destroyed:', options: ['Contained objects are also destroyed', 'Contained objects persist', 'Base class is deleted', 'Nothing happens'], correctAnswer: 'Contained objects are also destroyed', category: 'OOP' },

{ question: 'In aggregation, if the aggregator object is destroyed:', options: ['Contained objects can still exist independently', 'Contained objects are destroyed', 'Static members are deleted', 'Pointers are invalidated'], correctAnswer: 'Contained objects can still exist independently', category: 'OOP' },

{ question: 'Dependency is usually represented in UML diagrams by:', options: ['Dashed arrow pointing from dependent to independent class', 'Solid line with arrow', 'Double-headed arrow', 'Triangle'], correctAnswer: 'Dashed arrow pointing from dependent to independent class', category: 'OOP' },

{ question: 'Which relationship is closest to “uses-a”?', options: ['Dependency', 'Aggregation', 'Composition', 'Inheritance'], correctAnswer: 'Dependency', category: 'OOP' },

{ question: 'Inheritance represents which kind of relationship?', options: ['Generalization / Specialization', 'Aggregation', 'Composition', 'Association'], correctAnswer: 'Generalization / Specialization', category: 'OOP' },

{ question: 'Which is true about aggregation vs composition?', options: ['Composition implies ownership; aggregation does not', 'Aggregation implies ownership; composition does not', 'Both are same', 'Both are unrelated'], correctAnswer: 'Composition implies ownership; aggregation does not', category: 'OOP' },

// ============ EXCEPTION HANDLING IN C++ (10) ============
{ question: 'The main purpose of exception handling in C++ is:', options: ['To handle runtime errors gracefully', 'To improve compile-time performance', 'To create static members', 'To implement inheritance'], correctAnswer: 'To handle runtime errors gracefully', category: 'OOP' },

{ question: 'Which keyword is used to explicitly generate an exception in C++?', options: ['throw', 'try', 'catch', 'finally'], correctAnswer: 'throw', category: 'OOP' },

{ question: 'A try block in C++ is used to:', options: ['Encapsulate code that may throw an exception', 'Define a static function', 'Declare a class', 'Override a method'], correctAnswer: 'Encapsulate code that may throw an exception', category: 'OOP' },

{ question: 'Catch blocks in C++:', options: ['Handle exceptions thrown in the corresponding try block', 'Declare virtual functions', 'Define abstract classes', 'Implement static polymorphism'], correctAnswer: 'Handle exceptions thrown in the corresponding try block', category: 'OOP' },

{ question: 'C++ does not have a finally block, but equivalent cleanup can be achieved by:', options: ['RAII (Resource Acquisition Is Initialization) pattern', 'Using static variables', 'Virtual inheritance', 'Friend functions'], correctAnswer: 'RAII (Resource Acquisition Is Initialization) pattern', category: 'OOP' },

{ question: 'Custom exceptions in C++ are usually created by:', options: ['Deriving a class from std::exception', 'Defining a static method', 'Using friend functions', 'Overloading operators'], correctAnswer: 'Deriving a class from std::exception', category: 'OOP' },

{ question: 'Which of the following is the correct syntax to catch all exceptions?', options: ['catch(...) { }', 'catch(std::exception e) { }', 'catch() { }', 'catch(throw e) { }'], correctAnswer: 'catch(...) { }', category: 'OOP' },

{ question: 'Exception hierarchy in C++ means:', options: ['Exceptions are organized in a base and derived class structure', 'All exceptions are unrelated', 'Static members throw exceptions', 'Only virtual functions throw exceptions'], correctAnswer: 'Exceptions are organized in a base and derived class structure', category: 'OOP' },

{ question: 'Throwing an exception that is not caught by any catch block:', options: ['Terminates the program', 'Calls the base class destructor', 'Converts to static polymorphism', 'Is ignored silently'], correctAnswer: 'Terminates the program', category: 'OOP' },

{ question: 'Which of the following is true about multiple catch blocks?', options: ['The first matching catch block is executed', 'All catch blocks are executed sequentially', 'Only the last catch block is executed', 'Catch blocks cannot be multiple'], correctAnswer: 'The first matching catch block is executed', category: 'OOP' },

// ============ TEMPLATES / GENERICS IN C++ (10) ============
{ question: 'A function template in C++ allows:', options: ['Writing a single function for multiple data types', 'Creating static functions only', 'Overloading virtual functions', 'Declaring friend functions'], correctAnswer: 'Writing a single function for multiple data types', category: 'OOP' },

{ question: 'Syntax for a simple function template is:', options: ['template <typename T> T add(T a, T b) { return a + b; }', 'template function add(T a, T b)', 'class template add<T>', 'template <class> add(a,b)'], correctAnswer: 'template <typename T> T add(T a, T b) { return a + b; }', category: 'OOP' },

{ question: 'Class templates in C++ allow:', options: ['Creating a class for multiple data types without rewriting code', 'Declaring abstract classes', 'Overloading static functions only', 'Creating friend functions'], correctAnswer: 'Creating a class for multiple data types without rewriting code', category: 'OOP' },

{ question: 'Instantiation of a class template:', options: ['Occurs when specific types replace template parameters', 'Always occurs at runtime', 'Requires virtual functions', 'Cannot be done with objects'], correctAnswer: 'Occurs when specific types replace template parameters', category: 'OOP' },

{ question: 'A template parameter can be:', options: ['Type, non-type (like int), or template itself', 'Only type', 'Only class', 'Only int'], correctAnswer: 'Type, non-type (like int), or template itself', category: 'OOP' },

{ question: 'Bounded type parameters in templates allow:', options: ['Restricting template types to a specific set of types or constraints', 'Allowing any type without restriction', 'Only integers', 'Only derived classes'], correctAnswer: 'Restricting template types to a specific set of types or constraints', category: 'OOP' },

{ question: 'Template specialization allows:', options: ['Custom behavior for a specific type', 'Overriding virtual functions', 'Static polymorphism', 'Friend function creation'], correctAnswer: 'Custom behavior for a specific type', category: 'OOP' },

{ question: 'Syntax for explicit template specialization:', options: ['template<> class MyClass<int> { ... };', 'class MyClass<int> { ... };', 'template class MyClass<int>;', 'class<> MyClass<int> { ... };'], correctAnswer: 'template<> class MyClass<int> { ... };', category: 'OOP' },

{ question: 'Function templates can be overloaded by:', options: ['Regular functions or other function templates', 'Only static functions', 'Virtual functions', 'Friend functions'], correctAnswer: 'Regular functions or other function templates', category: 'OOP' },

{ question: 'Which of the following is true about class templates?', options: ['They are not classes themselves until instantiated with a type', 'They always occupy memory', 'They cannot have member functions', 'They cannot use inheritance'], correctAnswer: 'They are not classes themselves until instantiated with a type', category: 'OOP' },

// ============ MEMORY MANAGEMENT IN C++ (15) ============
{ question: 'Stack memory in C++ is used for:', options: ['Local variables and function call frames', 'Dynamically allocated objects', 'Static members only', 'Friend objects'], correctAnswer: 'Local variables and function call frames', category: 'OOP' },

{ question: 'Heap memory in C++ is used for:', options: ['Dynamically allocated objects using new/delete', 'Local variables', 'Function call frames', 'Static members'], correctAnswer: 'Dynamically allocated objects using new/delete', category: 'OOP' },

{ question: 'Which of the following is automatically deallocated when out of scope?', options: ['Stack memory', 'Heap memory', 'Static memory', 'Virtual memory'], correctAnswer: 'Stack memory', category: 'OOP' },

{ question: 'Which keyword is used to allocate memory on the heap in C++?', options: ['new', 'malloc', 'alloc', 'create'], correctAnswer: 'new', category: 'OOP' },

{ question: 'Which keyword is used to free heap memory in C++?', options: ['delete', 'free', 'dispose', 'destroy'], correctAnswer: 'delete', category: 'OOP' },

{ question: 'Constructors in C++:', options: ['Allocate and initialize memory for objects', 'Automatically free memory', 'Are optional for stack variables only', 'Cannot be overloaded'], correctAnswer: 'Allocate and initialize memory for objects', category: 'OOP' },

{ question: 'Destructors in C++:', options: ['Clean up and release resources when an object goes out of scope', 'Allocate memory', 'Overload operators', 'Are always virtual'], correctAnswer: 'Clean up and release resources when an object goes out of scope', category: 'OOP' },

{ question: 'Garbage collection in C++:', options: ['Is not automatic, programmer must manage memory', 'Is automatic like in Java', 'Does not exist', 'Only handles static memory'], correctAnswer: 'Is not automatic, programmer must manage memory', category: 'OOP' },

{ question: 'Smart pointers in C++ help to:', options: ['Automatically manage dynamic memory', 'Make objects static', 'Hide private members', 'Overload operators'], correctAnswer: 'Automatically manage dynamic memory', category: 'OOP' },

{ question: 'Which of the following is a smart pointer in C++?', options: ['unique_ptr', 'shared_ptr', 'weak_ptr', 'All of the above'], correctAnswer: 'All of the above', category: 'OOP' },

{ question: 'unique_ptr in C++:', options: ['Owns a single object exclusively', 'Can be copied', 'Can have multiple owners', 'Is raw pointer'], correctAnswer: 'Owns a single object exclusively', category: 'OOP' },

{ question: 'shared_ptr in C++:', options: ['Can have multiple owners', 'Cannot be copied', 'Is stack-only', 'Does not manage memory'], correctAnswer: 'Can have multiple owners', category: 'OOP' },

{ question: 'weak_ptr in C++:', options: ['Does not affect reference count of shared_ptr', 'Deletes object automatically', 'Owns object exclusively', 'Cannot be used with shared_ptr'], correctAnswer: 'Does not affect reference count of shared_ptr', category: 'OOP' },

{ question: 'Memory leak occurs when:', options: ['Heap memory is allocated but not deallocated', 'Stack memory is used', 'Objects are static', 'Constructors are virtual'], correctAnswer: 'Heap memory is allocated but not deallocated', category: 'OOP' },

{ question: 'Dangling pointer refers to:', options: ['Pointer pointing to memory that has already been freed', 'Pointer pointing to heap memory', 'Pointer to a static object', 'Smart pointer'], correctAnswer: 'Pointer pointing to memory that has already been freed', category: 'OOP' },

// ============ OOP DESIGN CONCEPTS & DESIGN PATTERNS (30) ============

{ question: 'The main goal of SOLID principles is:', options: ['To create maintainable, scalable, and reusable software', 'To improve memory usage', 'To increase execution speed only', 'To replace OOP'], correctAnswer: 'To create maintainable, scalable, and reusable software', category: 'OOP' },

{ question: 'Single Responsibility Principle (SRP) states:', options: ['A class should have only one reason to change', 'A class should have multiple responsibilities', 'A function should do many things', 'Classes should be static'], correctAnswer: 'A class should have only one reason to change', category: 'OOP' },

{ question: 'Open/Closed Principle (OCP) means:', options: ['Software entities should be open for extension, but closed for modification', 'Classes should be static', 'Methods should not be overridden', 'Software should be rewritten often'], correctAnswer: 'Software entities should be open for extension, but closed for modification', category: 'OOP' },

{ question: 'Liskov Substitution Principle (LSP) states:', options: ['Objects of a derived class should be replaceable for base class objects without affecting correctness', 'Derived classes cannot inherit base members', 'Objects cannot be copied', 'Only static polymorphism is allowed'], correctAnswer: 'Objects of a derived class should be replaceable for base class objects without affecting correctness', category: 'OOP' },

{ question: 'Interface Segregation Principle (ISP) means:', options: ['Clients should not be forced to depend on interfaces they do not use', 'All classes must implement a single interface', 'Interfaces are optional', 'Only abstract classes are used'], correctAnswer: 'Clients should not be forced to depend on interfaces they do not use', category: 'OOP' },

{ question: 'Dependency Inversion Principle (DIP) states:', options: ['High-level modules should not depend on low-level modules; both should depend on abstractions', 'Only low-level modules should depend on high-level modules', 'Classes should not use inheritance', 'Objects should be static'], correctAnswer: 'High-level modules should not depend on low-level modules; both should depend on abstractions', category: 'OOP' },

{ question: 'Creational design patterns are used to:', options: ['Control object creation mechanisms', 'Manage memory', 'Control UI layout', 'Handle exceptions'], correctAnswer: 'Control object creation mechanisms', category: 'OOP' },

{ question: 'Singleton pattern ensures:', options: ['A class has only one instance and provides a global point of access', 'Multiple instances exist', 'Objects are always static', 'Objects are cloned'], correctAnswer: 'A class has only one instance and provides a global point of access', category: 'OOP' },

{ question: 'Factory pattern is used to:', options: ['Create objects without specifying exact class', 'Control memory allocation', 'Serialize objects', 'Manage exceptions'], correctAnswer: 'Create objects without specifying exact class', category: 'OOP' },

{ question: 'Builder pattern is suitable for:', options: ['Constructing complex objects step by step', 'Simplifying exception handling', 'Memory management', 'Polymorphism only'], correctAnswer: 'Constructing complex objects step by step', category: 'OOP' },

{ question: 'Prototype pattern allows:', options: ['Cloning existing objects instead of creating new ones', 'Memory deallocation', 'Static inheritance', 'Composition only'], correctAnswer: 'Cloning existing objects instead of creating new ones', category: 'OOP' },

{ question: 'Structural design patterns focus on:', options: ['How classes and objects are composed', 'Algorithm efficiency', 'Memory allocation', 'Interface segregation'], correctAnswer: 'How classes and objects are composed', category: 'OOP' },

{ question: 'Adapter pattern allows:', options: ['Interface compatibility between two incompatible interfaces', 'Memory management', 'Replacing inheritance', 'Exception handling'], correctAnswer: 'Interface compatibility between two incompatible interfaces', category: 'OOP' },

{ question: 'Decorator pattern is used to:', options: ['Dynamically add responsibilities to objects', 'Clone objects', 'Control inheritance', 'Implement static methods'], correctAnswer: 'Dynamically add responsibilities to objects', category: 'OOP' },

{ question: 'Composite pattern allows:', options: ['Treating individual objects and compositions uniformly', 'Dynamic memory allocation', 'Implementing virtual functions', 'Exception handling'], correctAnswer: 'Treating individual objects and compositions uniformly', category: 'OOP' },

{ question: 'Proxy pattern is used to:', options: ['Provide a surrogate or placeholder for another object', 'Manage memory manually', 'Implement static polymorphism', 'Serialize objects'], correctAnswer: 'Provide a surrogate or placeholder for another object', category: 'OOP' },

{ question: 'Behavioral design patterns focus on:', options: ['Object interaction and responsibility assignment', 'Memory allocation', 'Compile-time checks', 'Exception handling'], correctAnswer: 'Object interaction and responsibility assignment', category: 'OOP' },

{ question: 'Observer pattern allows:', options: ['Objects to notify other objects of state changes', 'Static class initialization', 'Memory optimization', 'Creating a single instance'], correctAnswer: 'Objects to notify other objects of state changes', category: 'OOP' },

{ question: 'Strategy pattern is used to:', options: ['Define a family of algorithms and make them interchangeable', 'Control memory', 'Handle exceptions', 'Create singleton objects'], correctAnswer: 'Define a family of algorithms and make them interchangeable', category: 'OOP' },

{ question: 'Iterator pattern allows:', options: ['Sequential access to elements of a collection without exposing its underlying representation', 'Static memory traversal', 'Exception handling', 'Memory allocation'], correctAnswer: 'Sequential access to elements of a collection without exposing its underlying representation', category: 'OOP' },

{ question: 'Command pattern encapsulates:', options: ['A request as an object, allowing parameterization and queuing', 'Memory management', 'Class composition', 'Template usage'], correctAnswer: 'A request as an object, allowing parameterization and queuing', category: 'OOP' },

{ question: 'Which SOLID principle promotes high cohesion by limiting responsibilities?', options: ['Single Responsibility Principle', 'Open/Closed Principle', 'Liskov Substitution Principle', 'Dependency Inversion Principle'], correctAnswer: 'Single Responsibility Principle', category: 'OOP' },

{ question: 'Which SOLID principle allows extending behavior without modifying existing code?', options: ['Open/Closed Principle', 'Single Responsibility Principle', 'Interface Segregation Principle', 'Liskov Substitution Principle'], correctAnswer: 'Open/Closed Principle', category: 'OOP' },

{ question: 'Which pattern is most suitable for implementing undo/redo functionality?', options: ['Command Pattern', 'Observer Pattern', 'Factory Pattern', 'Singleton Pattern'], correctAnswer: 'Command Pattern', category: 'OOP' },

{ question: 'Observer pattern is typically used in:', options: ['Event handling systems', 'Memory management', 'Template programming', 'File I/O'], correctAnswer: 'Event handling systems', category: 'OOP' },

{ question: 'Which pattern ensures controlled access to a resource and may add extra functionality?', options: ['Proxy Pattern', 'Builder Pattern', 'Factory Pattern', 'Singleton Pattern'], correctAnswer: 'Proxy Pattern', category: 'OOP' },

{ question: 'Builder pattern separates:', options: ['Construction of a complex object from its representation', 'Memory allocation from deallocation', 'Template declaration from definition', 'Exception handling from business logic'], correctAnswer: 'Construction of a complex object from its representation', category: 'OOP' },

{ question: 'Decorator pattern is an example of:', options: ['Structural pattern', 'Creational pattern', 'Behavioral pattern', 'Algorithmic pattern'], correctAnswer: 'Structural pattern', category: 'OOP' },

{ question: 'Prototype pattern is mainly used for:', options: ['Cloning existing objects to avoid costly creation', 'Dynamic memory management', 'Exception handling', 'Template specialization'], correctAnswer: 'Cloning existing objects to avoid costly creation', category: 'OOP' },

{ question: 'Dependency Inversion Principle encourages:', options: ['Depending on abstractions rather than concrete implementations', 'Using only static methods', 'Avoiding polymorphism', 'Directly instantiating low-level modules'], correctAnswer: 'Depending on abstractions rather than concrete implementations', category: 'OOP' }




];

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mcq_quiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');

  // Remove old MCQs if any
  await Mcq.deleteMany({});
  console.log('Old MCQs cleared');

  // Insert new MCQs
  await Mcq.insertMany(mcqs);
  console.log(`${mcqs.length} MCQs inserted successfully`);

  mongoose.disconnect();
})
.catch(err => console.log(err));


