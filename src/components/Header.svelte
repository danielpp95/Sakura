<script>
    import { blur } from 'svelte/transition';
    import CardForm from '../containers/CardForm.svelte'
    import Modal from './Modal.svelte'

    let isModal = false;

    function handleModal() {
        isModal = !isModal;
    }
</script>

<style>
    .Header {
        background-color: var(--primary-color);
        position: fixed;
        width: 100%;
        color: black;
        top: 0;
        z-index: 9;
    }

    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        border-bottom: 1px solid rgb(248, 128, 168)
    }

    .Header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    .Header ul {
        list-style: none;
    }

    .Header li {
        display: inline-block;
    }

    .Header i {
        font-size: 16px;
        color: rgba(38, 38, 38, 0.8);
        cursor: pointer;
    }

    h1 {
        font-family: 'rochester';
        font-size: 28px;
        color: black;
        cursor: pointer;
        position: relative;
        background: #fff;
        mix-blend-mode: multiply;
        display: inline-block;
    }

    h1:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top left,
            rgba(14,0,36,1) 0%,
            rgba(102,9,121,1) 33%,
            rgba(255,0,96,1) 100%);
        mix-blend-mode: screen;
        position: absolute;
        top: 0;
        bottom: 0;
    }
</style>

<div class="Header">
    {#if isModal}
         <div transition:blur>
            <Modal on:click={handleModal}>
                <CardForm />
            </Modal>
         </div>
    {/if}

    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Sakura Card Captors</h1>
                <!-- <img src={url} alt=""> -->
            </div>
            <div class="Header-nav">
                <ul>
                    <li>
                        <i class="fas fa-plus" on:click={handleModal}></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>