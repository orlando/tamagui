import createPrefixer from 'inline-style-prefixer/lib/createPrefixer'
import backgroundClip from 'inline-style-prefixer/lib/plugins/backgroundClip'
import crossFade from 'inline-style-prefixer/lib/plugins/crossFade'
import cursor from 'inline-style-prefixer/lib/plugins/cursor'
import filter from 'inline-style-prefixer/lib/plugins/filter'
import flex from 'inline-style-prefixer/lib/plugins/flex'
import flexboxIE from 'inline-style-prefixer/lib/plugins/flexboxIE'
import flexboxOld from 'inline-style-prefixer/lib/plugins/flexboxOld'
import gradient from 'inline-style-prefixer/lib/plugins/gradient'
import grid from 'inline-style-prefixer/lib/plugins/grid'
import imageSet from 'inline-style-prefixer/lib/plugins/imageSet'
import logical from 'inline-style-prefixer/lib/plugins/logical'
import position from 'inline-style-prefixer/lib/plugins/position'
import sizing from 'inline-style-prefixer/lib/plugins/sizing'
import transition from 'inline-style-prefixer/lib/plugins/transition'

type StyleModifier = (style: Object) => Object

export const prefixInlineStyles: StyleModifier = (style) => {
  const prefixedStyles = prefixStyles(style)

  // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value
  Object.keys(prefixedStyles).forEach((prop) => {
    const value = prefixedStyles[prop]
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1]
    }
  })

  return prefixedStyles
}

const w = ['Webkit']
const m = ['Moz']
const ms = ['ms']
const wm = ['Webkit', 'Moz']
const wms = ['Webkit', 'ms']
const wmms = ['Webkit', 'Moz', 'ms']
const staticData = {
  plugins: [
    backgroundClip,
    crossFade,
    cursor,
    filter,
    flex,
    flexboxIE,
    flexboxOld,
    gradient,
    grid,
    imageSet,
    logical,
    position,
    sizing,
    transition,
  ],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
  },
}

export const prefixStyles: StyleModifier = createPrefixer(staticData)
