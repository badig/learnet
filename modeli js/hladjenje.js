import * as THREE from 'three';
import { TWEEN } from 'https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js';
import {OrbitControls} from '../three/three.js-master/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../three/three.js-master/examples/jsm/loaders/GLTFLoader.js'



var width = 0.5;
var height = 0.5;
const mediaQuery = window.matchMedia('(min-width: 600px)')


if (mediaQuery.matches) {
    //render
    const renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        
    renderer.setSize(window.innerWidth * width, window.innerHeight * height);
    document.getElementById("modelh").appendChild(renderer.domElement);
    

    //scena
    const scene = new THREE.Scene();

    //kamera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0,0,130);
    

    
    //kontrolee
    /*const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {renderer.render(scene, camera)});
    controls.target.set(0, 0, 0);
    controls.update();*/


    //objekt
    var model;
    const loader = new GLTFLoader();
    loader.load('../modeli/coller/scene.gltf', function(gltf){
        model = gltf.scene;
        model.position.set(0, -35, 0);
        model.scale.set(.1, .1, .1);
        scene.add(model);
    });

    

    //light
    const ambientLight = new THREE.AmbientLight(0x5294e2,1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(0,0,10);
    directionalLight.target.position.set(0,0,0);
    
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff,1);
    directionalLight1.position.set(0,5,-10);
    directionalLight1.target.position.set(0,0,0);
    
    scene.add(directionalLight1);
    scene.add(directionalLight1.target);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff,2);
    directionalLight2.position.set(0,5,0);
    directionalLight2.target.position.set(0,0,0);
    
    scene.add(directionalLight2);
    scene.add(directionalLight2.target);

    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(-10,-5,-10);
    scene.add(light);

    /*const helper4 = new THREE.SpotLightHelper(light);
    scene.add(helper4);


    const helper = new THREE.DirectionalLightHelper(directionalLight1);
    scene.add(helper);

    const helper2 = new THREE.DirectionalLightHelper(directionalLight);
    scene.add(helper2);

    const helper3 = new THREE.DirectionalLightHelper(directionalLight2);
    scene.add(helper3);*/
    
    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set(10,5,10);
    scene.add(spotLight);

    window.onresize = function(){
        camera.aspect = window.innerWidth * width / window.innerHeight * height;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth * width , window.innerHeight * height);
    }
    
    
    const tween = new TWEEN.Tween(scene.rotation).to({ y: -(10 * Math.PI / 180)}, 0).delay(0);
    tween.onComplete(function(){
        model.rotation.y = 0;
    });
    tween.chain(tween);
    
    tween.start();
    
    camera.lookAt(scene.position);
    
    const animate = function() {
        requestAnimationFrame(animate);
        TWEEN.update();
        renderer.render(scene, camera);
    };
    
    animate();
}
else{
    //render
    const renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        
    renderer.setSize(window.innerWidth * width, window.innerHeight * height);
    document.getElementById("modelh").appendChild(renderer.domElement);
    

    //scena
    const scene = new THREE.Scene();

    //kamera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth  / window.innerHeight, 0.1, 10000);
    camera.position.set(0,0,160);
    

    
    //kontrolee
    /*const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {renderer.render(scene, camera)});
    controls.target.set(0, 0, 0);
    controls.update();*/


    //objekt
    var model;
    const loader = new GLTFLoader();
    loader.load('../modeli/coller/scene.gltf', function(gltf){
        model = gltf.scene;
        model.position.set(0, -35, 0);
        model.scale.set(.1, .1, .1);
        scene.add(model);
    });
    

    //light
    const ambientLight = new THREE.AmbientLight(0x5294e2,1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(0,0,10);
    directionalLight.target.position.set(0,0,0);
    
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff,1);
    directionalLight1.position.set(0,5,-10);
    directionalLight1.target.position.set(0,0,0);
    
    scene.add(directionalLight1);
    scene.add(directionalLight1.target);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff,2);
    directionalLight2.position.set(0,5,0);
    directionalLight2.target.position.set(0,0,0);
    
    scene.add(directionalLight2);
    scene.add(directionalLight2.target);

    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(-10,-5,-10);
    scene.add(light);

    /*const helper4 = new THREE.SpotLightHelper(light);
    scene.add(helper4);


    const helper = new THREE.DirectionalLightHelper(directionalLight1);
    scene.add(helper);

    const helper2 = new THREE.DirectionalLightHelper(directionalLight);
    scene.add(helper2);

    const helper3 = new THREE.DirectionalLightHelper(directionalLight2);
    scene.add(helper3);*/
    
    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set(10,5,10);
    scene.add(spotLight);

    window.onresize = function(){
        camera.aspect = window.innerWidth * width / window.innerHeight * height;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth * width , window.innerHeight * height);
    }
    
    
    const tween = new TWEEN.Tween(scene.rotation).to({ y: -(10 * Math.PI / 180)}, 0).delay(0);
    tween.onComplete(function(){
        model.rotation.y = 0;
    });
    tween.chain(tween);
    
    tween.start();
    
    camera.lookAt(scene.position);
    
    const animate = function() {
        requestAnimationFrame(animate);
        TWEEN.update();
        renderer.render(scene, camera);
    };
    
    animate();
}