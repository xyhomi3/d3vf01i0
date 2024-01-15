import { FadeIn } from '@/components/atoms/fade-in'
import { weeklyCodingActivity } from '@/lib/actions'

export const Activity = async () => {
  const { data } = await weeklyCodingActivity()

  const maxTotalSeconds = Math.max(...data.map(entry => entry.grand_total.total_seconds))
  const minTotalSeconds = Math.min(...data.map(entry => entry.grand_total.total_seconds))

  return (
    <FadeIn>
      <article>
        <div className='md:space-y-2 mb-2.5 pb-2.5 border-b'>
          <h1 className='md:text-2xl text-xl font-semibold'>Weekly Activity</h1>
        </div>
        {data.reverse().map(item => (
          <pre className='flex items-center justify-between' key={item.range.date}>
            <code className='text-muted-foreground w-40 truncate md:shrink-0 !text-sm'>{item.range.text}</code>

            <div className='w-full h-1 bg-muted rounded md:block hidden'>
              <div
                className='h-1 bg-foreground rounded'
                style={{
                  width: `${((item.grand_total.total_seconds - minTotalSeconds) / (maxTotalSeconds - minTotalSeconds)) * 100}%`
                }}
              />
            </div>

            <code className='w-32 text-end text-secondary-foreground ml-1 md:ml-0 md:shrink-0 !text-sm '>{item.grand_total.text}</code>
          </pre>
        ))}
      </article>
    </FadeIn>
  )
}
