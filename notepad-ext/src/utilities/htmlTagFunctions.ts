import { Format } from '@/interfaces/Format';

const formats: Format[] = [
    { type: '**', openTag: '<b>', closeTag: '</b>' },
    { type: '--', openTag: '<i>', closeTag: '</i>' },
    { type: '__', openTag: '<u>', closeTag: '</u>' },
    { type: '~~', openTag: '<del>', closeTag: '</del>' }
];

const convertFormatToHTMLTags = (text: string, format: Format): string => {
    let htmlArray: string[] = [];

    text.split(format.type).forEach((word, index) => {
        if (index % 2 === 0) {
            htmlArray.push(word.trim());
            return;
        }

        htmlArray.push(`${format.openTag}${word}${format.closeTag}`.trim());
    });

    return htmlArray.join(' ');
};

const processTextToHTML = (text: string) => {
    let processedText = text;
    formats.forEach((format) => (processedText = convertFormatToHTMLTags(processedText, format)));

    return processedText;
};

export default processTextToHTML;
