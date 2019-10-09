export default {
    get() {
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.mute = document.querySelector("#vol");
        this.volumeControl = document.querySelector("#vol-control");
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions() {
        this.playPause.onclick = () => this.togglePlayPause();
        this.mute.onclick = () => this.toggleMute();
        this.volumeControl.oninput = () => this.setVolume(this.volume.value);
        this.volumeControl.onchange = () => this.setVolume(this.volume.value);
    }
};