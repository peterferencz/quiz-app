<script>
    import { preferences } from "../stores/preferences";

    $:{
        document.body.classList.toggle('dark-mode', $preferences.darktheme)
    }
</script>
<div class="header">
    <img src="./icon_settings.svg" alt="gears">
    <h1>Settings</h1>
</div>
<div class="horizontal">
    <p>Correct answer timeout</p>
    <input bind:value={$preferences.correctTimeout} type="number">
</div>
<div class="horizontal">
    <p>Wrong answer timeout</p>
    <input bind:value={$preferences.wrongTimeout} type="number">
</div>
<div class="horizontal">
    <p>Confetti?</p>
    <input bind:checked={$preferences.confetti} type="checkbox">
</div>
<div class="horizontal">
    <p>Dark theme</p>
    <input bind:checked={$preferences.darktheme} type="checkbox">
</div>

<style>
    img{
        filter: var(--filter);
    }
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        widows: 100%;
    }
    .horizontal{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;
    }
    input{
        outline: none !important;
        padding: .5rem;
        background-color: var(--background);
		color: var(--text);
        border: 1px solid var(--text);
    }
    /* button{
        border: 1px dashed gray;
        padding: .5rem;
        background-color: transparent;
		color: var(--text);
    }
    button:hover{
        background-color: var(--background-hover);
    } */
</style>