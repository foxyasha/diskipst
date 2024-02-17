const replaceArgs = (url: string, args: Record<string, string>): string => {
    return Object.keys(args).reduce((url, arg) => {
        return url.replace(arg, args[arg])
    }, url)
}

export {replaceArgs}