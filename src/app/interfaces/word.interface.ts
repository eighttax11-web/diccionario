import { Category } from "./category.interface";

export interface Word {
    id:          number;
    name:        string;
    url:         string;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
    category:    Category;
}

