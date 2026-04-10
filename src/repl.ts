export function cleanInput(input: string): string[] {
    let cleanText = input.split(" ");
    for (let i = 0; i < cleanText.length; i++) {
        cleanText[i] = cleanText[i].trimStart().trimEnd().toLowerCase();
    }
    return cleanText;
}