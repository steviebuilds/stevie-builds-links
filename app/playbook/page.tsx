import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default async function PlaybookPage() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'public', 'content', 'playbook.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  
  // Convert markdown to HTML
  const html = marked(markdown);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}