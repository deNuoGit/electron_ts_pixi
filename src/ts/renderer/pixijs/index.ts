import * as PIXI from 'pixi.js'

import Controller_Base from './Controller/Controller_Base';

import { SYSTEM } from '../../config/system';



class PIXI_MainProcess {

    /**
     * ----------------------------------------------------
     * エイリアス作成
     * ----------------------------------------------------
     *  */ 
    // pixi.jsアプリケーション
    private PIXI_Application = PIXI.Application
    // ローダー
    private PIXI_loader = PIXI.loader
    // リソースローダー
    private PIXI_resources= PIXI.loader.resources

    /**
     * ----------------------------------------------------
     * クラス変数
     * ----------------------------------------------------
     *  */ 
    // pixiアプリケーション生成
    private App:PIXI.Application = this.pixiApplicationCreate(SYSTEM.width,SYSTEM.height);

    // コンストラクタ
    constructor() {

        // 初期化プロセス
        this.initializePIXI();
    }

    // 初期化プロセス
    private initializePIXI() {

        // ピクセル倍率変更
        this.pixelScaleUP();

        // htmlのbodyにPIXIAPPを追加
        document.body.appendChild(this.App.view);

    }

    // PIXIアプリケーションオブジェクト作成
    private pixiApplicationCreate(screenWidth:number,screenHeight:number) {
        return new this.PIXI_Application({
            width:screenWidth,
            height:screenHeight,
            antialias: false,
            transparent: false,
            resolution: 1
            }
        );
    }

    // ピクセル倍率を2倍に変更
    private pixelScaleUP() {
        this.App.renderer.roundPixels = true;
        this.App.renderer.resize(SYSTEM.width, SYSTEM.height);
        this.App.stage.scale.set(2,2);
        this.App.stage.interactive = true;
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    }


    // // セットアップ関数
    private setup(app:PIXI.Application) {

        app.ticker.add(delta => this.gameloop(delta));

        // // .load()は「undifinedを指定して何も返さない」としなければtslintでエラーが出る
        // // void型にして下記を消すとクラス変数がnullにされてしまうのでこれで対応
        // return undefined;
    }

    // メインループ
    private gameloop(delta:number) {
    }
}



export default PIXI_MainProcess;

const GameFrame:PIXI_MainProcess = new PIXI_MainProcess;
