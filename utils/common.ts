export function trimMultiline(
  text: string,
  removeLines: boolean = false
): string {
  let textFormat = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => {
      if (removeLines) return line !== "";
      return true;
    })
    .join("\n");
  return textFormat;
}
