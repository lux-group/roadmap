export default function GoalCard({ goal }) {
  return (
    <div
      className="flex flex-col justify-center px-5 py-3 bg-white rounded-card"
      style={{
        boxShadow: 'var(--shadow-card)',
        minHeight: '56px',
      }}
    >
      <p
        className="font-semibold text-dark text-sm leading-5"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {goal.headline}
      </p>
      <p
        className="text-xs mt-0.5 opacity-60 text-dark"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {goal.from_value} → {goal.to_value}
      </p>
    </div>
  )
}
