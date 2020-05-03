<script>
    import CardGrid from '../components/CardsGrid.svelte'
    import Switch from '../components/Switch.svelte'
    import { GetCards } from '../services/card'

    import {  } from "svelte";

    let cards = [];
    let getClow = true;
    let getSakura = true;
    let getClear = true;
    let active = true;

    function toggle(checkBox) {
        switch (checkBox) {
            case 'getClow':
                getClow = !getClow;
                break;
            case 'getSakura':
                getSakura = !getSakura;
                break;
            case 'getClear':
                getClear = !getClear
                break

            default:
                alert('invalid option')
                break;
        }

        active = getClow || getSakura || getClear;
    }

    async function handleSearch() {
        cards = [];
        let types = [];
        if(getClow) {
            types.push("1");
        }

        if(getSakura) {
            types.push("2");
        }

        if(getClear) {
            types.push("3");
        }
        cards = await GetCards({
            types: types.length > 0 ? types : null,
            limit: 0
        });
    }
</script>

<style>
    .CardsContainer-container {
        max-width: 936px;
        margin: auto;
    }

    .CardsContainer-filters {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 2em;
    }

    button {
        --bezel-color: var(--primary-color);
        --bezel-stroke-color: var(--primary-color-alt);
        --bezel-width: 5;
        --bezel-radius: 15px,0, 15px, 0;
        color: var(--text-color);
        background-color: var(--primary);
        font-size: 14px;
        border: none;
        padding: 1.2em 2em;
        min-width: 150px;
        text-transform: uppercase;
        cursor: pointer;
        background-color: unset;
        background-image: paint(bezel);
        font-weight: bold;
        letter-spacing: 0.05em;
    }

    button:hover {
        --bezel-color: var(--primary-color-hover);
        --bezel-stroke-color: var(--primary-color-alt-hover);
    }

    button:disabled {
        --bezel-color: var(--primary-color-unactivated);
        --bezel-stroke-color: var(--primary-color-alt-unactivated);
        cursor: not-allowed;
    }
</style>

<div class="CardsContainer">
    <div class="CardsContainer-container">
        <div class="CardsContainer-filters">
            <Switch
                text="Clow"
                value={getClow}
                on:toggle={() => toggle('getClow') }/>
            <Switch
                text="Sakura"
                value={getSakura}
                on:toggle={() => toggle('getSakura') }/>
            <Switch
                text="Clear Dard" value={getClear}
                on:toggle={() => toggle('getClear')}
                />
            <button on:click={handleSearch} disabled={!active}>search</button>
        </div>

        {#if cards}
             <!-- content here -->
            <CardGrid cards={cards}/>
        {/if}
    </div>
</div>