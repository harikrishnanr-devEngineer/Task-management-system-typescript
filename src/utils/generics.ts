export function getFirstItem<T>(items: T[]): T {
    return items[0];
}

export function getLastItem<T>(items:T[]): T{
    return items[items.length - 1];
}