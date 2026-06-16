// kango/getpp.js

module.exports = [
    {
        command: ['getpp', 'profilepic', 'dp'], // Bot in commands ko detect karega
        operate: async (context) => {
            try {
                // Kango ke globalContext se sock aur message nikalna (fallbacks ke sath)
                const sock = context.sock || context.client; 
                const m = context.msg || context.m || context.message;
                
                if (!sock || !m) return; // Agar context sahi se load na ho
                
                const from = m.key.remoteJid;
                let target;

                // Check for @mention OR Reply
                if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
                    target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
                } else if (m.message?.extendedTextMessage?.contextInfo?.participant) {
                    target = m.message.extendedTextMessage.contextInfo.participant;
                } else {
                    return await sock.sendMessage(from, { text: "⚠️ Please tag (@user) someone or reply to their message to get their DP!" }, { quoted: m });
                }

                await sock.sendMessage(from, { text: "⏳ Fetching Profile Picture..." }, { quoted: m });

                try {
                    // Fetch High-Res DP
                    const ppUrl = await sock.profilePictureUrl(target, 'image');
                    
                    // Send Image
                    await sock.sendMessage(from, { 
                        image: { url: ppUrl }, 
                        caption: `📸 *Profile Picture Fetched!*\n\n👤 Target: @${target.split('@')[0]}`, 
                        mentions: [target] 
                    }, { quoted: m });

                } catch (err) {
                    // Agar DP hidden hai ya set nahi ki hai
                    return await sock.sendMessage(from, { text: "❌ *Cannot fetch DP!*\nThe user might not have a profile picture, or their privacy settings are hiding it." }, { quoted: m });
                }

            } catch (error) {
                console.error("[KANGO-XMD] GetPP Error:", error);
            }
        }
    }
];

