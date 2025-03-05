//خط تلقائي 
client.on("message", async message => {

  if (message.guild.id != "1248922940112769067" ) return; 
  if (message.channel.id != "1338942721129316372") return; 
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["رابط الصورة"]});


  }  

});


client.login("");