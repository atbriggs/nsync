
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewRecipeInput {
    title: string;
    description?: Nullable<string>;
    ingredients: string[];
}

export interface Recipe {
    id: string;
    title: string;
    description?: Nullable<string>;
    creationDate: Date;
    ingredients: string[];
}

export interface IQuery {
    recipe(id: string): Recipe | Promise<Recipe>;
    recipes(skip?: Nullable<number>, take?: Nullable<number>): Recipe[] | Promise<Recipe[]>;
}

export interface IMutation {
    addRecipe(newRecipeData: NewRecipeInput): Recipe | Promise<Recipe>;
    removeRecipe(id: string): boolean | Promise<boolean>;
}

export interface ISubscription {
    recipeAdded(): Recipe | Promise<Recipe>;
}

type Nullable<T> = T | null;
