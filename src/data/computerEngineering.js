const COMPUTER_ENGINEERING_TOPICS = [
  {
    id: 'ce-oop',
    title: 'Object-Oriented Programming',
    shortTitle: 'OOP',
    description: 'Classes, objects, inheritance, polymorphism, encapsulation, and SOLID design principles.',
    category: 'Programming',
    year: 'Core',
    icon: 'Code',
    color: { light: '#ede9fe', dark: '#7c3aed', badge: '#7c3aed' },
    chapters: [
      {
        id: 'oop-ch1',
        title: 'Core Concepts of OOP',
        sections: [
          {
            id: 'oop-s1',
            number: '1.1',
            title: 'Classes and Objects',
            summary: 'A class is a blueprint; an object is an instance. Classes define attributes (fields) and behaviors (methods).',
            content: `Object-Oriented Programming organizes software around data (objects) rather than functions and logic. A class is a template that describes the state and behavior that objects of that type will have. An object is a runtime instance of a class.

Key vocabulary:
• Class — defines structure (fields/properties) and behavior (methods)
• Object — a specific instance created from a class using a constructor
• Constructor — special method called when an object is instantiated
• Field / Attribute — data stored inside an object
• Method — function defined inside a class that operates on its data

Example (Java):
  class Student {
    String name;
    int age;
    void study() { System.out.println(name + " is studying."); }
  }
  Student s = new Student();  // s is an object

📚 Free Reference: "Think Java" by Downey & Mayfield — greenteapress.com/thinkapjava`,
          },
          {
            id: 'oop-s2',
            number: '1.2',
            title: 'Encapsulation',
            summary: 'Encapsulation hides internal state behind public methods, protecting data integrity.',
            content: `Encapsulation is the practice of bundling data and the methods that operate on that data within a class, and restricting direct access to the internal state from outside.

Access Modifiers:
• private — accessible only within the class
• protected — accessible within the class and its subclasses
• public — accessible from anywhere
• (default/package) — accessible within the same package

Getters and Setters expose controlled access:
  private int age;
  public int getAge() { return age; }
  public void setAge(int a) { if (a > 0) this.age = a; }

Benefits:
• Prevents invalid state (validation in setters)
• Hides implementation details from external code
• Easier to change internals without breaking callers

📚 Free Reference: Oracle Java Documentation — docs.oracle.com/javase`,
          },
          {
            id: 'oop-s3',
            number: '1.3',
            title: 'Inheritance',
            summary: 'Inheritance allows a subclass to reuse and extend the behavior of a parent class.',
            content: `Inheritance enables a new class (subclass/child) to acquire properties and behaviors of an existing class (superclass/parent), promoting code reuse.

Syntax (Java): class Dog extends Animal { ... }
Syntax (Python): class Dog(Animal): ...

Key concepts:
• super keyword — calls parent class constructor or methods
• Method Overriding — subclass provides its own implementation of a parent method
• is-a relationship — Dog is-a Animal (valid inheritance)
• Single vs Multiple — Java supports single inheritance for classes (use interfaces for multiple)

Overriding example:
  class Animal { void sound() { System.out.println("..."); } }
  class Dog extends Animal {
    @Override void sound() { System.out.println("Bark"); }
  }

When NOT to use inheritance: use composition (has-a) instead when the relationship is not truly is-a.

📚 Free Reference: "Introduction to Programming Using Java" — math.hws.edu/javanotes`,
          },
          {
            id: 'oop-s4',
            number: '1.4',
            title: 'Polymorphism',
            summary: 'Polymorphism lets one interface represent different underlying forms (compile-time and runtime).',
            content: `Polymorphism means "many forms." In OOP, it allows one interface to be used for different data types or behaviors.

Two types:
1. Compile-time (Static) Polymorphism — Method Overloading
   Same method name, different parameters:
   int add(int a, int b) { return a + b; }
   double add(double a, double b) { return a + b; }

2. Runtime (Dynamic) Polymorphism — Method Overriding + Upcasting
   Animal a = new Dog();   // upcast
   a.sound();              // calls Dog's sound() at runtime

Why it matters:
• Write code that works with the parent type but executes subclass behavior
• Enables extensibility — add new subclasses without changing existing code
• Core to design patterns (Strategy, Factory, Command)

📚 Free Reference: MIT OpenCourseWare 6.009 — ocw.mit.edu`,
          },
          {
            id: 'oop-s5',
            number: '1.5',
            title: 'Abstraction and Interfaces',
            summary: 'Abstract classes and interfaces define contracts without implementation details.',
            content: `Abstraction hides complexity by exposing only what is necessary. It is implemented through abstract classes and interfaces.

Abstract Class:
• Cannot be instantiated directly
• Can have both abstract (no body) and concrete methods
• Use when subclasses share common state

  abstract class Shape {
    abstract double area();   // subclasses must implement
    void describe() { System.out.println("I am a shape"); }
  }

Interface:
• Pure contract — all methods abstract by default (Java 7 and earlier)
• A class can implement multiple interfaces
• Use when unrelated classes share behavior

  interface Drawable { void draw(); }
  interface Resizable { void resize(int factor); }
  class Circle extends Shape implements Drawable, Resizable { ... }

Abstract class vs Interface:
• Abstract class — for related classes with shared state
• Interface — for unrelated classes that share a capability

📚 Free Reference: "Think Java" — greenteapress.com/thinkapjava`,
          },
        ],
      },
      {
        id: 'oop-ch2',
        title: 'SOLID Principles & Design',
        sections: [
          {
            id: 'oop-s6',
            number: '2.1',
            title: 'SOLID Principles',
            summary: 'Five design principles for writing maintainable, scalable object-oriented code.',
            content: `SOLID is an acronym for five principles that guide good OOP design:

S — Single Responsibility Principle (SRP)
  A class should have only one reason to change. One class = one job.
  Bad: UserService that validates, saves to DB, and sends email.
  Good: Separate UserValidator, UserRepository, EmailService.

O — Open/Closed Principle (OCP)
  Open for extension, closed for modification. Add new behavior by adding new code, not changing existing code. Use inheritance or composition.

L — Liskov Substitution Principle (LSP)
  Subclasses must be substitutable for their parent class without breaking the program. If Dog extends Animal, using a Dog wherever an Animal is expected must work correctly.

I — Interface Segregation Principle (ISP)
  Don't force classes to implement methods they don't use. Split large interfaces into smaller, specific ones.

D — Dependency Inversion Principle (DIP)
  High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Enables dependency injection.

📚 Free Reference: refactoring.guru/solid`,
          },
          {
            id: 'oop-s7',
            number: '2.2',
            title: 'Common Design Patterns',
            summary: 'Reusable solutions to common software design problems (Singleton, Factory, Observer, Strategy).',
            content: `Design patterns are proven, reusable solutions to recurring problems in software design.

Creational Patterns (how objects are created):
• Singleton — ensures only one instance of a class exists
  private static Singleton instance;
  public static Singleton getInstance() { if (instance == null) instance = new Singleton(); return instance; }

• Factory Method — delegate object creation to subclasses or a factory method
  Shape createShape(String type) { if (type.equals("circle")) return new Circle(); ... }

Structural Patterns (how objects are composed):
• Adapter — converts one interface to another expected by the client
• Decorator — adds behavior to objects at runtime without modifying their class

Behavioral Patterns (how objects communicate):
• Observer — one object (subject) notifies many (observers) when its state changes. Used in event systems, MVC.
• Strategy — define a family of algorithms, encapsulate each, make them interchangeable
  interface SortStrategy { void sort(int[] arr); }
  class BubbleSort implements SortStrategy { ... }

📚 Free Reference: refactoring.guru/design-patterns`,
          },
        ],
      },
    ],
  },
  {
    id: 'ce-dsa',
    title: 'Data Structures & Algorithms',
    shortTitle: 'DSA',
    description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.',
    category: 'Programming',
    year: 'Core',
    icon: 'GitBranch',
    color: { light: '#fce7f3', dark: '#be185d', badge: '#be185d' },
    chapters: [
      {
        id: 'dsa-ch1',
        title: 'Linear Data Structures',
        sections: [
          {
            id: 'dsa-s1',
            number: '1.1',
            title: 'Arrays and Dynamic Arrays',
            summary: 'Arrays store elements contiguously in memory. Access is O(1), insertion/deletion is O(n).',
            content: `An array is a fixed-size, ordered collection of elements of the same type stored in contiguous memory.

Key properties:
• Access by index: O(1) — direct memory address calculation
• Search (unsorted): O(n) — must check each element
• Insertion/Deletion at end: O(1) amortized (dynamic arrays)
• Insertion/Deletion at middle: O(n) — must shift elements

Dynamic Arrays (ArrayList in Java, list in Python):
• Start with a fixed capacity, double when full
• Amortized O(1) for append because doubling is rare

When to use arrays:
• When you know the size ahead of time
• When you need fast random access
• When cache performance matters (elements are adjacent in memory)

Time Complexity Summary:
  Access   O(1)
  Search   O(n)
  Insert   O(n)
  Delete   O(n)

📚 Free Reference: OpenDSA — opendsa-server.cs.vt.edu`,
          },
          {
            id: 'dsa-s2',
            number: '1.2',
            title: 'Linked Lists',
            summary: 'Nodes connected by pointers. O(1) insert/delete at head, O(n) access.',
            content: `A linked list is a sequence of nodes where each node holds data and a pointer to the next node (singly linked) or both next and previous (doubly linked).

Types:
• Singly Linked List — each node points to next; traversal is forward only
• Doubly Linked List — each node points to both next and prev
• Circular Linked List — last node points back to head

Operations:
• Insert at head: O(1) — just update head pointer
• Insert at tail: O(n) singly, O(1) with tail pointer
• Delete: O(1) if you have the node, O(n) to find it
• Access by index: O(n)

vs Array:
• Linked List wins: frequent insertion/deletion at beginning/middle
• Array wins: random access, cache locality, less memory overhead (no pointers)

Key algorithms: detect cycle (Floyd's two-pointer), reverse a linked list, find middle node.

📚 Free Reference: VisuAlgo — visualgo.net/en/list`,
          },
          {
            id: 'dsa-s3',
            number: '1.3',
            title: 'Stacks and Queues',
            summary: 'Stack is LIFO; Queue is FIFO. Both support O(1) push/pop/enqueue/dequeue.',
            content: `Stack (Last In, First Out — LIFO):
• push() — add to top
• pop() — remove from top
• peek() — view top without removing
• Used for: function call stack, undo operations, expression parsing, DFS

Queue (First In, First Out — FIFO):
• enqueue() — add to rear
• dequeue() — remove from front
• Used for: BFS, task scheduling, print spooler, messaging systems

Special Variants:
• Deque (Double-Ended Queue) — insert/delete at both ends
• Priority Queue — elements dequeued by priority (implemented with a heap)
• Monotonic Stack — maintains increasing or decreasing order (used in Next Greater Element problems)

Implementation: Use arrays (with top/front pointers) or linked lists. Java has Stack class and ArrayDeque. Python uses list or collections.deque.

📚 Free Reference: OpenDSA — opendsa-server.cs.vt.edu`,
          },
        ],
      },
      {
        id: 'dsa-ch2',
        title: 'Trees and Graphs',
        sections: [
          {
            id: 'dsa-s4',
            number: '2.1',
            title: 'Binary Trees and BST',
            summary: 'Binary Search Trees maintain sorted order: left < root < right. Search, insert, delete are O(log n) average.',
            content: `A binary tree is a hierarchical structure where each node has at most two children (left and right).

Binary Search Tree (BST) property:
  left subtree values < node value < right subtree values

Operations (balanced BST):
• Search: O(log n)
• Insert: O(log n)
• Delete: O(log n)
• Worst case (skewed tree): O(n) for all operations

Tree Traversals:
• Inorder (Left → Root → Right) — gives sorted output for BST
• Preorder (Root → Left → Right) — used to copy the tree
• Postorder (Left → Right → Root) — used to delete the tree
• Level-order (BFS) — uses a queue

Balanced BST variants:
• AVL Tree — self-balancing, height difference between subtrees ≤ 1
• Red-Black Tree — used in Java TreeMap, C++ std::map

📚 Free Reference: VisuAlgo — visualgo.net/en/bst`,
          },
          {
            id: 'dsa-s5',
            number: '2.2',
            title: 'Graph Algorithms',
            summary: 'BFS and DFS are fundamental graph traversals. Dijkstra finds shortest paths in weighted graphs.',
            content: `A graph G = (V, E) consists of vertices V and edges E. Graphs can be directed/undirected and weighted/unweighted.

Representations:
• Adjacency Matrix — 2D array; O(1) edge lookup; O(V²) space
• Adjacency List — array of lists; O(V+E) space; preferred for sparse graphs

Traversals:
• BFS (Breadth-First Search) — explores layer by layer using a queue
  Use for: shortest path in unweighted graph, level-order, bipartite check
  Time: O(V + E)

• DFS (Depth-First Search) — explores as deep as possible using stack/recursion
  Use for: cycle detection, topological sort, connected components
  Time: O(V + E)

Shortest Path:
• Dijkstra's Algorithm — greedy, works on non-negative weighted graphs, O((V+E) log V) with priority queue
• Bellman-Ford — handles negative weights, O(VE)
• Floyd-Warshall — all-pairs shortest path, O(V³)

📚 Free Reference: VisuAlgo — visualgo.net/en/dfsbfs`,
          },
        ],
      },
      {
        id: 'dsa-ch3',
        title: 'Sorting & Searching',
        sections: [
          {
            id: 'dsa-s6',
            number: '3.1',
            title: 'Sorting Algorithms',
            summary: 'Comparison-based sorting lower bound is O(n log n). Merge Sort and Quick Sort are the most commonly used.',
            content: `Sorting Algorithm Comparison:

Algorithm       | Best     | Average  | Worst    | Space  | Stable
Bubble Sort     | O(n)     | O(n²)    | O(n²)    | O(1)   | Yes
Selection Sort  | O(n²)    | O(n²)    | O(n²)    | O(1)   | No
Insertion Sort  | O(n)     | O(n²)    | O(n²)    | O(1)   | Yes
Merge Sort      | O(n logn)| O(n logn)| O(n logn)| O(n)   | Yes
Quick Sort      | O(n logn)| O(n logn)| O(n²)    | O(logn)| No
Heap Sort       | O(n logn)| O(n logn)| O(n logn)| O(1)   | No

Key points:
• Merge Sort — divide and conquer, guaranteed O(n log n), needs extra space
• Quick Sort — in-place, fast in practice, bad pivot choice leads to O(n²)
• Insertion Sort — best for small or nearly-sorted arrays
• Counting/Radix Sort — O(n) but only for integers in a known range

Stable sort preserves the relative order of equal elements.

📚 Free Reference: VisuAlgo sorting — visualgo.net/en/sorting`,
          },
          {
            id: 'dsa-s7',
            number: '3.2',
            title: 'Searching and Complexity',
            summary: 'Binary search is O(log n) on sorted arrays. Big-O notation describes algorithm efficiency.',
            content: `Binary Search:
• Requires a sorted array
• Repeatedly halves the search space
• Time: O(log n), Space: O(1) iterative / O(log n) recursive

  int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
      int mid = lo + (hi - lo) / 2;
      if (arr[mid] == target) return mid;
      else if (arr[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return -1;
  }

Big-O Complexity (slowest to fastest growth):
  O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

Common complexities:
• HashMap get/put — O(1) average
• Sorting — O(n log n)
• Matrix multiplication — O(n³) naive
• Fibonacci recursive without memo — O(2ⁿ)

Space Complexity: memory used by algorithm (excluding input).

📚 Free Reference: Big-O Cheat Sheet — bigocheatsheet.com`,
          },
        ],
      },
    ],
  },
  {
    id: 'ce-comparch',
    title: 'Computer Organization & Architecture',
    shortTitle: 'CompArch',
    description: 'CPU design, instruction sets, memory hierarchy, pipelining, and cache systems.',
    category: 'Hardware',
    year: 'Core',
    icon: 'Cpu',
    color: { light: '#fef9c3', dark: '#a16207', badge: '#a16207' },
    chapters: [
      {
        id: 'arch-ch1',
        title: 'CPU and Instruction Sets',
        sections: [
          {
            id: 'arch-s1',
            number: '1.1',
            title: 'CPU Components and Fetch-Decode-Execute',
            summary: 'The CPU fetches, decodes, and executes instructions using the ALU, control unit, and registers.',
            content: `The Central Processing Unit (CPU) is the brain of a computer. It processes instructions stored in memory.

Major Components:
• ALU (Arithmetic Logic Unit) — performs arithmetic (+, -, *, /) and logical (AND, OR, NOT) operations
• Control Unit (CU) — directs operations: fetches instructions, decodes them, coordinates execution
• Registers — small, ultra-fast storage inside the CPU (PC, IR, MAR, MDR, accumulator)
• Cache — fast memory between CPU and RAM (L1, L2, L3)

Fetch-Decode-Execute Cycle:
1. Fetch — PC (Program Counter) holds address of next instruction; instruction loaded into IR (Instruction Register); PC incremented
2. Decode — Control unit interprets the opcode and operands
3. Execute — ALU performs the operation; result stored in register or memory

Clock Speed: measured in GHz; one cycle per clock tick. More GHz ≠ always faster (IPC matters too).

📚 Free Reference: "Computer Organization and Design" by Patterson & Hennessy — available via MIT OCW 6.004`,
          },
          {
            id: 'arch-s2',
            number: '1.2',
            title: 'Instruction Set Architecture (ISA)',
            summary: 'ISA defines the instructions a CPU understands. RISC uses simple, fixed-length instructions; CISC uses complex, variable-length.',
            content: `An Instruction Set Architecture (ISA) is the interface between software and hardware — the set of instructions a processor can execute.

RISC (Reduced Instruction Set Computer):
• Simple, fixed-length instructions (typically 32 bits)
• Load/store architecture — only load/store access memory
• More registers
• Examples: ARM (phones, Apple M chips), MIPS, RISC-V
• Compilers do more work; hardware is simpler and faster

CISC (Complex Instruction Set Computer):
• Complex, variable-length instructions
• Instructions can access memory directly
• Fewer registers needed
• Examples: x86 (Intel, AMD desktop/laptop CPUs)
• Hardware does more work; smaller programs

Instruction Types:
• Data transfer: MOV, LOAD, STORE
• Arithmetic: ADD, SUB, MUL, DIV
• Logical: AND, OR, XOR, NOT
• Control flow: JUMP, BRANCH, CALL, RETURN
• I/O: IN, OUT

📚 Free Reference: MIT 6.004 Computation Structures — ocw.mit.edu`,
          },
        ],
      },
      {
        id: 'arch-ch2',
        title: 'Memory and Pipelining',
        sections: [
          {
            id: 'arch-s3',
            number: '2.1',
            title: 'Memory Hierarchy and Cache',
            summary: 'Memory hierarchy trades off speed vs. capacity. Cache exploits locality to speed up RAM access.',
            content: `The Memory Hierarchy (fastest to slowest, smallest to largest):
  Registers → L1 Cache → L2 Cache → L3 Cache → RAM → SSD → HDD

Cache:
• Stores recently/frequently used data close to CPU
• Exploits temporal locality (reuse of same data) and spatial locality (nearby data)
• Cache hit — data found in cache (fast)
• Cache miss — must fetch from RAM (slow)

Cache Mapping:
• Direct Mapped — each block maps to exactly one cache line (fast but high collision)
• Fully Associative — block can go anywhere (flexible but expensive to search)
• Set Associative — compromise: n-way set associative (most common in modern CPUs)

Replacement Policies: LRU (Least Recently Used), FIFO, Random.

Virtual Memory:
• Allows programs to use more memory than physically available
• OS maps virtual addresses to physical addresses using page tables
• Page fault — page not in RAM, must load from disk (slow)

📚 Free Reference: "Computer Systems: A Programmer's Perspective" — csapp.cs.cmu.edu (free chapters)`,
          },
          {
            id: 'arch-s4',
            number: '2.2',
            title: 'Pipelining',
            summary: 'Pipelining overlaps multiple instruction stages (IF, ID, EX, MEM, WB) to improve throughput.',
            content: `Pipelining divides instruction execution into stages, allowing multiple instructions to be in different stages simultaneously — like an assembly line.

Classic 5-Stage RISC Pipeline:
1. IF — Instruction Fetch
2. ID — Instruction Decode / Register Read
3. EX — Execute / ALU operation
4. MEM — Memory Access
5. WB — Write Back to register

Without pipelining: 5 instructions × 5 cycles = 25 cycles
With pipelining: 5 + (5-1) = 9 cycles (after pipeline fills)

Hazards:
• Data Hazard — instruction depends on result of previous instruction still in pipeline
  Solution: Forwarding/Bypassing, Stalling (NOP insertion)
• Control Hazard — branch instruction changes PC before pipeline knows next instruction
  Solution: Branch prediction (modern CPUs predict with >95% accuracy)
• Structural Hazard — two instructions need the same hardware resource
  Solution: Duplicate hardware (separate instruction and data cache)

📚 Free Reference: "Digital Design and Computer Architecture" — safari available via libgen (legal via author's site)`,
          },
        ],
      },
    ],
  },
  {
    id: 'ce-os',
    title: 'Operating Systems',
    shortTitle: 'OS',
    description: 'Processes, threads, scheduling, memory management, file systems, and synchronization.',
    category: 'Systems',
    year: 'Core',
    icon: 'Monitor',
    color: { light: '#dcfce7', dark: '#15803d', badge: '#15803d' },
    chapters: [
      {
        id: 'os-ch1',
        title: 'Processes and Scheduling',
        sections: [
          {
            id: 'os-s1',
            number: '1.1',
            title: 'Processes and Threads',
            summary: 'A process is a running program. Threads share a process\'s memory. Context switching enables multitasking.',
            content: `A process is a program in execution. It has its own memory space, code, data, stack, and heap.

Process Components:
• Code segment — compiled instructions
• Data segment — global/static variables
• Stack — local variables, function calls (grows/shrinks)
• Heap — dynamically allocated memory (malloc/new)

Process States:
  New → Ready → Running → (Waiting or Terminated)
  Running → Ready (preempted by scheduler)
  Running → Waiting (I/O or event)

Thread — lightweight process sharing the same memory space as its parent:
• Multiple threads of a process share heap and code
• Each thread has its own stack and registers
• Faster to create/switch than processes
• Risk: race conditions (shared memory)

Context Switch: saving CPU state (registers, PC) of one process and restoring another. Expensive — minimize unnecessary switches.

Multiprocessing vs Multithreading:
• Multiprocessing — multiple CPUs or cores, true parallelism
• Multithreading — concurrent execution on one core (interleaved) or multiple cores

📚 Free Reference: "Operating Systems: Three Easy Pieces" — ostep.org (free PDF)`,
          },
          {
            id: 'os-s2',
            number: '1.2',
            title: 'CPU Scheduling Algorithms',
            summary: 'Scheduling decides which process runs next. Key metrics: CPU utilization, throughput, turnaround time, response time.',
            content: `The CPU scheduler picks which process in the Ready queue gets the CPU next.

Scheduling Algorithms:

1. FCFS (First Come First Served)
   • Non-preemptive, simple, FIFO
   • Problem: Convoy effect (short jobs wait behind long ones)
   • Avg waiting time can be very high

2. SJF (Shortest Job First)
   • Picks process with smallest burst time
   • Optimal for minimizing average waiting time
   • Problem: Starvation (long jobs may never run), requires knowing burst time

3. Round Robin (RR)
   • Each process gets a time quantum (slice), then preempted
   • Fair, good for time-sharing systems
   • Quantum too small → too many context switches; too large → degenerates to FCFS

4. Priority Scheduling
   • Higher priority process runs first
   • Problem: Starvation of low-priority processes
   • Solution: Aging — gradually increase priority of waiting processes

5. MLFQ (Multi-Level Feedback Queue)
   • Multiple queues with different priorities
   • Jobs move between queues based on behavior
   • Used in modern OS (Unix, Windows)

Metrics:
• CPU utilization — keep CPU busy
• Turnaround time = completion time − arrival time
• Waiting time = turnaround − burst time
• Response time = first response − arrival time

📚 Free Reference: OSTEP Chapter 7-9 — ostep.org`,
          },
        ],
      },
      {
        id: 'os-ch2',
        title: 'Synchronization and Memory',
        sections: [
          {
            id: 'os-s3',
            number: '2.1',
            title: 'Synchronization and Deadlocks',
            summary: 'Race conditions occur when shared data is unsynchronized. Deadlocks occur when processes wait for each other forever.',
            content: `Race Condition: two or more threads access shared data concurrently, and the result depends on the execution order.

Critical Section: code that accesses shared resources. Must be protected.

Synchronization Tools:
• Mutex (Mutual Exclusion Lock) — only one thread holds lock at a time
• Semaphore — integer counter; P() decrements (wait), V() increments (signal)
  Binary semaphore acts like a mutex
• Monitor — high-level construct combining mutex + condition variables (used in Java with synchronized)

Classic Problems:
• Producer-Consumer — producer adds to buffer, consumer removes; must not overflow/underflow
• Readers-Writers — multiple readers OK, but writers need exclusive access
• Dining Philosophers — 5 philosophers, 5 forks; leads to deadlock if all grab one fork

Deadlock: four conditions (Coffman):
1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait

Prevention strategies:
• Break circular wait: order resources and always acquire in same order
• Allow preemption: if process can't get all resources, release what it holds
• Banker's Algorithm: check if state is safe before granting resources

📚 Free Reference: OSTEP Chapters 26-32 — ostep.org`,
          },
          {
            id: 'os-s4',
            number: '2.2',
            title: 'Memory Management and Virtual Memory',
            summary: 'OS manages memory allocation, paging, and segmentation. Virtual memory allows programs to exceed physical RAM.',
            content: `Memory Management Goals:
• Isolation — processes can't access each other's memory
• Efficiency — minimize waste, maximize utilization
• Transparency — each process thinks it has the full address space

Memory Allocation:
• Contiguous allocation — each process gets a single contiguous block
  Problems: external fragmentation
• Paging — divide memory into fixed-size pages; no external fragmentation
• Segmentation — logical segments (code, stack, heap); variable size

Paging:
• Physical memory divided into frames
• Logical memory divided into pages (same size as frames)
• Page Table maps page numbers to frame numbers
• TLB (Translation Lookaside Buffer) — cache for page table lookups

Virtual Memory:
• Each process sees its own virtual address space (e.g., 0 to 4GB on 32-bit)
• Pages loaded into RAM only when needed (demand paging)
• Page fault — page not in RAM, OS loads it from disk
• Thrashing — too many page faults, CPU spends more time paging than executing
  Solution: increase RAM, reduce degree of multiprogramming

Replacement Algorithms:
• FIFO — replace oldest page
• LRU — replace least recently used (best in practice)
• Optimal — replace page used furthest in the future (theoretical baseline)

📚 Free Reference: OSTEP Chapters 13-23 — ostep.org`,
          },
        ],
      },
    ],
  },
  {
    id: 'ce-networks',
    title: 'Computer Networks',
    shortTitle: 'Networks',
    description: 'OSI model, TCP/IP, routing, HTTP, DNS, and network security fundamentals.',
    category: 'Networks',
    year: 'Core',
    icon: 'Network',
    color: { light: '#e0f2fe', dark: '#0369a1', badge: '#0369a1' },
    chapters: [
      {
        id: 'net-ch1',
        title: 'Network Models and Protocols',
        sections: [
          {
            id: 'net-s1',
            number: '1.1',
            title: 'OSI and TCP/IP Models',
            summary: 'OSI has 7 layers; TCP/IP has 4. Each layer abstracts communication responsibilities.',
            content: `The OSI (Open Systems Interconnection) Model — 7 layers:
  7. Application  — HTTP, FTP, DNS, SMTP (user-facing protocols)
  6. Presentation — encoding, encryption, compression (SSL/TLS)
  5. Session      — manages sessions between applications
  4. Transport    — end-to-end delivery (TCP, UDP), ports
  3. Network      — logical addressing, routing (IP, ICMP)
  2. Data Link    — physical addressing, frames (MAC, Ethernet, WiFi)
  1. Physical     — bits over wire/air (cables, signals)

Memory trick: "All People Seem To Need Data Processing" (Application→Physical)

TCP/IP Model — 4 layers (practical):
  4. Application  — HTTP, FTP, DNS
  3. Transport    — TCP, UDP
  2. Internet     — IP, ICMP, ARP
  1. Network Access — Ethernet, WiFi

TCP vs UDP:
  TCP: connection-oriented, reliable, ordered, slower (HTTP, email)
  UDP: connectionless, unreliable, faster (video streaming, gaming, DNS)

TCP 3-Way Handshake: SYN → SYN-ACK → ACK

📚 Free Reference: "Computer Networking: A Top-Down Approach" — Kurose & Ross, MIT OCW 6.829`,
          },
          {
            id: 'net-s2',
            number: '1.2',
            title: 'IP Addressing and Routing',
            summary: 'IPv4 uses 32-bit addresses with subnetting. Routers forward packets using routing tables.',
            content: `IP Addresses (IPv4):
• 32 bits, written as 4 octets: 192.168.1.1
• Classes: A (0-127), B (128-191), C (192-223)
• Private ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x

Subnetting:
• Subnet mask defines network vs host portion
• CIDR notation: 192.168.1.0/24 means 24 bits for network, 8 for hosts (254 usable)
• /24 → 254 hosts, /16 → 65,534 hosts, /8 → 16M hosts

IPv6: 128 bits, written as 8 groups of 4 hex digits
  2001:0db8:85a3:0000:0000:8a2e:0370:7334

Routing:
• Router — forwards packets between networks using routing table
• Static routing — manually configured
• Dynamic routing — protocols exchange info (OSPF, BGP, RIP)
• BGP (Border Gateway Protocol) — routing between ISPs (the backbone of the internet)

NAT (Network Address Translation):
• Maps private IPs to a single public IP
• Reason we can have millions of devices with private IPs behind one router

ARP (Address Resolution Protocol): maps IP addresses to MAC addresses on local network.

📚 Free Reference: Kurose & Ross Chapter 4 — available via MIT OCW`,
          },
        ],
      },
    ],
  },
  {
    id: 'ce-discrete',
    title: 'Discrete Mathematics',
    shortTitle: 'Discrete Math',
    description: 'Logic, set theory, combinatorics, graph theory, and proofs — the mathematical foundation of CS.',
    category: 'Mathematics',
    year: 'Foundation',
    icon: 'Hash',
    color: { light: '#ffedd5', dark: '#c2410c', badge: '#c2410c' },
    chapters: [
      {
        id: 'dm-ch1',
        title: 'Logic and Proofs',
        sections: [
          {
            id: 'dm-s1',
            number: '1.1',
            title: 'Propositional Logic',
            summary: 'Propositions are true/false statements combined with AND, OR, NOT, implication, and biconditional.',
            content: `Propositional logic deals with statements (propositions) that are either true (T) or false (F).

Logical Connectives:
• ¬p (NOT p) — negation; T if p is F
• p ∧ q (p AND q) — T only if both T
• p ∨ q (p OR q) — T if at least one is T
• p → q (p implies q) — F only when p is T and q is F
  "If it rains, the ground is wet" — false only if it rains but ground is dry
• p ↔ q (biconditional) — T when both have same truth value

Truth Tables: enumerate all combinations of T/F for variables.

Tautology: always true (p ∨ ¬p)
Contradiction: always false (p ∧ ¬p)
Contingency: sometimes true, sometimes false

Important Equivalences:
• De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q
                    ¬(p ∨ q) ≡ ¬p ∧ ¬q
• Implication: p → q ≡ ¬p ∨ q
• Contrapositive: p → q ≡ ¬q → ¬p (same truth value)
• Converse: q → p (NOT equivalent to p → q)
• Inverse: ¬p → ¬q (NOT equivalent)

📚 Free Reference: "Discrete Mathematics: An Open Introduction" — discrete.openmathbooks.org`,
          },
          {
            id: 'dm-s2',
            number: '1.2',
            title: 'Combinatorics and Counting',
            summary: 'Counting techniques: multiplication rule, permutations, combinations, and the pigeonhole principle.',
            content: `Counting is fundamental in algorithm analysis and probability.

Basic Rules:
• Multiplication Rule: if task A has m ways and task B has n ways, doing A then B has m×n ways
• Addition Rule: if A and B are mutually exclusive, total ways = m + n

Permutations (order matters):
• P(n, r) = n! / (n-r)! — arrange r items from n
• Example: How many 3-letter codes from 5 letters? P(5,3) = 60

Combinations (order doesn't matter):
• C(n, r) = n! / (r! × (n-r)!) = "n choose r"
• Example: How many ways to choose 3 from 5? C(5,3) = 10
• Pascal's Triangle gives binomial coefficients

Pigeonhole Principle:
• If n+1 items are put into n boxes, at least one box has ≥ 2 items
• Example: Among 13 people, at least 2 share a birth month

Inclusion-Exclusion:
• |A ∪ B| = |A| + |B| - |A ∩ B|

Binomial Theorem:
• (x + y)ⁿ = Σ C(n,k) × xᵏ × yⁿ⁻ᵏ

📚 Free Reference: "Discrete Mathematics: An Open Introduction" — discrete.openmathbooks.org`,
          },
        ],
      },
    ],
  },
];

export default COMPUTER_ENGINEERING_TOPICS;
