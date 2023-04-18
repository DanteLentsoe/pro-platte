declare module "colorthief" {
  export default class ColorThief {
    getColor(
      sourceImage: HTMLImageElement | HTMLCanvasElement | string,
      quality?: number
    ): [number, number, number] | null;
    getPalette(
      sourceImage: HTMLImageElement | HTMLCanvasElement | string,
      colorCount?: number,
      quality?: number
    ): [number, number, number][];
  }
}
