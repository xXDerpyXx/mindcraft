export default 
{
    "minecraft_version": "1.20.4",//"1.20.4", // supports up to 1.20.4
    "host": "127.0.0.1", // or "localhost", "your.ip.address.here"
    "port": 55916,
    "auth": "offline", // or "microsoft"
    
    "profiles": [
        "./andy.json",
        
        // add more profiles here, check ./profiles/ for more
        // more than 1 profile will require you to /msg each bot indivually
    ],
    "load_memory": false, // load memory from previous session
    "init_message": "Say hello world and your name then wait for a user to give you a goal.", // sends to all on spawn
    "funinit_message": "You are competing to complete Minecraft against other players. finish the game as fast as you can. you are self sufficent, do not ask for help or instruction. do not repeat the output of commands and do not describe what other players do. you have to advance through the game, making wooden tools, then stone tools, then iron tools, then diamond tools. make sure to check on your surroundings when you move, and check chests you haven't seen before, also pick up any items you see on the ground. check your current state and surroundings, then try to progress through the entire game. this is a pvp server, fight other players and try to win the game before them.", // sends to all on spawn
    "always_selfprompt":true, // set to true to 100% self-prompt on every message, used for full independence
    "filter_messages":true, // makes the bot ignore messages that arent directed towards it
    "ignore_all_messages":false,
    "ignore_external_commands":true, // ignores commands sent by the player and other bots (prevents spam between bots)

    "language": "en", // translate to/from this language. Supports these language names: https://cloud.google.com/translate/docs/languages
    "show_bot_views": false, // show bot's view in browser at localhost:3000, 3001...

    "allow_insecure_coding": false, // allows newAction command and model can write/run code on your computer. enable at own risk
    "code_timeout_mins": 10, // minutes code is allowed to run. -1 for no timeout
    "ctx_length":8196,
    "max_messages": 30, // max number of messages to keep in context
    "max_commands": -1, // max number of commands to use in a response. -1 for no limit
    "verbose_commands": false, // show full command syntax
    "narrate_behavior": false, // chat simple automatic actions ('Picking up item!')
}

