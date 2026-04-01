export default function GoalCard({ goal }) {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '24px',
          fontWeight: 500,
          lineHeight: '28px',
          color: '#000',
        }}
      >
        {goal.headline}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          lineHeight: '20px',
          color: '#575757',
          marginTop: '4px',
        }}
      >
        {goal.from_value} → {goal.to_value}
      </p>
    </div>
  )
}
