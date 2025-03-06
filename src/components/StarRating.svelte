<script>
    export let name;
    export let value = 0; // Bound value
    export let max = 5; // Maximum number of stars

    let hoverValue = 0;

    function setRating(rating) {
        value = rating;
    }

    function setHover(value) {
        hoverValue = value;
    }
</script>

<div class="stars" on:mouseleave={() => setHover(0)}>
    {#each Array(max).fill(0) as _, i}
        <span
            class="star {i < (hoverValue || value) ? 'filled' : ''}"
            on:mouseover={() => setHover(i + 1)}
            on:click={() => setRating(i + 1)}
        >
            ★
        </span>
    {/each}
</div>

<input type="hidden" {name} bind:value />

<style>
    .stars {
        display: flex;
        gap: 5px;
        cursor: pointer;
    }
    .star {
        font-size: 2rem;
        color: lightgray;
        transition: color 0.2s;
    }
    .star.filled {
        color: gold;
    }
</style>
