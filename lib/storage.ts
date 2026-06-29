export type ContactMessage = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message?: string;
  status: "new" | "read" | "archived";
  createdAt: string;
};

export type DigitalTestResult = {
  id: string;
  score: number;
  resultAr: string;
  resultEn: string;
  answers: number[];
  createdAt: string;
};

const memory = {
  messages: [] as ContactMessage[],
  testResults: [] as DigitalTestResult[]
};

async function getKv() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null;
  const mod = await import("@vercel/kv");
  return mod.kv;
}

export async function saveMessage(message: ContactMessage) {
  const kv = await getKv();
  if (kv) {
    await kv.lpush("akad:messages", JSON.stringify(message));
    return;
  }
  memory.messages.unshift(message);
}

export async function listMessages(): Promise<ContactMessage[]> {
  const kv = await getKv();
  if (kv) {
    const rows = await kv.lrange<string>("akad:messages", 0, 99);
    return rows.map((row) => JSON.parse(row) as ContactMessage);
  }
  return memory.messages;
}

export async function saveTestResult(result: DigitalTestResult) {
  const kv = await getKv();
  if (kv) {
    await kv.lpush("akad:test-results", JSON.stringify(result));
    return;
  }
  memory.testResults.unshift(result);
}

export async function listTestResults(): Promise<DigitalTestResult[]> {
  const kv = await getKv();
  if (kv) {
    const rows = await kv.lrange<string>("akad:test-results", 0, 99);
    return rows.map((row) => JSON.parse(row) as DigitalTestResult);
  }
  return memory.testResults;
}