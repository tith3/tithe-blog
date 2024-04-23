<script lang="ts">
    import type { PostMetadata } from '$lib/posts';
    export let post: PostMetadata;
</script>

<a class ="block card card-hover p-4" href="/posts/{post.slug}">
    <h2 class="text-2xl font-bold">{post.title}</h2>
    <!-- Post content truncated to 2 lines ending in ... if truncated -->
    <p class="text-lg">{post.content.split('\n').slice(0, 2).join(' ')}</p>
</a>
