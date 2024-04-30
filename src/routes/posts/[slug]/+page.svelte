<script lang="ts">
    import { page } from '$app/stores';
    import { getPostFromSlug } from '$lib/posts';
    let slug = $page.params.slug;

    function getPost(){
        if (slug){
            return getPostFromSlug(slug)?.content;
        }
        else{
            return '<h1>UH OH</h1>'
        }
    }
</script> 

<div>
    {@html getPost()}
</div>
