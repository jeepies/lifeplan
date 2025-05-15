export async function getInspirationalQuote(): Promise<string> {
  const response = await fetch('https://zenquotes.io/api/random');
  const data = await response.json();

  const quote = data[0].q;
  return quote;
}
