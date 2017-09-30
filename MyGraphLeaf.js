/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph) {
  CGFobject.call(this, graph.scene);
}

MyGraphLeaf.prototype = Object.create(CGFobject.prototype);
MyGraphLeaf.prototype.constructor = MyGraphLeaf;
