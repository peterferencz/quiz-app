<script>
    import { fade } from 'svelte/transition';

    export let close = () => {}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="bg" transition:fade={{duration:100}} on:click|self={close}>
    <div id="content">
        <div id="inner">
            <button class="close" on:click={close}>
                <img src="/icons/icon_close.svg" alt="close">
            </button>
            <slot/>
        </div>
    </div>
</div>

<style>
img{
    filter: var(--filter);
}
.close{
    position: absolute;
    right: .5rem;
    top: .5rem;
    background-color: transparent;
    border: none;
    outline: none;
}
.close:hover{
    background-color: transparent;
}
#bg{
    position: absolute;
    inset: 0;
    background-color: #0000006a;
}
#content{
    background-color: var(--background);
    position: absolute;
    inset: 3rem;
    border-radius: 1rem;
    padding: 1rem;
}
#inner{
    width: 100%;
    height: 100%;
}
</style>