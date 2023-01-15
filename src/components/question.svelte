<script>
    import { preferences } from "../stores/preferences";
        
    export let question = ""
    export let answer = ""

    export let onAnswered = (wasCorrect) => {}

    let input = ""
    let showAnswer = false
    let isCorrect
    let skipped = false

    const answerQuestion = () => {
        skipped = false
        showAnswer = true;
        isCorrect = input == answer
        input = ""
        setTimeout(() => {
            onAnswered(isCorrect)
            showAnswer = false
        }, (isCorrect ? $preferences.correctTimeout : $preferences.wrongTimeout) * 1000);
    }
    const skip = () => {
        skipped = true
        showAnswer = true;
        isCorrect = false
        input = ""
        setTimeout(() => {
            onAnswered(false)
            showAnswer = false
        }, $preferences.wrongTimeout * 1000);

    }

</script>
{#if !showAnswer}
    <div class="question">
        <h1 id="question">{question}</h1>
        <div class="horizontal">
            <input autofocus="true" on:keypress={(e) => {if(e.key == "Enter"){answerQuestion()}}} on:submit={answerQuestion} bind:value={input}>
            <button on:click={answerQuestion}>Submit</button>
        </div>
        <p id="skip" on:click={skip} on:keypress={(e) => {if(e.key == "Enter"){skip()}}}>Skip</p>
    </div>
{:else}
    <div>
        {#if skipped}
            <h1 id="skipped">Skipped</h1>
            <p>The answer was: {answer}</p>
        {:else if isCorrect}
            <h1 id="correct">Correct!</h1>
        {:else}
            <h1 id="wrong">Wrong!</h1>
            <p>The answer was: {answer}</p>
        {/if}
    </div>
{/if}

<style>
    #skip{
        text-decoration: underline;
        text-align: center;
        cursor: pointer;
    }
    .horizontal{
        display: flex;
        flex-direction: row;
        gap: .5rem;
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
    .question{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    h1{
        text-align: center;
    }
    #skipped{
        color: #c8c62b;
    }
    #correct{
        color: #3ec83e;
    }
    #wrong{
        color: #c83e3e;
    }
</style>