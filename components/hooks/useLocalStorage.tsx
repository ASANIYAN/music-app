export const SetItem = (key: string, initialValue: any): boolean => {
    try {
       localStorage.setItem(key, JSON.stringify(initialValue));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const GetItem = (key: string) => {
    const value = localStorage.getItem(key);
    if (value === null) {
        return undefined;
    }
    try {
        return JSON.parse(value);
    } catch (error) {
        console.log(error);
        return undefined;
    }
};