/**
 * 使いまわしよう定数
 */

// 実際の解像度
const logicalWidth = 320;
const logicalHeight = 240;

// ウィンドウ解像度
const windowWidth = 800;
const widnowHeight = 600;

// スケール
const scaleFactor = Math.min(windowWidth/logicalWidth, widnowHeight/logicalHeight);


export const SYSTEM  = {
  // 描写サイズ
  width: Math.ceil(logicalWidth * scaleFactor),
  height: Math.ceil(logicalHeight * scaleFactor),
}