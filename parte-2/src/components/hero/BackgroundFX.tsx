const CODE_ROW =
  'import pandas as pd    from openai import OpenAI    client = OpenAI()    df = pd.read_csv("vendas.csv")    def analisar(df):    resp = client.chat.completions(model="gpt-4o")    return resp.choices[0].message    '

export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none">

      {/* Código drifting */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: '200%', animation: 'codeDrift 30s linear infinite' }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="font-mono text-[11px] text-fg leading-7 px-6 whitespace-nowrap overflow-hidden"
              style={{ opacity: 0.025 }}
            >
              {CODE_ROW.repeat(4)}
            </div>
          ))}
        </div>
      </div>

      {/* Glow teal — centro-esquerda */}
      <div
        className="absolute rounded-full"
        style={{
          right: '60%',
          bottom: '50%',
          width: 580,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(14,78,255,0.28) 0%, rgba(6,38,180,0.12) 45%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Blue blob — baixo-direita */}
      <div
        className="absolute rounded-full"
        style={{
          right: '-5%',
          bottom: '-10%',
          width: 780,
          height: 600,
          background: 'radial-gradient(ellipse, rgba(14,78,255,0.28) 0%, rgba(6,38,180,0.12) 45%, transparent 70%)',
          filter: 'blur(56px)',
        }}
      />

      {/* Teal blob — topo-direita */}
      <div
        className="absolute rounded-full"
        style={{
          right: '14%',
          top: '-10%',
          width: 520,
          height: 420,
          background: 'radial-gradient(ellipse, rgba(0,180,220,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

    </div>
  )
}