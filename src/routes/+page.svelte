<script lang='ts'>
	import { Avatar } from "@skeletonlabs/skeleton";
	import PostPreviewContainer from '$lib/components/PostPreviewContainer.svelte';
	import { type PostMetadata, getPosts } from '$lib/posts';
	
</script>

	
	<Avatar src="https://pbs.twimg.com/profile_images/1741149508120322048/tVNiWJ8f_400x400.jpg"
	 
	 width="w-2/5"
	 class="mx-auto "
	 rounded="rounded-none"/>
	<p class="text-lg">Hi I'm tithe. By day I do software in traditional finance (boring). I'm mostly interested in web3, but this is intended to act as a repository for all of my terrible ideas, web3 or otherwise. Feel free to check out my github or twitter as well.</p>
	<PostPreviewContainer paginatePosts={false} numPosts={3}/>
