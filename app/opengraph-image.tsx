import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Riḍā by Rahma';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FDFCFB',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 460,
            height: 460,
            borderRadius: 230,
            border: '6px solid #EAE6DF',
            background: '#FDFCFB',
          }}
        >
          <div
            style={{
              fontSize: 280,
              fontFamily: 'serif',
              fontWeight: 400,
              color: '#4A4843',
              marginBottom: 40,
            }}
          >
            R
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
