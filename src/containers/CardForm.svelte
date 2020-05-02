<script>
    import { UploadCard } from '../services/card.js';
    import { Card } from '../model/card.js';

    import Input from '../components/Input.svelte';
    import InputImage from '../components/InputImage.svelte';
    import InputNumber from '../components/InputNumber.svelte';
    import Select from '../components/Select.svelte';
    import Progressbar from '../components/Progressbar.svelte';
    import {
        cardNameEN,
        cardNameES,
        ChapterAnime,
        ChapterManga,
        CardNumber,
        img,
        type
    } from '../stores/card';

    let uploadValue = 0;

    function onUploadCallBack({percentage}) {
        
        uploadValue = percentage - 0.1;
    }

    function onSuccess() {
        uploadValue = 1;
        cardNameEN.update(x => x = '');
        cardNameES.update(x => x = '');
        ChapterAnime.update(x => x = '');
        ChapterManga.update(x => x = '');
        CardNumber.update(x => x = '');
        img.update(x => x = '');
        type.update(x => x = 0);
    }

    async function handleSubmit() {
        var card = new Card(
            $cardNameEN,
            $cardNameES,
            $ChapterAnime,
            $ChapterManga,
            $CardNumber,
            $img[0],
            $type);

        await UploadCard(card, onUploadCallBack, onSuccess);
    }
</script>

<style>
    .CardForm {
        padding: 30px 40px;
        background-color: rgb(255, 184, 204);
        max-height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
        box-sizing: border-box;
        color: var(--text-color);
        border-radius: 4px;
    }

    .CardForm-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Button {
        padding: 10px 20px;
        border-radius: 4px;
        border-color: transparent;
        margin-top: 20px;
        background-color: var(--primary-color);
    }

    .Button:hover {
        background-color: var(--primary-color-alt);
        cursor: pointer;
    }

    h2 {
        color: black;
        margin-bottom: 20px;
    }
</style>

<div class="CardForm">
    <div class="CardForm-container">
        <h2>Card Creation</h2>
        <Input placeholder="Card name EN" value={cardNameEN} />
        <Input placeholder="Card name ES" value={cardNameES} />
        <InputNumber placeholder="Chapter manga" value={ChapterManga} />
        <InputNumber placeholder="Chapter anime" value={ChapterAnime} />
        <InputNumber placeholder="Card number" value={CardNumber} />
        <InputImage files={img} />

        <Select value={type} />

        <div>
            <button on:click={handleSubmit} class="Button">Save</button>
        </div>

        <Progressbar value={uploadValue}/>
    </div>
</div>