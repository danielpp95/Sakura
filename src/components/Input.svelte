<script>
    export let placeholder = 'unknow name'
    export let value;
</script>

<style>
    .Input {
        width: 100%;
    }

    .Input-input {
        width: 100%;
        padding: 12px 20px;
        display: inline-block;
        margin: 5px 0 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>

<div class="Input">
    <label>{placeholder}</label>
    <input
        class="Input-input"
        type="text"
        placeholder={placeholder}
        bind:value={$value} >
</div>