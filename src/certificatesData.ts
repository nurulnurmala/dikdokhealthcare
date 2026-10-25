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
  /** Google Drive file ID of the certificate PDF (optional). */
  driveFileId?: string;
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
  { code: "DQDZ3CYD", number: "001/DKD-WBN/S1/PST/X/2026", name: "Agus", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1lf2GNEAY9qolf1jpzoKvrleHw_Xb-H92" },
  { code: "VD6HHTKV", number: "002/DKD-WBN/S1/PST/X/2026", name: "Alwyn Aliwarga", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1aOyCu_jeULtNp-doeFh9_sbvLpJ71XHe" },
  { code: "EHU4Z9WP", number: "003/DKD-WBN/S1/PST/X/2026", name: "Alyssa Diandra", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "10lljSNXt36B7Q_wnZX23M0U73Z5Tghtt" },
  { code: "Q6FZ79UE", number: "004/DKD-WBN/S1/PST/X/2026", name: "Erick", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1kWDEJg4mTXexg7AAnXtlklLTgcgMbDCh" },
  { code: "3UZ88GJ8", number: "005/DKD-WBN/S1/PST/X/2026", name: "Ertina Kusumawati", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1CLFN13J04Dvq53df1l1EpyLcf1BTl-hs" },
  { code: "YR3SSAG7", number: "006/DKD-WBN/S1/PST/X/2026", name: "Fariz Edi Wibowo", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1mIex1M3aE3Ey87RCgiQHdTCT32Dfe33g" },
  { code: "YEY4MBT6", number: "007/DKD-WBN/S1/PST/X/2026", name: "Fong", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1oG-3lZHMjW67xW5kKIsx4DyGnSvjD0wv" },
  { code: "7SB5BNXJ", number: "008/DKD-WBN/S1/PST/X/2026", name: "Frida Amalia", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1L8osoRS12iqg82ZPUede46a-HJ6t-NHN" },
  { code: "UWHE3388", number: "009/DKD-WBN/S1/PST/X/2026", name: "Frieda Mangunsong", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1g-8Oj3xx0KcMsZFRMX8HI7zYBwsHDv8X" },
  { code: "WQBZJWMH", number: "010/DKD-WBN/S1/PST/X/2026", name: "Haifa Auriana Sagita Putri", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1_M9fkjYmciHKBZ1B8ByDA7kDykoC43tr" },
  { code: "ZDN4EU7U", number: "011/DKD-WBN/S1/PST/X/2026", name: "dr. Jans Juliana R Sitorus, SpKJ", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "190Au_qmWj60qZiproXTI-L0yhVD8DVio" },
  { code: "Y3AXU6U4", number: "012/DKD-WBN/S1/PST/X/2026", name: "Joshua Hariara Pandiangan", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1xZKK0DfzQpfwvxGP3yDZ5y61W6fVPcLt" },
  { code: "92DA5BC9", number: "013/DKD-WBN/S1/PST/X/2026", name: "Josie Tirana Magdalena", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1J9QooJpSYxGp4RIHf4iiriogAQelFEa7" },
  { code: "DJS6HQGC", number: "014/DKD-WBN/S1/PST/X/2026", name: "Muhammad Purnomo Shidiq", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1NoO2PO5Z4d9ykpCay1kSBkHGvRwKU7wR" },
  { code: "746M8K94", number: "015/DKD-WBN/S1/PST/X/2026", name: "dr. Nita Sarlytta Atmaja, Sp.KJ, MH", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "16ixijM3R5KPZdZbmgIZiRHSTCkOOEeQi" },
  { code: "UC839B59", number: "016/DKD-WBN/S1/PST/X/2026", name: "Ottorian", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "18XOVkmCafvrHax9aWbbkM-F5JIo_bX6E" },
  { code: "H9JY5S3P", number: "017/DKD-WBN/S1/PST/X/2026", name: "Reni Widyastuti", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1E9dCw81yncj_byXxQUKvOwZRJT_SEFy6" },
  { code: "9ZAYRD8H", number: "018/DKD-WBN/S1/PST/X/2026", name: "Sivi Budiananda Sholikhah", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1N4DWtjKLFdCt1jgotKi6T5xZe8yVmulj" },
  { code: "6BJY96VB", number: "019/DKD-WBN/S1/PST/X/2026", name: "Theodorius Amelwatin", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1ISezQKILQgKdbvZJ2xJjN2vXrXKTaFys" },
  { code: "G44UCHAR", number: "020/DKD-WBN/S1/PST/X/2026", name: "Tience Debora Valentina", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1v7VxTbkSGROTUYLgVwcNuMJg8v0essC7" },
  { code: "CHVHC7BN", number: "021/DKD-WBN/S1/PST/X/2026", name: "Tri Ratnawati, MD", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1kwIwLFjANCb_kyqpkgzzc9jNiBP0iigv" },
  { code: "S7T55UCQ", number: "022/DKD-WBN/S1/PST/X/2026", name: "Trida Cynthia", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "16tR10-VxMinQu7az0KgSP-I0vI9zWtN-" },
  { code: "MW9B7Q8Z", number: "023/DKD-WBN/S1/PST/X/2026", name: "Widya", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1q9N2u7NelPj84DZ4V5zvgihoODy5CR2Q" },
  { code: "CQXPUYWV", number: "024/DKD-WBN/S1/PST/X/2026", name: "Zen", role: "Peserta", eventId: "MM-S1", status: "valid", issuedAt: "2026-10-25", driveFileId: "1_eOAFqn1zAw1waDEXg6zBVvJiwHWZftf" },
];


/** Direct-download URL for a certificate PDF stored in Google Drive. */
export const certificatePdfUrl = (fileId: string) =>
  `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`;
