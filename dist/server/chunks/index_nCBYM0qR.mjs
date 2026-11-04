import { c as createComponent } from './astro-component_DMu66uCk.mjs';
import 'piccolore';
import { i as createRenderInstruction, f as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate, m as maybeRenderHead, l as renderComponent, n as Fragment } from './server_BUu4DVuu.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Parroquia Nuestra Señora de la Paz",
    description = "Parroquia Nuestra Señora de la Paz — Av. Echeñique 4243, Ñuñoa, Región Metropolitana."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nuestra Parroquia", href: "#parroquia" },
    { label: "Sacramentos", href: "#sacramentos" },
    { label: "Misas", href: "#misas" },
    { label: "Servicios", href: "#servicios" },
    { label: "Formación", href: "#formacion" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="navbar" role="banner" data-astro-cid-5blmo7yk> <div class="container navbar__inner" data-astro-cid-5blmo7yk> <a href="#inicio" class="navbar__brand" aria-label="Parroquia Nuestra Señora de la Paz — Inicio" data-astro-cid-5blmo7yk> <span class="navbar__cross" aria-hidden="true" data-astro-cid-5blmo7yk>✝</span> <div class="navbar__brand-text" data-astro-cid-5blmo7yk> <span class="navbar__label" data-astro-cid-5blmo7yk>PARROQUIA</span> <span class="navbar__name" data-astro-cid-5blmo7yk>Ntra. Sra. de la Paz</span> </div> </a> <nav aria-label="Menú principal" data-astro-cid-5blmo7yk> <ul class="navbar__links" data-astro-cid-5blmo7yk> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(link.href, "href")} class="navbar__link" data-astro-cid-5blmo7yk>${link.label}</a> </li>`)} </ul> </nav> <a href="#contacto" class="navbar__cta" data-astro-cid-5blmo7yk>Contacto</a> <button class="navbar__hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk></span><span data-astro-cid-5blmo7yk></span><span data-astro-cid-5blmo7yk></span> </button> </div> <div class="navbar__mobile" id="mobile-menu" hidden data-astro-cid-5blmo7yk> <nav aria-label="Menú móvil" data-astro-cid-5blmo7yk> <ul data-astro-cid-5blmo7yk> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk><a${addAttribute(link.href, "href")} class="navbar__mobile-link" data-astro-cid-5blmo7yk>${link.label}</a></li>`)} <li data-astro-cid-5blmo7yk><a href="#contacto" class="navbar__mobile-cta" data-astro-cid-5blmo7yk>Contacto</a></li> </ul> </nav> </div> </header> ${renderScript($$result, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const timesBar = [
    { label: "LUNES A SÁBADO", value: "19:30 y 20:00 hrs" },
    { label: "DOMINGO", value: "10:30 · 12:00 · 20:00 hrs" },
    { label: "DIRECCIÓN", value: "Av. Echeñique 4243, Ñuñoa" },
    { label: "CONTACTO", value: "+56 2 2225 7817" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="inicio" aria-label="Bienvenidos" data-astro-cid-bbe6dxrz> <div class="hero__bg" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <div class="hero__overlay" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <div class="container hero__content" data-astro-cid-bbe6dxrz> <p class="hero__location" data-astro-cid-bbe6dxrz>ÑUÑOA · REGIÓN METROPOLITANA · CHILE</p> <h1 class="hero__title" data-astro-cid-bbe6dxrz>Bienvenidos a<br data-astro-cid-bbe6dxrz>Nuestra Señora de la Paz</h1> <p class="hero__subtitle" data-astro-cid-bbe6dxrz>Bienvenidos a nuestra comunidad de fe.<br data-astro-cid-bbe6dxrz>Unidos en la oración y el servicio.</p> <div class="hero__actions" data-astro-cid-bbe6dxrz> <a href="#horarios" class="hero__btn hero__btn--primary" data-astro-cid-bbe6dxrz>Ver Calendario</a> <a href="#parroquia" class="hero__btn hero__btn--secondary" data-astro-cid-bbe6dxrz>Nuestra Parroquia</a> </div> </div> <div class="hero__timesbar" role="complementary" aria-label="Datos de contacto rápido" data-astro-cid-bbe6dxrz> <div class="container hero__timesbar-inner" data-astro-cid-bbe6dxrz> ${timesBar.map((cell, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <div class="hero__cell" data-astro-cid-bbe6dxrz> <span class="hero__cell-label" data-astro-cid-bbe6dxrz>${cell.label}</span> <span class="hero__cell-value" data-astro-cid-bbe6dxrz>${cell.value}</span> </div> ${i < timesBar.length - 1 && renderTemplate`<div class="hero__cell-sep" aria-hidden="true" data-astro-cid-bbe6dxrz></div>`}` })}`)} </div> </div> </section>`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Hero.astro", void 0);

const $$Sacramentos = createComponent(($$result, $$props, $$slots) => {
  const sacramentos = [
    {
      title: "Bautismo",
      desc: "El primer sacramento, puerta de la fe y de la vida en Cristo."
    },
    {
      title: "Confirmación",
      desc: "Fortalece la gracia bautismal y sella al cristiano con el Espíritu Santo."
    },
    {
      title: "Eucaristía",
      desc: "El centro de la vida cristiana. Cuerpo y Sangre de Cristo."
    },
    {
      title: "Matrimonio",
      desc: "La unión sagrada entre un hombre y una mujer ante Dios."
    },
    {
      title: "Penitencia",
      desc: "El sacramento de la reconciliación y el perdón de los pecados."
    },
    {
      title: "Unción de Enfermos",
      desc: "Fortaleza y consuelo para quienes enfrentan la enfermedad."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="sacramentos" id="sacramentos" aria-labelledby="sacramentos-title" data-astro-cid-xv6rsrq7> <div class="container" data-astro-cid-xv6rsrq7> <div class="sacramentos__header" data-astro-cid-xv6rsrq7> <p class="sacramentos__eyebrow" data-astro-cid-xv6rsrq7>SACRAMENTOS</p> <h2 class="sacramentos__title" id="sacramentos-title" data-astro-cid-xv6rsrq7>Los Signos Sagrados<br data-astro-cid-xv6rsrq7>de la Gracia</h2> <p class="sacramentos__subtitle" data-astro-cid-xv6rsrq7>Acompañamos cada etapa de tu vida con los sacramentos de la Iglesia.</p> </div> <div class="sacramentos__grid" data-astro-cid-xv6rsrq7> ${sacramentos.map((s) => renderTemplate`<article class="sacramentos__card" data-astro-cid-xv6rsrq7> <div class="sacramentos__card-accent" aria-hidden="true" data-astro-cid-xv6rsrq7></div> <h3 class="sacramentos__card-title" data-astro-cid-xv6rsrq7>${s.title}</h3> <p class="sacramentos__card-desc" data-astro-cid-xv6rsrq7>${s.desc}</p> <a href="#" class="sacramentos__card-link" data-astro-cid-xv6rsrq7>Más información →</a> </article>`)} </div> </div> </section>`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Sacramentos.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8373324623767!2d-70.5843478!3d-33.4404763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf8880d92ad5%3A0x6b4fb24e38e1a8a2!2sAv.%20Eche%C3%B1ique%204243%2C%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl";
  const info = [
    { label: "DIRECCIÓN", value: "Av. Echeñique 4243, Ñuñoa, R.M.", href: null },
    { label: "TELÉFONO", value: "+56 2 2225 7817", href: "tel:+56222257817" },
    { label: "EMAIL", value: "nuestra.sra.de.la.paz@gmail.com", href: "mailto:nuestra.sra.de.la.paz@gmail.com" },
    { label: "SECRETARÍA", value: "Pbro. Enrique Bernardo Faúndez V.", href: null }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="contacto" id="contacto" aria-labelledby="contacto-title" data-astro-cid-xjughlio> <div class="container contacto__inner" data-astro-cid-xjughlio> <div class="contacto__info" data-astro-cid-xjughlio> <p class="contacto__eyebrow" data-astro-cid-xjughlio>CONTACTO</p> <h2 class="contacto__title" id="contacto-title" data-astro-cid-xjughlio>Estamos aquí<br data-astro-cid-xjughlio>para ti</h2> <ul class="contacto__list" data-astro-cid-xjughlio> ${info.map((item) => renderTemplate`<li class="contacto__item" data-astro-cid-xjughlio> <span class="contacto__item-label" data-astro-cid-xjughlio>${item.label}</span> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="contacto__item-value" data-astro-cid-xjughlio>${item.value}</a>` : renderTemplate`<span class="contacto__item-value" data-astro-cid-xjughlio>${item.value}</span>`} </li>`)} </ul> </div> <div class="contacto__map" data-astro-cid-xjughlio> <iframe${addAttribute(mapSrc, "src")} title="Mapa — Parroquia Nuestra Señora de la Paz" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" data-astro-cid-xjughlio></iframe> </div> </div> </section>`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Contacto.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const cols = [
    {
      title: "LA PARROQUIA",
      links: ["Historia", "Misión y Valores", "Párroco", "Equipo pastoral"]
    },
    {
      title: "SACRAMENTOS",
      links: ["Bautismo", "Confirmación", "Matrimonio", "Penitencia"]
    },
    {
      title: "COMUNIDAD",
      links: ["Noticias", "Eventos", "Grupos parroquiales", "Catequesis"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" role="contentinfo" data-astro-cid-sz7xmlte> <div class="container footer__inner" data-astro-cid-sz7xmlte> <div class="footer__brand" data-astro-cid-sz7xmlte> <span class="footer__cross" aria-hidden="true" data-astro-cid-sz7xmlte>✝</span> <div data-astro-cid-sz7xmlte> <p class="footer__label" data-astro-cid-sz7xmlte>PARROQUIA</p> <p class="footer__name" data-astro-cid-sz7xmlte>Nuestra Señora de la Paz</p> <p class="footer__address" data-astro-cid-sz7xmlte>Ñuñoa · Región<br data-astro-cid-sz7xmlte>Metropolitana · Chile</p> </div> </div> <nav class="footer__cols" aria-label="Pie de página" data-astro-cid-sz7xmlte> ${cols.map((col) => renderTemplate`<div class="footer__col" data-astro-cid-sz7xmlte> <p class="footer__col-title" data-astro-cid-sz7xmlte>${col.title}</p> <ul data-astro-cid-sz7xmlte> ${col.links.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a href="#" class="footer__col-link" data-astro-cid-sz7xmlte>${link}</a></li>`)} </ul> </div>`)} </nav> </div> <div class="footer__bottom" data-astro-cid-sz7xmlte> <div class="container footer__bottom-inner" data-astro-cid-sz7xmlte> <p class="footer__copy" data-astro-cid-sz7xmlte>&copy; ${year} Parroquia Nuestra Señora de la Paz · Todos los derechos reservados</p> <div class="footer__legal" data-astro-cid-sz7xmlte> <a href="#" data-astro-cid-sz7xmlte>Política de Privacidad</a> <span aria-hidden="true" data-astro-cid-sz7xmlte>·</span> <a href="#" data-astro-cid-sz7xmlte>Términos de Uso</a> </div> </div> </div> </footer>`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Sacramentos", $$Sacramentos, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/pages/index.astro", void 0);

const $$file = "/home/none/dev/projects/nuestraSeñora/parroquia-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
