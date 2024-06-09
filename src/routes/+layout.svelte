<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);


	// Animation handling
    let headerText = 'tithe';
    let expandedText = '';
    let isHovered = false;
	
	onMount(() => {
        const repeatCount = Math.ceil(window.innerWidth / (headerText.length * 10)); // Approximation of the screen fill
        expandedText = headerText.repeat(repeatCount);
    });

    function handleMouseEnter() {
        //temp to ignore animation for now
		isHovered = false;
    }

    function handleMouseLeave() {
        isHovered = false;
    }

</script>

<!-- App Shell -->
<AppShell class = "font-mono">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center w-full max-w-prose" slotTrail="place-content-end">
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<div class="flex space-x-4 justify-between items-center">
				<strong class="text-2xl z-10 {isHovered ? 'absolute' : 'static'}"
                        on:mouseenter={handleMouseEnter}
                        on:mouseleave={handleMouseLeave}>
                    {isHovered ? expandedText : headerText}
                </strong>
				<div class='flex space-x-4 justify-center items-center'>
					<a class='btn variant-ringed card-hover' href="/"> home </a>
					<a class='btn variant-ringed card-hover' href="/posts/"> posts </a>
					<LightSwitch class="card-hover"/>
				</div>
			</div>
			<!-- <svelte:fragment slot="trail">(actions)</svelte:fragment> -->
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="w-full ml-2 mr-4">
		<div class="size-full bg-surface-50-900-token">
			<div class='max-w-prose mx-auto flex-col items-center bg-surface-50-900-token size-full gap-10 space-y-10 py-10 '>
				<slot />
			</div>
		</div>
	</div>
</AppShell>


<style>
    strong {
        transition: all 0.3s ease-in-out;
        white-space: nowrap;
        overflow: hidden;
        display: block; /* Ensuring it takes full width */
    }
</style>