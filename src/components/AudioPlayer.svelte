<script>
	import { onMount, onDestroy } from "svelte";
  import { currentSong, isPlaying } from '../scripts/audioStore';

  export let albums = {};
  let player, album, track, src;
  let unsubscribeCurrentSong, unsubscribeIsPlaying, trackIndex, currentTime;

  $: [album, track] = $currentSong; 
  $: trackIndex = albums[album].findIndex(({title}) => title === track);
  $: src = albums[album][trackIndex].src;

  unsubscribeCurrentSong = currentSong.subscribe(() => {
    if (unsubscribeCurrentSong) {
      player.load();
      player.play();
    }
  });

  unsubscribeIsPlaying = isPlaying.subscribe((isPlaying) => {
    if (unsubscribeIsPlaying) {
      isPlaying ? player.play() : player.pause();
    }
  })

  onDestroy(() => {
    unsubscribeCurrentSong();
    unsubscribeIsPlaying();
  });

  const onEnded = () => {
    trackIndex = trackIndex >= (albums[album].length - 1) ? 0 : trackIndex + 1;
    track = albums[album][trackIndex].title;
    currentSong.set([album, track]);
  }

	const togglePlay = () =>  {
    isPlaying.set(!$isPlaying);
  };
</script>

<audio bind:this={player} bind:currentTime on:ended={onEnded}>
	<source {src} type="audio/mp3" />
</audio>

<p class="max-w-xs sm:max-w-none text-ellipsis whitespace-nowrap overflow-hidden px-1">
  {album} | {track}
</p>

<button on:click={togglePlay}>
  {#if $isPlaying}
    <slot name="pause" />
  {:else}
    <slot name="play" />
  {/if}
</button>