import * as THREE from "../three";

const scene = new THREE.scene;
const camera = new THREE.PerspectiveCamera(30, window.innerHeight/window.innerWidth, 
0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setsize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}
animate();