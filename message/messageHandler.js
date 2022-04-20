const sorter = require("./sorter");
const { commands } = require("../lib");

module.exports = async (m, conn) => {
  let kurisu = { ...conn, ...sorter(m) };
  if (!kurisu.isCommand) return;

  kurisu.botId = kurisu.user.id.includes(":")
    ? kurisu.user.id.split(":")[0] + "@s.whatsapp.net"
    : kurisu.user.id;

  switch (kurisu.command) {
    //hola
    case "hola":
    case "hello":
    case "hi":
      await kurisu.sendMessage(kurisu.from, commands.greetings.greeting(), {
        quoted: m,
      });
      break;

    case "ping":
      await kurisu.sendMessage(kurisu.from, commands.misc.ping(kurisu), {
        quoted: m,
      });
      break;
    //stickers
    case "sticker":
    case "stiker":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.stickers.stickermaker(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "stickerbg":
    case "stikerbg":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.stickers.stickerbg(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "doge":
      await kurisu.sendMessage(kurisu.from, await commands.stickers.doge(), {
        quoted: m,
      });
      break;

    case "snime":
      await kurisu.sendMessage(kurisu.from, await commands.stickers.snime(), {
        quoted: m,
      });
      break;

    case "img":
    case "image":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.stickers.stickerToImage(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "gif":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.stickers.stickerToGif(kurisu),
        {
          quoted: m,
        }
      );
      break;
    //memes
    case "meme":
      await kurisu.sendMessage(kurisu.from, await commands.fun.meme(), {
        quoted: m,
      });
      break;

    //frase
    case "frase":
    case "f":
      await kurisu.sendMessage(kurisu.from, await commands.fun.phrase(), {
        quoted: m,
      });
      break;
    //hub
    case "hub":
      await kurisu.sendMessage(kurisu.from, await commands.fun.hub(kurisu), {
        quoted: m,
      });
      break;

    //8ball
    case "8ball":
      await kurisu.sendMessage(kurisu.from, await commands.fun.ball8(kurisu), {
        quoted: m,
      });
      break;

    //roll
    case "roll":
      await kurisu.sendMessage(kurisu.from, await commands.fun.rollDice(), {
        quoted: m,
      });
      break;

    //youtube
    case "music":
      const result = await commands.youtube.youtubeToMp3(kurisu);
      await kurisu.sendMessage(kurisu.from, result[0], result[1]);
      break;

    //anime
    case "anime":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.anime.find.findAnime(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "animeid":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.anime.find.animeById(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "character":
    case "ch":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.anime.character.character(kurisu),
        {
          quoted: m,
        }
      );
      break;
    case "characterid":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.anime.character.characterById(kurisu),
        {
          quoted: m,
        }
      );
      break;

    //speech
    case "speech":
    case "say":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.misc.speech(kurisu),
        {
          quoted: m,
        }
      );
      break;

    //lyrics
    case "lyrics":
    case "lyric":
      await kurisu.sendMessage(
        kurisu.from,
        await commands.misc.lyrics(kurisu),
        {
          quoted: m,
        }
      );
      break;
  }
};
