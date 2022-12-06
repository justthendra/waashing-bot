module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`[Thendra's]: ${client.user.tag} ismi ile giriş yapıldı.`);
        client.user.setPresence({
          activities: [{ name: "Coming Soon 🌙 | Thendra's Development" }],
          status: "dnd",
        });
    }
}