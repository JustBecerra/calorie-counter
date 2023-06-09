export interface FoodRow {
    Survey_Food_Code: number,
    Display_Name: string,
    cond_1_code: number,
    cond_1_name: string,
    cond_2_code: number,
    cond_2_name: string,
    cond_3_code: number,
    cond_3_name: string,
    cond_4_code: number,
    cond_4_name: string,
    cond_5_code: number,
    cond_5_name: string
}

export interface CondimentType {
    survey_food_code: number,
    Display_Name: string,
    condiment_portion_size: string,
    condiment_portion_code: number,
    condiment_grains: number,
    condiment_whole_grains: number,
    condiment_vegetables: number,
    condiment_dkgreen: number,
    condiment_orange: number,
    condiment_starchy_vegetables: number,
    condiment_other_vegetables: number,
    condiment_fruits: number,
    condiment_milk: number,
    condiment_meat: number,
    condiment_soy: number,
    condiment_drybeans_peas: number,
    condiment_oils: number,
    condiment_solid_fats: number,
    condiment_added_sugars: number,
    condiment_alcohol: number,
    condiment_calories: number,
    condiment_saturated_fats: number
}

export type ConsumedType = {
    Calories: number,
    Saturated_Fats: number,
    Added_Sugars: number,
    Oils: number
}

export interface TableType {
    Food_Code: number,
    Display_Name: string,
    Portion_Default: number,
    Portion_Amount: number,
    Portion_Display_Name: string,
    Factor: number,
    Increment: number,
    Multiplier: number,
    Grains: number,
    Whole_Grains: number,
    Vegetables: number,
    Orange_Vegetables: number,
    Drkgreen_Vegetables: number,
    Starchy_vegetables: number,
    Other_Vegetables: number,
    Fruits: number,
    Milk: number,
    Meats: number,
    Soy: number,
    Drybeans_Peas: number,
    Oils: number,
    Solid_Fats: number,
    Added_Sugars: number,
    Alcohol: number,
    Calories: number,
    Saturated_Fats: number
}