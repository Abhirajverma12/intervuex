export const problems = {
  dsa: [
    {
      title: "Two Sum",
      difficulty: "Easy",
      description:
        "Given an array of integers and a target value, return the indices of two numbers that add up to the target.",
      example: "nums = [2, 7, 11, 15], target = 9 → Output: [0, 1]",
    },
    {
      title: "Reverse String",
      difficulty: "Easy",
      description:
        "Write a function that reverses a given string without using built-in reverse methods.",
      example: "Input: hello → Output: olleh",
    },
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      description:
        "Given a string containing brackets, determine if the input string is valid.",
      example: "Input: ()[]{} → Output: true",
    },
    {
      title: "Maximum Subarray",
      difficulty: "Medium",
      description:
        "Find the contiguous subarray with the largest sum and return its sum.",
      example: "nums = [-2,1,-3,4,-1,2,1,-5,4] → Output: 6",
    },
    {
      title: "Merge Two Sorted Arrays",
      difficulty: "Easy",
      description:
        "Merge two sorted arrays into one sorted array.",
      example: "arr1 = [1,3,5], arr2 = [2,4,6] → Output: [1,2,3,4,5,6]",
    },
    {
      title: "Find Duplicate Number",
      difficulty: "Medium",
      description:
        "Given an array containing n + 1 integers, find the duplicate number.",
      example: "nums = [1,3,4,2,2] → Output: 2",
    },
    {
      title: "Binary Search",
      difficulty: "Easy",
      description:
        "Implement binary search on a sorted array and return the index of the target.",
      example: "nums = [1,3,5,7], target = 5 → Output: 2",
    },
    {
      title: "Longest Common Prefix",
      difficulty: "Easy",
      description:
        "Find the longest common prefix string among an array of strings.",
      example: '["flower","flow","flight"] → Output: "fl"',
    },
    {
      title: "Move Zeroes",
      difficulty: "Easy",
      description:
        "Move all zeroes in an array to the end while maintaining the relative order of non-zero elements.",
      example: "nums = [0,1,0,3,12] → Output: [1,3,12,0,0]",
    },
    {
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      description:
        "Find the maximum profit from buying and selling a stock once.",
      example: "prices = [7,1,5,3,6,4] → Output: 5",
    },
  ],

  frontend: [
    {
      title: "Counter Component",
      difficulty: "Easy",
      description:
        "Build a React counter component with increment and decrement buttons.",
      example: "Count starts at 0 and updates when buttons are clicked.",
    },
    {
      title: "Todo List UI",
      difficulty: "Easy",
      description:
        "Build a todo list where users can add, mark complete, and delete tasks.",
      example: "Add task → Display task → Mark as completed",
    },
    {
      title: "Search Filter Component",
      difficulty: "Easy",
      description:
        "Create a search input that filters a list of items in real time.",
      example: "Search 'app' → Shows Apple, Application",
    },
    {
      title: "Responsive Navbar",
      difficulty: "Medium",
      description:
        "Build a responsive navbar with desktop links and a mobile hamburger menu.",
      example: "Desktop shows links, mobile shows menu icon.",
    },
    {
      title: "Form Validation",
      difficulty: "Medium",
      description:
        "Create a signup form with validation for name, email, and password.",
      example: "Invalid email → Show error message",
    },
  ],

  backend: [
    {
      title: "Login API Design",
      difficulty: "Medium",
      description:
        "Design a REST API for user login using email and password authentication.",
      example: "POST /api/login → Returns JWT token.",
    },
    {
      title: "User Registration API",
      difficulty: "Medium",
      description:
        "Design an API endpoint to register a new user with validation and password hashing.",
      example: "POST /api/register → Creates user account.",
    },
    {
      title: "CRUD API for Notes",
      difficulty: "Medium",
      description:
        "Build REST APIs to create, read, update, and delete notes.",
      example: "GET /api/notes → Returns all notes.",
    },
    {
      title: "Pagination API",
      difficulty: "Medium",
      description:
        "Design an API that returns paginated data using page and limit query parameters.",
      example: "GET /api/products?page=1&limit=10",
    },
    {
      title: "Role-Based Access Control",
      difficulty: "Hard",
      description:
        "Design middleware to allow or deny access based on user roles.",
      example: "Admin can delete users, normal user cannot.",
    },
  ],

  systemdesign: [
    {
      title: "URL Shortener",
      difficulty: "Medium",
      description:
        "Design a scalable URL shortening service similar to Bitly.",
      example: "Input: long URL → Output: short URL",
    },
    {
      title: "Chat Application",
      difficulty: "Medium",
      description:
        "Design a real-time chat application with one-to-one messaging.",
      example: "User A sends message → User B receives instantly.",
    },
    {
      title: "Video Streaming Platform",
      difficulty: "Hard",
      description:
        "Design a platform like YouTube that supports video upload, streaming, and recommendations.",
      example: "Upload video → Process → Stream to users.",
    },
    {
      title: "Online Code Judge",
      difficulty: "Hard",
      description:
        "Design a system that can compile, run, and evaluate code submissions.",
      example: "Submit code → Run tests → Return verdict.",
    },
    {
      title: "Food Delivery System",
      difficulty: "Medium",
      description:
        "Design a food delivery platform with restaurants, users, orders, and delivery tracking.",
      example: "User orders food → Restaurant accepts → Delivery assigned.",
    },
  ],
};