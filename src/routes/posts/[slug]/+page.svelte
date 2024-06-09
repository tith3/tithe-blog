<script lang="ts">
    import { page } from '$app/stores';
	import { applyClass } from '$lib/actions/applyClass';
    import { getPostFromSlug } from '$lib/posts';
    let slug = $page.params.slug;

    function getPost(){
        if (slug){

            return getPostFromSlug(slug)?.content;
        }
        else{
            return '<h1 class="h1 not-prose">UH OH</h1>'
        }
    }
</script> 

<div>
    <article class="prose" use:applyClass={'dark:text-on-surface-token'}>
        {@html getPost()}
    </article>
</div>
