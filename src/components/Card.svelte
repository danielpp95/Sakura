<script>
    import { fly } from 'svelte/transition'

    export let card;
    let showContent = false;

    function enter() { showContent = true; }
    function leave() { showContent = false; }

    const loaded = new Map();
    let visible = false;
    function lazy(node, data) {
        if (loaded.has(data.src)) {
            node.setAttribute('src', data.src);
        } else {
            const img = new Image();
            img.src = data.src;
            img.onload = () => {
                loaded.set(data.src, img);
                node.setAttribute('src', data.src); 
                visible = true;
            };
        }
    }

    function randomInt(min, max) {
        	return min + Math.floor((max - min) * Math.random());
    }

    function random(min, max) {
        var numberType = Math.random();
        console.log(numberType)

        if (numberType <= 0.5) {
            return randomInt(-max, -min);
        } else {
           return randomInt(min,max);
        }
    }

    // var img = document.getElementById(`${card.name.en}-${card.number}`);
</script>

<style>
    img {
        max-width: 150px;
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

    .Hide {
        visibility: hidden;
    }

</style>


<!-- {#if visible} -->
     <!-- content here -->

<div class="Card">
    <div class="Card-container">
        <img
            transition:fly="{{ y: random(500,1000), duration: 2500, x: random(500,1000) }}"
            use:lazy="{{src: card.img}}"
            class:Hide={!visible}
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

<!-- {/if} -->