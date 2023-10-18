<script>
  import { currentSong, isPlaying } from "../scripts/audioStore";

  export let album = "Merciful & Mighty";
  export let song = "Westminster Confession of God";

  let currentTrack;

  $: [_, currentTrack] = $currentSong;

  function togglePlay() {
    if (currentTrack === song) {
      isPlaying.set(!$isPlaying);
    } else {
      isPlaying.set(true);
      currentSong.set([album, song]);
    }
  }
</script>

<span on:click={togglePlay}>
  {#if currentTrack === song && $isPlaying}
    <slot name="pause" />
  {:else}
    <slot name="play" />
  {/if}
</span>