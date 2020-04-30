<script>
    export let placeholder = 'unknow name'
    export let value;
</script>

<style>
    .InputNumber {
        width: 100%;
    }

    .InputNumber-input {
        width: 100%;
        padding: 12px 20px;
        display: inline-block;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>

<div class="InputNumber">
    <label>{placeholder}</label>
    <input
        class="InputNumber-input"
        type="number"
        placeholder={placeholder}
        bind:value={$value} >
</div>