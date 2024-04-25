import { posts } from '$lib/postJson';


export interface PostMetadata {
    title: string;
    author: string;
    publishDate: string;
    editDate: string;
    tags: string[];
    slug: string;
    content: string;  // Ensure this is strictly a string
}


export function getPosts() {
    //deseriliaze the JSON to an array of PostMetadata objects
    return posts as PostMetadata[];
}

export function getPostFromSlug(slug: string) {
    return getPosts().find((post) => post.slug === slug);
}

export function getTags() {
    const posts = getPosts();
    const tags = posts.flatMap((post) => post.tags);
    return Array.from(new Set(tags));
}

export function getPostsByTags(tag: string[]){
    return getPosts().filter((post) => post.tags.some((t) => tag.includes(t)));
}