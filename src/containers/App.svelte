<script>
    import Header from '../components/Header.svelte'
    import CardsContainer from './CardsContainer.svelte'
    import MainContainer from '../components/MainContainer.svelte'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rochester&display=swap');
    
    :global(body) {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background-color: rgb(255, 184, 204);
        color: rgba(38, 38, 38, 0.8);
    }

    :global(h1, h2, h3) {
        margin: 0;
        padding: 0;
    }

    :global(:root) {
		--text-color: rgba(38, 38, 38, 0.8);
		--text-color-unactivated: rgba(80, 79, 79, 0.8);
        --primary-color: rgb(250, 155, 186);
        --primary-color-alt: rgb(248, 136, 172);
        --primary-color-hover: var(--primary-color-alt);
        --primary-color-alt-hover: rgb(226, 120, 154);
        --primary-color-unactivated: rgb(252, 170, 197);
        --primary-color-alt-unactivated: rgb(252, 161, 190);
	}
</style>

<div class="App">
    <Header />
    <MainContainer>
        <CardsContainer />
    </MainContainer>
</div>