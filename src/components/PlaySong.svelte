<script>
  import { currentSong } from "../scripts/audioStore";

  export let song = "newsong";

  function playSong() {
    console.log(song);
    currentSong.set(song);
  }
</script>

<span on:click={playSong}>
  <slot />
</span>