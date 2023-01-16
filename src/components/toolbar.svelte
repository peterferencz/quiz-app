<script>
    import Icon from "./icon.svelte";


export let itemClick = () => {}

</script>
<div id="toolbar">
    <button on:click={itemClick("solutions")}>
        <Icon name="document"/>
        <!-- <img src="./icons/icon_descriptions.svg" alt="paper"> -->
    </button>
    <button on:click={itemClick("settings")}>
        <Icon name="settings"/>
        <!-- <img src="./icons/icon_settings.svg" alt="gears"> -->
    </button>
</div>

<style>
    /* height: 2rem; */
    #toolbar{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        gap: .5rem;
        margin-left: -1rem;
    }
    button{
        border: 1px dashed gray;
        padding: .5rem;
        background-color: transparent;
		color: var(--text);
        margin-top: 1rem;
    }
    button:hover{
        background-color: var(--background-hover);
    }
</style>