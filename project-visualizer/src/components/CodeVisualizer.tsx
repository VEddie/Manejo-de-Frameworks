import { CodeFile } from '@/App';
import { CodeBlock, createShikiAdapter } from '@chakra-ui/react/code-block';
import { HighlighterGeneric } from 'shiki';

interface Props {
    fileData: CodeFile;
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
    async load() {
        const { createHighlighter } = await import('shiki');
        return createHighlighter({
            langs: [
                'tsx',
                'ts',
                'scss',
                'css',
                'html',
                'bash',
                'json',
                'python',
                'py',
                'js',
                'text',
                'md',
            ],
            themes: ['github-dark', 'github-light'],
        });
    },
});

const CodeVisualizer = ({ fileData }: Props) => {
    if (fileData.code)
        return (
            <CodeBlock.AdapterProvider value={shikiAdapter}>
                <CodeBlock.Root
                    code={fileData.code}
                    language={fileData.language}
                    meta={{ showLineNumbers: true }}
                >
                    <CodeBlock.Content>
                        <CodeBlock.Code>
                            <CodeBlock.CodeText />
                        </CodeBlock.Code>
                    </CodeBlock.Content>
                </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
        );
};
export default CodeVisualizer;
