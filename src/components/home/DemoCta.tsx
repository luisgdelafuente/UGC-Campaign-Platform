import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function DemoCta() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Marca');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="border-t border-hairline bg-ink">
      
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-20 lg:px-12 lg:py-24">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-bright">
            Empieza por aquí
          </p>
          <h2
            id="demo-heading"
            className="mt-4 max-w-xl text-[34px] font-extrabold leading-[1.08] tracking-display text-white sm:text-[42px]">
            
            Cuéntanos tu negocio y te preparamos el plan
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">
            Sin formularios eternos y sin compromiso. Analizamos tu marca,
            proponemos creadores de tu sector y te devolvemos volumen, duración
            y presupuesto estimado.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-white/70">
            {[
            'Plan a medida y gratuito',
            'Activación en 48 horas',
            'Precio cerrado, sin sorpresas'].
            map((item) =>
            <li key={item} className="flex items-center gap-2">
                <CheckCircle2Icon
                className="h-4 w-4 text-accent-bright"
                aria-hidden="true" />
              
                {item}
              </li>
            )}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface p-8">
          {status === 'success' ?
          <div className="flex h-full min-h-[260px] flex-col items-start justify-center">
              <CheckCircle2Icon
              className="h-7 w-7 text-positive"
              aria-hidden="true" />
            
              <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-ink">
                Solicitud recibida
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                Te escribimos a {email} en menos de 24 horas con una propuesta
                de creadores y presupuesto estimado.
              </p>
            </div> :

          <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                Quiero mi plan
              </h3>

              <fieldset className="mt-6">
                <legend className="text-[13px] font-semibold text-body">
                  Soy
                </legend>
                <div className="mt-2.5 flex gap-2">
                  {['Marca', 'Agencia', 'Creador'].map((option) =>
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(option)}
                  aria-pressed={role === option}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 ease-out ${
                  role === option ?
                  'border-ink bg-ink text-white' :
                  'border-hairline text-body hover:border-ink/30'}`
                  }>
                  
                      {option}
                    </button>
                )}
                </div>
              </fieldset>

              <div className="mt-6">
                <label
                htmlFor="demo-email"
                className="text-[13px] font-semibold text-body">
                
                  Email de contacto
                </label>
                <input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="tu@negocio.com"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'demo-error' : undefined}
                className={`mt-2 w-full rounded-xl border bg-canvas px-4 py-3 text-[14.5px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-ink/20 ${
                status === 'error' ? 'border-red-400' : 'border-hairline'}`
                } />
              
                {status === 'error' &&
              <p id="demo-error" className="mt-2 text-[13px] text-red-600">
                    Introduce un email válido.
                  </p>
              }
              </div>

              <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-[background-color,opacity] duration-150 ease-out hover:bg-[#232320] disabled:opacity-70">
              
                {status === 'submitting' &&
              <Loader2Icon
                className="h-4 w-4 animate-spin"
                aria-hidden="true" />

              }
                {status === 'submitting' ? 'Enviando…' : 'Hablar con el equipo'}
              </button>

              <p className="mt-3 text-[12.5px] leading-relaxed text-faint">
                Plan a medida · Gratis y sin compromiso.
              </p>
            </form>
          }
        </div>
      </div>
    </section>);

}