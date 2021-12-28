export const updateObjectInArray = (items: any, itemId: number, objPropsName: any, newObjProps: any) => {
    return items.map((item: any) => item[objPropsName] === itemId ? {...item, ...newObjProps} : item)
}
