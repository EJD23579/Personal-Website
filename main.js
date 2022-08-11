//three START


import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.module.js';





const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);






const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//resizing renderer on screen resize

function resize_renderer() {
    var factor = 1; // percentage of the screen
    var w = window.innerWidth * factor;
    var h = window.innerHeight * factor;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
};

//resizing renderer on screen resize

window.addEventListener("resize", resize_renderer);

renderer.render(scene, camera);

const geometry_torus = new THREE.TorusGeometry(10, 3, 16, 100);
const material_torus = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry_torus, material_torus);



//const geometry_sphere = new THREE.SphereGeometry(3, 32, 32);
//const material_sphere = new THREE.MeshBasicMaterial({ c })
//const sphere = new THREE.Mesh(geometry_sphere, material_sphere);





scene.add(torus)

//sphere.position.z = 0;
//sphere.position.setX(30);


function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
   // sphere.rotation.x += 0.05;
    //sphere.rotation.y += 0.075;
    //sphere.rotation.z += 0.05;

    camera.position.x = t * -0.01;
    camera.position.y = t * -0.002;
    camera.position.z = t * -0.002;

}

document.body.onload = moveCamera

document.body.onscroll = moveCamera




function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

   // controls.update();

    renderer.render(scene, camera);

    
}

    animate();

//three END













//fade in from left on landing page START

const observer_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".fade-in-container-1")[0].classList.add("left");


        }
    })
})

observer_1.observe(document.querySelector(".fade-in-container-1"));

//fade in from left on landing page START


//fade in from right on landing page START

const observer_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelectorAll(".fade-in-container-2")[0].classList.add("right");

        }
    })
})

observer_2.observe(document.querySelector(".fade-in-container-2"));

//fade in from right on landing page END

//fade down from top on landing page START

const observer_3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelectorAll(".subtext")[0].classList.add("top");

        }
    })
})

observer_3.observe(document.querySelector(".subtext"));


//fade down from top on landing page END