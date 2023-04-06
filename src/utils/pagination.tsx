import _ from "lodash";

export const paginate = (items: any, pageNumber: number, pageSize: number | undefined)=>{
    const startIndex = (pageNumber - 1)* pageSize;
    return _(items).slice(startIndex).take(pageSize).value()
}