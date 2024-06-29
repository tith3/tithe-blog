<script lang=ts>
    import { getTags } from '$lib/posts';
</script>

<div class="card p-4">
    <h2 class="text-lg font-bold">Tags</h2>
    <div class="flex flex-col space-x-2">
        {#each getTags() as tag}
            <p>{tag}</p>
        {/each}
    </div>
</div>