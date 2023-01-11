<script>
    import BiggerPicture from 'bigger-picture/svelte'
	import { onMount } from 'svelte';
  
import items from '/src/lib/data.json'
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
{#each items as item}
    <a
        on:click={openBiggerPicture}
        href={item.img}
        data-img={item.img}
        data-thumb={item.thumb}
        data-height={item.height}
        data-width={item.width}
        data-alt={item.alt}
    >
        <img src={item.thumb} alt={item.alt} />
    </a>
{/each}