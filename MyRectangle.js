function MyRectangle(graph, xtl, ytl, xbr, ybr) {
  MyGraphLeaf.call(this, graph);
  this.xtl = xtl;
  this.xbr = xbr;
  this.ytl = ytl;
  this.ybr = ybr;

  this.initBuffers();
};

MyRectangle.prototype = Object.create(MyGraphLeaf.prototype);
MyRectangle.prototype.constructor = MyRectangle;

MyRectangle.prototype.initBuffers = function () {
  this.vertices = [
    this.xtl, this.ytl, 0,
    this.xtl, this.ybr, 0,
    this.xbr, this.ybr, 0,
    this.xbr, this.ytl, 0
  ];

  this.indices = [
    0, 1, 2,
    0, 2, 3
  ];

  this.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
  ];

  this.origTexCoords = [
    0, 0,
    0, this.ytl - this.ybr,
    this.xbr - this.xtl, this.ytl - this.ybr,
    this.xbr - this.xtl, 0
  ];

  this.primitiveType = this.scene.gl.TRIANGLES;
  this.initGLBuffers();

};

MyRectangle.prototype.updateTexScaling = function (saf, taf) {
  this.texCoords = this.origTexCoords.slice();

  for (var i = 0; i < this.texCoords.length; i++) {
    this.texCoords[i] /= i % 2 == 0 ? saf : taf;
  }

  this.initGLBuffers();
}
