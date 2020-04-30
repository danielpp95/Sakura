<script>
    import Input from '../components/Input.svelte';
    import InputImage from '../components/InputImage.svelte';
    import Select from '../components/Select.svelte';
    import {
        cardNameEN,
        cardNameES,
        ChapterAnime,
        ChapterManga,
        CardNumber,
        img,
        type
    } from '../stores/card'

    function handleSubmit() {
        alert('test');
    }
</script>

<style>
    .CardForm {
        padding: 20px;
        width: 66%;
        height: auto;
        background-color: #ccc;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Button {
        padding: 10px 20px;
        border-radius: 4px;
        border-color: transparent;
        width: 33%;
        margin-top: 20px;
    }
</style>

<div class="CardForm">
    <Input placeholder="Card EN" value={cardNameEN}/>
    <Input placeholder="Card ES" value={cardNameES}/>
    <Input placeholder="Chapter manga" value={ChapterManga} type="number"/>
    <Input placeholder="Chapter anime" value={ChapterAnime} type="number"/>
    <Input placeholder="Card number" value={CardNumber} type="number"/>
    <InputImage files={img} />

    <Select value={type} />

    <button on:click={handleSubmit} class="Button">Save</button>
</div>