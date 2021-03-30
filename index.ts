import {
  Point,
  Size,
  Rectangle,
  Grid,
  getCanvasGrid,
} from "@bbtgnn/canvasgrid";
import paper from "paper";

/**
 * Paperjs setup
 */

// Getting canvas
const canvas = document.getElementById("canvas");

// Setup paperjs
(paper as any).setup(canvas);

/**
 * Testing
 */

// // --- Point --- //

// const p: Point = new Point(500, 500);

// // --- Size --- //

// const s: Size = new Size(200, 200);
// // d
// const s__p: paper.Path = new paper.Path.Rectangle(
//   new paper.Point(0, 0),
//   new paper.Size(s)
// );
// (s__p as any).strokeColor = "red";

// // FitSize
// const sfit: Size = s.fitSize(1.5);
// // d
// const sfit__p = new paper.Path.Rectangle(
//   new paper.Point(0, 0),
//   new paper.Size(sfit)
// );
// (sfit__p as any).strokeColor = "green";

// // FillSize
// const sfill: Size = s.fillSize(2);
// // d
// const sfill__p = new paper.Path.Rectangle(
//   new paper.Point(0, 0),
//   new paper.Size(sfill)
// );
// (sfill__p as any).strokeColor = "blue";

// // --- Rectangle --- //

// // Creating rectangle
// const r = new Rectangle(p, new Size(200, 200));
// // d
// const r__p = new paper.Path.Rectangle(r);
// (r__p as any).strokeColor = "pink";

// // Fitting rectangle at center
// const rfit = r.fitRectangleCenter(2);
// // d
// const rfit__p = new paper.Path.Rectangle(rfit);
// (rfit__p as any).strokeColor = "black";

// // Filling rectangle at center
// const rfill = r.fillRectangleCenter(2);
// // d
// const rfill_p = new paper.Path.Rectangle(rfill);
// (rfill_p as any).strokeColor = "blue";

// // --- Grid --- //

// const g = new Grid(10, 10, new Size(16.4, 16.4), { column: 4, row: 4 });
// // d - cells
// for (const cell of g.getCells(p)) {
//   // Creating cell path
//   const cell__p = new paper.Path.Rectangle(cell);
//   (cell__p as any).strokeColor = "green";
// }

// // Fitting grid to width
// const gwidth = g.fillWidth(sfill.width);
// // d - cells
// for (const cell of gwidth.getCells()) {
//   // Creating cell path
//   const cell__p = new paper.Path.Rectangle(cell);
//   (cell__p as any).strokeColor = "purple";
// }

// --- getCanvasGrid --- //

// Creating rectangle
const cnv = new Rectangle(new Point(0, 0), new Size(300, 300));
// d
const cnv__p = new paper.Path.Rectangle(cnv);
(cnv__p as any).strokeColor = "cyan";

const cnvg_fit = getCanvasGrid("fit", cnv, {
  rows: 10,
  columns: 10,
  cell_ratio: 0.4,
  spacing: { column: 0, row: 0 },
});
// d - cells
for (const cell of cnvg_fit.getCells()) {
  // Creating cell path
  const cell__p = new paper.Path.Rectangle(cell);
  (cell__p as any).strokeColor = "purple";
}

const cnvg_fill = getCanvasGrid("fill", cnv, {
  rows: 10,
  columns: 10,
  cell_ratio: 0.4,
  spacing: { column: 0, row: 0 },
});
// d - cells
for (const cell of cnvg_fill.getCells()) {
  // Creating cell path
  const cell__p = new paper.Path.Rectangle(cell);
  (cell__p as any).strokeColor = "brown";
}

/**
 * Paperjs drawing
 */

(paper.view as any).draw();
