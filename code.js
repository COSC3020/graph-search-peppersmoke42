// Credit to ChatGPT
//   -It gave me the idea to use a set of visited nodes
//      -I was trying an array of moves made
//      -It was so messy
//   -It also gave me the idea of a nested function
//      -I was trying to pass path as an argument, just all around a bad idea
//
//   -It also helped explain the concept to me
//      -It's great at explaining algorithms/processes
//
//   -It also did like 90% of my debugging
//      -Debugging a program in 10 seconds instead of several hours was a game changer
//      -I even asked it to prove to me why it was breaking several times w/ test cases

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
                if(dfs(neighbor))
                    return true;

        path.pop();
        return false;
    }

    // Begin recursion
    if(dfs(startNode))
        return path;
    return [];
}