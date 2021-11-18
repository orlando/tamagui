import React from 'react'
import { Grid, H2, H4, Paragraph, YStack } from 'tamagui'

import { Code } from './Code'

export function FeaturesGrid() {
  return (
    <YStack maxWidth={790} mx="auto" space="$4" ai="stretch">
      <H2 fontWeight="800" ta="center">
        Features
      </H2>
      <Paragraph size="$6" color="$color3" ta="center">
        A full featured styling library.
      </Paragraph>

      <YStack pt="$6">
        <Grid gap={25} itemMinWidth={250}>
          <YStack padding="$4" space>
            <H4 letterSpacing={-1}>Complete</H4>
            <Paragraph color="$color3">
              Write typed styles inline with themes, constants, shorthand props and media queries,
              plus a full-featured set of accessible components that work together out of the box.
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" space p="$4">
            <H4 letterSpacing={-1}>Performant</H4>
            <Paragraph color="$color3">
              Tamagui avoids more JS parsing at runtime, even with conditional logic in your render.
              It even flattens your tree when possible.
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" space p="$4">
            <H4 letterSpacing={-1}>Server-side rendering</H4>
            <Paragraph color="$color3">
              Tamagui supports cross-browser server-side rendering, even for responsive styles and
              variants.
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" space p="$4">
            <H4 letterSpacing={-1}>Developer experience</H4>
            <Paragraph color="$color3">
              A fully-typed API, token-aware properties, debug props and pragrma, and custom
              shorthands.
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" space p="$4">
            <H4 letterSpacing={-1}>Fast dynamic styles</H4>
            <Paragraph color="$color3">
              Write inline styles that don't affect render performance with a compiler that analyzes
              ternaries, object spreads and more.
            </Paragraph>
          </YStack>

          <YStack ai="flex-start" space p="$4">
            <H4 letterSpacing={-1}>Critical Path CSS</H4>
            <Paragraph color="$color3">
              Only inject the styles which are actually used, so users don't download unnecessary
              CSS.
            </Paragraph>
          </YStack>
        </Grid>
      </YStack>
    </YStack>
  )
}