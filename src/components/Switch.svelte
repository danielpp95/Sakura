<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let text= 'undefined';
    export let value = false;
</script>

<style>
    .Switch {
        display: flex;
        max-width: 150px;
    }

    .checkbox {
        display: none;
    }

    label {
        --bezel-color: var(--primary-color);
        --bezel-stroke-color: var(--primary-color-alt);
        --bezel-width: 5;
        --bezel-radius: 15px,15, 15px, 15;
        padding: 1.2em 2em;
        font-size: 14px;
        border: none;
        min-width: 150px;
        text-transform: uppercase;
        cursor: pointer;
        letter-spacing: 0.05em;
        background-image: paint(bezel);
        color: var(--text-color);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
    }

    label:hover {
        --bezel-color: var(--primary-color-hover);
        --bezel-stroke-color: var(--primary-color-alt-hover);
    }

    .activated {
        --bezel-color: var(--primary-color-unactivated);
        --bezel-stroke-color: var(--primary-color-alt-unactivated);
        color: var(--text-color-unactivated);
    }
</style>

<div class="Switch">
    <label class:activated={!value} >
        <input
            type="checkbox"
            class="checkbox"
            checked={value}
            on:change={() => dispatch('toggle')}>
        {text}
    </label>
</div>