import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function DemoCta() {
  const { t } = useLanguage();
  const copy = t.demo;
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(0);
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
      className="border-t border-hairline bg-inverse">
      
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-20 lg:px-12 lg:py-24">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-bright">
            {copy.eyebrow}
          </p>
          <h2
            id="demo-heading"
            className="mt-4 max-w-xl text-[34px] font-extrabold leading-[1.08] tracking-display text-onInverse sm:text-[42px]">
            
            {copy.heading}
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-onInverse/70">
            {copy.lede}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-onInverse/70">
            {copy.bullets.map((item) =>
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
                {copy.successTitle}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                {copy.successBefore} {email} {copy.successAfter}
              </p>
            </div> :

          <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                {copy.formTitle}
              </h3>

              <fieldset className="mt-6">
                <legend className="text-[13px] font-semibold text-body">
                  {copy.roleLegend}
                </legend>
                <div className="mt-2.5 flex gap-2">
                  {copy.roles.map((option, i) =>
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(i)}
                  aria-pressed={role === i}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 ease-out ${
                  role === i ?
                  'border-transparent bg-solid text-onSolid' :
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
                
                  {copy.emailLabel}
                </label>
                <input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={copy.emailPlaceholder}
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'demo-error' : undefined}
                className={`mt-2 w-full rounded-xl border bg-canvas px-4 py-3 text-[14.5px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-ink/20 ${
                status === 'error' ? 'border-red-400' : 'border-hairline'}`
                } />
              
                {status === 'error' &&
              <p id="demo-error" className="mt-2 text-[13px] text-red-600">
                    {copy.emailError}
                  </p>
              }
              </div>

              <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-solid px-6 py-3 text-sm font-semibold text-onSolid transition-[background-color,opacity] duration-150 ease-out hover:bg-solid-hover disabled:opacity-70">
              
                {status === 'submitting' &&
              <Loader2Icon
                className="h-4 w-4 animate-spin"
                aria-hidden="true" />

              }
                {status === 'submitting' ? copy.submitting : copy.submit}
              </button>

              <p className="mt-3 text-[12.5px] leading-relaxed text-faint">
                {copy.disclaimer}
              </p>
            </form>
          }
        </div>
      </div>
    </section>);

}