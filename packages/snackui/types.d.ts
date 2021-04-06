/// <reference lib="dom" />
/// <reference lib="esnext" />
declare module "snackui" {
    export const isWeb: boolean;
    export const isWebIOS: false;
}

declare module "snackui" {
    type DebounceSettings = {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    };
    export function useDebounce<A extends (...args: any) => any, DebouncedFn extends A & {
        cancel: () => void;
    }>(fn: A, wait: number, options?: DebounceSettings, mountArgs?: any[]): DebouncedFn;
    export function useDebounceValue<A>(val: A, amt?: number): A;
}

declare module "snackui" {
    export function useConstant<T>(fn: () => T): T;
}

declare module "snackui" {
    export const useDebounceEffect: (effect: Function, amount: number, args: any[]) => void;
}

declare module "snackui" {
    export function useForceUpdate(): Function;
}

declare module "snackui" {
    export function useGet<A extends any>(currentValue: A): () => A;
    export function useGetFn<Args extends any[], Returns extends any>(fn: (...args: Args) => Returns): (...args: Args) => Returns;
    export function useStateFn<A extends any>(currentValue: A): readonly [
        () => A | undefined,
        import("react").Dispatch<import("react").SetStateAction<A>>
    ];
}

declare module "snackui" {
    import { MutableRefObject } from "react";
    export function useLazyRef<T>(fn: () => T): MutableRefObject<T>;
}

declare module "snackui" {
    export const matchMedia: (((query: string) => MediaQueryList) & typeof globalThis.matchMedia) | (() => {
        addEventListener(): void;
        removeEventListener(): void;
        matches: boolean;
    });
}

declare module "snackui" {
    type MediaQueryObject = {
        [key: string]: string | number | string;
    };
    type MediaQueryShort = MediaQueryObject;
    export const defaultMediaQueries: {
        xs: {
            maxWidth: number;
        };
        notXs: {
            minWidth: number;
        };
        sm: {
            maxWidth: number;
        };
        notSm: {
            minWidth: number;
        };
        md: {
            minWidth: number;
        };
        lg: {
            minWidth: number;
        };
        xl: {
            minWidth: number;
        };
        xxl: {
            minWidth: number;
        };
        short: {
            maxHeight: number;
        };
        tall: {
            minHeight: number;
        };
        hoverNone: {
            hover: string;
        };
        pointerCoarse: {
            pointer: string;
        };
    };
    export type MediaQueryState = {
        [key in keyof typeof defaultMediaQueries]: boolean;
    };
    export type MediaQueryKey = keyof MediaQueryState;
    export type MediaQueries = {
        [key in MediaQueryKey]: MediaQueryShort;
    };
    export const getMedia: () => {
        xs: boolean;
        notXs: boolean;
        sm: boolean;
        notSm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
        xxl: boolean;
        short: boolean;
        tall: boolean;
        hoverNone: boolean;
        pointerCoarse: boolean;
    };
    export type ConfigureMediaQueryOptions = {
        queries: MediaQueries;
        defaultActive?: MediaQueryKey[];
    };
    export const configureMedia: ({ queries, defaultActive, }: ConfigureMediaQueryOptions) => void;
    export const useMedia: () => {
        xs: boolean;
        notXs: boolean;
        sm: boolean;
        notSm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
        xxl: boolean;
        short: boolean;
        tall: boolean;
        hoverNone: boolean;
        pointerCoarse: boolean;
    };
    export const mediaObjectToString: (query: string | MediaQueryObject) => string;
}

declare module "snackui" {
    import { RefObject } from "react";
    export type UseNodeProps<A> = {
        ref?: RefObject<A>;
        map: (node: A) => HTMLElement | null;
    };
    export function useNode<A extends HTMLElement>(props?: UseNodeProps<A>): {
        current: any;
        ref: import("react").MutableRefObject<any>;
    };
}

declare module "snackui" {
    export function useOnMount(cb: Function): void;
}

declare module "snackui" {
    export function useOnUnmount(cb: () => void): void;
}

declare module "snackui" {
    export const useOverlay: ({ zIndex, isOpen, onClick, pointerEvents, }: {
        isOpen: boolean;
        onClick?: Function | undefined;
        zIndex?: number | undefined;
        pointerEvents?: boolean | undefined;
    }) => void;
}

declare module "snackui" {
    export function usePrevious<A>(value: A): A;
}

declare module "snackui" {
    import { RefObject } from "react";
    const useRefMounted: () => RefObject<boolean>;
    export default useRefMounted;
}

declare module "snackui" {
    export function useScrollPosition<A extends HTMLDivElement, T extends React.RefObject<A>>(ref: T, cb: (ref: A | null) => any): void;
}

declare module "snackui" {
    import React from "react";
    export interface ThemeObject {
        [key: string]: any;
    }
    export interface Themes {
        [key: string]: ThemeObject;
    }
    type ThemeName = keyof Themes;
    let themes: Themes;
    export const invertStyleVariableToValue: {
        [key: string]: {
            [subKey: string]: string;
        };
    };
    export const configureThemes: (userThemes: Themes) => void;
    class ActiveThemeManager {
        name: string;
        keys: Map<any, Set<string>>;
        listeners: Map<any, Function>;
        setActiveTheme(name: string): void;
        track(uuid: any, keys: Set<string>): void;
        update(): void;
        onUpdate(uuid: any, cb: Function): () => void;
    }
    export const ActiveThemeContext: React.Context<ActiveThemeManager>;
    export const useThemeName: () => string;
    export const useTheme: () => ThemeObject;
    export const ThemeProvider: (props: {
        themes: Themes;
        defaultTheme: ThemeName;
        children?: any;
    }) => JSX.Element;
    export type ThemeProps = {
        name: ThemeName | null;
        children?: any;
    };
    export const Theme: (props: ThemeProps) => any;
}

declare module "snackui" {
    import React from "react";
    export const useLazyEffect: typeof React.useEffect;
}

declare module "snackui" {
    type WindowSize = [
        number,
        number
    ];
    export function useWindowSize({ adjust, }?: {
        adjust?: (x: WindowSize) => WindowSize;
    }): WindowSize;
}

declare module "snackui" {
    import { Ref } from "react";
    type OptionalRef<T> = Ref<T> | undefined;
    export function combineRefs<T>(...refs: [
        OptionalRef<T>,
        OptionalRef<T>,
        ...Array<OptionalRef<T>>
    ]): Ref<T>;
}

declare module "snackui" {
    import { TextStyle, ViewStyle } from "react-native";
    export type StaticComponent<A = any> = ((props: A) => JSX.Element) & {
        staticConfig: StaticConfig;
    };
    export type StaticConfig = {
        isText?: boolean;
        validStyles?: {
            [key: string]: boolean;
        };
        defaultProps?: any;
        expansionProps?: {
            [key: string]: ViewStyle | TextStyle | ((props: any) => ViewStyle | TextStyle);
        };
    };
    export function extendStaticConfig(a: any, config?: StaticConfig): {
        isText: any;
        validStyles: any;
        defaultProps: any;
        expansionProps: any;
    } | undefined;
}

declare module "snackui" {
    import React from "react";
    export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | number | boolean | string;
    export type SpacerProps = {
        size?: Spacing;
        flex?: boolean | number;
        direction?: 'vertical' | 'horizontal' | 'both';
    };
    export const Spacer: React.MemoExoticComponent<(props: SpacerProps) => JSX.Element>;
}

declare module "snackui" {
    import { ViewStyle } from "react-native";
    export function spacedChildren({ children, spacing, flexDirection, }: {
        children: any;
        spacing?: Spacing;
        flexDirection?: ViewStyle['flexDirection'];
    }): any;
}

declare module "snackui" {
    import { RefObject } from "react";
    import { GestureResponderEvent, View, ViewProps, ViewStyle } from "react-native";
    export type StackProps = Omit<Omit<ViewStyle, 'display'> & Omit<ViewProps, 'display'> & {
        ref?: RefObject<View | HTMLElement> | ((node: View | HTMLElement) => any);
        animated?: boolean;
        fullscreen?: boolean;
        children?: any;
        hoverStyle?: ViewStyle | null;
        pressStyle?: ViewStyle | null;
        focusStyle?: ViewStyle | null;
        onHoverIn?: (e: MouseEvent) => any;
        onHoverOut?: (e: MouseEvent) => any;
        onPress?: (e: GestureResponderEvent) => any;
        onPressIn?: (e: GestureResponderEvent) => any;
        onPressOut?: (e: GestureResponderEvent) => any;
        spacing?: Spacing;
        cursor?: string;
        pointerEvents?: string;
        userSelect?: string;
        className?: string;
        disabled?: boolean;
        contain?: 'none' | 'strict' | 'content' | 'size' | 'layout' | 'paint' | string;
        display?: 'inherit' | 'none' | 'inline' | 'block' | 'contents' | 'flex' | 'inline-flex';
    }, 'alignContent' | 'backfaceVisibility'>;
    export const AbsoluteVStack: StaticComponent<StackProps>;
    export const HStack: StaticComponent<StackProps>;
    export const VStack: StaticComponent<StackProps>;
}

declare module "snackui" {
    import { PerpectiveTransform, RotateTransform, RotateXTransform, RotateYTransform, RotateZTransform, ScaleTransform, ScaleXTransform, ScaleYTransform, SkewXTransform, SkewYTransform, TranslateXTransform, TranslateYTransform } from "react-native";
    type AnimatableProps = Partial<Pick<StackProps, 'backgroundColor' | 'borderColor' | 'opacity'> & PerpectiveTransform & RotateTransform & RotateXTransform & RotateYTransform & RotateZTransform & ScaleTransform & ScaleXTransform & ScaleYTransform & TranslateXTransform & TranslateYTransform & SkewXTransform & SkewYTransform>;
    export type AnimatedStackProps = StackProps & {
        animateState?: 'in' | 'out';
        velocity?: number;
        animation?: {
            from: AnimatableProps;
            to: AnimatableProps;
        };
    };
    export const AnimatedVStack: ({ animateState, animation, velocity, children, ...props }: AnimatedStackProps) => JSX.Element;
}

declare module "snackui" {
    export type BlurViewProps = {
        blurAmount?: number;
        blurRadius?: number;
        fallbackBackgroundColor?: string;
        blurType?: 'xlight' | 'light' | 'dark' | 'chromeMaterial' | 'material' | 'thickMaterial' | 'thinMaterial' | 'ultraThinMaterial' | 'chromeMaterialDark' | 'materialDark' | 'thickMaterialDark' | 'thinMaterialDark' | 'ultraThinMaterialDark' | 'chromeMaterialLight' | 'materialLight' | 'thickMaterialLight' | 'thinMaterialLight' | 'ultraThinMaterialLight' | 'regular' | 'prominent' | 'extraDark';
        downsampleFactor?: number;
    } & StackProps;
    export function BlurView({ children, borderRadius, fallbackBackgroundColor, blurRadius, ...props }: BlurViewProps): JSX.Element;
}

declare module "snackui" {
    export type BoxProps = StackProps;
    export function Box(props: BoxProps): JSX.Element;
    export namespace Box {
        var staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    }
}

declare module "snackui" {
    import { ReactElement } from "react";
    export const themeable: ThemeableHOC;
    export interface ThemeableHOC {
        <R extends ReactElement<any, any> | null, P extends {
            theme?: any;
        } = {}>(component: (props: P) => R): (props: P) => R;
    }
}

declare module "snackui" {
    import React from "react";
    import { TextProps as ReactTextProps, TextStyle } from "react-native";
    export type TextProps = Omit<ReactTextProps, 'style'> & Omit<TextStyle, 'display' | 'backfaceVisibility'> & {
        display?: TextStyle['display'] | 'inherit';
        ellipse?: boolean;
        selectable?: boolean;
        children?: any;
        className?: string;
        pointerEvents?: string;
        cursor?: string;
        userSelect?: string;
    };
    export const Text: React.MemoExoticComponent<(allProps: TextProps) => JSX.Element>;
    export const useTextStyle: (allProps: TextProps, onlyTextSpecificStyle?: boolean | undefined, memo?: boolean | undefined) => readonly [
        TextProps,
        Readonly<{}>
    ];
}

declare module "snackui" {
    export type ButtonProps = StackProps & {
        textProps?: Omit<TextProps, 'children'>;
        noTextWrap?: boolean;
        theme?: string | null;
        icon?: JSX.Element | null;
    };
    export const Button: (props: ButtonProps) => JSX.Element;
}

declare module "snackui" {
    export type CircleProps = StackProps & {
        size: number;
    };
    export const Circle: ({ size, ...props }: CircleProps) => JSX.Element;
}

declare module "snackui" {
    export function Color(props: {
        of: string;
    }): JSX.Element;
}

declare module "snackui" {
    import React from "react";
    export const Divider: React.MemoExoticComponent<({ flex, vertical, height, width, opacity, flexLine, backgroundColor, noGap, ...rest }: Omit<StackProps, "flex"> & {
        flexLine?: number | undefined;
        flex?: boolean | undefined;
        vertical?: boolean | undefined;
        noGap?: boolean | undefined;
    }) => JSX.Element>;
    export const HorizontalLine: () => JSX.Element;
}

declare module "snackui" {
    export function isHoverEnabled(): boolean;
}

declare module "snackui" {
    export function Hoverable({ onPressIn, onPressOut, onHoverIn, onHoverOut, onHoverMove, children, }: {
        children?: any;
        onHoverIn?: any;
        onHoverOut?: any;
        onHoverMove?: any;
        onPressIn?: any;
        onPressOut?: any;
    }): any;
}

declare module "snackui" {
    const _default: {};
    export default _default;
    type AnchorEnum = 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'BOTTOM_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT' | 'TOP_CENTER' | 'LEFT_BOTTOM' | 'LEFT_TOP' | 'LEFT_CENTER' | 'RIGHT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_CENTER' | 'CENTER';
    export type PopoverProps = {
        inline?: boolean;
        anchor?: AnchorEnum;
        position?: 'top' | 'left' | 'right' | 'bottom';
        children: React.ReactElement | null;
        contents: React.ReactElement | ((isOpen: boolean) => React.ReactElement | null) | null;
        isOpen?: boolean;
        noArrow?: boolean;
        overlay?: boolean;
        overlayPointerEvents?: boolean;
        onChangeOpen?: (next: boolean) => any;
        style?: React.HTMLAttributes<HTMLDivElement>['style'];
        mountImmediately?: boolean;
    };
}

declare module "snackui" {
    export const PopoverContext: import("react").Context<{
        id: number;
    }>;
    export const popoverCloseCbs: Set<Function>;
    export const closeAllPopovers: () => void;
}

declare module "snackui" {
    export const usePopover: (props: PopoverProps) => {
        isOpen: boolean;
        isControlled: boolean;
        sendClose: () => any;
        isMounted: boolean;
        onChangeOpenCb: any;
    };
}

declare module "snackui" {
    export function Popover(props: PopoverProps): JSX.Element | null;
}

declare module "snackui" {
    export const HoverablePopover: ({ children, allowHoverOnContent, contents, delay, ...props }: PopoverProps & {
        delay?: number | undefined;
        allowHoverOnContent?: boolean | undefined;
    }) => JSX.Element;
}

declare module "snackui" {
    export const InteractiveContainer: (props: StackProps) => JSX.Element;
}

declare module "snackui" {
    export type GridProps = {
        children?: any;
        itemMinWidth?: number;
        gap?: any;
    };
    export function Grid({ children, itemMinWidth, gap }: GridProps): JSX.Element;
}

declare module "snackui" {
    import React from "react";
    import { View } from "react-native";
    export type LinearGradientPoint = {
        x: number;
        y: number;
    } | [
        number,
        number
    ];
    export type LinearGradientProps = {
        colors: string[];
        locations?: number[] | null;
        start?: LinearGradientPoint | null;
        end?: LinearGradientPoint | null;
    } & React.ComponentProps<typeof View>;
    type LinearGradientComponent = (props: LinearGradientProps) => JSX.Element | null;
    export const LinearGradient: LinearGradientComponent;
}

declare module "snackui" {
    export const LoadingItems: () => JSX.Element;
    export const LoadingItemsSmall: () => JSX.Element;
    export const LoadingItem: ({ size, lines, }: {
        size?: "sm" | "md" | "lg" | undefined;
        lines?: number | undefined;
    }) => JSX.Element;
}

declare module "snackui" {
    export const prevent: (e: any) => any[];
}

declare module "snackui" {
    import { ModalProps as ModalPropsReact } from "react-native";
    export type ModalProps = ModalPropsReact & Omit<AnimatedStackProps, 'animateState'> & {
        visible?: boolean;
        overlayBackground?: string;
        overlayDismisses?: boolean;
    };
    export const Modal: (props: ModalProps) => JSX.Element;
}

declare module "snackui" {
    import { TextProps, TextStyle } from "react-native";
    export const useTextStylePropsSplit: (props: TextStyle & {
        [key: string]: any;
    }) => {
        styleProps: TextStyle;
        textProps: TextProps;
    };
}

declare module "snackui" {
    import React from "react";
    import { TextInputProps, TextStyle } from "react-native";
    export type InputProps = Omit<TextInputProps, 'style'> & TextStyle & {
        name?: string;
    };
    export const Input: React.ForwardRefExoticComponent<Omit<TextInputProps, "style"> & TextStyle & {
        name?: string | undefined;
    } & React.RefAttributes<unknown>>;
}

declare module "snackui" {
    export type TooltipProps = Omit<PopoverProps, 'contents'> & {
        contents: any;
    };
    export const Tooltip: ({ contents, ...props }: TooltipProps) => JSX.Element;
}

declare module "snackui" {
    export type Size = number | SizeName;
    export type SizeName = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    export type SizableTextProps = TextProps & {
        size?: Size;
        sizeLineHeight?: number;
    };
    export const sizes: {
        xxxxs: number;
        xxxs: number;
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
        xxxxl: number;
    };
    export const getSize: (size: Size) => number;
}

declare module "snackui" {
    import { TextStyle } from "react-native";
    export const getSizedTextProps: ({ size, sizeLineHeight, }: SizableTextProps) => TextStyle;
}

declare module "snackui" {
    export type ParagraphProps = SizableTextProps;
    export const Paragraph: {
        (props: SizableTextProps): JSX.Element;
        staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    };
}

declare module "snackui" {
    export function Form(props: any): JSX.Element;
}

declare module "snackui" {
    export type TableProps = StackProps;
    export const Table: {
        (props: StackProps): JSX.Element;
        staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    };
    export type TableRowProps = StackProps;
    export const TableRow: {
        (props: TableRowProps): JSX.Element;
        staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    };
    export type TableCellProps = StackProps & TextProps;
    export function TableCell({ color, fontSize, fontWeight, fontStyle, fontFamily, textAlign, fontVariant, selectable, ellipse, children, lineHeight, ...props }: TableCellProps): JSX.Element;
    export type TableHeadRowProps = StackProps;
    export const TableHeadRow: {
        (props: TableHeadRowProps): JSX.Element;
        staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    };
    export type TableHeadTextProps = TextProps;
    export const TableHeadText: {
        (props: TableHeadTextProps): JSX.Element;
        staticConfig: {
            isText: any;
            validStyles: any;
            defaultProps: any;
            expansionProps: any;
        } | undefined;
    };
}

declare module "snackui" {
    import { TextInputProps, TextStyle } from "react-native";
    export const TextArea: (props: Omit<TextInputProps, 'style'> & TextStyle & {
        name?: string;
    }) => JSX.Element;
}

declare module "snackui" {
    export type TitleProps = SizableTextProps;
    export const Title: (props: TitleProps) => JSX.Element;
    export const H1: (props: TitleProps) => JSX.Element;
    export const H2: (props: TitleProps) => JSX.Element;
    export const H3: (props: TitleProps) => JSX.Element;
    export const H4: (props: TitleProps) => JSX.Element;
    export const H5: (props: TitleProps) => JSX.Element;
}

declare module "snackui" {
    import React from "react";
    export type ToastOptions = {
        duration?: number;
        type?: 'info' | 'success' | 'error';
    };
    export const Toast: {
        show: (text: string, options?: ToastOptions | undefined) => void;
        error: (text: string, options?: Omit<ToastOptions, "type"> | undefined) => void;
        success: (text: string, options?: Omit<ToastOptions, "type"> | undefined) => void;
    };
    export const ToastRoot: React.NamedExoticComponent<object>;
}

declare module "snackui" {
    export const UnorderedList: (props: StackProps) => JSX.Element;
    export const UnorderedListItem: ({ children, ...props }: SizableTextProps) => JSX.Element;
}

declare module "snackui" {
    export const getNode: (refCurrent: any) => HTMLElement | null;
}

declare module "snackui" {
    export const weakKey: (obj: any) => any;
}

declare module "snackui" {
    export * from "@snackui/helpers";
}

declare module "snackui" {
    type ValueOf<T> = T[keyof T];
    export function createUseScale<A, B = Required<Omit<A, 'media'>>, Val = ValueOf<B>>(scaleProps: A & {
        media?: {
            [key in keyof MediaQueryState]?: B;
        };
    }): (active: keyof B) => Val;
}

declare module "snackui" {
    export const ListItem: () => JSX.Element;
}
//# sourceMappingURL=types.d.ts.map