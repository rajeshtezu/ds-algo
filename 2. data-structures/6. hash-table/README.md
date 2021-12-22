# Hash table

- Used to store key-value pairs. Also called as hash-map.

## Built in languages

| Language        | Construct        |
| --------------- | ---------------- |
| Python          | Dictionary       |
| Javascript      | Object and Map\* |
| Java, Go, Scala | Map              |
| Ruby            | Hash             |

- **Hash function**: converting into fixed length string
- **Collision**: Getting same string for two different values

- Even with a large array and a great hash function, collisions are inevitable.
- There are many strategies for dealing with collisions, but we'll focus on two:
  1. Separate Chaining
  2. Linear Probing

**Note**: In our case we are using array to implement a very simple hash function and table.

1. **Separate Chaining**: we store the collision data at the same index with nested array. (we will implement this one)
2. **Linear Probing**: When we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index.

## Functions

- set:

  - Accepts a key and a value
  - Hashes the key
  - Stores the key-value pair in the hash table array via separate chaining

- get:

  - Accepts a key
  - Hashes the key
  - Retrieves the key-value pair in the hash table
  - If the kye not found return undefined

- keys:

  - Loops through the hash table array and returns an array of keys in the table

- values:
  - Loops through the hash table array and returns an array of values in the table

## Time Complexity

- Insert : O(1)
- Delete : O(1)
- Access : O(1)

## Code Samples

- [Hash Table](hash-table.ts)
