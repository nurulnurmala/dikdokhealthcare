import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { BadgeCheck, ShieldAlert, Search, CalendarDays, Hash, User, Award, MessageSquare, Download } from "lucide-react";
import { CERTIFICATES, EVENTS, certificatePdfUrl, type CertificateRecord } from "../certificatesData";
import { WHATSAPP_URL } from "../data";

// Normalise input so "001/DKD-WBN/S1/PST/X/2026", "No. 001/...", or the 8-char QR code all match.
const normalise = (value: string) =>
  value.toUpperCase().replace(/^NO\.?\s*/, "").replace(/[^A-Z0-9]/g, "");

function findCertificate(query: string): CertificateRecord | undefined {
  const q = normalise(query);
  if (!q) return undefined;
  return CERTIFICATES.find((c) => normalise(c.code) === q || normalise(c.number) === q);
}

function codeFromUrl(): string {
  const { pathname, search } = window.location;
  const match = pathname.match(/^\/verify\/([^/?#]+)/i);
  if (match) return decodeURIComponent(match[1]);
  const params = new URLSearchParams(search);
  return params.get("id") || params.get("code") || params.get("verify") || "";
}

export default function CertificateVerify() {
  const [query, setQuery] = useState(codeFromUrl());
  const [submitted, setSubmitted] = useState(codeFromUrl());

  // Keep certificate holders' names out of search engines.
  useEffect(() => {
    document.title = "Verifikasi Sertifikat | DIKDOK Healthcare";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const result = useMemo(() => findCertificate(submitted), [submitted]);
  const event = result ? EVENTS[result.eventId] : undefined;
  const hasQuery = submitted.trim().length > 0;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(query);
    const found = findCertificate(query);
    const next = found ? `/verify/${found.code}` : "/verify";
    window.history.replaceState(null, "", next);
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-primary">Verifikasi Sertifikat</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-gray-950">
          Cek keaslian sertifikat DIKDOK Healthcare
        </h1>
        <p className="mt-3 text-gray-600">
          Scan QR pada sertifikat, atau masukkan kode verifikasi / nomor sertifikat di bawah.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <label htmlFor="cert-query" className="sr-only">Kode verifikasi atau nomor sertifikat</label>
          <input
            id="cert-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Contoh: 001/DKD-WBN/S1/PST/X/2026"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary"
            autoComplete="off"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 font-bold text-white hover:bg-[#7a1d8d] transition-colors"
          >
            <Search className="w-4 h-4" /> Cek
          </button>
        </form>

        {hasQuery && result && event && result.status === "valid" && (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 bg-emerald-50 px-5 py-4 border-b border-emerald-200">
              <BadgeCheck className="w-7 h-7 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="font-black text-emerald-800">Sertifikat terverifikasi</p>
                <p className="text-sm text-emerald-700">Sertifikat ini resmi diterbitkan oleh DIKDOK Healthcare.</p>
              </div>
            </div>
            <dl className="divide-y divide-gray-100">
              <Row icon={<User className="w-4 h-4" />} label="Nama" value={result.name} strong />
              <Row icon={<Hash className="w-4 h-4" />} label="Nomor sertifikat" value={result.number} mono />
              <Row icon={<Award className="w-4 h-4" />} label="Peran" value={result.role} />
              <Row
                icon={<Award className="w-4 h-4" />}
                label="Kegiatan"
                value={`${event.program} · ${event.series}: ${event.title}`}
              />
              <Row icon={<CalendarDays className="w-4 h-4" />} label="Tanggal" value={`${event.date} · ${event.mode}`} />
              <Row icon={<Hash className="w-4 h-4" />} label="Kode verifikasi" value={result.code} mono />
            </dl>
            {result.driveFileId && (
              <div className="px-5 py-4 border-t border-gray-100">
                <a
                  href={certificatePdfUrl(result.driveFileId)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 font-bold text-white hover:bg-[#7a1d8d] transition-colors"
                >
                  <Download className="w-4 h-4" /> Unduh Sertifikat (PDF)
                </a>
              </div>
            )}
            <p className="px-5 py-4 text-xs text-gray-500 bg-gray-50">
              Ditandatangani oleh Ivo MS, Founder DIKDOK Healthcare. Pastikan nama dan nomor di atas sama dengan yang tertera pada sertifikat.
            </p>
          </div>
        )}

        {hasQuery && result && result.status === "revoked" && (
          <StatusCard
            title="Sertifikat dibatalkan"
            body={`Nomor ${result.number} pernah diterbitkan tetapi sudah dibatalkan dan tidak berlaku.`}
          />
        )}

        {hasQuery && !result && (
          <StatusCard
            title="Sertifikat tidak ditemukan"
            body="Kode atau nomor ini tidak terdaftar di register DIKDOK Healthcare. Periksa kembali penulisannya, atau hubungi kami untuk konfirmasi."
          />
        )}
      </div>
    </section>
  );
}

function Row({ icon, label, value, strong, mono }: { icon: ReactNode; label: string; value: string; strong?: boolean; mono?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 px-5 py-3">
      <dt className="flex items-center gap-2 text-sm text-gray-500">{icon}{label}</dt>
      <dd className={`text-gray-900 ${strong ? "text-lg font-bold" : ""} ${mono ? "font-mono text-sm tracking-wide" : ""}`}>{value}</dd>
    </div>
  );
}

function StatusCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
      <div className="flex items-start gap-3">
        <ShieldAlert className="w-7 h-7 text-red-600 flex-shrink-0" />
        <div>
          <p className="font-black text-red-800">{title}</p>
          <p className="mt-1 text-sm text-red-700">{body}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
          >
            <MessageSquare className="w-4 h-4" /> Hubungi DIKDOK Healthcare
          </a>
        </div>
      </div>
    </div>
  );
}
