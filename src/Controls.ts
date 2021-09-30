type PlayerControls = {
    isBoosting: boolean;
    isTurnLeft: boolean;
    isTurnRight: boolean;
};

class Controls {
    private static _Instance: Controls;
    private constructor() {
        document.addEventListener("keydown", this.onDocumentKeyDown.bind(this));
        document.addEventListener("keyup", this.onDocumentKeyUp.bind(this));
    }

    public static getInstance(): Controls {
        return Controls._Instance || (Controls._Instance = new Controls());
    }

    public playerLeft: PlayerControls = {
        isBoosting: false,
        isTurnLeft: false,
        isTurnRight: false,
    };

    public playerRight: PlayerControls = {
        isBoosting: false,
        isTurnLeft: false,
        isTurnRight: false,
    };

    private onDocumentKeyDown(event: KeyboardEvent) {
        let keyCode = event.key;
        switch (keyCode) {
            case "w":
                this.playerLeft.isBoosting = true;
                break;
            case "a":
                this.playerLeft.isTurnLeft = true;
                break;
            case "d":
                this.playerLeft.isTurnRight = true;
                break;
        }
    }

    private onDocumentKeyUp(event: KeyboardEvent) {
        let keyCode = event.key;
        switch (keyCode) {
            case "w":
                this.playerLeft.isBoosting = false;
                break;
            case "a":
                this.playerLeft.isTurnLeft = false;
                break;
            case "d":
                this.playerLeft.isTurnRight = false;
                break;
        }
    }
}
