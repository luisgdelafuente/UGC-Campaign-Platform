import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const columns = [
{
  title: 'Servicio',
  links: [
  { label: 'Cómo funciona', to: '/#how-it-works' },
  { label: 'Solución gestionada', to: '/#platform' },
  { label: 'Contratos y pagos', to: '/#platform' },
  { label: 'Medición', to: '/#platform' }]

},
{
  title: 'Para quién',
  links: [
  { label: 'Marcas', to: '/#audiences' },
  { label: 'Agencias', to: '/#audiences' },
  { label: 'Creadores', to: '/#audiences' },
  { label: 'Precios', to: '/#pricing' }]

},
{
  title: 'Locals',
  links: [
  { label: 'Nosotros', to: '/about' },
  { label: 'Casos', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contactar', to: '/#demo' }]

},
{
  title: 'Recursos',
  links: [
  { label: 'Creadores y CPL', to: '/blog/creador-especializado-leads-mas-baratos' },
  { label: 'IA y campañas', to: '/blog/ia-para-lanzar-campanas-con-creadores' },
  { label: 'UGC en B2B', to: '/blog/ugc-para-b2b-y-servicios' },
  { label: 'Todo el blog', to: '/blog' }]

}];


export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[220px] text-[13.5px] leading-relaxed text-subtle">
              Campañas con creadores de tu sector, gestionadas de principio a
              fin. España y LATAM.
            </p>
          </div>
          {columns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-faint">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-[13.5px] text-body transition-colors duration-150 ease-out hover:text-ink">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-faint">
            © {new Date().getFullYear()} Locals Club. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidad', 'Términos', 'Política de cookies'].map((link) =>
            <Link
              key={link}
              to="/"
              className="text-[12.5px] text-faint transition-colors duration-150 ease-out hover:text-ink">
              
                {link}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>);

}