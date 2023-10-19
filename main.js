var scene3d = document.getElementById("scene3d");
var width = window.innerWidth;
var height = window.innerHeight;

scene3d.style.width = "50%";
scene3d.style.height = "50%";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
scene3d.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 1); // Cambiar el color a blanco
light.position.set(0, 2, 3);
scene.add(light);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const CUBO = new THREE.Mesh(geometry, material);
scene.add(CUBO);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	CUBO.rotation.x += 0.01;
	CUBO.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function resizeScene() {
	var scene3d = document.getElementById("scene3d");
	var width = window.innerWidth * 0.5; // 50% del ancho de la ventana
	var height = window.innerHeight * 0.5; // 50% de la altura de la ventana
  
	// Ajustar el tamaño del contenedor #scene3d
	scene3d.style.width = width + "px";
	scene3d.style.height = height + "px";
  
	// Ajustar el tamaño del renderizador
	renderer.setSize(width, height);
  
	// Ajustar la relación de aspecto de la cámara
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
}

// Llamar a la función inicialmente para configurar el tamaño inicial
resizeScene();
  
// Agregar un evento de redimensionamiento de ventana para ajustar el tamaño en tiempo real
window.addEventListener("resize", resizeScene);

animate();