<script>
    export let placeholder = 'unknow name'
    export let value;
    export let type = 'text';

    function handleChange(sender){
        value.update(x => x = sender.target.value)
    }
</script>

<style>
    .Input {
        width: 100%;
    }

    .Input-input {
        width: 100%;
        padding: 12px 20px;
        display: inline-block;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>

<div class="Input">
    <label>{placeholder}</label>
    <input
        class="Input-input"
        type={type}
        placeholder={placeholder}
        on:change={handleChange} >
</div>