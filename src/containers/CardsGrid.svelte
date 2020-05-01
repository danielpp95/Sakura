<script>
    import { onMount } from 'svelte'
    import { db } from '../firebase.js';
    import { map } from 'rxjs/operators';
    import { collection } from 'rxfire/firestore';

    import Card from '../components/Card.svelte'

    $:cards = [].sort((a,b)=>a.number-b.number)

    onMount(async ()=> {
        collection(db.collection('cards'))
            .pipe(
                map(
                    docs => 
                        docs.map(d => {
                            d.data();
                            
                            cards = [...cards, d.data()]
                        })
                )
            ).subscribe();
    });
</script>

<style>
    .CardsGrid {
        padding: 4em 0 0 0;
    }

    .CardsGrid-container {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
    }

    .CardsGrid-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
        justify-content: center;
        align-content: center;
        grid-gap: 2em;
    }
</style>

<div class="CardsGrid">
    <div class="CardsGrid-container">
        <div class="CardsGrid-content">
            {#each [...cards].sort((a,b)=>a.number-b.number) as card (card.number)}
                <Card card={card} />
            {:else}
                <p>Nothing here</p>
            {/each}
        </div>
    </div>

</div>