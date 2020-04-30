<script>
    import { db, storage } from '../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import { put, getDownloadURL } from 'rxfire/storage';

    import Input from '../components/Input.svelte';
    import InputImage from '../components/InputImage.svelte';
    import InputNumber from '../components/InputNumber.svelte';
    import Select from '../components/Select.svelte';
    import {
        cardNameEN,
        cardNameES,
        ChapterAnime,
        ChapterManga,
        CardNumber,
        img,
        type
    } from '../stores/card';

    async function handleSubmit() {
        const query = db.collection('cards');

        var cardType = '';
        
        switch ($type) {
            case "1":
                cardType = 'Clow'
                break;
            case "2":
                cardType = 'Sakura'
                break;
            case "3":
                cardType = 'Clear'
                break;
            default:
                alert('Card Type Invalid');
                return;
        }

        var dataRef = storage.ref(`${cardType}/${$cardNameEN}-${new Date().getTime()}.png`);

        await put(
            dataRef,
            $img[0],
            {type: 'image/png'})
            .subscribe(snap => {
                if (snap.bytesTransferred === snap.totalBytes) {
                    const url = getDownloadURL(dataRef).subscribe(url => {
                        query.add({
                            "name": {
                                "en": $cardNameEN,
                                "es": $cardNameES,
                            },
                            "chapter": {
                                "anime": $ChapterAnime,
                                "manga": $ChapterManga,
                            },
                            "img": url,
                            "number": $CardNumber,
                            "type": $type
                        })
                        .then(success => {
                            cardNameEN.update(x => x = '');
                            cardNameES.update(x => x = '');
                            ChapterAnime.update(x => x = '');
                            ChapterManga.update(x => x = '');
                            CardNumber.update(x => x = '');
                            img.update(x => x = '');
                            type.update(x => x = 0);
                        })
                        .catch(error => {
                            alert('Error uploading card.')
                        });
                    });
                }
            }
        );
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
    <Input placeholder="Card EN" value={cardNameEN} />
    <Input placeholder="Card ES" value={cardNameES} />
    <InputNumber placeholder="Chapter manga" value={ChapterManga} />
    <InputNumber placeholder="Chapter anime" value={ChapterAnime} />
    <InputNumber placeholder="Card number" value={CardNumber} />
    <InputImage files={img} />

    <Select value={type} />

    <button on:click={handleSubmit} class="Button">Save</button>
</div>