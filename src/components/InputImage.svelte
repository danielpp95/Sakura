<script>
    export let files;
</script>

<style>
    .InputImage {
        margin: 10px 0;
        width: 100%;
    }

    input {
        height: 0;
        width: 0;
        margin: 0;
        padding: 0;
        display: none;
    }

    label {
        cursor: pointer;
        padding: 10px;
        background-color: white;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        text-align: center;
    }

    p {
        margin: 0;
        padding: 0;
        text-align: center;
    }
</style>

<div class="InputImage">
    <label for="img">
        Select image
        <i class="fas fa-upload"></i>
    </label>
    <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        bind:files={$files}/>

    {#if $files && $files[0]}
        <p>
            {$files[0].name}
        </p>
    {/if}
</div>