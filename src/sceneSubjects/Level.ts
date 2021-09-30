import { Mesh, BoxBufferGeometry, MeshStandardMaterial } from "three";

export default function Level(scene) {
    const width = 15;
    const depth = 2;

    const floor = new Mesh(
        new BoxBufferGeometry(width, 0.5, depth),
        new MeshStandardMaterial({
            color: 0xffffff,
            wireframe: false,
        })
    );
    floor.position.y = -3;

    scene.add(floor);

    this.update = function (time) {};
}
