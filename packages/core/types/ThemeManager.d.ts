/// <reference types="react" />
import { ThemeObject, Themes } from './types';
declare type ThemeListener = (name: string | null, themeManager: ThemeManager) => void;
export declare type SetActiveThemeProps = {
    className?: string;
    parentManager?: ThemeManager | null;
    name?: string | null;
    theme?: any;
};
export declare class ThemeManager {
    #private;
    name: string | null;
    keys: Map<any, Set<string>>;
    listeners: Map<any, Function>;
    themeListeners: Set<ThemeListener>;
    parentManager: ThemeManager | null;
    theme: ThemeObject | null;
    className: string | null;
    get parentName(): string | null;
    get fullName(): string;
    update({ name, theme, className, parentManager }?: SetActiveThemeProps): boolean;
    getNextTheme(props?: {
        themes?: Themes;
        name?: string | null;
        componentName?: string | null;
    }, debug?: boolean): {
        name: string;
        theme: Partial<import("./types").TamaguiBaseTheme> & {
            [key: string]: import("./types").VariableVal;
        };
        className: string;
    } | {
        name: string | null;
        theme: (Partial<import("./types").TamaguiBaseTheme> & {
            [key: string]: import("./types").VariableVal;
        }) | null;
        className?: undefined;
    };
    track(uuid: any, keys: Set<string>): void;
    notifyListeners(): void;
    onChangeTheme(cb: ThemeListener): () => void;
    onUpdate(uuid: any, cb: Function): () => void;
}
export declare const ThemeManagerContext: import("react").Context<ThemeManager | null>;
export declare const emptyManager: ThemeManager;
export {};
//# sourceMappingURL=ThemeManager.d.ts.map