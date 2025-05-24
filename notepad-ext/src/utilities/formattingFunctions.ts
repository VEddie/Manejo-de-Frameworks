export const emboldenText = (text: string, selectedText: string) => {
    return text.replace(selectedText, `**${selectedText}**`);
};

export const itacilizeText = (text: string, selectedText: string) => {
    return text.replace(selectedText, `__${selectedText}__`);
};

export const underlineText = (text: string, selectedText: string) => {
    return text.replace(selectedText, `--${selectedText}--`);
};
