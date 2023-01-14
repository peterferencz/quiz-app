<script>
    import Question from "./question.svelte";
    import Confetti from "svelte-confetti"
    import { fly } from "svelte/transition";

    export let questions = []
    let currentQuestions = []
    let currentQuestion = null

    let state = "idle"

    const start = () => {
        currentQuestions = questions
        state = "show"

        getNextQuestion()
    }
    const questionAnswered = (wasCorrect) => {
        if(wasCorrect){
            currentQuestions = currentQuestions.filter(val => val != currentQuestion)
        }
        if(currentQuestions.length == 0){
            state="done"
            return
        }
        getNextQuestion()
    }

    function getNextQuestion(){
        let q
        do{
            q = currentQuestions[Math.floor(Math.random() * currentQuestions.length)]
        }while(q == currentQuestion && currentQuestions.length > 1)
        currentQuestion = q

        console.log(currentQuestions)
    }

    const animationDuration = 100;
</script>
<div id="content">
    {#if questions.length < 2}
        <div in:fly="{{ x: 200, duration: animationDuration}}" out:fly="{{x:-200, duration: animationDuration}}">
            <h3>You need to add questions to start practicing!</h3>
        </div>
    {:else}
        {#if state == "idle"}
            <div in:fly="{{ x: 200, duration: animationDuration}}" out:fly="{{x:-200, duration: animationDuration}}">
                <h1>Are you ready?</h1>
                <button on:click={start}>Yes</button>
            </div>
        {:else if state == "show"}
            <div in:fly="{{ x: 200, duration: animationDuration}}" out:fly="{{x:-200, duration: animationDuration}}">
                <Question question={currentQuestion.q} answer={currentQuestion.a} onAnswered={questionAnswered}/>
            </div>
        {:else if state == "done"}
            <div in:fly="{{ x: 200, duration: animationDuration}}" out:fly="{{x:-200, duration: animationDuration}}">
                <h1>Congrats!</h1>
                <button on:click={start}>Practice again</button>
            </div>    
            <div id="confetti">
                <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[0, 5000]} duration=7000 amount=500 fallDistance="100vh" />
            </div>
        {/if}
    {/if}
</div>

<style>
    #confetti{
        position: fixed;
        top: -50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        overflow: hidden;
        pointer-events: none;
    }
    #content{
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    #content > div:not(#confetti){
        grid-column: 1/2;
		grid-row: 1/2;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    h3{
        text-align: center;
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