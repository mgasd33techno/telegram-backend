export default async function handler(req, res) {
  
  const text = "✅ Test message from my bot!";

  await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: 344886216,   // your chat_id
      text: text
    })
  });

  res.status(200).json({ success: true });
}