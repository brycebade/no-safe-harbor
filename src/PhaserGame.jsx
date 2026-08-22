import { useEffect, useRef } from "react"
import Phaser from "phaser"

function PhaserGame() {
    const gameContainer = useRef(null)

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 500,
            parent: gameContainer.current,
            backgroundColor: "#0f172a",

            scene: {
                create() {
                    this.add.text(250, 220, "Phaser is working", {
                        fontSize: "32px",
                        color: "#ffffff",
                    })
                },
            },
        }

        const game = new Phaser.Game(config)

        return () => {
            game.destroy(true)
        }
    }, [])

    return <div ref={gameContainer}></div>
}

export default PhaserGame