import "./index.css";
import { WebGLRenderer } from "three";
import * as THREE from "three";
import SceneManager from "./SceneManager";

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sceneManager = new SceneManager(renderer);

function bindEventListeners() {}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}

bindEventListeners();
render();
