<script>
	import { onMount } from "svelte";
  import { currentSong } from '../scripts/audioStore';

  export let albums = {};
  let player;
  let trackName;
  let albumName;
  let src;
	let isPlaying = false;

  console.log(albums)

	onMount(() => {
		currentSong.subscribe(([album, song]) => {
      if (trackName !== song) {
        albumName = album;
        trackName = song;
        src = "/music/" + albums[album][song]
        // trackSource = albums[album].find()
        player.load();
        isPlaying = true;
        player.play();
      }
    });
	});

	const togglePlay = () => {
		isPlaying ? player.pause() : player.play();
		isPlaying = !isPlaying;
	};
</script>

<audio bind:this={player} data-astro-transition-persist="player">
	<source {src} type="audio/mp4" />
</audio>

<p>{$currentSong}</p>

<button on:click={togglePlay}>
  {#if isPlaying}
    <slot name="pause" />
  {:else}
    <slot name="play" />
  {/if}
</button>