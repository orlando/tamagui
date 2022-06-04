export declare const IS_VARIABLE_SYMBOL = "__isVariable__";
export declare class Variable {
    [IS_VARIABLE_SYMBOL]: boolean;
    name: string;
    val: string | number;
    variable: string | number;
    key: string;
    constructor(props: VariableIn);
    toString(): string;
}
declare type VariableIn = {
    val: string | number | Variable;
    name: string;
    key: string;
};
export declare const createVariable: (props: VariableIn) => Variable;
export declare function isVariable(v: Variable | any): v is Variable;
export declare function getVariableValue(v: Variable | any): any;
export declare function getVariableName(v: Variable | any): any;
export declare const createCSSVariable: (val: string, includeVar?: boolean) => string;
export {};
//# sourceMappingURL=createVariable.d.ts.map