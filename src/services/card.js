import { db, storage } from '../firebase';

export const UploadCard = async function (card, onUploadCallBack = null, onSuccess = null) {
    var cardType = '';

    switch (card.type) {
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

    var dataRef = storage.ref(`${cardType}/${card.cardNameEN}-${new Date().getTime()}.png`);

    await UploadImage(dataRef, card, onUploadCallBack, onSuccess);
}

async function UploadImage(dataRef, card, onUploadCallBack, onSuccess) {
    let uploadTask  = dataRef.put(card.img);
    uploadTask
        .on(
            'state_changed',
            (snapshot) => {
                let bytesTransferred = snapshot.bytesTransferred;
                const totalBytes = snapshot.totalBytes;

                var percentage = bytesTransferred / totalBytes;

                if (onUploadCallBack){
                    onUploadCallBack({percentage});
                }
            },
            err => console.log(err),
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(async downloadURL => {
                        await UploadCardData(card, downloadURL, onSuccess);
                    })
            }
        );
}

async function UploadCardData(card, downloadURL, onSuccess) {
    var cardRef = db.collection('cards').doc();

    cardRef.set(CardInfo(card, downloadURL))
        .then(() => {
            if(onSuccess) {
                onSuccess();
            }
        })
        .catch(err => console.log(err));
}

function CardInfo(card, downloadURL) {

    var cardObject = {
        "name": {
            "en": card.cardNameEN,
            "es": card.cardNameES,
        },
        "chapter": {
            "anime": card.ChapterAnime,
            "manga": card.ChapterManga,
        },
        "img": downloadURL,
        "number": card.CardNumber,
        "type": card.type,
        transformed: card.transformed
    };

    return cardObject;
}

export const GetCards = async function(options = {}) {
    let {types, limit = 12} = options;

    let collection =  db.collection('cards');

    let cards = [];

    if(types) {
        collection = collection.where("type", "in", types);
    }

    if(limit > 0) {
        collection = collection.limit(limit);
    }
    await collection.get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                cards = [...cards, doc.data()]
            });
        })

    return cards;
}