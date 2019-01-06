export const capitalize = word => word.replace(/^\w/, c => c.toUpperCase());

export const splitCamelCase = word => word.replace(/([^A-Z])([A-Z])/g, '$1 $2');