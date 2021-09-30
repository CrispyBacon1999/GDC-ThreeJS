import * as THREE from "three";

export default function GlobalLights(scene) {
    const light = new THREE.PointLight("#ffffff", 1);
    scene.add(light);
    light.position.z = 4;

    this.update = function (time) {};
}
