/*
*  Performs depth-first search on graph to find viable path from startNode to targetNode
*  @param {Object.<char, string[]>} graph - Incoming graph represented as an adjacency list
*  @param {string} startNode - The node that the search starts on
*  @param {string} targetNode - The node that the search ends on
*  @returns {Array} path - An array that represents the path taken from startNode to targetNode
*                          or an empty array if no viable path was found
*/
function depthFirstSearch(graph, startNode, targetNode) {
    const visited = new Set();
    const path = [];

    // Special cases - at least one of the two inputted nodes doesn't exist, or they're the same node
    if(!graph[startNode] || !graph[targetNode])
        return [];
    if (startNode === targetNode)
        return [startNode];

    // Recursive dfs function, modifies path and returns boolean indicating whether valid path was found
    function dfs(node) {
        if(visited.has(node))
            return false;

        visited.add(node);
        path.push(node);

        if (node === targetNode)
            return true;

        for (const neighbor of graph[node])
            if (!visited.has(neighbor))
                return dfs(neighbor);

        path.pop();
        return false;
    }

    // Begin recursion
    if(dfs(startNode))
        return path;
    return [];
}

const graph1 = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': ['B'],
    'G': ['H'],
    'H': []
};

const graph2 = {
    'A': []
};

const graph3 = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

// Typical case
let startNode = 'A', targetNode = 'F';
let path = depthFirstSearch(graph1, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);

// Target does not exist
startNode = 'H'; targetNode = 'I';
path = depthFirstSearch(graph1, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);

// Neither start nor target exists
startNode = 'I'; targetNode = 'J';
path = depthFirstSearch(graph1, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);

// Start is equivalent to target
startNode = 'A'; targetNode = 'A';
path = depthFirstSearch(graph1, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);

// There's only one element
startNode = 'A'; targetNode = 'A';
path = depthFirstSearch(graph2, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);

// Another typical case
startNode = 'I'; targetNode = 'J';
path = depthFirstSearch(graph3, startNode, targetNode);
console.log("Path from", startNode, "to", targetNode + ":", path);