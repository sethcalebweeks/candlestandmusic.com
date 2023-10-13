<script>
  import { currentSong } from "../scripts/audioStore";

  export let song = "newsong";
</script>

<span on:click={currentSong.set(song)}>
  <slot />
</span>