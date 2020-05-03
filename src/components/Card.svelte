<script>
    import { fly, fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import iconUsa from '../assets/images/icons/united-states-of-america.svg';
    import iconSpain from '../assets/images/icons/spain.svg';
    import iconcomic from '../assets/images/icons/comic.svg';
    import iconTv from '../assets/images/icons/tv.svg';
    import iconId from '../assets/images/icons/id.svg';
    import iconChange from '../assets/images/icons/change.svg';

    export let card;

    let background;
    let image = card.img;

    onMount(async () => {
        switch (card.type) {
            case "1":
                background = require('../assets/images/Reverso_Clow.jpg').default;
                break;
            case "2":
                background = require('../assets/images/Reverso_Sakura.jpg').default;
                break;
            case "3":
                background = require('../assets/images/Reverso_clear_card.png').default;
                break;

            default:
                break;
        }
    });

    let showContent = false;

    function enter() {
        showContent = true;
        image = background
    }
    function leave() {
        showContent = false;
        image = card.img
    }

    const loaded = new Map();
    let visible = false;
    function lazy(node, data) {
        const img = new Image();
        img.src = data.src;
        img.onload = () => {
            loaded.set(data.src, img);
            node.setAttribute('src', data.src);
            visible = true;
        }
    }

    function randomInt(min, max) {
        	return min + Math.floor((max - min) * Math.random());
    }

    function random(min, max) {
        var numberType = Math.random();

        if (numberType <= 0.5) {
            return randomInt(-max, -min);
        } else {
           return randomInt(min,max);
        }
    }
</script>

<style>
    img {
        max-width: 150px;
    }

    img, .Card-content {
        border-radius: 10px;
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
        /* background-color: white; */
        position: absolute;
        width: 150px;
        padding: 10px;
        box-sizing: border-box;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.466);
        justify-content: space-evenly;
    }

    .Card-content:hover {
        display: flex;
    }

    .Hide {
        visibility: hidden;
    }

    .loader {
        display: none
    }

    p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-weight: 700;
        margin: 0;
    }

    p img {
        max-width: 24px;
        border-radius: 0;
    }

</style>

<div class="loader" use:lazy="{{src: card.img}}"></div>

{#if visible}
<div
    class="Card"
    in:fly="{{ y: random(500,1000), duration: 1500, x: random(500,1000) }}"

    on:mouseenter={enter}
    on:mouseleave={leave}
    >
    <div class="Card-container">
        <img
            class:Hide={!visible}
            src={image}
            alt={card.name.en}

            >
        {#if showContent}
            <div class="Card-content">
                <p>
                    <img src={iconUsa} alt="">
                    {card.name.en}
                </p>
                <p>
                    <img src={iconSpain} alt="">
                    {card.name.es}
                </p>
                <p>
                    <img src={iconcomic} alt="">
                    {card.chapter.manga != 0 ? card.chapter.manga : 'N/A'}
                </p>
                <p>
                    <img src={iconTv} alt="">
                    {card.chapter.anime != 0 ? card.chapter.anime : 'N/A'}
                </p>
                {#if card.transformed && card.transformed.anime}
                    <p>
                        <img src={iconChange} alt="">
                        <img src={iconTv} alt="">
                        {card.transformed.anime}
                    </p> 
                {/if}
                {#if card.transformed && card.transformed.manga}
                    <p>
                        <img src={iconChange} alt="">
                        <img src={iconcomic} alt="">
                        {card.transformed.manga}
                    </p> 
                {/if}
                <p>
                    <img src={iconId} alt="">
                    {card.number}
                </p>
            </div>
        {/if}
    </div>
</div>

{/if}