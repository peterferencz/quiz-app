<script>
    import { base } from '$app/paths';
    export let name = "" // close|settings|document

    //This is a workaround for a bug, where svelte doesn't prefix src with base.
    const path = base + "/icons/"
</script>

{#if name == "close"}
    <img src="{path}icon_close.svg" alt="close">
{:else if name == "settings"}
    <img src="{path}icon_settings.svg" alt="gears">
{:else if name == "document"}
    <img src="{path}icon_descriptions.svg" alt="paper">
{:else}
    <img alt="Err"/>
{/if}

<style>
    img{
        filter: var(--filter);
        height: 2rem;
    }
</style>