# Positioning

## Keywords
- Negative -- count from end
  - -1 is the last grid line on an access
- `span: size`
  - `grid-column-start: span 2;`
    - Don't care where it starts, stretch 2 of columns
  - `grid-column-start: 1; grid-column-end: span 5;`
    - Start at one, span 5 columns

## Shorthands
- grid-column start / end;
  - `grid-column: 3 / span 2;`
    - start at column line three and span two columns
- grid-row start / end;
  - `grid-row: 2 / 3;`
    - start at line two, go till line 3
- grid-area rowStart / columnStart / rowEnd / columnEnd
  - `grid-area: 3 / 4 / 1 / 5;`

## Align/Justification

### Concepts

Can only align inside a container that has extra space
Can set the alignment of the grid in the webpage
Can set the alignment of the content inside a grid cell

Vertical alignment needs to include rules to increase the used height to MORE than the content
- Elements will shrink height to fit content unless told otherwise
- This is where `height: 100%;` rules come in

### Properties
- justify-content and align-content
  - Handles the entire grid, does not touch content of grid cells
  - justify is left/right
  - align top/bottom
    - possible values
      - start (default)
      - center
      - end
      - space-around
        - half the space around outside as between
      - space-between
        - flush against edges
      - space-evenly
        - distributes it evenly between and around
- justify-items and align-items
  - Handles content inside each grid cell
  - Applied at grid level to all grid cells
  - possible values
    - stretch (default)
    - start
    - center
    - end
- justify-self and align-self
  - Applies to a single grid item

## Accessibility

Grid item flow should follow normal reading for tab functionality
If rules are applied at correct level, flowing the source elements into the grid happens automatically
  - Gaps can be left to ensure correct order
  - Circumvent this by applying `grid-auto-flow: dense` to avoid gaps in rows or `grid-auto-flow: dense column`

Order on a grid item
- All items default to zero
  - Making an item `order: 1;` means it will be placed AFTER all default order 0 items

Main point: Don't position individual items explicitly unless it's a last resort to preserve visual and source order