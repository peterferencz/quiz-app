<script>
    import { onMount } from "svelte";
    import { questions } from "../stores/questions"
    import Popup from "../components/popup.svelte";
    import Questionprovider from "../components/questionprovider.svelte";
    import Settings from "../components/settings.svelte";
    import Solutionsinput from "../components/solutionsinput.svelte";
    import Toolbar from "../components/toolbar.svelte";
    import { preferences } from "../stores/preferences";

    onMount(() => {
        document.body.classList.toggle('dark-mode', $preferences.darktheme)
        // if($preferences.darktheme){
        //     document.body.classList.add('dark-mode')
        // }else{
        //     document.body.classList.remove('dark-mode')
        // }
    })

    let popupOpen = false;
    let popupType = "none"

    const close = () => {
        popupOpen = false;
        popupType = "none"
    }
    const open = (type) => {
        popupType = type;
        popupOpen = true;
    }
</script>
<h1>Quiz-app</h1>
<Toolbar itemClick={open}/>
<Questionprovider questions={$questions}/>

{#if popupOpen}
    <Popup close={close}>
    {#if popupType == "settings"}
        <Settings/>
    {:else if popupType == "solutions"}
        <Solutionsinput bind:questions={$questions}/>
    {/if}
    </Popup>
{/if}
<style>
    h1{
        text-align: center;
    }

    :global(body) {
        --text :#000000;
        --background: #ffffff;
        --background-hover: #cfcfcf;
        --filter: invert(0%);
        
		background-color: var(--background);
		color: var(--text);
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
        --text: #bfc2c7;
        --background: #1C2128;
        --background-hover: #2d353f;
        --filter: invert(94%) sepia(6%) saturate(182%) hue-rotate(179deg) brightness(84%) contrast(86%);
	}
    :global(button){
        cursor:pointer;
    }
</style>