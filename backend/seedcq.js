const mongoose = require('mongoose');
const CQ = require('./models/CQ');

mongoose.connect('mongodb://127.0.0.1:27017/mcq_quiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const seedQuestions = [
    // ===== DBMS Questions  =====
    { question: "What is a DBMS?", answer: "A Database Management System (DBMS) is software that manages databases, providing an interface for users to interact with data, ensuring data integrity, security, and efficient retrieval.", category: "DBMS" },
  { question: "What are the advantages of using a DBMS?", answer: "Advantages include data redundancy control, data consistency, data security, data integrity, and efficient data access.", category: "DBMS" },
  { question: "What is the difference between DBMS and RDBMS?", answer: "DBMS stores data as files without enforcing relationships, while RDBMS stores data in tables with enforced relationships using keys.", category: "DBMS" },
  { question: "What is a table in DBMS?", answer: "A table is a collection of rows and columns used to store data in a structured format.", category: "DBMS" },
  { question: "What is a primary key?", answer: "A primary key is a unique identifier for a record in a table, ensuring no duplicate entries.", category: "DBMS" },
  { question: "What is a foreign key?", answer: "A foreign key is a column or a set of columns in a table that uniquely identifies a row of another table, establishing a relationship between the two.", category: "DBMS" },
  { question: "What is normalization?", answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.", category: "DBMS" },
  { question: "What are the types of normalization?", answer: "The types include 1NF, 2NF, 3NF, and BCNF, each addressing different levels of redundancy and dependency.", category: "DBMS" },
  { question: "What is denormalization?", answer: "Denormalization is the process of introducing redundancy into a table by incorporating data from related tables, often to improve read performance.", category: "DBMS" },
  { question: "What is a join in SQL?", answer: "A join is an SQL operation used to combine rows from two or more tables based on a related column between them.", category: "DBMS" },
  { question: "What are the types of joins?", answer: "Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN, each defining how rows from the tables are combined.", category: "DBMS" },
  { question: "What is an index?", answer: "An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional space and maintenance time.", category: "DBMS" },
  { question: "What is a view?", answer: "A view is a virtual table based on the result set of an SQL query, providing a way to present data in a specific format.", category: "DBMS" },
  { question: "What is a stored procedure?", answer: "A stored procedure is a precompiled collection of one or more SQL statements that can be executed as a single unit.", category: "DBMS" },
  { question: "What is a trigger?", answer: "A trigger is a set of SQL statements that automatically execute or fire when certain events occur on a particular table or view.", category: "DBMS" },
  { question: "What is a transaction?", answer: "A transaction is a sequence of operations performed as a single logical unit of work, ensuring data integrity.", category: "DBMS" },
  { question: "What are ACID properties?", answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability, which are properties ensuring reliable transaction processing.", category: "DBMS" },
  { question: "What is deadlock in DBMS?", answer: "Deadlock is a situation where two or more transactions are waiting for each other to release resources, causing them to be unable to proceed.", category: "DBMS" },
  { question: "What is a schema?", answer: "A schema is the structure that represents the logical view of the entire database, including tables, views, and relationships.", category: "DBMS" },
  { question: "What is a database?", answer: "A database is an organized collection of data, generally stored and accessed electronically from a computer system.", category: "DBMS" },
  { question: "What is a database model?", answer: "A database model defines the logical structure of a database and determines how data can be stored, organized, and manipulated.", category: "DBMS" },
  { question: "What is a relational model?", answer: "A relational model is a type of database model that stores data in tables (relations) and allows for relationships between the tables.", category: "DBMS" },
  { question: "What is a hierarchical model?", answer: "A hierarchical model is a database model where data is organized into a tree-like structure, with a single root and multiple levels of hierarchy.", category: "DBMS" },
  { question: "What is a network model?", answer: "A network model is a database model that allows more complex relationships with multiple parent nodes, forming a graph structure.", category: "DBMS" },
  { question: "What is an object-oriented model?", answer: "An object-oriented model is a database model that stores data as objects, similar to how data is represented in object-oriented programming.", category: "DBMS" },
  { question: "What is SQL?", answer: "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.", category: "DBMS" },
  { question: "What are DDL commands?", answer: "DDL (Data Definition Language) commands define the structure of the database, including CREATE, ALTER, and DROP.", category: "DBMS" },
  { question: "What are DML commands?", answer: "DML (Data Manipulation Language) commands are used to manipulate data within tables, including SELECT, INSERT, UPDATE, and DELETE.", category: "DBMS" },
  { question: "What are DCL commands?", answer: "DCL (Data Control Language) commands control access to data, including GRANT and REVOKE.", category: "DBMS" },
  { question: "What are TCL commands?", answer: "TCL (Transaction Control Language) commands manage transactions within the database, including COMMIT, ROLLBACK, and SAVEPOINT.", category: "DBMS" },
  { question: "What is a composite key?", answer: "A composite key is a primary key composed of two or more columns used to uniquely identify a record in a table.", category: "DBMS" },
  { question: "What is a candidate key?", answer: "A candidate key is a column, or a set of columns, that can uniquely identify a record in a table, from which the primary key is chosen.", category: "DBMS" },
  { question: "What is a surrogate key?", answer: "A surrogate key is an artificial key used to uniquely identify a record, often implemented as an auto-incrementing number.", category: "DBMS" },
  { question: "What is referential integrity?", answer: "Referential integrity ensures that relationships between tables remain consistent, with foreign keys pointing to valid records.", category: "DBMS" },
  { question: "What is a normalization anomaly?", answer: "Normalization anomalies are issues that arise when a database is not properly normalized, leading to redundancy and inconsistency.", category: "DBMS" },
  { question: "What is a materialized view?", answer: "A materialized view is a database object that stores the result of a query physically, improving performance for complex queries.", category: "DBMS" },
  { question: "What is a cursor?", answer: "A cursor is a database object used to retrieve, manipulate, and navigate through a result set row by row.", category: "DBMS" },
  { question: "What is a subquery?", answer: "A subquery is a query nested inside another query, used to perform operations that require multiple steps.", category: "DBMS" },
  { question: "What is a correlated subquery?", answer: "A correlated subquery is a subquery that references columns from the outer query, evaluated once for each row processed by the outer query.", category: "DBMS" },
  { question: "What is a transaction log?", answer: "A transaction log is a record of all transactions and database modifications, used for recovery and maintaining ACID properties.", category: "DBMS" },
  { question: "What is a checkpoint?", answer: "A checkpoint is a mechanism that reduces the amount of work needed for recovery by ensuring that all transactions are written to disk at a certain point in time.", category: "DBMS" },
  { question: "What is a rollback?", answer: "A rollback is the process of undoing changes made by a transaction, restoring the database to its previous state.", category: "DBMS" },
  { question: "What is a commit?", answer: "A commit is the process of making all changes made by a transaction permanent in the database.", category: "DBMS" },
  { question: "What is a savepoint?", answer: "A savepoint is a point within a transaction that you can roll back to without affecting the entire transaction.", category: "DBMS" },
  { question: "What is a deadlock?", answer: "A deadlock is a situation where two or more transactions are waiting for each other to release resources, causing them to be unable to proceed.", category: "DBMS" },
  { question: "What is a lock?", answer: "A lock is a mechanism used to control access to a resource in a database, ensuring that only one transaction can access the resource at a time.", category: "DBMS" },
  { question: "What is a shared lock?", answer: "A shared lock allows multiple transactions to read a resource simultaneously but prevents any transaction from modifying it.", category: "DBMS" },
  { question: "What is an exclusive lock?", answer: "An exclusive lock prevents other transactions from accessing a resource, ensuring that only one transaction can modify it at a time.", category: "DBMS" },
  { question: "What is a two-phase locking protocol?", answer: "A two-phase locking protocol is a concurrency control method that ensures serializability by acquiring all locks before releasing any.", category: "DBMS" },
  { question: "What is a serial schedule?", answer: "A serial schedule is a sequence of transactions where each transaction is executed one after another without overlapping.", category: "DBMS" },
  
  // ===== OS Questions  =====
  { "question": "What is an Operating System?", "answer": "An OS is system software that manages computer hardware and software resources and provides common services for computer programs.", "category": "OS" },
  { "question": "What are the main functions of an OS?", "answer": "The primary functions include process management, memory management, file system management, device management, and security.", "category": "OS" },
  { "question": "What is a process?", "answer": "A process is an instance of a program in execution, encompassing the program code and its current activity.", "category": "OS" },
  { "question": "What are the different states of a process?", "answer": "Processes can be in one of the following states: New, Ready, Running, Waiting, and Terminated.", "category": "OS" },
  { "question": "What is a thread?", "answer": "A thread is a single sequence stream within a process. Threads are sometimes called lightweight processes.", "category": "OS" },
  { "question": "What is the difference between a process and a thread?", "answer": "A process is an independent program in execution with its own memory space, while a thread is a smaller unit of a process that shares memory and resources.", "category": "OS" },
  { "question": "What is a system call?", "answer": "A system call is a programmatic way a program requests a service from an operating system's kernel.", "category": "OS" },
  { "question": "What are the types of system calls?", "answer": "System calls can be categorized into process control, file management, device management, information maintenance, and communication.", "category": "OS" },
  { "question": "What is a kernel?", "answer": "The kernel is the core component of an operating system, managing system resources and communication between hardware and software.", "category": "OS" },
  { "question": "What is user space and kernel space?", "answer": "User space is where user applications run, while kernel space is where the kernel executes and provides services.", "category": "OS" },
  { "question": "What are the different types of operating systems?", "answer": "Types include batch, time-sharing, distributed, real-time, and embedded operating systems.", "category": "OS" },
  { "question": "What is a file system?", "answer": "A file system is a method and data structure that the OS uses to control how data is stored and retrieved.", "category": "OS" },
  { "question": "What is a directory in an OS?", "answer": "A directory is a file system structure that contains references to other files or directories.", "category": "OS" },
  { "question": "What is a file descriptor?", "answer": "A file descriptor is an integer that uniquely identifies an open file in a system.", "category": "OS" },
  { "question": "What is the difference between primary memory and secondary memory?", "answer": "Primary memory (RAM) is fast and volatile, while secondary memory (HDD/SSD) is slower but non-volatile.", "category": "OS" },
  { "question": "What is virtual memory?", "answer": "Virtual memory is a memory management technique that gives an application the impression it has contiguous working memory.", "category": "OS" },
  { "question": "What is paging in an operating system?", "answer": "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory.", "category": "OS" },
  { "question": "What is a page table?", "answer": "A page table is a data structure used by the OS to manage virtual addresses and map them to physical memory addresses.", "category": "OS" },
  { "question": "What is a process control block (PCB)?", "answer": "A PCB is a data structure in the OS kernel containing the information needed to manage a particular process.", "category": "OS" },
  { "question": "What is the role of an interrupt in an OS?", "answer": "An interrupt is a mechanism by which a process can be preempted to give attention to other processes or hardware events.", "category": "OS" },
  { "question": "What is a context switch?", "answer": "A context switch is the process of storing and restoring the state of a CPU so that multiple processes can share a single CPU resource.", "category": "OS" },
  { "question": "What is multitasking in an OS?", "answer": "Multitasking is the ability of an OS to execute more than one task simultaneously by managing multiple processes.", "category": "OS" },
  { "question": "What is a deadlock?", "answer": "A deadlock is a situation in computing where two or more processes are unable to proceed because each is waiting for the other to release resources.", "category": "OS" },
  { "question": "What are the necessary conditions for a deadlock?", "answer": "The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait.", "category": "OS" },
  { "question": "What is a semaphore?", "answer": "A semaphore is a synchronization primitive used to control access to a common resource in a concurrent system.", "category": "OS" },
  { "question": "What is a mutex?", "answer": "A mutex is a mutual exclusion object that prevents multiple threads from simultaneously executing critical sections of code.", "category": "OS" },
  { "question": "What is a critical section problem?", "answer": "The critical section problem is a problem of ensuring that no two processes are simultaneously in their critical sections.", "category": "OS" },
  { "question": "What are different process scheduling algorithms?", "answer": "Common algorithms include First-Come-First-Served (FCFS), Shortest Job Next (SJN), Round Robin (RR), and Priority Scheduling.", "category": "OS" },
  { "question": "What is a round-robin scheduling algorithm?", "answer": "Round-robin scheduling assigns a fixed time unit per process and cycles through them, ensuring fair CPU time distribution.", "category": "OS" },
  { "question": "What is the difference between preemptive and non-preemptive scheduling?", "answer": "Preemptive scheduling allows a process to be interrupted and moved to the ready queue, while non-preemptive scheduling does not.", "category": "OS" },
  { "question": "What is a file allocation table (FAT)?", "answer": "FAT is a file system architecture and a family of industry-standard file systems used in computers and digital cameras.", "category": "OS" },
  { "question": "What is a file access control list (ACL)?", "answer": "An ACL is a list of permissions attached to an object specifying which users or system processes can access the object.", "category": "OS" },
  { "question": "What is disk scheduling?", "answer": "Disk scheduling is the method by which disk access requests are prioritized and managed to optimize performance.", "category": "OS" },
  { "question": "What is a boot loader?", "answer": "A boot loader is a small program that loads the operating system into memory when the computer is powered on.", "category": "OS" },
  { "question": "What is a shell in an OS?", "answer": "A shell is a user interface that allows users to interact with the operating system by typing commands.", "category": "OS" },
  { "question": "What is a terminal?", "answer": "A terminal is a device or program that allows users to interact with the computer system by entering text commands.", "category": "OS" },
  { "question": "What is the difference between a soft and hard link in a file system?", "answer": "A soft link is a reference to another file by name, while a hard link is a reference to the file by its inode.", "category": "OS" },
  { "question": "What is an inode in a file system?", "answer": "An inode is a data structure on a filesystem on Linux and Unix-like systems that stores information about a file or a directory.", "category": "OS" },
  { "question": "What is memory management?", "answer": "Memory management is the function of the OS that manages computer memory, allocating portions to processes as needed.", "category": "OS" },
  { "question": "What are the advantages of dynamic memory allocation?", "answer": "Dynamic memory allocation allows for more flexible memory usage, reducing waste and improving efficiency.", "category": "OS" },
  { "question": "What are the disadvantages of static memory allocation?", "answer": "Static memory allocation can lead to memory waste and lack of flexibility, as memory size must be known at compile time.", "category": "OS" },
  { "question": "What is a swap space in an OS?", "answer": "Swap space is a portion of the hard drive designated to be used as virtual memory when physical RAM is full.", "category": "OS" },
  { "question": "What is process synchronization, and why is it important?", "answer": "Process synchronization ensures that multiple processes can execute safely and predictably when accessing shared resources.", "category": "OS" },
  { "question": "What is a race condition? How can it be avoided?", "answer": "A race condition occurs when multiple processes access shared resources simultaneously, leading to inconsistent results. It can be avoided using synchronization mechanisms like semaphores or mutexes.", "category": "OS" },
  { "question": "What is deadlock, and what are the necessary conditions for deadlock to occur?", "answer": "Deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release resources. The necessary conditions are mutual exclusion, hold and wait, no preemption, and circular wait.", "category": "OS" },
  { "question": "Explain the Banker's algorithm for deadlock avoidance.", "answer": "The Banker's algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by simulating the allocation for the predetermined maximum possible amounts of all resources, then makes an 's-state' check to test for possible activities, before deciding whether allocation should be allowed to continue.", "category": "OS" },
  { "question": "How does a page fault occur?", "answer": "A page fault occurs when a program accesses a page that is mapped in the virtual address space but is not loaded in physical memory.", "category": "OS" },
  
  // ===== NETWORKING Questions =====
  {
    "question": "What is a computer network?",
    "answer": "A computer network is a collection of interconnected devices that communicate with each other to share data and resources. Common types include LAN (Local Area Network), WAN (Wide Area Network), and PAN (Personal Area Network).",
    "category": "NETWORKING"
  },
  {
    "question": "What is the OSI model?",
    "answer": "The OSI (Open Systems Interconnection) model is a conceptual framework used to understand network interactions in seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    "category": "NETWORKING"
  },
  {
    "question": "What is the difference between TCP and UDP?",
    "answer": "TCP (Transmission Control Protocol) is connection-oriented, ensuring reliable data transmission with error checking. UDP (User Datagram Protocol) is connectionless, offering faster transmission without reliability guarantees.",
    "category": "NETWORKING"
  },
  {
    "question": "What is an IP address?",
    "answer": "An IP (Internet Protocol) address is a unique identifier assigned to each device connected to a network, enabling it to communicate with other devices. It can be IPv4 (e.g., 192.168.1.1) or IPv6 (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
    "category": "NETWORKING"
  },
  {
    "question": "What is a subnet mask?",
    "answer": "A subnet mask is used in IP networking to divide an IP address into network and host portions, facilitating efficient routing and network management. For example, 255.255.255.0 is a common subnet mask.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a router?",
    "answer": "A router is a networking device that forwards data packets between computer networks, typically between a local network and the internet, based on IP addresses.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a switch?",
    "answer": "A switch is a networking device that connects devices within a single network segment, using MAC addresses to forward data to the correct destination device.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a hub?",
    "answer": "A hub is a basic networking device that connects multiple devices in a network, broadcasting incoming data packets to all connected devices, regardless of the destination.",
    "category": "NETWORKING"
  },
  {
    "question": "What is DNS?",
    "answer": "DNS (Domain Name System) is a hierarchical system that translates human-readable domain names (like www.example.com) into IP addresses, allowing browsers to load internet resources.",
    "category": "NETWORKING"
  },
  {
    "question": "What is DHCP?",
    "answer": "DHCP (Dynamic Host Configuration Protocol) is a network management protocol that automatically assigns IP addresses and other network configuration parameters to devices on a network.",
    "category": "NETWORKING"
  },
  {
    "question": "What is NAT?",
    "answer": "NAT (Network Address Translation) is a method used in networking to modify the source or destination IP addresses in packet headers, allowing multiple devices on a local network to share a single public IP address.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a firewall?",
    "answer": "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between a trusted internal network and untrusted external networks.",
    "category": "NETWORKING"
  },
  {
    "question": "What is VPN?",
    "answer": "A VPN (Virtual Private Network) extends a private network across a public network, enabling users to send and receive data as if their computing devices were directly connected to the private network.",
    "category": "NETWORKING"
  },
  {
    "question": "What is ARP?",
    "answer": "ARP (Address Resolution Protocol) is a protocol used to map a known IP address to a MAC address, enabling devices on a local network to discover each other.",
    "category": "NETWORKING"
  },
  {
    "question": "What is ICMP?",
    "answer": "ICMP (Internet Control Message Protocol) is used by network devices to send error messages and operational information, such as 'destination unreachable' or 'time exceeded' messages.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a MAC address?",
    "answer": "A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications at the data link layer of a network segment.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a VLAN?",
    "answer": "A VLAN (Virtual Local Area Network) is a logical subgroup within a local area network, created to segment network traffic for improved performance and security.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a proxy server?",
    "answer": "A proxy server is an intermediary server that sits between a client and a destination server, used to filter requests, improve performance, or hide the client's real IP address.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a load balancer?",
    "answer": "A load balancer is a device or software that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving responsiveness and availability.",
    "category": "NETWORKING"
  },
  {
    "question": "What is QoS?",
    "answer": "QoS (Quality of Service) refers to the management of network resources to ensure the performance of critical applications by prioritizing traffic, managing bandwidth, and reducing latency.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a DMZ?",
    "answer": "A DMZ (Demilitarized Zone) is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network, typically the internet.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a BGP?",
    "answer": "BGP (Border Gateway Protocol) is the protocol used to exchange routing information between different autonomous systems on the internet, determining the best paths for data transmission.",
    "category": "NETWORKING"
  },
  {
    "question": "What is OSPF?",
    "answer": "OSPF (Open Shortest Path First) is an interior gateway protocol used to distribute IP routing information throughout a single Autonomous System in an IP network.",
    "category": "NETWORKING"
  },
  {
    "question": "What is RIP?",
    "answer": "RIP (Routing Information Protocol) is one of the oldest distance-vector routing protocols, used in local and wide-area networks to determine the best path for data transmission.",
    "category": "NETWORKING"
  },
  {
    "question": "What is EIGRP?",
    "answer": "EIGRP (Enhanced Interior Gateway Routing Protocol) is a Cisco proprietary hybrid routing protocol that combines the advantages of link-state and distance-vector protocols.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a routing table?",
    "answer": "A routing table is a data table stored in a router or networked computer, listing the routes to particular network destinations, and in some cases, metrics associated with those routes.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a port number?",
    "answer": "A port number is a 16-bit number used to identify specific processes or services on a device, allowing multiple services to run simultaneously on a single IP address.",
    "category": "NETWORKING"
  },
  {
    "question": "What is an IPsec?",
    "answer": "IPsec (Internet Protocol Security) is a suite of protocols that encrypts and authenticates IP packets, securing internet protocol communications by authenticating and encrypting each IP packet in a communication session.",
    "category": "NETWORKING"
  },
  {
    "question": "What is SSL/TLS?",
    "answer": "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network, commonly used in web browsers to secure HTTPS connections.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a VPN tunnel?",
    "answer": "A VPN tunnel is a secure, encrypted connection between two endpoints over a public network, allowing private data to be transmitted securely.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a traceroute?",
    "answer": "Traceroute is a network diagnostic tool used to track the path that a packet takes from its source to its destination, identifying each hop along the way.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a ping?",
    "answer": "Ping is a network utility used to test the reachability of a host on an IP network and to measure the round-trip time for messages sent from the originating host to a destination computer.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a subnet?",
    "answer": "A subnet is a segmented piece of a larger network, created by dividing an IP network into smaller, more manageable parts, improving performance and security.",
    "category": "NETWORKING"
  },
  {
    "question": "What is CIDR?",
    "answer": "CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses and routing IP packets, replacing the traditional class-based system, and allowing for more efficient use of IP addresses.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a MAC address?",
    "answer": "A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications at the data link layer of a network segment.",
    "category": "NETWORKING"
  },
  {
    "question": "What is a network topology?",
    "answer": "Network topology refers to the arrangement of different elements (links, nodes, etc.) in a computer network. Common topologies include star, bus, ring, mesh, and hybrid.",
    "category": "NETWORKING"
  },
  
  // ===== DSA Questions =====

  {
    "question": "What is an array?",
    "answer": "An array is a collection of elements identified by index or key. Elements are stored in contiguous memory locations. Arrays are used to store multiple values in a single variable.",
    "category": "DSA"
  },
  {
    "question": "What is a linked list?",
    "answer": "A linked list is a linear data structure where elements are stored in nodes, each containing data and a reference (or link) to the next node in the sequence.",
    "category": "DSA"
  },
  {
    "question": "Explain the difference between a stack and a queue.",
    "answer": "A stack follows the Last In First Out (LIFO) principle, while a queue follows the First In First Out (FIFO) principle. Stacks are used in function calls, and queues are used in scheduling tasks.",
    "category": "DSA"
  },
  {
    "question": "What is a binary tree?",
    "answer": "A binary tree is a hierarchical data structure where each node has at most two children referred to as the left child and the right child.",
    "category": "DSA"
  },
  {
    "question": "What is a binary search tree?",
    "answer": "A binary search tree (BST) is a binary tree where the left subtree of a node contains only nodes with keys less than the node's key, and the right subtree only nodes with keys greater than the node's key.",
    "category": "DSA"
  },
  {
    "question": "What is a heap?",
    "answer": "A heap is a special tree-based data structure that satisfies the heap property. In a max heap, the key at the root is greater than or equal to the keys of its children, and in a min heap, the key at the root is less than or equal to the keys of its children.",
    "category": "DSA"
  },
  {
    "question": "What is a graph?",
    "answer": "A graph is a collection of nodes (vertices) and edges (connections between nodes). Graphs can be directed or undirected and are used to represent networks like social connections or pathways in maps.",
    "category": "DSA"
  },
  {
    "question": "What is dynamic programming?",
    "answer": "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing the results of already solved subproblems to avoid redundant computations.",
    "category": "DSA"
  },
  {
    "question": "What is a hash table?",
    "answer": "A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots.",
    "category": "DSA"
  },
  {
    "question": "What is a trie?",
    "answer": "A trie is a special type of tree used to store associative data structures. A common application of a trie is storing a predictive text or autocomplete dictionary.",
    "category": "DSA"
  },
  {
    "question": "What is the difference between depth-first search (DFS) and breadth-first search (BFS)?",
    "answer": "DFS explores as far as possible along each branch before backtracking, while BFS explores all the neighbor nodes at the present depth level before moving on to nodes at the next depth level.",
    "category": "DSA"
  },
  {
    "question": "What is quicksort?",
    "answer": "Quicksort is a divide-and-conquer algorithm. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
    "category": "DSA"
  },
  {
    "question": "What is merge sort?",
    "answer": "Merge sort is an efficient, stable, and comparison-based sorting algorithm. It divides the array into two halves, sorts them, and then merges them back together.",
    "category": "DSA"
  },
  {
    "question": "What is bubble sort?",
    "answer": "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    "category": "DSA"
  },
  {
    "question": "What is insertion sort?",
    "answer": "Insertion sort builds the final sorted array one item at a time. It is much like sorting playing cards in your hands.",
    "category": "DSA"
  },
  {
    "question": "What is selection sort?",
    "answer": "Selection sort is an in-place comparison-based algorithm. It divides the input into two parts: a sorted sublist of items and a sublist of the remaining unsorted items.",
    "category": "DSA"
  },
  {
    "question": "What is a palindrome?",
    "answer": "A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).",
    "category": "DSA"
  },
  {
    "question": "What is a substring?",
    "answer": "A substring is a contiguous sequence of characters within a string. For example, 'abc' is a substring of 'abcdef'.",
    "category": "DSA"
  },
  {
    "question": "What is an anagram?",
    "answer": "An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "category": "DSA"
  },
  {
    "question": "What is a cycle in a graph?",
    "answer": "A cycle in a graph is a path that starts and ends at the same vertex, with no other repeated vertices or edges.",
    "category": "DSA"
  },
  {
    "question": "What is topological sorting?",
    "answer": "Topological sorting of a directed graph is a linear ordering of its vertices such that for every directed edge u → v, vertex u comes before v in the ordering.",
    "category": "DSA"
  },
  {
    "question": "What is Dijkstra's algorithm?",
    "answer": "Dijkstra's algorithm finds the shortest paths between nodes in a graph, which may represent, for example, road networks.",
    "category": "DSA"
  },
  {
    "question": "What is Bellman-Ford algorithm?",
    "answer": "The Bellman-Ford algorithm computes shortest paths from a single source vertex to all other vertices in a weighted graph.",
    "category": "DSA"
  },
  {
    "question": "What is Floyd-Warshall algorithm?",
    "answer": "The Floyd-Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights.",
    "category": "DSA"
  },
  {
    "question": "What is the time complexity of binary search?",
    "answer": "The time complexity of binary search is O(log n), where n is the number of elements in the array.",
    "category": "DSA"
  },
  {
    "question": "What is the space complexity of quicksort?",
    "answer": "The space complexity of quicksort is O(log n) due to the recursion stack.",
    "category": "DSA"
  },
  {
    "question": "What is the space complexity of merge sort?",
    "answer": "The space complexity of merge sort is O(n) due to the temporary arrays used for merging.",
    "category": "DSA"
  },
  {
    "question": "What is the space complexity of bubble sort?",
    "answer": "The space complexity of bubble sort is O(1) as it is an in-place sorting algorithm.",
    "category": "DSA"
  },
  {
    "question": "What is the space complexity of insertion sort?",
    "answer": "The space complexity of insertion sort is O(1) as it is an in-place sorting algorithm.",
    "category": "DSA"
  },
  {
    "question": "What is the space complexity of selection sort?",
    "answer": "The space complexity of selection sort is O(1) as it is an in-place sorting algorithm.",
    "category": "DSA"
  },
  {
    "question": "What is a priority queue?",
    "answer": "A priority queue is a data structure where each element is associated with a priority and elements are dequeued in order of their priority.",
    "category": "DSA"
  },
  {
    "question": "What is a deque?",
    "answer": "A deque (double-ended queue) is a linear data structure that allows elements to be added or removed from both ends.",
    "category": "DSA"
  },
  {
    "question": "What is a circular queue?",
    "answer": "A circular queue is a linear data structure that follows the FIFO principle but connects the last position back to the first position to make a circle.",
    "category": "DSA"
  },
  {
    "question": "What is a doubly linked list?",
    "answer": "A doubly linked list is a type of linked list in which each node contains a data part and two pointers, one pointing to the next node and another pointing to the previous node.",
    "category": "DSA"
  },
  {
    "question": "What is a singly linked list?",
    "answer": "A singly linked list is a type of linked list in which each node contains a data part and a pointer to the next node in the sequence.",
    "category": "DSA"
  },
  {
    "question": "What is a skip list?",
    "answer": "A skip list is a data structure that allows fast search within an ordered sequence of elements, using multiple layers of linked lists.",
    "category": "DSA"
  },
  {
    "question": "What is a bloom filter?",
    "answer": "A bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set.",
    "category": "DSA"
  },
  {
    "question": "What is a disjoint-set data structure?",
    "answer": "A disjoint-set data structure, also known as union-find, keeps track of a partition of a set into disjoint subsets and supports union and find operations.",
    "category": "DSA"
  },
  
  // ===== OOP Questions  =====
  {
    question: "What is Object-Oriented Programming (OOP)?",
    answer: "OOP is a programming paradigm that organizes software around objects. Objects represent real-world entities with attributes (data) and behaviors (methods). It improves modularity, reusability, and maintainability by modeling problems closer to real-world concepts.",
    category: "OOP"
  },
  {
    question: "What are the four pillars of OOP?",
    answer: "The four main principles are: Encapsulation (binding data and methods together), Abstraction (hiding internal details and showing only essentials), Inheritance (reusing and extending existing code), and Polymorphism (same interface, different implementations).",
    category: "OOP"
  },
  {
    question: "What is a class?",
    answer: "A class is a blueprint or template for creating objects. It defines variables (attributes) and functions (methods) that describe the common properties and behaviors of objects created from it.",
    category: "OOP"
  },
  {
    question: "What is an object?",
    answer: "An object is an instance of a class. It occupies memory and contains actual values for the attributes defined in its class along with the ability to call its methods.",
    category: "OOP"
  },
  {
    question: "Difference between class and object?",
    answer: "A class is only a logical structure or definition, while an object is a real instance created from that class at runtime. For example, 'Car' is a class, but 'Toyota Corolla' is an object.",
    category: "OOP"
  },
  {
    question: "What is encapsulation?",
    answer: "Encapsulation means wrapping data (variables) and code (methods) into a single unit and restricting direct access to internal details. It is usually achieved using access modifiers like private, public, or protected.",
    category: "OOP"
  },
  {
    question: "What is abstraction?",
    answer: "Abstraction is the process of hiding implementation details and exposing only the essential features of an object. For example, a car’s driver uses the steering wheel without needing to know how the steering mechanism internally works.",
    category: "OOP"
  },
  {
    question: "What is inheritance?",
    answer: "Inheritance allows a class (child/derived class) to inherit attributes and methods from another class (parent/base class). It promotes code reuse and establishes an 'is-a' relationship between classes.",
    category: "OOP"
  },
  {
    question: "What is polymorphism?",
    answer: "Polymorphism allows one interface to be used for different underlying forms. It can be compile-time (method overloading) or runtime (method overriding). Example: a function 'area()' behaving differently for Circle and Rectangle objects.",
    category: "OOP"
  },
  {
    question: "Difference between abstraction and encapsulation?",
    answer: "Abstraction focuses on exposing only relevant features while hiding unnecessary details (design-level). Encapsulation focuses on protecting object state by restricting direct access to data (implementation-level).",
    category: "OOP"
  },
  {
    question: "What is method overloading?",
    answer: "Method overloading allows multiple methods in the same class with the same name but different parameter lists. It is resolved at compile time and improves code readability.",
    category: "OOP"
  },
  {
    question: "What is method overriding?",
    answer: "Method overriding occurs when a subclass provides a new implementation for a method already defined in its superclass. It is resolved at runtime and supports dynamic polymorphism.",
    category: "OOP"
  },
  {
    question: "What are constructors?",
    answer: "Constructors are special methods automatically invoked when an object is created. They initialize the object’s attributes and can be overloaded for flexibility.",
    category: "OOP"
  },
  {
    question: "What is a destructor?",
    answer: "A destructor is a method automatically invoked when an object is destroyed. It is used to release resources such as memory or file handles. Example: '~ClassName()' in C++.",
    category: "OOP"
  },
  {
    question: "What are access modifiers?",
    answer: "Access modifiers define the scope of variables and methods: Public (accessible everywhere), Private (only inside class), Protected (within class and subclasses).",
    category: "OOP"
  },
  {
    question: "What is an abstract class?",
    answer: "An abstract class cannot be instantiated directly and may contain abstract methods (without implementation). Subclasses must implement the abstract methods. It allows defining a common contract.",
    category: "OOP"
  },
  {
    question: "What is an interface?",
    answer: "An interface is a contract that defines a set of methods a class must implement. It supports multiple inheritance and helps achieve abstraction and loose coupling.",
    category: "OOP"
  },
  {
    question: "Difference between abstract class and interface?",
    answer: "Abstract classes can have both abstract and concrete methods, while interfaces only declare method signatures (in most languages). A class can inherit one abstract class but implement multiple interfaces.",
    category: "OOP"
  },
  {
    question: "What is multiple inheritance?",
    answer: "Multiple inheritance is when a class can inherit from more than one class. It is supported in C++ but not in Java (to avoid ambiguity). Java achieves similar behavior using interfaces.",
    category: "OOP"
  },
  {
    question: "What is diamond problem?",
    answer: "The diamond problem occurs in multiple inheritance when two parent classes of a child class have the same method, causing ambiguity about which method to inherit. C++ solves it using virtual inheritance.",
    category: "OOP"
  },
  {
    question: "What are static methods?",
    answer: "Static methods belong to the class rather than any instance. They can be called without creating an object but cannot access instance variables directly.",
    category: "OOP"
  },
  {
    question: "Static vs instance methods?",
    answer: "Static methods are tied to the class and shared across all objects, while instance methods are tied to a specific object and can access instance-specific data.",
    category: "OOP"
  },
  {
    question: "What is 'this' keyword?",
    answer: "‘this’ is a reference to the current object instance. It is used to distinguish instance variables from parameters with the same name or to pass the current object.",
    category: "OOP"
  },
  {
    question: "Shallow copy vs deep copy?",
    answer: "Shallow copy copies only object references (two objects share same memory). Deep copy duplicates the object and all its referenced data, creating a fully independent clone.",
    category: "OOP"
  },
  {
    question: "What is composition?",
    answer: "Composition is a 'has-a' relationship where one class contains an object of another class. Example: A Car 'has-a' Engine. It is preferred over inheritance due to better flexibility.",
    category: "OOP"
  },
  {
    question: "Difference between inheritance and composition?",
    answer: "Inheritance is an 'is-a' relationship (Dog is an Animal). Composition is a 'has-a' relationship (Car has an Engine). Composition avoids tight coupling and is more flexible.",
    category: "OOP"
  },
  {
    question: "Compile-time vs runtime polymorphism?",
    answer: "Compile-time polymorphism (method overloading) is resolved by the compiler. Runtime polymorphism (method overriding) is resolved during execution using dynamic dispatch.",
    category: "OOP"
  },
  {
    question: "What is SOLID in OOP?",
    answer: "SOLID stands for 5 design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles improve design quality and maintainability.",
    category: "OOP"
  },
  {
    question: "Explain Single Responsibility Principle.",
    answer: "A class should have only one reason to change, meaning it should do only one job. This makes the class more focused and easier to maintain.",
    category: "OOP"
  },
  {
    question: "Explain Open/Closed Principle.",
    answer: "Software entities should be open for extension but closed for modification. You should be able to add new functionality without changing existing code.",
    category: "OOP"
  },
  {
    question: "Explain Liskov Substitution Principle.",
    answer: "Objects of a superclass should be replaceable with objects of a subclass without breaking functionality. Subclasses should follow the contract of their parent class.",
    category: "OOP"
  },
  {
    question: "Explain Interface Segregation Principle.",
    answer: "Clients should not be forced to depend on methods they do not use. Instead of one large interface, create multiple small, specific interfaces.",
    category: "OOP"
  },
  {
    question: "Explain Dependency Inversion Principle.",
    answer: "High-level modules should not depend on low-level modules. Both should depend on abstractions. This reduces coupling and increases flexibility.",
    category: "OOP"
  },
  {
    question: "What are design patterns in OOP?",
    answer: "Design patterns are reusable solutions to common problems in software design. Examples include Singleton, Factory, Observer, and Decorator patterns.",
    category: "OOP"
  },
  {
    question: "What is Singleton pattern?",
    answer: "Singleton ensures that only one instance of a class exists and provides global access to it. It is often used for logging, configuration, or database connections.",
    category: "OOP"
  },
  {
    question: "What is Factory pattern?",
    answer: "Factory provides an interface to create objects without specifying the exact class. It abstracts the object creation process, improving flexibility.",
    category: "OOP"
  },
  {
    question: "What is Builder pattern?",
    answer: "Builder separates the construction of a complex object from its representation. It allows step-by-step creation of objects with different configurations.",
    category: "OOP"
  },
  {
    question: "What is Decorator pattern?",
    answer: "Decorator allows behavior to be added to an object dynamically without altering its structure. Example: adding scrollbars to a window class at runtime.",
    category: "OOP"
  },
  {
    question: "What is Observer pattern?",
    answer: "Observer defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically. Example: Event listeners.",
    category: "OOP"
  },
  {
    question: "Why prefer composition over inheritance?",
    answer: "Composition provides more flexibility and reduces coupling. Inheritance tightly binds child to parent, whereas composition allows objects to change behavior at runtime.",
    category: "OOP"
  },
  {
    question: "What is information hiding?",
    answer: "Information hiding is restricting access to internal details of a class and exposing only necessary parts. It improves security and reduces system complexity.",
    category: "OOP"
  },
  {
    question: "What is dynamic dispatch?",
    answer: "Dynamic dispatch is the process of selecting which implementation of a polymorphic method will be executed at runtime based on the object’s actual type.",
    category: "OOP"
  },
  {
    question: "What is prototype-based OOP?",
    answer: "In prototype-based OOP (like JavaScript), objects are created by cloning existing objects (prototypes) instead of defining classes. It promotes flexibility.",
    category: "OOP"
  },
  {
    question: "What is an immutable object?",
    answer: "Immutable objects are objects whose state cannot change after creation. They simplify debugging and ensure thread safety. Example: String in Java.",
    category: "OOP"
  },
  {
    question: "What is GRASP in OOP?",
    answer: "GRASP (General Responsibility Assignment Software Patterns) provides guidelines for assigning responsibilities in OOP, such as Information Expert, Low Coupling, High Cohesion, and Controller.",
    category: "OOP"
  },
  {
    question: "What is Information Expert (GRASP)?",
    answer: "Information Expert principle states that responsibility should be assigned to the class that has the necessary information to fulfill it.",
    category: "OOP"
  },
  {
    question: "What is Low Coupling, High Cohesion?",
    answer: "Low coupling reduces dependencies between classes. High cohesion ensures that a class has a well-defined responsibility. Both improve modularity and maintainability.",
    category: "OOP"
  },
  {
    question: "What is Prototype design pattern?",
    answer: "Prototype pattern allows creating new objects by cloning an existing instance. It avoids costly object creation and is useful for objects with complex setup.",
    category: "OOP"
  },

  /// Top behavioral questions
  {
    question: "Tell me about yourself.",
    answer: "Provide a concise summary of your professional background, key skills, achievements, and what makes you a strong fit for the role. Focus on relevant experiences.",
    category: "BEHAVIORAL"
  },
  {
    question: "Why do you want to work at this company?",
    answer: "Explain your interest in the company's mission, values, culture, and the role itself. Highlight how your skills align with their needs.",
    category: "BEHAVIORAL"
  },
  {
    question: "What are your strengths?",
    answer: "Mention 2-3 key professional strengths that are relevant to the job, providing brief examples of how you've applied them successfully.",
    category: "BEHAVIORAL"
  },
  {
    question: "What is your biggest weakness?",
    answer: "Choose a genuine weakness, explain what you’ve done to improve it, and show that you are self-aware and proactive.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a challenging situation you faced at work.",
    answer: "Explain the situation, the actions you took to resolve it, and the outcome. Emphasize problem-solving, teamwork, and learning.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you failed and how you handled it.",
    answer: "Briefly describe the failure, the lessons learned, and the corrective steps you took to ensure it doesn’t happen again.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a time you worked in a team.",
    answer: "Explain your role in the team, how you collaborated with others, and the result achieved. Highlight communication and teamwork skills.",
    category: "BEHAVIORAL"
  },
  {
    question: "How do you handle conflict in a team?",
    answer: "Describe a specific example, focusing on your communication, problem-solving, and compromise skills to resolve disagreements.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a situation where you showed leadership.",
    answer: "Explain a situation where you guided a team, made decisions, and achieved a positive outcome.",
    category: "BEHAVIORAL"
  },
  {
    question: "How do you prioritize tasks under tight deadlines?",
    answer: "Explain your approach to organizing tasks, managing time, and ensuring critical deadlines are met.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you took initiative.",
    answer: "Provide an example where you identified an opportunity or problem and proactively acted to address it successfully.",
    category: "BEHAVIORAL"
  },
  {
    question: "How do you handle criticism?",
    answer: "Show that you listen to feedback objectively, learn from it, and use it to improve your work performance.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a time you had to learn something quickly.",
    answer: "Explain the context, what you learned, how you applied it, and the result. Highlight adaptability and learning agility.",
    category: "BEHAVIORAL"
  },
  {
    question: "Give an example of a goal you set and achieved.",
    answer: "Explain the goal, the steps you took to achieve it, and the outcome, emphasizing planning and perseverance.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a situation when you had to work with minimal supervision.",
    answer: "Explain how you managed responsibilities, made decisions independently, and delivered results successfully.",
    category: "BEHAVIORAL"
  },
  {
    question: "How do you handle stress or pressure?",
    answer: "Provide examples of coping strategies, time management, and maintaining quality work under pressure.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you made a mistake.",
    answer: "Briefly describe the mistake, how you corrected it, and the learning you took away from it.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a situation where you disagreed with your manager.",
    answer: "Explain how you respectfully communicated your perspective and worked towards a constructive resolution.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you improved a process or system.",
    answer: "Provide an example where you identified inefficiency, implemented a solution, and achieved positive results.",
    category: "BEHAVIORAL"
  },
  {
    question: "Give an example of when you went above and beyond your duties.",
    answer: "Describe the situation, your actions, and the impact it had on your team or organization.",
    category: "BEHAVIORAL"
  },
  {
    question: "How do you stay motivated in repetitive tasks?",
    answer: "Explain strategies like setting mini-goals, focusing on outcomes, and maintaining a positive attitude.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you had to adapt to change.",
    answer: "Explain the situation, the adjustments you made, and the outcome, highlighting flexibility and resilience.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a time when you solved a difficult problem.",
    answer: "Explain the problem, the approach you took, and the solution, emphasizing analytical and problem-solving skills.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you mentored or helped someone.",
    answer: "Describe your guidance, how you supported them, and the result, showing collaboration and leadership.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a situation where you had to meet a tight deadline.",
    answer: "Explain how you managed time, resources, and tasks to deliver quality results under pressure.",
    category: "BEHAVIORAL"
  },
  {
    question: "Give an example of when you handled a difficult client or stakeholder.",
    answer: "Explain the issue, your approach to resolving it, and the positive outcome achieved.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you had to make a quick decision.",
    answer: "Describe the scenario, the decision-making process, and the impact of your choice.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a time you received recognition for your work.",
    answer: "Share the context, what you accomplished, and the recognition you received.",
    category: "BEHAVIORAL"
  },
  {
    question: "Tell me about a time you handled ambiguity or uncertainty.",
    answer: "Explain the situation, how you analyzed it, and the decisions you made to navigate uncertainty.",
    category: "BEHAVIORAL"
  },
  {
    question: "Describe a time you had to collaborate with a difficult teammate.",
    answer: "Explain the challenge, how you communicated and resolved conflicts, and the outcome.",
    category: "BEHAVIORAL"
  },
  {
    question: "Give an example of when you improved your skills proactively.",
    answer: "Describe how you identified a skill gap, took steps to learn, and applied it successfully.",
    category: "BEHAVIORAL"
  }
  

];

// Seed function
const seedDB = async () => {
  await CQ.deleteMany({});
   console.log('Old CQs cleared');

  await CQ.insertMany(seedQuestions);
  console.log('Database seeded with CQ questions!');
};

seedDB().then(() => mongoose.connection.close());
