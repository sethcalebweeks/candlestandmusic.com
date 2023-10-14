<script>
	import { onMount } from "svelte";
  import { currentSong } from '../scripts/audioStore';

	let player;
  let nowPlaying = 'merciful&mighty/take-and-eat';
	let isPlaying = false;

	onMount(() => {
		currentSong.subscribe((song) => {
      nowPlaying = song;
      player.load()
      isPlaying = true;
      player.play()
    });
	});

	const togglePlay = () => {
		isPlaying ? player.pause() : player.play();
		isPlaying = !isPlaying;
	};
</script>

<audio bind:this={player} loop>
	<source src={`/music${nowPlaying}.mp3`} type="audio/mp3" />
</audio>

<p>{$currentSong}</p>

<button on:click={togglePlay}>
  {#if isPlaying}
    <slot name="pause" />
  {:else}
    <slot name="play" />
  {/if}
</button>