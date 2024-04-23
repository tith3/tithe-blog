import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostMetadata {
    title: string;
    author: string;
    publishDate: string;
    editDate: string;
    tags: string[];
    slug: string;
    content: string;  // Ensure this is strictly a string
}

const postsDirectory = path.join('src/lib/posts');

export function getPosts(): PostMetadata[] {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        console.log(data);
        return {
            title: data.title,
            author: data.author,
            publishDate: data['publish-date'],
            editDate: data['edit-date'],
            tags: data.tags,
            slug: filename.replace(/\.md$/, ''),
            content: marked(content) as string  // Cast the content to string
        };
    }).sort((a, b) => b.publishDate.localeCompare(a.publishDate)); // Sort by date
}

export function getTags(): string[] {
    const posts = getPosts();
    return Array.from(new Set(posts.flatMap(post => post.tags)));
}