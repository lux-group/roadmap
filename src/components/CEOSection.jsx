// CEO message section — beige background, circular photo, 4 paragraphs
const ADAM_PHOTO = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'

const PARAGRAPHS = [
  "At Luxury Escapes, we've always believed in dreaming big. What started as a curated travel platform is now evolving into something much more ambitious — a global travel ecosystem powered by intelligence, designed for growth, and built around every customer.",
  "We are entering a new chapter, one where AI, automation and personalisation are not buzzwords but building blocks. A chapter where the entire travel experience, from discovery to booking to the memories that follow, feels effortless and inspiring. Our teams are reimagining how we find customers, how we serve them, and how we earn their loyalty every day, in every market.",
  "The roadmap ahead is bold. We're scaling smarter, delivering faster, and aiming higher. Whether it's unlocking new value for our most loyal members or building secure platforms that can grow globally, every step we take is focused on creating more magical moments for our travellers.",
  "This is more than a plan. It's the future of travel, redefined. And we're just getting started.",
]

export default function CEOSection() {
  return (
    <section
      className="flex items-center justify-center py-12 px-6"
      style={{ background: 'var(--color-beige)' }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-start max-w-[720px] w-full">
        {/* Photo + name */}
        <div className="flex flex-col items-center gap-8 shrink-0">
          <img
            src={ADAM_PHOTO}
            alt="Adam Schwab"
            className="rounded-full object-cover object-top"
            style={{ width: '183px', height: '183px' }}
          />
          <div className="text-center">
            <p
              className="font-semibold text-dark text-base leading-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Adam Schwab
            </p>
            <p
              className="text-sm leading-5 mt-1"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(0,0,0,0.55)' }}
            >
              Co-Founder &amp; CEO
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          {PARAGRAPHS.map((para, i) => (
            <p
              key={i}
              className="text-dark leading-5"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
