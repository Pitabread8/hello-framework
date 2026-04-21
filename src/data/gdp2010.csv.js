import {csvParse, csvFormat} from "d3-dsv";

async function text(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

const lifeExpectancy = csvParse(await text("https://datavis.cs.columbia.edu/files/data/gapminder/gdp-per-capita.csv"));

const life2010 = lifeExpectancy.filter(d => d.Year === "2010");

process.stdout.write(csvFormat(life2010));