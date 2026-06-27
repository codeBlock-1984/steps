class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  printGraph(adjacencyList = this.adjacencyList) {
    for (const [node, neighbors] of Object.entries(adjacencyList)) {
      console.log(`${node} -> ${neighbors.join(', ')}`);
    }
  }

  addNode(val) {
    this.adjacencyList[val] = [];
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }
}

const graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);

graph.printGraph();

graph.addEdge(0, 1);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(2, 0);
graph.addEdge(3, 1);

graph.printGraph();
