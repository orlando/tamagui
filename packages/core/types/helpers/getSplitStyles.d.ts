import { ViewStyle } from 'react-native';
import { MediaKeys, PseudoStyles, SplitStyleState, StackProps, StaticConfigParsed, ThemeObject } from '../types';
export declare type SplitStyles = ReturnType<typeof getSplitStyles>;
export declare type ClassNamesObject = Record<string, string>;
export declare type SplitStyleResult = ReturnType<typeof getSplitStyles>;
declare type StyleSplitter = (props: {
    [key: string]: any;
}, staticConfig: StaticConfigParsed, theme: ThemeObject, state: SplitStyleState & {
    keepVariantsAsProps?: boolean;
}, defaultClassNames?: any) => {
    pseudos: PseudoStyles;
    medias: Record<MediaKeys, ViewStyle>;
    style: ViewStyle;
    classNames: ClassNamesObject;
    rulesToInsert: [string, string][];
    viewProps: StackProps;
};
export declare const getSplitStyles: StyleSplitter;
export declare const insertSplitStyles: StyleSplitter;
export declare const useSplitStyles: StyleSplitter;
export declare const getSubStyle: (styleIn: Object, staticConfig: StaticConfigParsed, theme: ThemeObject, props: any, state: SplitStyleState, avoidDefaultProps?: boolean) => ViewStyle;
export declare function normalizeStyleObject(style: any): void;
export {};
//# sourceMappingURL=getSplitStyles.d.ts.map