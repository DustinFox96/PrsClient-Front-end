import { Product } from "src/app/product/product.class"
import { Request } from "../request/request.class"

export class RequestLines {
    id: number = 0

    requestId: number = 0
    request: Request = null
    
    productId: number = 0
    product: Product = null

    quantity: number = 0
}
