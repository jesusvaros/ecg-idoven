import JSZip from "jszip";
import { ReaderType } from "./types";

export const getParsedData = async (
  reader: ReaderType
): Promise<Number[][]> => {
  const linesToDisplay = await readNextLines(reader);
  return linesToDisplay!.map((line) => {

    const values = line.split(",");
    return [
      parseFloat(values[0]),
      parseFloat(values[1]),
    ];
  });
};

export const getDataFile = async () => {
  const response = await fetch("/data/14-29-05_data_data.zip");
  const blob = await response.blob();

  const zip = new JSZip();
  await zip.loadAsync(blob);

  return await zip.file("14-29-05_data_data.txt");
};

export const getReader = async (textFile: JSZip.JSZipObject | null) => {
  if (!textFile) {
    return 
  }

  const contentBlob = await textFile.async("blob");
  const contentStream = contentBlob.stream();
  return contentStream.getReader();
};

export async function readNextLines(reader: ReaderType) {
  if (!reader) {
    console.error("reader not loaded!");
    return;
  }

  const { done, value } = await reader.read();
  if (done) return;

  const content = new TextDecoder().decode(value);

  return content.split("\n");
}
