
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { code, customer_name, message } = req.body;

  const agents = [
    {
      code: "D3300090",
      name: "AMZAR IRFAN",
      chat_id: 344886216
    },
    {
      code: "D3300145",
      name: "AMMAR IRFAN",
      chat_id: 1120654169
    }
  ];

  const agent = agents.find(a => a.code === code);

  if (!agent) {
    return res.status(404).send("Agent not found");
  }

  const text = `
📢 New Lead Assigned!
👤 Customer: ${customer_name}
💬 Message: ${message}
🧑‍💼 Agent: ${agent.name}
`;

  await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: agent.chat_id,
      text: text
    })
  });

  res.status(200).json({ success: true });
}
