const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');
async function generatePostsJson() {
    const postsDirectory = path.join(__dirname, 'posts');
    const outputFilePath = path.join(__dirname, 'src/lib/postJson.ts');

    // Read all markdown files in the posts directory
    const files = fs.readdirSync(postsDirectory);
    const posts = files.filter(file => file.endsWith('.md')).map(file => {
        const filePath = path.join(postsDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        // Construct slug from file name
        const slug = file.replace(/\.md$/, '');

        // Return structured data
        return {
            title: data.title,
            author: data.author,
            publishDate: data['publish-date'],
            editDate: data['edit-date'],
            tags: data.tags,
            slug,
            content: marked.parse(content),
        };
    });

    // Generate the TypeScript file content
    const tsContent = `export const posts = ${JSON.stringify(posts, null, 2)};`;

    // Write to src/lib/postJson.ts
    fs.writeFileSync(outputFilePath, tsContent, 'utf8');
    console.log('Posts JSON has been generated!');
}

generatePostsJson().catch(console.error);
