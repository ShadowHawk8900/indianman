require('dotenv').config();
const Discord = require("discord.js");
{ 
  "token"  ; "NzM4MTI2OTg3NjQ1NjgxODE4.XyHYUw.0uvx0w82H6X17Enquu0n9A5nm-s",
  "prefix" ; "="
}
/*
 DISCORD.JS VERSION 12 CODE
*/

const client = new Discord.Client();
const fetch = require("node-fetch");
const config = require("./config.json");
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels inside of ${client.guilds.cache.size} servers.`);

client.user.setActivity(`👁😍🇵🇰👁💣🤯4️⃣🇵🇰  🤬🗣`);
});
client.once("ready", () => {
  console.log("Ready!");
});
client.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
client.user.setActivity(`enslaved ${client.users.cache.size} servers`);
});
client.on("guildDelete", guild => {
console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
client.user.setActivity(`enslaving ${client.users.cache.size} idiots`);
});
client.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
if(message.author.bot) return;
if(!message.content.startsWith(config.prefix)) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "ping") {
const m = await message.channel.send("Ping?");
m.edit(`Server Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}
if(command === "saye") {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{}); 
message.channel.send({embed: {
  color: (`RANDOM`),
  description: (sayMessage),
  footer: {
    icon_url: 'https://cdn.discordapp.com/attachments/760661735501463604/783469275099693077/maaz.PNG',
    text: "pls send nuds 😩💦🤩"
  },  
}
});
}
if(command === "say") {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{}); 
message.channel.send(sayMessage)
}
//vc commands start

if(command === "pray"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to pray");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already praying in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/pray.mp4").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**ALLAHUAKBAR!**\n:pray:");
    }).catch(e => console.log(e))
};
}
if(command === "pp"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to pray");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already praying in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/ppmouth.mp3").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAA**");
    }).catch(e => console.log(e))
};
}
if(command === "gta"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to pray");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already praying in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/gtalol.mp3").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**Aight cuh**\n:fist:");
    }).catch(e => console.log(e))
};
}
if(command === "bomb"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to pray");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already praying in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/allahb.mp3").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**REAL TRAP SHIT!**\n:pray: :bomb:");
    }).catch(e => console.log(e))
};
}
if(command === "allah"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to pray");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already praying in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/pray.mp4").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**ALLAHUAKBAR!**\n:fist: :pray:");
    }).catch(e => console.log(e))
};
}
if(command === "depot"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("join a vc to play this");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("im already in the vc");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/homedep.mp3").on("finish", () => VoiceConnection.disconnect());
        message.channel.send("**home depot**");
    }).catch(e => console.log(e))
};
}
if(command === "spider"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/spooder.mp3").on("finish", () => VoiceConnection.disconnect());
        message.channel.send(":spider: :eggplant: :drool:");
    }).catch(e => console.log(e))
};
}
if(command === "lambo"){
  {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel) return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel) return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("/Users/calebdreher/Desktop/lambo.mp3").on("finish", () => VoiceConnection.disconnect());
        message.reply("Playing...");
    }).catch(e => console.log(e))
};
}
if(command === "join") {
  message.reply("I have joined your current voice channel.")
  client.on('message', async message => {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    }
  });
}
if(command === "leave") {
  const voiceChannel = message.member.voice.channel;

  if (voiceChannel) {
    voiceChannel.leave()
    message.reply(":wave:")
      .catch(console.error);
  }
  }
//vc commands end

if(command === "kick") {
  if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
  return message.reply("you don't have permissions to use this fricking idiot");
  let member = message.mentions.members.first();
  if(!member)
  return message.reply("please mention a valid member of this server dumbass");
  if(!member.kickable) 
  return message.reply("you cant kick this monkey you stupid idiot, they have higher perms");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  await message.delete()
  const embeddmk = new Discord.MessageEmbed()
  .setColor(0)
  .setTitle(`You have been kicked from the Local Walmart Discord Server:`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
    { name: '__Moderator:__', value: `${message.author.tag} ||(${message.author.id})||`},
    { name: '__Reason for Kick:__', value: `${reason}`}
  )
  await member.send(embeddmk),
  await member.kick(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  const channel01 = client.channels.cache.find(channel => channel.id === '816339882233561129');
  const user = message.mentions.users.first();
  const embedchank = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addFields(
      { name: `**${member.user.tag}** was Kicked from the server:`, value: `*${reason}*`}
  )
  const embedmessagek = new Discord.MessageEmbed()
  .setColor(15105570)
  .setTitle(":no_entry_sign: User was Kicked")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
      { name: '__User Kicked:__', value: `${member.user.tag} ||(${member.user.id})||`},
      { name: '__Reason for Kick:__', value: `${reason}`},
      { name: '__Moderator:__', value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  .setThumbnail(user.displayAvatarURL());
  message.channel.send(embedchank);
  channel01.send(embedmessagek)
  }
  if(command === "ban") {
  await message.delete()
  if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
  return message.reply("You do not have permissions to use this command! why do you even try it, youre so dumb! ``(MOD PERMS)``");
  let member = message.mentions.members.first();
  if(!member)
  return message.reply("literally, all you have to do is mention a user, and you couldn't even do that. youre dumb...");
  if(!member.bannable) 
  return message.reply("I am unable to ban this user stupid monkey idiot loser");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  const embeddm = new Discord.MessageEmbed()
  .setColor(0)
  .setTitle(`You have been banned from the Local Walmart Discord Server`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
    { name: '__Moderator:__', value: `${message.author.tag} ||(${message.author.id})||`},
    { name: '__Reason for Ban:__', value: `${reason}`}
  )
  await member.send(embeddm),
  await member.ban({reason: reason})
  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`))
  const channel01 = client.channels.cache.find(channel => channel.id === '816339882233561129');
  const user = message.mentions.users.first();
  const embedchanb = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addFields(
      { name: `**${member.user.tag}** was Banned from the Server:`, value: `*${reason}*`}
  )
  const embedmessageb = new Discord.MessageEmbed()
  .setColor(15158332)
  .setTitle(":no_pedestrians: User was Banned")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
      { name: '__User Banned:__', value: `${member.user.tag} ||(${member.user.id})||`},
      { name: '__Reason for Ban:__', value: `${reason}`},
      { name: '__Moderator:__', value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  .setThumbnail(user.displayAvatarURL());
  message.channel.send(embedchanb);
  channel01.send(embedmessageb)

  }
  if(command === "unban") {
    await message.delete()
      let toBan = await client.users.fetch(args[0])
      if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

      const reason = args[1] || "No reason provided.";

      message.guild.members.unban(toBan, reason)
      const channel000 = client.channels.cache.find(channel => channel.id === '816339882233561129');
      const embedmessageub = new Discord.MessageEmbed()
      .setColor(12370112)
      .setTitle(":rotating_light: User was Unbanned")
      .setTimestamp()
      .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
      .addFields(
          { name: '__User Unbanned:__', value: `${toBan} ||(${message.author.id})||`},
          { name: '__Reason for Unban:__', value: `${reason}`},
          { name: '__Moderator:__', value: `${message.author.tag} - <\@${message.author.id}>`}
      )
      .setThumbnail(toBan.displayAvatarURL());
      message.channel.send(`${toBan} has been unbanned from the server!`);
      channel000.send(embedmessageub)
  }
if(command === "purge") {
// This command removes all messages from all users in the channel, up to 100.
if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
return message.reply("you don't have permissions to use this command you fricking idiot ``(MOD PERMS)``");
let member = message.mentions.members.first();
const channel11 = client.channels.cache.find(channel => channel.id === '816339882233561129');
const deleteCount = parseInt(args[0], 10);
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
channel = message.guild.channels.cache.get('channelID')
const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(fetched)
.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
const embedmessagep = new Discord.MessageEmbed()
.setColor(9936031)
.setTitle(":speech_balloon: Purge Command Executed")
.setTimestamp()
.setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
.addFields(
  { name: `__Channel:__`, value: `<\#${message.channel.id}>` },
  { name: `__Moderator:__`, value: `${message.author.tag} - <\@${message.author.id}>`},
  { name: `__Messages Deleted:__`, value: `${deleteCount}`}
)
channel11.send(embedmessagep)
}
if(command === "sm") {
  if (message.author.bot) return;
  await message.delete()
  if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
  return message.reply("you don't have permissions to use this command you fricking idiot ``(MOD PERMS)``");
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1);
  const seconds = args[0];
  const MAX_SECONDS = 21600;

  if (isNaN(seconds)) {
    return message.channel.send('You need to specify time in seconds dipshit');
  }

  if (seconds > MAX_SECONDS) {
    return message.channel.send(
      `The maximum number of seconds is ${MAX_SECONDS}.`,
    );
  }

  try {
    await message.channel.setRateLimitPerUser(seconds);
    const embedmessaget = new Discord.MessageEmbed()
    .setColor(8359053)
    .setTitle(":alarm_clock: Slowmode has been modified in this Channel")
    .setTimestamp()
    .addFields(
    { name: "__Modified By:__", value: `${message.author.tag} - <\@${message.author.id}>`},
    { name: "__Duration of Slowmode:__", value: `${seconds} seconds`}
  )
    message.channel.send(embedmessaget);
    const channel111 = client.channels.cache.find(channel => channel.id === '816339882233561129','784508200019427398');
    const user = message.mentions.users.first() || message.author;
    channel = message.guild.channels.cache.get('channelID')
    const embedslow = new Discord.MessageEmbed() 
    .setColor(11027200)
    .setTitle(":stopwatch: Slowmode Command Used")
    .setTimestamp()
    .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
    .addFields(
      { name: "__Channel:__", value: `<\#${message.channel.id}>`},
      { name: "__Moderator:__", value: `${message.author.tag} - <\@${message.author.id}>`},
      { name: "__Slowmode Duration:__", value: `${seconds} seconds`}
    )
    .setThumbnail(message.author.avatarURL)
    channel111.send(embedslow)
  } catch (error) {
    message.channel.send('I am unable to execute that command idiot');
    console.log(error);
  }
}
if(command === "lock"){
  await message.delete()
  if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
  return message.reply("you don't have permissions to use this command you fricking idiot ``(MOD PERMS)``");
  message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false })
  const channel4 = client.channels.cache.find(channel => channel.id === '816339882233561129');
  const embedmessagel = new Discord.MessageEmbed()
  .setColor(15158332)
  .setTitle("Channel Locked :lock:")
  .setTimestamp()
  .addFields(
    { name: "__Moderator:__", value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  const embedmessage2 = new Discord.MessageEmbed()
  .setColor(15158332)
  .setTitle(":lock: Channel Locked")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
    { name: "__Channel:__", value :`<\#${message.channel.id}>`},
    { name: "__Moderator:__", value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  message.channel.send(embedmessagel)
  channel4.send(embedmessage2)
}
if(command === "unlock"){
  await message.delete()
  if(!message.member.roles.cache.some(r=>["Indian Mod"].includes(r.name)))
  return message.reply("you don't have permissions to use this command you fricking idiot ``(MOD PERMS)``");
  message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: true })
  //const role = message.guild.roles.cache.find("Customers");
  //role.permissions.add('SEND_MESSAGES')
  const channel9 = client.channels.cache.find(channel => channel.id === '816339882233561129');
  const embedmessage6 = new Discord.MessageEmbed()
  .setColor(3066993)
  .setTitle("Channel Unlocked :unlock:")
  .setTimestamp()
  .addFields(
    { name: "__Moderator:__", value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  const embedmessage7 = new Discord.MessageEmbed()
  .setColor(3066993)
  .setTitle(":unlock: Channel Unlocked")
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .addFields(
    { name: "__Channel:__", value :`<\#${message.channel.id}>`},
    { name: "__Moderator:__", value: `${message.author.tag} - <\@${message.author.id}>`}
  )
  message.channel.send(embedmessage6)
  channel9.send(embedmessage7)
}
if(command === "avatar"){
await message.delete()
let member = message.mentions.members.first();
if(!member)
return message.reply("Please mention a valid member of this server.");
  const user = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed() 
  .setColor(`RANDOM`)
  .setAuthor("User Avatar Fetched")
  .setTitle(`${member.user.tag}`)
  .setTimestamp()
  .setFooter("DM reloaded#1269 with any inquiries regarding bot API",`https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp`)
  .setThumbnail(user.displayAvatarURL());
message.channel.send(embed).then(sentEmbed => {
  sentEmbed.react("🥸")
});

}
      if(command === "covid"){
        await message.delete()
          fetch(`https://covid19.mathdro.id/api`)
          .then(response => response.json())
          .then(data => {
              let confirmed = data.confirmed.value.toLocaleString()
              let recovered = data.recovered.value.toLocaleString()
              let deaths = data.deaths.value.toLocaleString()

              const embed = new Discord.MessageEmbed()
              .setTitle(`COVID-19 Global Stats`)
              .setTimestamp()
              .addField('Confirmed Cases', confirmed)
              .addField('Recovered', recovered)
              .addField('Deaths', deaths)

              message.channel.send(embed)
          })
      }
if(command === "rules") {
  message.reply("A list of Server Rules has been sent to your DM's!")
  message.author.send({embed: {
    color: `RANDOM`,
    author: {
      name: client.user.username ,
      icon_url: client.user.avatarURL
    },
    title: "𝐆𝐀𝐌𝐄𝐒𝐓𝐎𝐏 𝐃𝐈𝐒𝐂𝐎𝐑𝐃 𝐒𝐄𝐑𝐕𝐄𝐑 𝐑𝐔𝐋𝐄𝐒:",
    url: "https://docs.google.com/document/d/1UR7ZGhe07YgFa56u0sBYlFt_-KavYkqKOkIluxVrTq0/edit?usp=sharing",
    description: "The rules for the GameStop server are displayed below:",
    fields: [{
        name: "1 -  Racism",
        value: "No racism or slurs. Any use of racist sayings or slurs in the text channels or voice calls is ``not tolerated``. If you hear anyone using a racist saying or slur please let the owner or a higher up staff member know and they will deal with it. If caught you will be warned once and then if used again you will be ``banned`` for 1 day."
      },
      {
        name: "2 - Harassment",
        value: "No harassing other server members in DM's **OR** on the server. If you are being harassed please contact a staff member with proof so we can deal with the issue. If caught you will be told to stop if you do not you will be banned."
      },
      {
        name: "3 - Earrape",
        value: "Do not play “Ear Rape” or yell into the microphone while in a voice call. If caught you will be warned twice then muted for 1 day"
      },
      {
        name: "4 - Spam",
        value: "Do not spam mention or spam characters in any of the text channels. If caught you will be warned 3 times then muted for 1 day."
      },
      {
        name: "5 - Legal Age",
        value: "You __**MUST**__ be ``13 +`` to have a discord account. If found that you are under the age of 13 you will be ``immediately banned``"
      },
      {
        name: "6 - Staff Decisions",
        value: "Please respect the staff's word. If you feel like something is unfair you may contact the owner and they will decide."
      },
      {
        name: "7 - Channel Usage",
        value: "Keep topics to their respected channels. **EX:** *Any Dota talk will be kept in the* ``Dota text channel``. *If you made a mistake please delete your message and move it to the right channel.* If caught you will be warned 3 times and then you will be muted for 2 hours."
      },
      {
        name: "8 - Common Sense",
        value: "Use common sense while communicating on the server. This is stuff that you would not want said or done to you."
      },
      {
        name: "9 - Alt (Alternate) Accounts",
        value: "If you are banned and found that you are using an alt account that account will be perm banned and you will also be ``perm banned.``"
      },
      {
        name: "10 - Proper Pronouns",
        value: "Use peoples proper pronouns. If someone improperly pronouns you please tell them your pronouns and if they still do it please refer to Rule 2."
      },
      {
        name: "11 - Admin Abuse",
        value: " If you are in an admin role do not abuse your power in any way. This means stuff such as, but not limited to: demoting, muting ,kicking, banning without reason or as a 'joke'."
      },
      {
        name: "12 - Ticket Spam",
        value: "Do not spam create tickets or create a ticket without valid reason. Doing so will result in a warning and if repeated, you will be kicked."
      }  
    ],
    image: {
      url: 'https://cdn.discordapp.com/attachments/777672774901825586/781239554597322812/images.png'
    },
    timestamp: new Date(),
    footer: {
      icon_url: 'https://static.boredpanda.com/blog/wp-content/uuuploads/the-hermitage-court-cats-eldar-zakirov/the-hermitage-court-cats-eldar-zakirov-3.jpg',
      text: "DM reloaded#1269 for any inquiries regarding bot API."
    }
  }
});
}
if(command === "help") {
  await message.delete()
  message.reply("The list of Commands has been sent to your DM's!")
  message.author.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username ,
      icon_url: client.user.avatarURL
    },
    title: "𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:",
    description: "The list of avaliable commands for this API can be found below:",
    fields: [{
        name: "**``𝐒𝐄𝐑𝐕𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:``**",
        value: "``------------------------------------------------------------``"
      },
      {
        name: "=covid",
        value: "*Displays the worldwide COVID-19 Daily Statistics.*"
      },
      {
        name: "=help",
        value: "*Shows a list of avaliable commands through this bot.*"
      },
      {
        name: "=rules",
        value: "*Sends the rules for the server to your DM's.*"
      },
      {
        name: "=say [MESSAGE]",
        value: "*Repeats any message you desire to be repeated by the bot.*"
      },
      {
        name: "=ping",
        value: "*Displays the Server and Bot/API Latency ms.*"
      },
      {
        name: "=join",
        value: "*Makes the bot join your current Voice Channel* [IN DEVELOPMENT]"
      },
      {
        name: "=leave",
        value: "*Disconnects the bot from the current VC.*"
      },
      {
       name: "=lambo",
       value: "*Plays the most fire song in the world.*" 
      },
      {
        name: "=saye [MESSAGE]",
        value: "*Sends a custom message using embed.*"
      },
      {
        name: "=avatar [@USER]",
        value: "*Prints the avatar of the mentioned user.*"
      },
      {
        name: "=pray or =allah",
        value: "*Pray to allah.* (Must be in VC)"
      },
      {
        name: "=bomb",
        value: "*Real Trap Shit*"
      },
      {
        name: "**``𝐒𝐓𝐀𝐅𝐅 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒``**",
        value: "``------------------------------------------------------------``"
      },
      {
        name: "=kick [@USER]",
        value: "*Kicks the mentioned user from the server, allowing them to rejoin at any time through any valid invite.*"
      },
      {
        name: "=ban [@USER]",
        value: "*Bans the mentioned user from the server, disallowing them to rejoin the server unless unbanned.*"
      },
      {
        name: "=unban [@ID]",
        value: "*Unbans the desired user ID from the server.*"
      },
      {
        name: "=sm [#]",
        value: "*Creates a slowmode within the channel.*"
      },
      {
        name: "=lock",
        value: "*Locks the desired channel, removing permissions from normal members to send messages.*"
      },
      {
        name: "=unlock",
        value: "*Unlocks the previously locked channel, returning permissions to users.*"
      },
      {
        name: "=purge [VALUE]",
        value: "*Deletes the desired number of messages within a channel. (Maximum 100)*"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/320712108004081684/10b8f23acd5952feb3f6574c2a4f9fc7.webp',
      text: "DM reloaded#1269 for any inquiries regarding bot API."
    }
  
  }
});
}
});

client.login(config.token);
