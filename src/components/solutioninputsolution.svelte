<script>
    import { slide } from 'svelte/transition';

    export let question = ""
    export let answer = ""
    export let i = 0

    export let removeCallback = () => {}
</script>

<div id="question" transition:slide|local={{duration:200}}>
    <p>{i}</p>
    <input bind:value={question} type="text">
    <input bind:value={answer} type="text">
    <button on:click={removeCallback}>Remove</button>
</div>

<style>
    #question{
        display: flex;
        flex-direction: row;
        gap: .5rem;
        justify-content: stretch;
        align-items: center;
    }
    input{
        outline: none !important;
        width: 100%;
        padding: .5rem;
        background-color: var(--background);
		color: var(--text);
        border: 1px solid var(--text);
    }
    button{
        border: 1px dashed gray;
        padding: .5rem;
        background-color: transparent;
		color: var(--text);
    }
    button:hover{
        background-color: var(--background-hover);
    }
</style>