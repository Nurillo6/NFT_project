export const FormatTime = (time: any) => {
        return time.toString().padStart(2, "0");
};
export const shortenId = (input: string):string => {
    return input.replace(/^(.{6}).+(.{4})$/, "$1...$2");
}