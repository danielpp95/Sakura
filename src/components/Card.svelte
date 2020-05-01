<script>
    export let card;
    let showContent = false;

    function enter() { showContent = true; }
    function leave() { showContent = false; }
</script>

<style>
    img {
        max-width: 150px;
        /* position: absolute; */
    }

    .Card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Card-container {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .Card-content {
        background-color: white;
        position: absolute;
        width: 150px;
        padding: 10px;
        box-sizing: border-box;
        height: 100%;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        
    }

    .Card-content:hover {
        display: flex
    }

</style>

<div class="Card">
    <div class="Card-container">
        <img
            src={card.img}
            alt={card.name.en}
            on:mouseenter={enter}
            >
        {#if showContent}
            <div class="Card-content" on:mouseleave={leave}>
                {card.name.en}
            </div>
        {/if}
    </div>
</div>