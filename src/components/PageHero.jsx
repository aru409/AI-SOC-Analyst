function PageHero({ eyebrow, title, description, align = 'left' }) {
  const centerClasses = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-10 lg:pt-16">
      <div className={centerClasses}>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surge">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  )
}

export default PageHero
