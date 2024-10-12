// neural_networks.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x007BFF });
const nodes = [];

for (let i = 0; i < 10; i++) {
    const node = new THREE.Mesh(geometry, material);
    node.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
    scene.add(node);
    nodes.push(node);
}

camera.position.z = 10;

const animate = function () {
    requestAnimationFrame(animate);
    nodes.forEach(node => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
};

animate();
