// Credit goes to ChatGPT for creating these test cases
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

// Test cases
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'F')) == JSON.stringify(['A', 'B', 'D', 'F']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'D')) == JSON.stringify(['A', 'B', 'D']));
assert(JSON.stringify(depthFirstSearch(graph, 'B', 'F')) == JSON.stringify(['B', 'D', 'F']));
assert(JSON.stringify(depthFirstSearch(graph, 'C', 'F')) == JSON.stringify(['C', 'E', 'F']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'C')) == JSON.stringify(['A', 'C']));
assert(JSON.stringify(depthFirstSearch(graph, 'D', 'F')) == JSON.stringify(['D', 'F']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'A')) == JSON.stringify(['A']));
assert(JSON.stringify(depthFirstSearch(graph, 'A', 'Z')) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph, 'F', 'A')) == JSON.stringify([]));



