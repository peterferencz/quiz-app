<script>
    import Icon from "./icon.svelte";
import Solutioninputsolution from "./solutioninputsolution.svelte";

    export let questions = []

    const removeQuestion = (id) => {
        questions = questions.filter((m,i) => i != id);
    }
</script>

<div id="container">
    <div class="header">
        <Icon name="document"/>
        <h1>Solutions</h1>
    </div>
    <div id="questions">
        <div class="th">
            <h3>Question</h3>
            <h3>Answer</h3>
        </div>
        {#each questions as question,i}
            <Solutioninputsolution i={i} bind:question={question.q} bind:answer={question.a} removeCallback={() => removeQuestion(i) }/>
        {/each}
        <button on:click={() => questions = [...questions, {q:"",a:""}]}>Add new</button>
    </div>
</div>

<style>
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        widows: 100%;
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
    #container{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
    }
    #questions{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: 1rem;
        overflow: auto;
    }
    .th{
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
        justify-content: space-evenly;
    }
</style>