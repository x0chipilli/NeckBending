var Scene = require('Scene');
var Textures = require('Textures');
var Materials = require('Materials');
var FaceTracking = require('FaceTracking');
var Animation = require('Animation');
var Reactive = require('Reactive');
var TouchGestures = require('TouchGestures');
const Instruction = require('Instruction');
var face = FaceTracking.face(0);

async function neckBend() {
  var cuello = await Scene.root.findFirst('Bone.004');

  var movimientocuello = 80;
  cuello.transform.rotationX = face.cameraTransform.rotationX.mul(-1.0).sum(0).expSmooth(movimientocuello);
  cuello.transform.rotationY = face.cameraTransform.rotationZ.mul(1.0).sum(0).expSmooth(movimientocuello);
  cuello.transform.rotationZ = face.cameraTransform.rotationY.mul(-1.0).sum(0).expSmooth(movimientocuello);
}

neckBend();