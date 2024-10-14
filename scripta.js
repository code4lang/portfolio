/* styles.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

#canvas {
    width: 800px;
    height: 600px;
}
```

```javascript
// script.js
import * as THREE from 
'https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 
window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
});

// Define the neural network structure
const inputLayerSize = 4;
const convLayerSize = 16;
const denseLayerSize = 64;
const outputLayerSize = 1;

// Create the layers
const inputLayerGeometry = new THREE.BufferGeometry();
const inputLayerMaterial = new THREE.MeshBasicMaterial({
    color: 0xCCCCCC,
    wireframe: true
});
inputLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute([-5, -5, 0], 3));
for (let i = 0; i < inputLayerSize; i++) {
    const pos = [-4 + i * 1.2, -4, 0];
    inputLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute(pos, 3), i * 12);
}
const inputLayerMesh = new THREE.Mesh(inputLayerGeometry, 
inputLayerMaterial);

const convLayerGeometry = new THREE.BufferGeometry();
const convLayerMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FF00,
    wireframe: true
});
convLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute([-3, -5, 0], 3));
for (let i = 0; i < convLayerSize; i++) {
    const pos = [-2 + i * 1.2, -4, 0];
    convLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute(pos, 3), i * 12);
}
const convLayerMesh = new THREE.Mesh(convLayerGeometry, 
convLayerMaterial);

const denseLayerGeometry = new THREE.BufferGeometry();
const denseLayerMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF0000,
    wireframe: true
});
denseLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute([-1, -5, 0], 3));
for (let i = 0; i < denseLayerSize; i++) {
    const pos = [-4 + i * 0.8, -4, 0];
    denseLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute(pos, 3), i * 12);
}
const denseLayerMesh = new THREE.Mesh(denseLayerGeometry, 
denseLayerMaterial);

const outputLayerGeometry = new THREE.BufferGeometry();
const outputLayerMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    wireframe: true
});
outputLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute([-5, -7, 0], 3));
for (let i = 0; i < outputLayerSize; i++) {
    const pos = [-4 + i * 1.2, -6, 0];
    outputLayerGeometry.setAttribute('position', new 
THREE.Float32BufferAttribute(pos, 3), i * 12);
}
const outputLayerMesh = new THREE.Mesh(outputLayerGeometry, 
outputLayerMaterial);

// Add the layers to the scene
scene.add(inputLayerMesh);
scene.add(convLayerMesh);
scene.add(denseLayerMesh);
scene.add(outputLayerMesh);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();