export const getKeys = <T>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
