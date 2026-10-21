import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Main Glass Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          padding: '35px 25px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: '14px',
            fontWeight: '800',
            letterSpacing: '3px',
            color: '#38bdf8',
            textTransform: 'uppercase',
            marginBottom: '20px',
            marginTop: '0',
            textShadow: '0 0 12px rgba(56, 189, 248, 0.4)',
          }}
        >
          React Counter
        </h1>

        {/* Counter Screen */}
        <div
          style={{
            margin: '25px 0',
            padding: '20px 10px',
            borderRadius: '18px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: '900',
              fontFamily: 'monospace',
              color: count > 0 ? '#38bdf8' : count < 0 ? '#f43f5e' : '#ffffff',
              transition: 'all 0.3s ease',
              textShadow:
                count > 0
                  ? '0 0 20px rgba(56, 189, 248, 0.6)'
                  : count < 0
                  ? '0 0 20px rgba(244, 63, 94, 0.6)'
                  : 'none',
            }}
          >
            {count}
          </span>
        </div>

        {/* Plus / Minus Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
          <button
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '24px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(244, 63, 94, 0.35)',
              transition: 'transform 0.1s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            -
          </button>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '24px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(56, 189, 248, 0.35)',
              transition: 'transform 0.1s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '14px',
            fontWeight: '600',
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#38bdf8';
            e.currentTarget.style.color = '#38bdf8';
            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}