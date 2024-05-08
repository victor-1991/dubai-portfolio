class VideoControls {
    constructor(videoSelector, controlsSelector, overlaySelector, fullscreenSelector) {
        this.video = document.querySelector(videoSelector);
        this.controls = document.querySelector(controlsSelector);
        this.overlay = document.querySelector(overlaySelector);
        this.fullScreenBtn = document.querySelector(fullscreenSelector);
        this.controlsImage = this.controls.querySelector('img');
        this.togglePlay();
        this.doFullScreen();
    }
    toggleOverlay = (event) => {
        if (event.type === 'mouseleave') {
            this.overlay.classList.add('hidden');
        } else {
            this.overlay.classList.remove('hidden')
        }
    }
    doFullScreen = () => {
        this.fullScreenBtn.addEventListener('click', () => {
            if (!this.video.fullscreenElement) {
                this.video.requestFullscreen();
            }
        })
    }
    togglePlay() {
        this.controls.addEventListener('click', () => {
            if (this.video.paused) {
                this.video.play();
                const pausePath = this.controlsImage.dataset.pausePath;
                this.controlsImage.src = pausePath;
                this.controlsImage.alt = 'pause';
                this.fullScreenBtn.classList.add('visible');
                this.overlay.onmouseleave = this.toggleOverlay;
                this.overlay.onmouseenter = this.toggleOverlay;
            } else {
                this.video.pause();
                const playPath = this.controlsImage.dataset.playPath;
                this.controlsImage.src = playPath;
                this.controlsImage.alt = 'play';
                this.overlay.onmouseleave = null;
                this.overlay.onmouseenter = null;
            }
        })
    }
}

export default VideoControls;