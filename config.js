/*

░█████╗░██╗░░░░░██████╗░██╗░░██╗░█████╗░  ░██████╗████████╗░█████╗░██████╗░███████╗
██╔══██╗██║░░░░░██╔══██╗██║░░██║██╔══██╗  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
███████║██║░░░░░██████╔╝███████║███████║  ╚█████╗░░░░██║░░░██║░░██║██████╔╝█████╗░░
██╔══██║██║░░░░░██╔═══╝░██╔══██║██╔══██║  ░╚═══██╗░░░██║░░░██║░░██║██╔══██╗██╔══╝░░
██║░░██║███████╗██║░░░░░██║░░██║██║░░██║  ██████╔╝░░░██║░░░╚█████╔╝██║░░██║███████╗
╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝  ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚══════╝
Copyright (c) 2024 Alpha Store
*/

module.exports = {    
    token: "MTMxMjQwNzM3MjA0MzY1MzE1MA.GmmGy0.CqqcXfUpoTIPK73vOQ7qnAS_KDaUbPQvfgVT2Y", // token
    clientId: "1312407372043653150", // bot id
    prefix: "!", // prefix
    language: "ar", // ar for arabic | en for english
    verbose: true,
    musicCardPath: "./musicard.png",
    enableLogging: true,
    djRoleName: "Music",
    aliases: {
      play: ["p", "start", "playmusic"],
      pause: ["hold", "stopmusic"],
      resume: ["r", "continue"],
      skip: ["s", "next", "jump"],
      stop: ["end", "terminate"],
      volumeUp: ["vup", "increasevolume"],
      volumeDown: ["vdown", "decreasevolume"],
      repeat: ["loop"],
      queue: ["q"],
      nowplaying: ["np"],
      clear: ["c"],
      remove: ["rm", "delete"]
  }
};