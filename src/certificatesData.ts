// Register sertifikat DIKDOK Healthcare — dipakai halaman /verify.
// JANGAN ubah kode yang sudah terbit: kode ini tercetak di QR sertifikat.
// Tambah sertifikat baru (series berikutnya) dengan menambah entri di CERTIFICATES.

export interface CertificateEvent {
  program: string;
  series: string;
  title: string;
  date: string;
  mode: string;
}

export interface CertificateRecord {
  code: string;
  number: string;
  name: string;
  role: "Peserta" | "Panitia" | "Pembicara" | "Moderator";
  eventId: keyof typeof EVENTS;
  status: "valid" | "revoked";
  issuedAt: string;
}

export const EVENTS = {
  "MM-S1": {
    program: "DIKDOK Healthcare Webinar — Mind Matters: A Clinical Perspective",
    series: "Series 1",
    title: "Understanding the Unconscious: Foundation of Psychodynamic Psychotherapy in Clinical Practice",
    date: "Minggu, 25 Oktober 2026",
    mode: "Daring (online)",
  },
} satisfies Record<string, CertificateEvent>;

export const CERTIFICATES: CertificateRecord[] = [
  { code: "DQDZ3CYD", number: "001/DKD-WBN/S1/PST/X/2026", name: "Agus", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "VD6HHTKV", number: "002/DKD-WBN/S1/PST/X/2026", name: "Alwyn Aliwarga", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "EHU4Z9WP", number: "003/DKD-WBN/S1/PST/X/2026", name: "Alyssa Diandra", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "Q6FZ79UE", number: "004/DKD-WBN/S1/PST/X/2026", name: "Erick", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "3UZ88GJ8", number: "005/DKD-WBN/S1/PST/X/2026", name: "Ertina Kusumawati", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "YR3SSAG7", number: "006/DKD-WBN/S1/PST/X/2026", name: "Fariz Edi Wibowo", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "YEY4MBT6", number: "007/DKD-WBN/S1/PST/X/2026", name: "Fong", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "7SB5BNXJ", number: "008/DKD-WBN/S1/PST/X/2026", name: "Frida Amalia", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "UWHE3388", number: "009/DKD-WBN/S1/PST/X/2026", name: "Frieda Mangunsong", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "WQBZJWMH", number: "010/DKD-WBN/S1/PST/X/2026", name: "Haifa Auriana Sagita Putri", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "ZDN4EU7U", number: "011/DKD-WBN/S1/PST/X/2026", name: "dr. Jans Juliana R Sitorus, SpKJ", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "Y3AXU6U4", number: "012/DKD-WBN/S1/PST/X/2026", name: "Joshua Hariara Pandiangan", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "92DA5BC9", number: "013/DKD-WBN/S1/PST/X/2026", name: "Josie Tirana Magdalena", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "DJS6HQGC", number: "014/DKD-WBN/S1/PST/X/2026", name: "Muhammad Purnomo Shidiq", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "746M8K94", number: "015/DKD-WBN/S1/PST/X/2026", name: "dr. Nita Sarlytta Atmaja, Sp.KJ, MH", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "UC839B59", number: "016/DKD-WBN/S1/PST/X/2026", name: "Ottorian", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "H9JY5S3P", number: "017/DKD-WBN/S1/PST/X/2026", name: "Reni Widyastuti", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "9ZAYRD8H", number: "018/DKD-WBN/S1/PST/X/2026", name: "Sivi Budiananda Sholikhah", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "6BJY96VB", number: "019/DKD-WBN/S1/PST/X/2026", name: "Theodorius Amelwatin", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "G44UCHAR", number: "020/DKD-WBN/S1/PST/X/2026", name: "Tience Debora Valentina", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "CHVHC7BN", number: "021/DKD-WBN/S1/PST/X/2026", name: "Tri Ratnawati, MD", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "S7T55UCQ", number: "022/DKD-WBN/S1/PST/X/2026", name: "Trida Cynthia", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "MW9B7Q8Z", number: "023/DKD-WBN/S1/PST/X/2026", name: "Widya", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
  { code: "CQXPUYWV", number: "024/DKD-WBN/S1/PST/X/2026", name: "Zen", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25" },
];

