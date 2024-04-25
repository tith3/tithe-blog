<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { goto } from '$app/navigation';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center w-full max-w-prose" slotTrail="place-content-end">
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<div class="flex space-x-4 justify-between items-center">
				<strong class="text-2xl"> tithe </strong>
				<div class='flex space-x-4 justify-center items-center'>
					<a class='btn variant-ghost' href="/"> home </a>
					<a class='btn variant-ghost' href="/posts/"> posts </a>
				</div>
			</div>
			<!-- <svelte:fragment slot="trail">(actions)</svelte:fragment> -->
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="w-full mx-2">
		<div class="size-full bg-surface-50-900-token">
			<div class='max-w-prose mx-auto flex-col items-center bg-surface-50-900-token size-full gap-10 space-y-20 py-20'>
				<slot />
			</div>
		</div>
	</div>
</AppShell>
