import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlock } from '../code-block';

describe('CodeBlock', () => {
  it('renders the code with syntax highlighting', () => {
    const code = `function hello() {
  console.log('Hello, world!');
}`;

    render(<CodeBlock language="javascript" code={code} />);

    const codeElement = screen.getByText(/function hello/);
    expect(codeElement).toBeInTheDocument();

    // Check if syntax highlighting is applied
    const syntaxHighlightingElement = screen.getByRole('code');
    expect(syntaxHighlightingElement).toHaveClass('language-javascript');
  });

  it('renders different languages correctly', () => {
    const pythonCode = `def greet(name):
    print(f"Hello, {name}!")`;

    render(<CodeBlock language="python" code={pythonCode} />);

    const codeElement = screen.getByText(/def greet/);
    expect(codeElement).toBeInTheDocument();

    const syntaxHighlightingElement = screen.getByRole('code');
    expect(syntaxHighlightingElement).toHaveClass('language-python');
  });
});