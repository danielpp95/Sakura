<script>
    import Card from './Card.svelte'

    export let cards = [];
</script>

<style>
    .CardsGrid-container {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
    }

    .CardsGrid-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
        justify-content: center;
        align-content: center;
        grid-gap: 2em;
    }
</style>

<div class="CardsGrid">
    <div class="CardsGrid-container">
        <div class="CardsGrid-content">
            {#each [...cards].sort((a,b)=>a.number-b.number) as card (`${card.number}-${card.type}`)}
                <Card card={card} />
            {:else}
                <p>Nothing here</p>
            {/each}
        </div>
    </div>

</div>