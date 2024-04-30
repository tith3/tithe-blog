
<script lang='ts'>
    import PostPreview from "$lib/components/PostPreview.svelte";
    import { getPostsByTags,  type PostMetadata, getTags } from "$lib/posts";
    import { Paginator } from "@skeletonlabs/skeleton";
    //display posts only with the following tags
    export let tags: string[] = getTags();

    //number of posts to display (per page if paginated)
    export let numPosts: number = 5;

    //whether to paginate posts
    export let paginatePosts: boolean = false;

    function sortPostsByPublishDate(posts: PostMetadata[]): PostMetadata[] {
        return posts.sort((a, b) => {
            return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        });
    }

    let posts = sortPostsByPublishDate(getPostsByTags(tags));
 
    let paginationSettings = {
        page: 0,
        limit: numPosts,
        size: posts.length,
        amounts: [5, 10, 15, 20, 30, 50]
        };
    

    $: paginatedSource = posts.slice(
        paginationSettings.page * paginationSettings.limit,
        paginationSettings.page * paginationSettings.limit + paginationSettings.limit
    );
</script>

<div class="space-y-4 flex flex-col px-1" >
        {#each paginatedSource as post, i}
            <PostPreview {post}/>
        {/each}
        {#if paginatePosts}
            <Paginator 
                bind:settings={paginationSettings}
                showFirstLastButtons="{false}"
                showPreviousNextButtons="{true}"
                justify="justify-between"
             />
        {:else}
            <a class="btn btn-sm variant-ringed w-fit self-center card-hover" href="/posts" >All Posts -&#62;</a>
        {/if}
    
</div>