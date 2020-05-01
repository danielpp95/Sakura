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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
        justify-content: center;
        align-content: center;
        grid-gap: 2em;
    }
</style>

<div class="CardsGrid">
    {#each [...cards].sort((a,b)=>a.number-b.number) as card (card.number)}
        <Card card={card} />
    {:else}
         <p>Nothing here</p>
    {/each}
</div>