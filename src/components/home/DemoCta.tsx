import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function DemoCta() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Brand');
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
          <h2
            id="demo-heading"
            className="max-w-xl text-[34px] font-extrabold leading-[1.08] tracking-display text-white sm:text-[42px]">
            
            See your first matched roster in the demo
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">
            Bring a live brief. In 30 minutes a strategist will build it in the
            platform and show you the creators, timeline and projected cost per
            asset — before you commit to anything.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-white/70">
            {['No commission on creator spend', 'Live in 10 working days', 'Cancel any time'].map(
              (item) =>
              <li key={item} className="flex items-center gap-2">
                  <CheckCircle2Icon
                  className="h-4 w-4 text-accent-300"
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
                Request received
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                A strategist will email {email} within one working day with a
                time and a short pre-call brief.
              </p>
            </div> :

          <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                Book a demo
              </h3>

              <fieldset className="mt-6">
                <legend className="text-[13px] font-semibold text-body">
                  I am a
                </legend>
                <div className="mt-2.5 flex gap-2">
                  {['Brand', 'Creator', 'Agency'].map((option) =>
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(option)}
                  aria-pressed={role === option}
                  className={`rounded-xl border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 ease-out ${
                  role === option ?
                  'border-accent bg-accent-soft text-accent' :
                  'border-hairline text-body hover:border-ink/25'}`
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
                
                  Work email
                </label>
                <input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="you@company.com"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'demo-error' : undefined}
                className={`mt-2 w-full rounded-xl border bg-canvas px-4 py-3 text-[14.5px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                status === 'error' ? 'border-red-400' : 'border-hairline'}`
                } />
              
                {status === 'error' &&
              <p id="demo-error" className="mt-2 text-[13px] text-red-600">
                    Enter a valid work email address.
                  </p>
              }
              </div>

              <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-accent transition-[background-color,opacity] duration-150 ease-out hover:bg-[#4a1fe0] disabled:opacity-70">
              
                {status === 'submitting' &&
              <Loader2Icon
                className="h-4 w-4 animate-spin"
                aria-hidden="true" />

              }
                {status === 'submitting' ? 'Sending…' : 'Request my demo'}
              </button>

              <p className="mt-3 text-[12.5px] leading-relaxed text-faint">
                We reply within one working day. No sales sequence.
              </p>
            </form>
          }
        </div>
      </div>
    </section>);

}