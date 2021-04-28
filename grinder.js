const robot = require("robotjs");
robot.setKeyboardDelay(1);

function typeSend(text) {
    robot.typeString(text);
    robot.keyTap("enter");
}

class Grinder {
    constructor(commands) {
        this.commands = commands;
    }

    start() {
        for (let i = 0; i < this.commands.length; i++) this.commands[i].execute();
    }
}

class Command {
    constructor(text, followUpText=null, followUpPause=null) {
        this.text = text;
        this.followUpText = followUpText;
        this.followUpPause = followUpPause;
    }

    execute() {
        console.log("here");
        typeSend(typeof this.text === "string" ? this.text : items[Math.floor(Math.random() * items.length)]);

        if (this.followUpText !== null && this.followUpPause !== null) {
            setTimeout(() => {
                typeSend(this.followUpText);
            }, this.followUpPause);
        }
    }
}

module.exports = {
    dank: new Grinder([
        new Command("pls beg"),
        new Command("pls pm", followUpText="k", followUpPause=3200)
    ]),
    owo: new Grinder([
        new Command(["owoh", "owo h", "owo hunt"]),
        new Command(["owob", "owo b", "owo battle"])
    ])
}
