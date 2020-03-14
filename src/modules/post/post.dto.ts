import { Category} from '../category/category.entity'

//dto:data transform object 通过网络传输的内容
export class PostDto {
    readonly title: string;
    readonly body: string;
    readonly category:Category
}
  