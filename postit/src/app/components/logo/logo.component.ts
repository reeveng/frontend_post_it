import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() {
    let width: number = 45, height: number = 45, fov: number = 70, near: number = 50, far: number = 50;
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3F51B5);
    let camera = new THREE.PerspectiveCamera(fov, width / height, 4, 10000);

    // use webgl and threeJS to render the logo
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.getElementById("logo").appendChild(renderer.domElement);

    // creating and adding shape to scene
    let mesh;
    let geometry = new THREE.TorusKnotBufferGeometry(4, 4, 128, 64);
    let material = new THREE.MeshStandardMaterial({ color: 0xFF4081 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // how far away from 0
    camera.position.z = 20;

    // setup lights to see the shape
    let ambientLight = new THREE.AmbientLight(0xcccccc, 0.2);
    scene.add(ambientLight);

    let pointLight = new THREE.PointLight(0xffffff, 0.9);
    camera.add(pointLight);
    scene.add(camera);

    let animate = function () {
      requestAnimationFrame(animate);

      // object rotation
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  ngOnInit(): void {
  }

}
