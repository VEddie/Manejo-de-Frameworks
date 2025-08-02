import { CodeFile } from '@/App';
import { CodeBlock, createShikiAdapter } from '@chakra-ui/react/code-block';
import { HighlighterGeneric } from 'shiki';
import { CODE_TYPES, IMG_TYPES, MEDIA_TYPES } from '../constants/constants';
import { Image } from '@chakra-ui/react';

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

const Visualizer = ({ fileData }: Props) => {
    if (CODE_TYPES.includes(fileData.language))
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

    else if(IMG_TYPES.includes(fileData.language))
        return <Image src={fileData.path}/>

    else if(MEDIA_TYPES.includes(fileData.language))
        return <video src={fileData.path} autoPlay></video>
};
export default Visualizer;
