"use client";

export default function SoundCloudShare() {
  return (
    <button 
      onClick={() => {
        const nav: any = typeof navigator !== 'undefined' ? navigator : null;
        if (nav && nav.share) {
          nav.share({ title: 'Coinchasers Soundtrack', url: 'https://soundcloud.com/d-rahmeel/sets/coincha-ing-vol-1' })
        } else if (nav && nav.clipboard) {
          nav.clipboard.writeText('https://soundcloud.com/d-rahmeel/sets/coincha-ing-vol-1');
          alert('Soundtrack link copied!');
        }
      }}
      className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors p-2 rounded-full border border-transparent hover:border-[var(--color-gold-500)]"
      title="Share Soundtrack"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
    </button>
  );
}
