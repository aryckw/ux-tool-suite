import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '..', 'src', 'docs', 'routes', 'docs');

function updateFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if CodeBlock is already imported
  if (!content.includes("import { CodeBlock }")) {
    content = `import { CodeBlock } from '@/lib/components/ui/code-block';\n${content}`;
  }

  // Replace pre and code tags with CodeBlock component
  content = content.replace(
    /<pre className="[^"]*">[\s\S]*?<code className="[^"]*">\{`([\s\S]*?)`\}<\/code>[\s\S]*?<\/pre>/g,
    (_, code) => {
      // Detect the language based on the code content (you might want to improve this logic)
      const language = code.includes('import React') ? 'jsx' : 'typescript';
      return `<CodeBlock language="${language}" code={\`${code}\`} />`;
    }
  );

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (path.extname(file) === '.tsx') {
      updateFile(filePath);
    }
  }
}

processDirectory(docsDir);
console.log('All documentation files have been updated.');