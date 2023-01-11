<script>
	import { onMount } from 'svelte';
    import BiggerPicture from 'bigger-picture/svelte'
	import 'bigger-picture/css'
	import { masonry } from '/src/lib/masonry'
    import items from '/src/images/data.json'

    let bp
    function openBiggerPicture(e) {
        e.preventDefault();
        bp.open({
            items: this.parentElement.children,
            el: this,
        });
    }
    onMount(() => {
        bp = BiggerPicture({ target: document.body });
    });
</script>

<p>adding <code>data-sveltekit-preload-data="off"</code> here solved the problem.</p>

<section use:masonry data-sveltekit-preload-data="off">

    {#each items as item}
        <a
            on:click={openBiggerPicture}
            href={item.img}
            data-img={item.img}
            data-thumb={item.thumb}
        >
            <img src={item.thumb} alt={item.alt} />
        </a>
    {/each}
</section>

<style>
    p {
        width: 100%;
        text-align: center;
    }
	section {
		margin: 25px 0 35px;
	}
	img {
		max-width: 100%;
		width: 100%;
		vertical-align: bottom;
	}
</style>
