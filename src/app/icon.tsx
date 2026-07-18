import { ImageResponse } from 'next/og';
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4af37', // Gold color
          fontWeight: 900,
          borderRadius: '50%',
          position: 'relative',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ position: 'absolute', top: -4, fontSize: 14 }}>♛</div>
        <div style={{ display: 'flex', letterSpacing: '-4px', marginTop: 4 }}>
          <span>C</span>
          <span style={{ marginLeft: '-8px' }}>C</span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
