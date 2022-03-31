
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0b0b0b');

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
camera.position.z = 2.7;
// camera.position.x = 800;
// camera.position.y = 100;
// camera.position.z = 1000;

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.addEventListener("change", renderer);

// let hlight = new THREE.AmbientLight('Ox404040',1000);
// scene.add(hlight);
//import { GLTFLoader} from '/threejs/GLTFLoader.js';

// import { GLTFLoader } from '/threejs/GLTFLoader.js';

// const loader = new GLTFLoader();


// let gömb = loader.load( 'modell/scene.gltf', function ( gltf ) {
//     const model = gltf.scene;
// 	let mixer = new THREE.AnimationMixer(model);
// 	mixer.clipAction(gltf.animations[0]).play();
// 	scene.add(model);
// }, undefined, function ( error ) {
// 	console.error( error );
// } );


const light_jobb = new THREE.PointLight( '#98CE00', 3, 5 );
light_jobb.position.set( -3, -1, 1.5 );
scene.add( light_jobb );

const light_bal = new THREE.PointLight( '#7180AC', 3, 5 );
light_bal.position.set( 3, 1, 1.5 );
scene.add( light_bal );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/1.7, window.innerHeight/1.7 );
let gömb = document.getElementsByClassName("gömb_és_szöveg")[0].appendChild( renderer.domElement );
gömb.style.animation = '1s'
gömb.onmouseenter = () => {
    //gömb.style.zIndex = -1
    //gömb.style.position = "absolute"
    // document.getElementsByClassName("gömb_és_szöveg")[0].style.position = "absolute"
    // document.getElementsByClassName("gömb_és_szöveg")[0].style.top = 
    //for (let i = 1; i < 100; i++) {
        renderer.setSize( window.innerWidth/1.3, window.innerHeight/1.3);
        renderer.render(scene, camera)
    //}

    // gömb.style.width = window.innerWidth
    // gömb.style.height = window.innerHeight
    console.log("over")
}
gömb.onmouseout = () => {
    setTimeout(() => {
        renderer.setSize( window.innerWidth/1.7, window.innerHeight/1.7 );
        renderer.render(scene, camera)
    }, 2000);

    //document.getElementsByClassName("gömb_és_szöveg")[0].style.position = "static"
}

// geomatria
const kocka01_geo = new THREE.BoxGeometry();
// anyag
const kocka01_mat = new THREE.MeshBasicMaterial({color: 'skyblue', wireframe: false});
// háló - geo, anyag kombibálása
const kocka01 = new THREE.Mesh(kocka01_geo, kocka01_mat)
//scene.add(kocka01)

const textureloader = new THREE.TextureLoader()
const textura = textureloader.load('./modell/NormalMap.png')
const geometry = new THREE.SphereGeometry( 1, 256, 256 );
const material = new THREE.MeshStandardMaterial();
material.normalMap = textura
material.metalness = 0.1;
material.roughness = 0.3;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// mozgatás egérrel
//const controls = new THREE.OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

renderer.render(scene, camera)

window.addEventListener('resize', function() {
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.getElementsByClassName("gömb_és_szöveg")[0].appendChild( renderer.domElement );
    renderer.render(scene, camera)
    console.log('resized')
});
// let loader = new THREE.GLTFLoader();
// loader.load('modell/scene.gltf', function (gltf){
// scene.add(gltf.scene);
// animate()
// });

let scale = 0

function animate(){
        renderer.render(scene,camera);
    
        sphere.rotateY(0.01)
        sphere.rotateX(0.01)

        // light_jobb.position.x = Math.sin(scale) * 3
        // light_bal.position.x = Math.sin(scale) * -3
        // light_jobb.position.y = Math.sin(scale)
        // light_bal.position.y = Math.sin(scale)

        // light_jobb.distance = Math.sin(scale) * -5
        // light_bal.distance = Math.sin(scale) * -5

        scale += 0.01

        kocka01.rotateY(0.01)
        requestAnimationFrame(animate);
}
animate()
    


const cursorTag = document.querySelector(".cursors")
const ball = document.querySelector(".ball")

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.25

function animate_ball(){
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate_ball)
}

animate_ball()

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
})