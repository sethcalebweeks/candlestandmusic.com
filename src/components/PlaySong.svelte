<script>
  import { currentSong } from "../scripts/audioStore";

  export let album = "Merciful & Mighty";
  export let song = "Westminster Confession of God";

  function playSong() {
    const player = document.getElementById("player");
    player.album = album;
    player.track = song;
    currentSong.set([album, song]);
  }
</script>

<span on:click={playSong}>
  <slot />
</span>