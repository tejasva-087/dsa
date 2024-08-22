class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList?.vertex) return false;
    this.adjacencyList[vertex] = [];
    return;
  }

  addEdge(vertex1, vertex2) {
    const vertex1Val = this.adjacencyList?.[vertex1];
    const vertex2Val = this.adjacencyList?.[vertex2];

    if (!(vertex1 && vertex2)) return false;

    if (vertex1Val.includes(vertex2) || vertex2Val.includes(vertex2))
      return false;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    const vertex1Val = this.adjacencyList?.[vertex1];
    const vertex2Val = this.adjacencyList?.[vertex2];

    if (!(vertex1Val && vertex2Val)) return false;

    if (!(vertex1Val.includes(vertex2) || vertex2Val.includes(vertex2)))
      return false;

    let vertexArr = [];
    for (let i = 0; i < vertex1Val.length; i++) {
      if (vertex1Val[i] !== vertex2) {
        vertexArr.push(vertex1Val[i]);
      }
    }
    this.adjacencyList[vertex1] = vertexArr;
    vertexArr = [];

    for (let i = 0; i < vertex2Val.length; i++) {
      if (vertex2Val[i] !== vertex1) {
        vertexArr.push(vertex2Val[i]);
      }
    }
    this.adjacencyList[vertex2] = vertexArr;
  }

  removeVertex(vertex) {
    const vertexVal = this.adjacencyList?.[vertex];
    if (!vertexVal) return false;

    for (let i = 0; i < vertexVal.length; i++) {
      this.removeEdge(vertex, vertexVal[i]);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstTraversalRecursively(vertex) {
    if (!this.adjacencyList?.[vertex]) return false;

    const visitedNodes = [];

    const helper = function (vertex) {
      visitedNodes.push(vertex);
      const vertexVal = this.adjacencyList?.[vertex];

      if (!vertexVal.length) return;

      for (let i = 0; i < vertexVal.length; i++) {
        if (!visitedNodes.includes(vertexVal[i])) {
          helper(vertexVal[i]);
        }
      }
    }.bind(this);
    helper(vertex);
    return visitedNodes;
  }

  depthFirstTraversalIteratively(vertex) {
    if (!this.adjacencyList?.[vertex]) return false;

    const visited = [];
    let stack = [vertex];

    while (stack.length) {
      const topVertex = stack.pop();
      visited.push(topVertex);
      const vertexVal = this.adjacencyList[topVertex];

      for (let i = 0; i < vertexVal.length; i++) {
        let currentVertex = vertexVal[i];
        if (
          !visited.includes(currentVertex) &&
          !stack.includes(currentVertex)
        ) {
          stack.push(currentVertex);
        }
      }
    }
    return visited;
  }

  breadthFirstSearch(vertex) {
    if (!this.adjacencyList?.[vertex]) return false;

    const queue = [vertex];
    const visited = [];
    let vertexVal;
    let currentVertex;

    while (queue.length) {
      const vertexFront = queue.shift();
      visited.push(vertexFront);
      vertexVal = this.adjacencyList[vertexFront];

      for (let i = 0; i < vertexVal.length; i++) {
        currentVertex = vertexVal[i];

        if (
          !visited.includes(currentVertex) &&
          !queue.includes(currentVertex)
        ) {
          queue.push(currentVertex);
        }
      }
    }
    return visited;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.breadthFirstSearch("A"));

console.log(g);
