<script>
	import { onMount } from "svelte";
  import { currentSong } from '../scripts/audioStore';

	export let src = [];
	let player;
	let active = 0;
	$: activeSrc = src[active];
  $: currentSong.set(activeSrc);

	let isPlaying = false;

	onMount(() => {
		player.volume = 0.5;
	});

	const reload = () => {
		player.load()
		if(isPlaying) player.play()
	}

	const next = () => {
		if (active < src.length - 1) {
			active++;
		} else {
			active = 0;
		}
		reload()
	};

	const previous = () => {
		if (active == 0) {
			active = src.length - 1;
		} else {
			active--;
		}
		reload()
	};

	const togglePlay = () => {
		isPlaying ? player.pause() : player.play();
		isPlaying = !isPlaying;
	};
</script>

<audio bind:this={player} loop>
	<source src={activeSrc} type="audio/mp3" />
</audio>

<p><b>{active+1}</b>/{src.length} - {activeSrc}</p>

<button on:click={previous}>
	«
</button>

<button on:click={togglePlay}>
	{isPlaying ? 'Pause' : 'Play'}
</button>

<button on:click={next}>
	»
</button>

<style>
	button:nth-of-type(2) {
		width: 4rem;
	}
</style>