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

export function validateJsonAndGetErrorLine(jsonText: string): { valid: boolean; line?: number; error?: string } {
  try {
    JSON.parse(jsonText);
    return { valid: true };
  } catch (e: any) {
    const match = e.message.match(/at position (\d+)/);
    if (match) {
      const position = parseInt(match[1], 10);
      const lines = jsonText.slice(0, position).split('\n');
      return {
        valid: false,
        line: lines.length,
        error: e.message,
      };
    }
    return { valid: false, error: e.message };
  }
}
