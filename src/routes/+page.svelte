<script lang='ts'>
	import { Avatar } from "@skeletonlabs/skeleton";
	import {getPosts} from '$lib/posts';
	import PostPreview from '$lib/components/PostPreview.svelte';
</script>

	
	<Avatar src="https://pbs.twimg.com/profile_images/1741149508120322048/tVNiWJ8f_400x400.jpg"
	 
	 width="w-1/2"
	 class="mx-auto "
	 rounded="rounded-none"/>
	<p class="text-lg">Hi I'm tithe. By day I do software in traditional finance (boring). I'm mostly interested in web3, but this is intedended to act as a repository for all of my terrible ideas, web3 or otherwise. Make yourself at home.</p>
	{#each getPosts() as post}
		<PostPreview {post}/>
	{/each}
