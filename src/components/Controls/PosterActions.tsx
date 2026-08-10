import React, { useState } from 'react';
import { Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';

interface PosterActionsProps {
  posterRef: React.RefObject<HTMLDivElement | null>;
  week: number;
  disabled?: boolean;
}

const GOOGLE_FONTS_CSS = "@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');";

export const PosterActions: React.FC<PosterActionsProps> = ({ posterRef, week, disabled = false }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  const handleDownloadPng = async () => {
    if (!posterRef.current || isExporting || disabled) return;

    setIsExporting(true);
    setExportError(null);
    setExportSuccess(false);

    try {
      const node = posterRef.current;

      // Ensure fonts are fully loaded in the browser
      if (document.fonts) {
        await document.fonts.ready;
      }

      // Generate PNG at fixed 1080x1350 resolution with embedded fonts
      let dataUrl: string;
      try {
        dataUrl = await toPng(node, {
          width: 1080,
          height: 1350,
          quality: 0.98,
          pixelRatio: 1,
          cacheBust: true,
          fontEmbedCSS: GOOGLE_FONTS_CSS,
          style: {
            transform: 'none',
            transformOrigin: 'top left',
            width: '1080px',
            height: '1350px',
          },
        });
      } catch (err: any) {
        dataUrl = await toPng(node, {
          width: 1080,
          height: 1350,
          quality: 0.98,
          pixelRatio: 1,
          fontEmbedCSS: '',
          style: {
            transform: 'none',
            transformOrigin: 'top left',
            width: '1080px',
            height: '1350px',
          },
        });
      }

      // Create download anchor
      const link = document.createElement('a');
      link.download = `alt-ligler-1-lig-hafta-${week}-sonuclari.png`;
      link.href = dataUrl;
      link.click();

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err: any) {
      console.error('[PosterActions] PNG export failed:', err);
      setExportError(err.message || 'PNG oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-4 shadow-xl backdrop-blur-md w-full">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-extrabold font-montserrat text-zinc-100 uppercase tracking-wider">
            1080 × 1350 Poster Çıktısı
          </h3>
          <p className="text-xs text-zinc-400">
            Instagram 4:5 formatında yüksek kaliteli PNG dosya indir.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        {exportSuccess && (
          <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold px-3 py-2 bg-emerald-950/60 border border-emerald-500/30 rounded-xl animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            İndirildi!
          </span>
        )}

        {exportError && (
          <span className="flex items-center gap-1.5 text-red-400 text-xs font-semibold px-3 py-2 bg-red-950/60 border border-red-500/30 rounded-xl" title={exportError}>
            <AlertCircle className="w-4 h-4" />
            Hata
          </span>
        )}

        <button
          onClick={handleDownloadPng}
          disabled={isExporting || disabled}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6500] via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 disabled:opacity-50 text-white font-black font-montserrat text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 active:scale-95 cursor-pointer border border-orange-400/30"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>PNG Hazırlanıyor...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>PNG Olarak İndir</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
