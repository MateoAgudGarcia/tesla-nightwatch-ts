export function layoutOneColumn(index: number = 1): string {
  return `div.tcl-section:nth-of-type(${index}) section.tcl-layout--one-column`;
}

export function layoutTwoColumns(index: number = 1): string {
  return `div.tcl-section:nth-of-type(${index}) section.tcl-layout--two-columns`;
}

export function layoutThreeColumns(index: number = 1): string {
  return `div.tcl-section:nth-of-type(${index}) section.tcl-layout--three-columns`;
}

export function layoutConstrained(index: number = 1): string {
  return `div.tcl-section:nth-of-type(${index}) section.tds-layout--constrained`;
}

export function layoutShowcase(index: number = 1): string {
  return `section.tcl-showcase:nth-of-type(${index})`;
}
