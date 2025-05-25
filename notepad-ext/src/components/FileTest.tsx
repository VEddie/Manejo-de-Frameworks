import {
    Button,
    Container,
    FileUpload,
    FileUploadItemContent,
    useFileUpload,
} from '@chakra-ui/react';

const FileTest = () => {
    const fileUpload = useFileUpload();

    return (
        <Container>
            <FileUpload.RootProvider value={fileUpload}>
                <FileUpload.HiddenInput />
                <FileUpload.Trigger asChild>
                    <Button variant='outline' size='sm'>
                        Upload file
                    </Button>
                </FileUpload.Trigger>
                <FileUploadItemContent />
            </FileUpload.RootProvider>
            <Button onClick={() => {
                console.log(fileUpload.acceptedFiles[0]);
                let fr = new FileReader();
                fr.onload = () => {
                    const content = fr.result;
                    console.log(content);
                }

                fr.readAsText(fileUpload.acceptedFiles[0], 'utf-8');
            }}>Test</Button>
        </Container>
    );
};

export default FileTest;
