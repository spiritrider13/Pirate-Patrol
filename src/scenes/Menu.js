class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.mp3');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/cannon_blast.wav');
        this.load.audio('music_45', './assets/pirate_theme_45.wav');
        this.load.audio('music_60', './assets/pirate_theme_60.wav');


        // load menu image
        this.load.image('menu', './assets/oceanMenu.png');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#f3f8e2', // orange
            color: '#843605',   // orange text color
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // display menu background
        this.ocean = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'PIRATE PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00'; // green
        //menuConfig.color = '#000';  // black text color    
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                sharkSpeed: 7,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.sound.play('music_60');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                sharkSpeed: 8,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.sound.play('music_45');
            this.scene.start('playScene');
        }
    }
}