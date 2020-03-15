import { createParamDecorator } from "@nestjs/common";
import { ListOptionsInterface } from "../../core/interfaces/list-options.interface";

export const ListOptions = createParamDecorator((data:Partial<ListOptionsInterface> = {}, req) => {
    let {categories,page,limit} = req.query;
    if (categories){
        categories = categories.split("-");
    }
    if(page){
        page = parseInt(page)
    }else{
        page = 1;
    }
    if (limit) {
        limit = parseInt(limit)
    } else if (limit === undefined && data.limit){
        limit = data.limit;
    }
    else{
        limit = 10;
    }
    return {
        categories,
        limit,
        page
    }
});