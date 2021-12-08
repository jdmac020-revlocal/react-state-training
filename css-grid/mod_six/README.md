# Advanced Grid

## Naming GridLines

Can give lines oen or more names
```
body {
    display: grid;
    grid-template-rows: [header-start] 2em 5em [header-end body-start] 10em 10em [body-end];
    grid-template-columns: [left-edge] 1fr 1fr [midpoint] 1fr 1fr [right-edge];
}

header {
    grid-row: header-start / header-end;
    grid-column: left-edge / right-edge;
}

#item1 {
    grid-row: body-start / body-end;
    grid-column: left-edge / midpoint;
}

#item2 {
    grid-column: midpoint / right-edge;
}
```

## Naming inside repeat

Will fill the first available instance with that name
```
body {
    display: grid;
    grid-template-columns: [left-edge] repeat(auto-fill, [block-start] 10em 3em [block-end] [right-edge]);
}

article {
    grid-column: block-start / block-end;
}
```

Will fill the 3rd available instance of the name
```
body {
    display: grid;
    grid-template-columns: [left-edge] repeat(auto-fill, [block-start] 10em 3em [block-end] [right-edge]);
}

article {
    grid-column: block-start 3 / block-end 3;
}

// starts at first block start, spans to the 3rd block end instance
#item {
    grid-column: block-start / span 3 block-end;
}
```

## Naming Areas

Does the alignment for you
```
html, body { height: 100%; }

body {
    display: grid;
    grid: "header header header" min-content
          "nav    main   aside " auto
          "footer footer footer" min-content /
          15em 1fr 1fr;
}

header { grid-area: header; }

nav { grid-area: nav; }

main { grid-area: main; }

aside { grid-area: aside; }

footer { grid-area: footer; }
```

Important Details:
- No L-shaped areas
- Each row needs the same number of cells
- Empty areas defined with ...
- Named areas can be seen in FireFox inspecter
- Naming areas creates implicitly named lines for each area
- Named lines implicitly creates named areas
  - `header-start` and `header-end` lines create header area

## Grid Property

Grid allows setting as many or as few of it's props as you want
- Will set defaults for those you don't define
- If you intend to set props outside the grid rule set Grid first like below
```
html,
body {
    height: 100%;
}

body {
    display: grid;
    grid: min-content auto min-content / 15em 1fr 1fr;
    grid-template-areas: "header header header"
    "nav    main   aside"
    "footer footer footer";
}
```

## Responsive Design

Workflow
- Start narrowest
- Widen until it needs adjusting
- Add a breakpoint, make adjustment
- Repeat

```
body {
    display: grid;
    grid: "header" 5em
          "nav   " 5em
          "main  " 20em
          "aside " 10em
          "footer" 5em /
          1fr;
}

@media screen and (min-width: 600px) {
    body {
        grid: "header header" 5em
              "nav    main  " 20em
              "aside  aside " 10em
              "footer footer" 5em /
              1fr 2fr;
    }
}

@media screen and (min-width: 800px) {
    body {
        grid: "header header header" 5em
              "nav    main   aside " 20em
              "footer footer footer" 5em /
              1fr 2fr 1fr;
    }
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }
```

## Subgrids

Only supported in Firefox

Not gonna mess with thisssssss

Just nest grids if needed

## Track Sizing

Tracks have base size and growth limit

MinMax
- Extra space gets added evenly to the track's base size until hitting the growth limit
Fractional Unit
- Fractional units stay at min-content until all other tracks hit their growth limit
Auto
- Grows past it's growth limit only when there are no fractional units competing for extra space

1. All tracks start base size
2. Extra space allocated evenly to tracks not yet at growth limit
3. Additional space after tracks hit growth limit goes to fractional units OR
4. If no fractional units, to autos