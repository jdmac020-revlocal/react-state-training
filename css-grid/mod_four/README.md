# Module 4: Defining In Depth

Up thru commit hash ``

Topics
  - Track sizes
  - Grid shorthands
  - Grid flows
  - Implicit grids
  - Grid gaps

### Track Sizes

Static values (em, rem, px, etc)
Responsive to viewport
- Percentage
- Auto (is default track size)
- Fr (fractional unit)
  - divides the space remaining into fractional units and allocates it to the element in question
Responsive to content
- min-content (small as possible given content)
- max-content (large as necessary to fit content)
- fit-content(maxSize) fit, up to the max size
Workaround
- min-max(minSize, maxSize)

### Shorthands

Repeat track sizes
- repeat(numberOfRepitition, trackSizes)
- can include multiple sizes
- repeat(auto-size, tracksizes)
  - will resolve the number of tracks with that size that will fit
- repeat(auto-fit, trackSizes)
  - will expand content to fill empty space

Define grid template
- `grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 10em 1fr 10em 1fr;`
- is equivalent to
- `grid-template: repeat(2, 10em 1fr) / repeat(12, 1fr);`
- and is equivalent to `grid: repeat(2, 10em 1fr) / repeat(12, 1fr);`
  - css working group recommends using `grid` over `grid-template`

### Grid Flow

Default flow is start at top left, work right across row, then down to next row
- Also responds to `<html lang>` tag (for left-to-right like Hebrew)
- Also responds to `writing-mode` rules in grid (can set separate for content for langauges like Japanese)
Can set with `grid-auto-flow
- `grid-auto-flow: column;` flows down columns before moving to next row

### Implicit Grid

Additional columns and rows created by CSS Grid to accomodate grid items that fall outside the defined values
- Under-the-hood rules
We can control these
- `grid-auto-rows: 10em;` sets the size of any CSS-generated rows
  - `grid-auto-rows: 10em 5em;` repeats "10/5" when creating new rows
- `grid-auto-columns: 10em 5em;`
  - Does not work by default, unless auto flow is set to columns
    - `grid-auto-flow: column;` will stop creating new implicit rows
Grid has built in shorthand
- `grid: 10em 10em / auto-flow 10em;`
  - replaces defining an explicit grid
  - Defines two rows of 10em
  - has endless columns being created to hold new items at 10em size
  - equivalent to `grid-tempalte-columns: 10em 10em; grid-auto-flow: column; grid-auto-columns: 10em;`
- `grid: auto-flow 10em / 10em;`
  - replaces defining an explicit grid
  - Defines endless rows of 10em
  - defines a single column of 10em

### Grid Gaps

Designers call them gutters

`column-gap` `row-gap` `gap` already defined for flex now work for grid

- `column-gap: size` space between columns
- `row-gap: size` size between rows
- `gap: size size` will set the space between both
  - `gap: size` when the space is the same size between rows and columns
- Gap around the row itself? Margin rule on the grid container