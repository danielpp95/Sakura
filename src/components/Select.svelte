<script>
    export let value;
</script>

<style>
    .Select {
        width: 100%;
        padding: 10px;
    }
</style>

<select class="Select" bind:value={$value} >
    <option value="0">Select Card</option>
    <option value="1">Clow</option>
    <option value="2">Sakura</option>
    <option value="3">Clear Card</option>
</select>