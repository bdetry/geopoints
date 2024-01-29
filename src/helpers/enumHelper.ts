
export function isOfEnum<T>(enumObj: { [id: string]: any }, value: any): value is T {
    return Object.values(enumObj).includes(value);
}