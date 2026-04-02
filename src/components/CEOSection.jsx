// CEO message section — beige background, circular photo, text description
import ceoData from '../content/homepage/ceo.json'

export default function CEOSection() {
  const { name, job_title, photo, description } = ceoData
  const paragraphs = description.split('\n\n').filter(Boolean)

  return (
    <section
      className="flex items-center justify-center py-12 px-6"
      style={{ background: 'var(--color-beige)' }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-start max-w-[720px] w-full">
        {/* Photo + name */}
        <div className="flex flex-col items-center gap-8 shrink-0">
          <img
            src={photo}
            alt={name}
            className="rounded-full object-cover object-top"
            style={{ width: '183px', height: '183px' }}
          />
          <div className="text-center">
            <p
              className="font-semibold text-dark text-base leading-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {name}
            </p>
            <p
              className="text-sm leading-5 mt-1"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(0,0,0,0.55)' }}
            >
              {job_title}
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          {paragraphs.map((para, i) => (
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
