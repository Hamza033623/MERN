// Use the "todo" database
db = db.getSiblingDB('todo');  // Database name is "todo"

// Create the "tasks" collection if it doesn't exist
db.createCollection('tasks');

// Insert a sample task document into the "tasks" collection
db.tasks.insert({ name: "Test Task", description: "A test task", status: "pending" });

