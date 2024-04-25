<script lang="ts">
    import type { PostMetadata } from '$lib/posts';
    export let post: PostMetadata;
</script>

<a class ="block card card-hover p-4 flex space-x-2" href="/posts/{post.slug}">
    <div class="flex flex-col grow">
        <h2 class="text-lg font-bold">{post.title}</h2>
        <!-- Post content truncated to 2 lines ending in ... if truncated -->
        <p class="text-sm line-clamp-2">{@html post.content.split('\n').slice(0, 2).join(' ')}</p>
    </div>
    <p> {post.publishDate} </p>
</a>
