<script>
    export let value;

    function handleSelect(sender){
        value.update(x => x = parseInt(sender.target.value));
    }
</script>

<select on:change={handleSelect}>
    <option value="0">Select Card</option>
    <option value="1">Clow</option>
    <option value="2">Sakura</option>
    <option value="3">Clear Card</option>
</select>