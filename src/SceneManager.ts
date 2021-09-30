import * as THREE from "three";
import GeneralLights from "./sceneSubjects/GeneralLights";
import GlobalLights from "./sceneSubjects/GlobalLights";
import Level from "./sceneSubjects/Level";
import SceneSubject from "./sceneSubjects/SceneSubject";

export default function SceneManager(renderElement: THREE.WebGLRenderer) {
    const canvas = renderElement.domElement;
    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height,
    };

    const scene = buildScene();
    const renderer = buildRenderer(renderElement, screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");
        return scene;
    }

    function buildRenderer(
        renderer: THREE.WebGLRenderer,
        screenDimensions: { width: number; height: number }
    ): THREE.WebGLRenderer {
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(screenDimensions.width, screenDimensions.height);

        return renderer;
    }

    function buildCamera({
        width,
        height,
    }: {
        width: number;
        height: number;
    }): THREE.PerspectiveCamera {
        const aspectRation = width / height;
        const FOV = 60;
        const nearPlane = 1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(
            FOV,
            aspectRation,
            nearPlane,
            farPlane
        );

        camera.position.z = 20;
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GlobalLights(scene),
            // new SceneSubject(scene),
            new Level(scene),
        ];

        return sceneSubjects;
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++) {
            sceneSubjects[i].update(elapsedTime);
        }

        renderer.render(scene, camera);
    };

    this.onWindowResize = function () {
        const { width, height } = canvas;
        screenDimensions.width = width;
        screenDimensions.height = height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };
}
